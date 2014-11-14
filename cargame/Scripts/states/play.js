/// <reference path="../objects/car.ts" />
/// <reference path="../objects/coin.ts" />
/// <reference path="../objects/road.ts" />
/// <reference path="../objects/redcar.ts" />
/// <reference path="../objects/scoreboard.ts" />
var states;
(function (states) {
    function playState() {
        //console.log("play state fired");
        road.update();
        coin.update();
        car.update();

        for (var count = 0; count < constants.REDCAR_NUM; count++) {
            redcar[count].update();
        }
        collision.update();
        scoreboard.update();

        if (scoreboard.lives <= 0) {
            stage.removeChild(game);
            car.destroy();
            game.removeAllChildren();
            game.removeAllEventListeners();
            currentState = constants.GAME_OVER_STATE;
            changeState(currentState);
        }
    }
    states.playState = playState;

    //play state function
    function play() {
        //Declare new Game container
        game = new createjs.Container();

        //instantiate game objects
        road = new objects.Road(stage, game);
        car = new objects.Car(stage, game);
        coin = new objects.Coin(stage, game);

        //show cursor
        stage.cursor = "none";

        for (var count = 0; count < constants.REDCAR_NUM; count++) {
            redcar[count] = new objects.RedCar(stage, game);
        }

        //display scoreboard
        scoreboard = new objects.Scoreboard(stage, game);

        // Instantiate Collision Manager
        collision = new managers.Collision(car, coin, redcar, scoreboard);

        stage.addChild(game);
    }
    states.play = play;
})(states || (states = {}));
//# sourceMappingURL=play.js.map
