/// <reference path="../constants.ts" />
/// <reference path="../objects/scoreboard.ts" />
/// <reference path="../objects/car.ts" />
/// <reference path="../objects/coin.ts" />
/// <reference path="../objects/redcar.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/label.ts" />
var states;
(function (states) {
    function instructionsState() {
        //console.log("instruction state");
        road.update();
        car.update();
    }
    states.instructionsState = instructionsState;

    function instructions() {
        //console.log("test");
        var title;
        var instructionLabel;

        //declare new game container
        game = new createjs.Container();

        // Instantiate Game Objects
        road = new objects.Road(stage, game);

        //car = new objects.Car(stage, game);
        // Show Cursor
        stage.cursor = "default";

        // Display Instructions
        title = new objects.Label(stage.canvas.width / 2, 40, "HOW TO PLAY THE GAME");

        //this.title = new objects.Label(stage.canvas.width / 2, 40, "HOW TO PLAY THE GAME");
        game.addChild(title);

        instructionLabel = new objects.Label(stage.canvas.width / 2, 200, "Test Test Test");

        //this.instructionsLabel = new objects.Label(stage.canvas.width / 2, 200, "Test Test Test");
        game.addChild(instructionLabel);

        // Display Play Button
        playButton = new objects.Button(stage.canvas.width / 2, 400, "startButton");
        game.addChild(playButton);
        playButton.addEventListener("click", states.startButtonClicked);

        stage.addChild(game);
    }
    states.instructions = instructions;
})(states || (states = {}));
//# sourceMappingURL=instruction.js.map
