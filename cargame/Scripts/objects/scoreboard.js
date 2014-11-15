/// <reference path="../constants.ts" />
//scoreboard class
var objects;
(function (objects) {
    var Scoreboard = (function () {
        function Scoreboard(stage, game) {
            this.labelString = "";
            this.lives = constants.PLAYER_LIVES;
            this.scores = 0;
            this.distance = 0;
            this.stage = stage;
            this.game = game;
            this.label = new createjs.Text(this.labelString, constants.GAME_FONT, constants.GAME_FONT_COLOR);
            this.update();
            this.width = this.label.getBounds().width;
            this.height = this.label.getBounds().height;

            game.addChild(this.label);
        }
        Scoreboard.prototype.update = function () {
            this.labelString = "Lives:" + this.lives.toString() + "   Score:" + this.scores.toString() + "   Distance:" + this.distance.toString() + "m";
            this.label.text = this.labelString;
        };

        Scoreboard.prototype.destroy = function () {
            game.removeChild(this.label);
        };
        return Scoreboard;
    })();
    objects.Scoreboard = Scoreboard;
})(objects || (objects = {}));
//# sourceMappingURL=scoreboard.js.map
