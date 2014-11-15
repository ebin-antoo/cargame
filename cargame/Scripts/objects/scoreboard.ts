/// <reference path="../constants.ts" />
//scoreboard class
module objects {
    export class Scoreboard {
        stage: createjs.Stage;
        game: createjs.Container;
        label: createjs.Text;
        labelString: string = "";
        lives: number = constants.PLAYER_LIVES;
        scores: number = 0;
        distance: number = 0;
        width: number;
        height: number;
        constructor(stage: createjs.Stage, game: createjs.Container) {
            this.stage = stage;
            this.game = game;
            this.label = new createjs.Text(this.labelString, constants.GAME_FONT, constants.GAME_FONT_COLOR);
            this.update();
            this.width = this.label.getBounds().width;
            this.height = this.label.getBounds().height;

            game.addChild(this.label);
        }
        update() {
            this.labelString = "Lives:" + this.lives.toString() + "   Score:" + this.scores.toString() + "   Distance:" + this.distance.toString() + "m";
            this.label.text = this.labelString;

            
        }

        destroy() {
            game.removeChild(this.label);
        }

    }// EO scoreboard
} 