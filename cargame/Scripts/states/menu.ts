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

        // Display Game Over
        gameNameLabel = new objects.Label(stage.canvas.width / 2, 40, "CAR GAME");
        game.addChild(gameNameLabel);

        // Display Play Again Button
        playButton = new objects.Button(stage.canvas.width / 2, 300, "startButton");
        game.addChild(playButton);
        playButton.addEventListener("click", startButtonClicked);
        
        stage.addChild(game);
    }
} 