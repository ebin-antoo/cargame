var stage;
var queue;

//game objects
var car;
var coin;
var road;

//redcar array
var redcar = [];

//Game constants
var REDCAR_NUM = 3;

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
    createjs.Ticker.addEventListener("tick", raceloop);
    gameStart();
}

function raceloop(event) {
    road.update();
    coin.update();
    car.update();

    for (var count = 0; count < REDCAR_NUM; count++) {
        redcar[count].update();
    }
    stage.update();
}

//car class
var Car = (function () {
    function Car() {
        this.Image = new createjs.Bitmap(queue.getResult("car"));
        this.width = this.Image.getBounds().width;
        this.height = this.Image.getBounds().height;
        this.Image.regX = this.width * 0.5;
        this.Image.regY = this.width * 0.5;
        this.Image.x = 65;
        this.Image.y = 302;

        stage.addChild(this.Image);
    }
    Car.prototype.update = function () {
        if (stage.mouseY >= 70 && stage.mouseY <= 550) {
            this.Image.y = stage.mouseY;
        }
    };
    return Car;
})();

//Coin class
var Coin = (function () {
    function Coin() {
        this.Image = new createjs.Bitmap(queue.getResult("coin"));
        this.width = this.Image.getBounds().width;
        this.height = this.Image.getBounds().height;
        this.Image.regX = this.height * 0.5;
        this.Image.regY = this.width * 0.5;
        this.dy = 5;

        stage.addChild(this.Image);
        this.reset();
    }
    Coin.prototype.reset = function () {
        this.Image.x = 805;
        this.Image.y = Math.floor(Math.random() * stage.canvas.height);
    };

    Coin.prototype.update = function () {
        this.Image.x -= this.dy;
        if (this.Image.x <= (-stage.canvas.width)) {
            this.reset();
        }
    };
    return Coin;
})();

//red car class
var RedCar = (function () {
    function RedCar() {
        this.Image = new createjs.Bitmap(queue.getResult("redcar"));
        this.width = this.Image.getBounds().width;
        this.height = this.Image.getBounds().height;
        this.Image.regX = this.height * 0.5;
        this.Image.regY = this.width * 0.5;
        this.dx = 10;

        stage.addChild(this.Image);
        this.reset();
    }
    RedCar.prototype.reset = function () {
        this.Image.x = 805 + Math.floor(Math.random() * 800);
        this.Image.y = Math.floor(Math.random() * stage.canvas.height);
        this.dx = Math.floor(Math.random() * 10 + 5);
    };

    RedCar.prototype.update = function () {
        this.Image.x -= this.dx;
        if (this.Image.x <= (-stage.canvas.width)) {
            this.reset();
        }
    };
    return RedCar;
})();

//Road class
var Road = (function () {
    function Road() {
        this.Image = new createjs.Bitmap(queue.getResult("road"));
        this.width = this.Image.getBounds().width;
        this.height = this.Image.getBounds().height;
        this.dx = 5;

        stage.addChild(this.Image);
        this.reset();
    }
    Road.prototype.reset = function () {
        this.Image.x = 0;
    };

    Road.prototype.update = function () {
        this.Image.x -= this.dx;
        if (this.Image.x <= -600) {
            this.reset();
        }
    };
    return Road;
})();

function gameStart() {
    road = new Road();
    coin = new Coin();
    car = new Car();

    for (var count = 0; count < REDCAR_NUM; count++) {
        redcar[count] = new RedCar();
    }
}
//# sourceMappingURL=game.js.map
