﻿/// <reference path="../constants.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/redcar.ts" />
/// <reference path="../objects/coin.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/road.ts" />
/// <reference path="../objects/car.ts" />
/// <reference path="../objects/scoreboard.ts" />
module states {
    export function gameOverState() {
        road.update();
    }

    // Restart Game 
    export function tryAgainClicked(event: MouseEvent) {
        stage.removeChild(game);
        game.removeAllChildren();
        game.removeAllEventListeners();
        currentState = constants.PLAY_STATE;
        changeState(currentState);
    }

    // Game Over screen
    export function gameOver() {
        console.log("gameover");
        var gameOverLabel: objects.Label;
        var finalScoreLabel: objects.Label;
        var finalScore: objects.Label;

        // Declare new Game Container
        game = new createjs.Container();

        // Instantiate Game Objects
        road = new objects.Road(stage, game);

        // Show Cursor
        stage.cursor = "default";

        // Display Game Over
        gameOverLabel = new objects.Label(stage.canvas.width / 2, 40, "GAME OVER");
        game.addChild(gameOverLabel);

        // Display Final Score Label
        finalScoreLabel = new objects.Label(stage.canvas.width / 2, 120, "FINAL SCORE");
        game.addChild(finalScoreLabel);

        // Display Final Score
        finalScore = new objects.Label(stage.canvas.width / 2, 160, scoreboard.scores.toString());
        game.addChild(finalScore);

        // Display Try Again Button
        tryAgain = new objects.Button(stage.canvas.width / 2, 300, "tryAgainButton");
        game.addChild(tryAgain);
        tryAgain.addEventListener("click", tryAgainClicked);

        stage.addChild(game);

    }
} 