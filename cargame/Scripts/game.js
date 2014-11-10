var stage;
var queue;

//game objects
var car;
var coin;

function preload() {
    queue = new createjs.LoadQueue();
    queue.installPlugin(createjs.Sound);
    queue.addEventListener("complete", init);
    queue.loadManifest([
        { id: "car", src: "assets/images/car.png" },
        { id: "coin", src: "assets/images/coin.png" },
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

function gameloop(event) {
    coin.update();
    car.update();

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

function gameStart() {
    coin = new Coin();
    car = new Car();
    /* // Add code here
    
    // Some example code here - to be replaced
    var placeholder = new createjs.Bitmap(queue.getResult('loading'));
    placeholder.regX = placeholder.image.width / 2;
    placeholder.regY = placeholder.image.height / 2;
    placeholder.x = stage.canvas.width / 2;
    placeholder.y = stage.canvas.height / 2;
    stage.addChild(placeholder);
    createjs.Sound.play("yay");
    */
}
//# sourceMappingURL=game.js.map
