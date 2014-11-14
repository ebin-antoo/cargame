/// <reference path="constants.ts" />
/// <reference path="managers/asset.ts" />
/// <reference path="objects/gameobjects.ts" />
/// <reference path="objects/car.ts" />
/// <reference path="objects/coin.ts" />
/// <reference path="objects/redcar.ts" />
/// <reference path="objects/road.ts" />
/// <reference path="objects/scoreboard.ts" />

var stage: createjs.Stage;
var game: createjs.Container;

//game objects
var car: objects.Car;
var coin: objects.Coin;
var road: objects.Road;
var scoreboard: objects.Scoreboard;

var collision: managers.Collision;

//redcar array
var redcar = [];

var tryAgain: objects.Button;
var playButton: objects.Button;

var currentState: number;
var currentStateFunction;

//preloading function
function preload(): void {
    managers.Asset.init();
    managers.Asset.loader.addEventListener("complete", init);
}

function init(): void {
    stage = new createjs.Stage(document.getElementById("canvas"));
    stage.enableMouseOver(20);
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", gameLoop);

    optimizeForMobile();

    currentState = constants.MENU_STATE;
    changeState(currentState);
}

// Add touch support for mobile devices
function optimizeForMobile() {
    if (createjs.Touch.isSupported()) {
        createjs.Touch.enable(stage);
    }
}

//game loop funcction
function gameLoop(event): void {
    currentStateFunction();
    stage.update();
}

function changeState(state: number): void {
    // Launch Various "screens"
    switch (state) {
        case constants.MENU_STATE:
            // instantiate menu screen
            currentStateFunction = states.menuState;
            states.menu();
            break;

        case constants.PLAY_STATE:
            // instantiate play screen
            currentStateFunction = states.playState;
            states.play();
            break;

        case constants.GAME_OVER_STATE:
            currentStateFunction = states.gameOverState;
            // instantiate game over screen
            states.gameOver();
            break;
    }
}