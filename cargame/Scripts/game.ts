var stage: createjs.Stage;
var queue;

//game objects
var car: Car;
var coin: Coin;
var road: Road;

//barrier array
var barrier = [];

//Game constants
var BARRIER_NUM: number = 3;

function preload(): void {
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

function init(): void {
    stage = new createjs.Stage(document.getElementById("canvas"));
    stage.enableMouseOver(20);
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", raceloop);
    gameStart();
}

function raceloop(event): void {
    road.update();
    coin.update();
    car.update();

    for (var count = 0; count < BARRIER_NUM; count++) {
        barrier[count].update();
    }
    stage.update();
}

//car class
class Car {
    Image: createjs.Bitmap;
    width: number;
    height: number;
    constructor() {
        this.Image = new createjs.Bitmap(queue.getResult("car"));
        this.width = this.Image.getBounds().width;
        this.height = this.Image.getBounds().height;
        this.Image.regX = this.width * 0.5;
        this.Image.regY = this.width * 0.5;
        this.Image.y = 430;
       

        stage.addChild(this.Image);
    }

    update() {
        this.Image.x = stage.mouseX;
    }
} //EO car class

//Coin class
class Coin {
    Image: createjs.Bitmap;
    width: number;
    height: number;
    dy: number;
    constructor() {
        this.Image = new createjs.Bitmap(queue.getResult("coin"));
        this.width = this.Image.getBounds().width;
        this.height = this.Image.getBounds().height;
        this.Image.regX = this.width * 0.5;
        this.Image.regY = this.width * 0.5;
        this.dy = 5;

        stage.addChild(this.Image);
        this.reset();
    }

    reset() { 
        this.Image.y = -this.height;
        this.Image.x = Math.floor(Math.random() * stage.canvas.width);
    }

    update() {
        this.Image.y += this.dy;
        if (this.Image.y >= (this.height + stage.canvas.height)) {
            this.reset();
        }
    }
} //EO coin class

//Barriers class
class Barrier {
    Image: createjs.Bitmap;
    width: number;
    height: number;
    dy: number;
    dx: number;
    constructor() {
        this.Image = new createjs.Bitmap(queue.getResult("barrier"));
        this.width = this.Image.getBounds().width;
        this.height = this.Image.getBounds().height;
        this.Image.regX = this.width * 0.5;
        this.Image.regY = this.width * 0.5;

        stage.addChild(this.Image);
        this.reset();
    }

    reset() {
        this.Image.y = -this.height;
        this.Image.x = Math.floor(Math.random() * stage.canvas.width);
        this.dy = Math.floor(Math.random() * 5 + 5);
        this.dx = Math.floor(Math.random() * 4 - 2);
    }

    update() {
        this.Image.y += this.dy;
        this.Image.x += this.dx;
        if (this.Image.y >= (this.height + stage.canvas.height)) {
            this.reset();
        }
    }
} //EO barrier class

//Road class
class Road {
    Image: createjs.Bitmap;
    width: number;
    height: number;
    dy: number;
    constructor() {
        this.Image = new createjs.Bitmap(queue.getResult("road"));
        this.width = this.Image.getBounds().width;
        this.height = this.Image.getBounds().height;
        this.dy = 5;

        stage.addChild(this.Image);
        this.reset();
    }

    reset() {
        this.Image.y = -960;
    }

    update() {
        this.Image.y += this.dy;
        if (this.Image.y >= 0) {
            this.reset();
        }
    }
} //EO coin class

function gameStart(): void {

    road = new Road();
    coin = new Coin();
    car = new Car();

    for (var count = 0; count < BARRIER_NUM; count++) {
        barrier[count] = new Barrier();
    }
}