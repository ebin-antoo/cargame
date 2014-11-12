/// <reference path="constants.ts" />
/// <reference path="managers/asset.ts" />
/// <reference path="objects/gameobjects.ts" />
/// <reference path="objects/car.ts" />
/// <reference path="objects/coin.ts" />
/// <reference path="objects/redcar.ts" />
/// <reference path="objects/road.ts" />
/// <reference path="objects/scoreboard.ts" />

var stage: createjs.Stage;

//game objects
var car: objects.Car;
var coin: objects.Coin;
var road: objects.Road;
var scoreboard: objects.Scoreboard;

//redcar array
var redcar = [];

//preloading function
function preload(): void {
    managers.Asset.init();
    managers.Asset.loader.addEventListener("complete", init);
}

function init(): void {
    stage = new createjs.Stage(document.getElementById("canvas"));
    stage.enableMouseOver(20);
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", gameloop);
    gameStart();
}

//game loop funcction
function gameloop(event): void {
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

//collision btwn car and coin
function carAndCoin() {
    var point1: createjs.Point = new createjs.Point();
    var point2: createjs.Point = new createjs.Point();

    point1.x = car.x;
    point1.y = car.y;
    point2.x = coin.x;
    point2.y = coin.y;
    if (distance(point1, point2) < ((car.height * 0.5) + (coin.height * 0.5))) {
        createjs.Sound.play("1-up");
        scoreboard.scores += 100;
        coin.reset();
    }
}

//collision btwn car and red car
function carAndRedCar(theRedCar: objects.RedCar) {
    var point1: createjs.Point = new createjs.Point();
    var point2: createjs.Point = new createjs.Point();

    var redcar: objects.RedCar = new objects.RedCar();

    redcar = theRedCar; 

    point1.x = car.x;
    point1.y = car.y;
    point2.x = redcar.x;
    point2.y = redcar.y;
    if (distance(point1, point2) < ((car.height * 0.5) + (redcar.height * 0.5))) {
        createjs.Sound.play("car_crash");
        createjs.Sound.play("lost_a_life", 0, 1, 0, 0);
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

//game start function
function gameStart(): void {

    road = new objects.Road();
    coin = new objects.Coin();
    car = new objects.Car();

    for (var count = 0; count < constants.REDCAR_NUM; count++) {
        redcar[count] = new objects.RedCar();
    }
    scoreboard = new objects.Scoreboard();
}