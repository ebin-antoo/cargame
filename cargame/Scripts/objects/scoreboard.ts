/// <reference path="../constants.ts" />
//scoreboard class
module objects {
    export class Scoreboard {
        label: createjs.Text;
        labelString: string = "";
        lives: number = constants.PLAYER_LIVES;
        scores: number = 0;
        width: number;
        height: number;
        constructor() {
            this.label = new createjs.Text(this.labelString, constants.GAME_FONT, constants.GAME_FONT_COLOR);
            this.update();
            this.width = this.label.getBounds().width;
            this.height = this.label.getBounds().height;

            stage.addChild(this.label);
        }
        update() {
            this.labelString = "Lives: " + this.lives.toString() + "Score: " + this.scores.toString();
            this.label.text = this.labelString;
        }

    }// EO scoreboard
} 