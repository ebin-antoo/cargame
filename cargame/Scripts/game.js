/// <reference path="constants.ts" />
/// <reference path="managers/asset.ts" />
/// <reference path="objects/gameobjects.ts" />
/// <reference path="objects/car.ts" />
/// <reference path="objects/coin.ts" />
/// <reference path="objects/redcar.ts" />
/// <reference path="states/instruction.ts" />
/// <reference path="objects/road.ts" />
/// <reference path="objects/scoreboard.ts" />
var stage;
var game;

//game objects
var car;
var coin;
var road;
var scoreboard;

var collision;

//redcar array
var redcar = [];

var tryAgain;
var playButton;
var instructionButton;

var currentState;
var currentStateFunction;

//preloading function
function preload() {
    managers.Asset.init();
    managers.Asset.loader.addEventListener("complete", init);
}

function init() {
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
function gameLoop(event) {
    currentStateFunction();
    stage.update();
    scoreboard.distance++;
}

function changeState(state) {
    switch (state) {
        case constants.MENU_STATE:
            // instantiate menu screen
            currentStateFunction = states.menuState;
            states.menu();
            break;

        case constants.INSTRUCTION_STATE:
            // instantiate play screen
            currentStateFunction = states.instructionsState;
            states.instructions();
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
//# sourceMappingURL=game.js.map
