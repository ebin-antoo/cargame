/// <reference path="../constants.ts" />
/// <reference path="../objects/scoreboard.ts" />
/// <reference path="../objects/car.ts" />
/// <reference path="../objects/road.ts" />
/// <reference path="../objects/coin.ts" />
/// <reference path="../objects/redcar.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/label.ts" />
module states {
    export function startButtonClicked(event: MouseEvent) {
        console.log("start button clicked");
        stage.removeChild(game);
        car.destroy();
        game.removeAllChildren();
        game.removeAllEventListeners();
        currentState = constants.PLAY_STATE;
        changeState(currentState);
    }

    export function instructionsButtonClicked(event: MouseEvent) {
        console.log("instructions button clicked");
        //stage.removeChild(game);
        //car.destroy();
        //game.removeAllChildren();
        //game.removeAllEventListeners();
        currentState = constants.INSTRUCTION_STATE;
        changeState(currentState);
    }

    export function menuState() {
        //road.update();
        //car.update();
    }

    export function menu() {
        var gameNameLabel: objects.Label;

        // Declare new Game Container
        game = new createjs.Container();

        // Instantiate Game Objects
        road = new objects.Road(stage, game);
        car = new objects.Car(stage, game);
        

        // Show Cursor
        stage.cursor = "default";

        // Display car game name
        gameNameLabel = new objects.Label(stage.canvas.width / 2, 40, "NEED FOR POLICE");
        game.addChild(gameNameLabel);

        // Display Play Again Button
        playButton = new objects.Button(stage.canvas.width / 2, 250, "startButton");
        game.addChild(playButton);
        playButton.addEventListener("click", startButtonClicked);

        instructionButton = new objects.Button(stage.canvas.width / 2, 350, "instructionsButton");
        game.addChild(instructionButton);
        instructionButton.addEventListener("click", instructionsButtonClicked);
        
        stage.addChild(game);
    }
} 