/// <reference path="constants.ts" />
/// <reference path="objects/gameobjects.ts" />
/// <reference path="objects/car.ts" />
var stage;
var queue;

//game objects
var car;
var coin;
var road;
var scoreboard;

//redcar array
var redcar = [];

function preload() {
    queue = new createjs.LoadQueue();
    queue.installPlugin(createjs.Sound);
    queue.addEventListener("complete", init);
    queue.loadManifest([
        { id: "car", src: "assets/images/car.png" },
        { id: "coin", src: "assets/images/coin.png" },
        { id: "redcar", src: "assets/images/red_car.png" },
        { id: "road", src: "assets/images/road2.jpg" },
        { id: "yay", src: "assets/sounds/yay.ogg" }
    ]);
}

function init() {
    stage = new createjs.Stage(document.getElementById("canvas"));
    stage.enableMouseOver(20);
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", gameloop);
    gameStart();
}

//game loop funcction
function gameloop(event) {
    road.update();
    coin.update();
    car.update();

    for (var count = 0; count < constants.REDCAR_NUM; count++) {
        redcar[count].update();
    }
    collisonCheck();

    scoreboard.update();

    stage.update();
}

//Coin class
var Coin = (function () {
    function Coin() {
        this.image = new createjs.Bitmap(queue.getResult("coin"));
        this.width = this.image.getBounds().width;
        this.height = this.image.getBounds().height;
        this.image.regX = this.height * 0.5;
        this.image.regY = this.width * 0.5;
        this.dy = 5;

        stage.addChild(this.image);
        this.reset();
    }
    Coin.prototype.reset = function () {
        this.image.x = 805;
        this.image.y = Math.floor(Math.random() * stage.canvas.height);
    };

    Coin.prototype.update = function () {
        this.image.x -= this.dy;
        if (this.image.x <= (-stage.canvas.width)) {
            this.reset();
        }
    };
    return Coin;
})();

//red car class
var RedCar = (function () {
    function RedCar() {
        this.image = new createjs.Bitmap(queue.getResult("redcar"));
        this.width = this.image.getBounds().width;
        this.height = this.image.getBounds().height;
        this.image.regX = this.height * 0.5;
        this.image.regY = this.width * 0.5;
        this.dx = 10;

        stage.addChild(this.image);
        this.reset();
    }
    RedCar.prototype.reset = function () {
        this.image.x = 805 + Math.floor(Math.random() * 50);
        this.image.y = Math.floor(Math.random() * stage.canvas.height);
        this.dx = Math.floor(Math.random() * 10 + 5);
    };

    RedCar.prototype.update = function () {
        this.image.x -= this.dx;
        if (this.image.x <= (-stage.canvas.width)) {
            this.reset();
        }
    };
    return RedCar;
})();

//Road class
var Road = (function () {
    function Road() {
        this.image = new createjs.Bitmap(queue.getResult("road"));
        this.width = this.image.getBounds().width;
        this.height = this.image.getBounds().height;
        this.dx = 5;

        stage.addChild(this.image);
        this.reset();
    }
    Road.prototype.reset = function () {
        this.image.x = 0;
    };

    Road.prototype.update = function () {
        this.image.x -= this.dx;
        if (this.image.x <= -600) {
            this.reset();
        }
    };
    return Road;
})();

//distance function
function distance(p1, p2) {
    var firstpoint;
    var secondpoint;
    var theXs;
    var theYs;
    var result;

    firstpoint = new createjs.Point();
    secondpoint = new createjs.Point();

    firstpoint.x = p1.x;
    firstpoint.y = p1.y;

    secondpoint.x = p2.x;
    secondpoint.y = p2.y;

    theXs = secondpoint.x - firstpoint.x;
    theYs = secondpoint.y - firstpoint.y;

    theXs *= theXs;
    theYs *= theYs;

    result = Math.sqrt(theXs + theYs);

    return result;
}

//collision btwn car and coin
function carAndCoin() {
    var point1 = new createjs.Point();
    var point2 = new createjs.Point();

    point1.x = car.x;
    point1.y = car.y;
    point2.x = coin.image.x;
    point2.y = coin.image.y;
    if (distance(point1, point2) < ((car.height * 0.5) + (coin.height * 0.5))) {
        createjs.Sound.play("yay");
        scoreboard.scores += 100;
        coin.reset();
    }
}

//collision btwn car and red car
function carAndRedCar(theRedCar) {
    var point1 = new createjs.Point();
    var point2 = new createjs.Point();

    var redcar = new RedCar();

    redcar = theRedCar;

    point1.x = car.x;
    point1.y = car.y;
    point2.x = redcar.image.x;
    point2.y = redcar.image.y;
    if (distance(point1, point2) < ((car.height * 0.5) + (redcar.height * 0.5))) {
        createjs.Sound.play("yay");
        scoreboard.lives -= 1;
        redcar.reset();
    }
}

//collision check function
function collisonCheck() {
    carAndCoin();

    for (var count = 0; count < constants.REDCAR_NUM; count++) {
        carAndRedCar(redcar[count]);
    }
}

//scoreboard function
var Scoreboard = (function () {
    function Scoreboard() {
        this.labelString = "";
        this.lives = constants.PLAYER_LIVES;
        this.scores = 0;
        this.label = new createjs.Text(this.labelString, constants.GAME_FONT, constants.GAME_FONT_COLOR);
        this.update();
        this.width = this.label.getBounds().width;
        this.height = this.label.getBounds().height;

        stage.addChild(this.label);
    }
    Scoreboard.prototype.update = function () {
        this.labelString = "Lives: " + this.lives.toString() + "Score: " + this.scores.toString();
        this.label.text = this.labelString;
    };
    return Scoreboard;
})();

//game start function
function gameStart() {
    road = new Road();
    coin = new Coin();
    car = new objects.Car();

    for (var count = 0; count < constants.REDCAR_NUM; count++) {
        redcar[count] = new RedCar();
    }

    scoreboard = new Scoreboard();
}
//# sourceMappingURL=game.js.map
