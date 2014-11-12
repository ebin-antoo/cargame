/// <reference path="../constants.ts" />
//scoreboard class
var objects;
(function (objects) {
    var Scoreboard = (function () {
        function Scoreboard() {
            this.labelString = "";
            this.lives = constants.PLAYER_LIVES;
            this.scores = 0;
            this.label = new createjs.Text(this.labelString, constants.GAME_FONT, constants.GAME_FONT_COLOR);
            this.update();
            this.width = this.label.getBounds().width;
            this.height = this.label.getBounds().height;

            stage.addChild(this.label);
        }
        Scoreboard.prototype.update = function () {
            this.labelString = "Lives: " + this.lives.toString() + "Score: " + this.scores.toString();
            this.label.text = this.labelString;
        };
        return Scoreboard;
    })();
    objects.Scoreboard = Scoreboard;
})(objects || (objects = {}));
//# sourceMappingURL=scoreboard.js.map
