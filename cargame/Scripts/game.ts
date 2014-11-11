var stage: createjs.Stage;
var queue;

//game objects
var car: Car;
var coin: Coin;
var road: Road;

//redcar array
var redcar = [];

//Game constants
var REDCAR_NUM: number = 5;

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
    collisonCheck();

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
        this.Image.x = 805 + Math.floor(Math.random()*50);
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

//distance function
function distance(p1: createjs.Point, p2: createjs.Point): number
{
    var firstpoint: createjs.Point;
    var secondpoint: createjs.Point;
    var theXs: number;
    var theYs: number;
    var result: number;

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

function carAndCoin() {
    var point1: createjs.Point = new createjs.Point();
    var point2: createjs.Point = new createjs.Point();

    point1.x = car.Image.x;
    point1.y = car.Image.y;
    point2.x = coin.Image.x;
    point2.y = coin.Image.y;
    if (distance(point1, point2) < ((car.height * 0.5) + (coin.height * 0.5))) {
        createjs.Sound.play("yay");
        coin.reset();
    }
}

function carAndRedCar(thecar: RedCar) {
    var point1: createjs.Point = new createjs.Point();
    var point2: createjs.Point = new createjs.Point();

    var redcar: RedCar = new RedCar();

    redcar = thecar; 

    point1.x = car.Image.x;
    point1.y = car.Image.y;
    point2.x = redcar.Image.x;
    point2.y = redcar.Image.y;
    if (distance(point1, point2) < ((car.height * 0.5) + (redcar.height * 0.5))) {
        createjs.Sound.play("yay");
        redcar.reset();
    }
}

function collisonCheck() {
    carAndCoin();

     for (var count = 0; count < REDCAR_NUM; count++) {
        carAndRedCar(redcar[count]);
    }
    
}

//game start
function gameStart(): void {

    road = new Road();
    coin = new Coin();
    car = new Car();

    for (var count = 0; count < REDCAR_NUM; count++) {
        redcar[count] = new RedCar();
    }

}