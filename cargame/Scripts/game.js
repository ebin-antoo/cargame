var stage;
var queue;

//game objects
var car;
var coin;
var road;

//barrier array
var barrier = [];

//Game constants
var BARRIER_NUM = 3;

function preload() {
    queue = new createjs.LoadQueue();
    queue.installPlugin(createjs.Sound);
    queue.addEventListener("complete", init);
    queue.loadManifest([
        { id: "car", src: "assets/images/car.png" },
        { id: "coin", src: "assets/images/coin.png" },
        { id: "barrier", src: "assets/images/road-barrier.png" },
        { id: "road", src: "assets/images/road.jpg" },
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

    for (var count = 0; count < BARRIER_NUM; count++) {
        barrier[count].update();
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
        this.Image.y = 430;

        stage.addChild(this.Image);
    }
    Car.prototype.update = function () {
        this.Image.x = stage.mouseX;
    };
    return Car;
})();

//Coin class
var Coin = (function () {
    function Coin() {
        this.Image = new createjs.Bitmap(queue.getResult("coin"));
        this.width = this.Image.getBounds().width;
        this.height = this.Image.getBounds().height;
        this.Image.regX = this.width * 0.5;
        this.Image.regY = this.width * 0.5;
        this.dy = 5;

        stage.addChild(this.Image);
        this.reset();
    }
    Coin.prototype.reset = function () {
        this.Image.y = -this.height;
        this.Image.x = Math.floor(Math.random() * stage.canvas.width);
    };

    Coin.prototype.update = function () {
        this.Image.y += this.dy;
        if (this.Image.y >= (this.height + stage.canvas.height)) {
            this.reset();
        }
    };
    return Coin;
})();

//Barriers class
var Barrier = (function () {
    function Barrier() {
        this.Image = new createjs.Bitmap(queue.getResult("barrier"));
        this.width = this.Image.getBounds().width;
        this.height = this.Image.getBounds().height;
        this.Image.regX = this.width * 0.5;
        this.Image.regY = this.width * 0.5;

        stage.addChild(this.Image);
        this.reset();
    }
    Barrier.prototype.reset = function () {
        this.Image.y = -this.height;
        this.Image.x = Math.floor(Math.random() * stage.canvas.width);
        this.dy = Math.floor(Math.random() * 5 + 5);
        this.dx = Math.floor(Math.random() * 4 - 2);
    };

    Barrier.prototype.update = function () {
        this.Image.y += this.dy;
        this.Image.x += this.dx;
        if (this.Image.y >= (this.height + stage.canvas.height)) {
            this.reset();
        }
    };
    return Barrier;
})();

//Road class
var Road = (function () {
    function Road() {
        this.Image = new createjs.Bitmap(queue.getResult("road"));
        this.width = this.Image.getBounds().width;
        this.height = this.Image.getBounds().height;
        this.dy = 5;

        stage.addChild(this.Image);
        this.reset();
    }
    Road.prototype.reset = function () {
        this.Image.y = -960;
    };

    Road.prototype.update = function () {
        this.Image.y += this.dy;
        if (this.Image.y >= 0) {
            this.reset();
        }
    };
    return Road;
})();

function gameStart() {
    road = new Road();
    coin = new Coin();
    car = new Car();

    for (var count = 0; count < BARRIER_NUM; count++) {
        barrier[count] = new Barrier();
    }
}
//# sourceMappingURL=game.js.map
