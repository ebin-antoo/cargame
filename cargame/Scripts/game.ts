var stage: createjs.Stage;
var queue;

//game objects
var car: Car;
var coin: Coin;
var road: Road;

//redcar array
var redcar = [];

//Game constants
var REDCAR_NUM: number = 3;

function preload(): void {
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

    for (var count = 0; count < REDCAR_NUM; count++) {
        redcar[count].update();
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
        this.Image.x = 65;
        this.Image.y = 302;

        stage.addChild(this.Image);
    }

    update() {
        if (stage.mouseY >= 70 && stage.mouseY <= 550) {
            this.Image.y = stage.mouseY;
        }
        
            
        
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
        this.Image.regX = this.height * 0.5;
        this.Image.regY = this.width * 0.5;
        this.dy = 5;

        stage.addChild(this.Image);
        this.reset();
    }

    reset() { 
        this.Image.x = 805;
        this.Image.y = Math.floor(Math.random() * stage.canvas.height);
    }

    update() {
        this.Image.x -= this.dy;
        if (this.Image.x <= (-stage.canvas.width)) {
            this.reset();
        }
    }
} //EO coin class

//red car class
class RedCar {
    Image: createjs.Bitmap;
    width: number;
    height: number;
    dy: number;
    dx: number;
    constructor() {
        this.Image = new createjs.Bitmap(queue.getResult("redcar"));
        this.width = this.Image.getBounds().width;
        this.height = this.Image.getBounds().height;
        this.Image.regX = this.height * 0.5;
        this.Image.regY = this.width * 0.5;
        this.dx = 10;

        stage.addChild(this.Image);
        this.reset();
    }

    reset() {
        this.Image.x = 805 + Math.floor(Math.random()*800);
        this.Image.y = Math.floor(Math.random() * stage.canvas.height);
        this.dx = Math.floor(Math.random() * 10 + 5);
        
    }

    update() {
        this.Image.x -= this.dx;
        if (this.Image.x <= (-stage.canvas.width)) {
            this.reset();
        }
    }
} //EO red car class

//Road class
class Road {
    Image: createjs.Bitmap;
    width: number;
    height: number;
    dx: number;
    constructor() {
        this.Image = new createjs.Bitmap(queue.getResult("road"));
        this.width = this.Image.getBounds().width;
        this.height = this.Image.getBounds().height;
        this.dx = 5;

        stage.addChild(this.Image);
        this.reset();
    }

    reset() {
        this.Image.x = 0;
    }

    update() {
        this.Image.x -= this.dx;
        if (this.Image.x <= -600) {
            this.reset();
        }
    }
} //EO coin class

function gameStart(): void {

    road = new Road();
    coin = new Coin();
    car = new Car();

    for (var count = 0; count < REDCAR_NUM; count++) {
        redcar[count] = new RedCar();
    }
}