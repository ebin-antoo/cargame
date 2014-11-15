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

        instructionLabel = new objects.Label(stage.canvas.width / 2, 200, "This is a 2D Side Scolling game.\n\nTo Play this game move the police \n\n car up and down using the mouse. \n\n Avoid hitting the opposite cars  \n\n which will lose the lives and \n\n  when the lives becomes 0  \n\n the game will be over.");

        //this.instructionsLabel = new objects.Label(stage.canvas.width / 2, 200, "Test Test Test");
        instructionLabel.regX = 0;
        instructionLabel.x = 13;
        instructionLabel.y = 245;
        game.addChild(instructionLabel);

        //move the police car up \n and down using the mouse. \nAvoid hitting the opposite cars which will lose the live and when the lives becomes 0 the game will be over
        // Display Play Button
        playButton = new objects.Button(stage.canvas.width / 2, 480, "startButton");
        game.addChild(playButton);
        playButton.addEventListener("click", states.startButtonClicked);

        stage.addChild(game);
    }
    states.instructions = instructions;
})(states || (states = {}));
//# sourceMappingURL=instruction.js.map
