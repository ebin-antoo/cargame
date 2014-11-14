var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/// <reference path="../managers/asset.ts" />
var objects;
(function (objects) {
    //red car class
    var RedCar = (function (_super) {
        __extends(RedCar, _super);
        function RedCar(stage, game) {
            this.stage = stage;
            this.game = game;
            _super.call(this, "red_car");

            //this.dx = 10;
            this.reset();
            game.addChild(this);
        }
        RedCar.prototype.reset = function () {
            this.x = stage.canvas.width + this.width; //805 + Math.floor(Math.random() * 50);
            this.y = 50 + Math.floor(Math.random() * 300);
            this.dx = Math.floor(Math.random() * 10 + 5);
            // this.dy = Math.floor(Math.random() * 5 + 5);
        };

        RedCar.prototype.update = function () {
            this.x -= this.dx;
            if (this.x <= -stage.canvas.width) {
                this.reset();
            }
        };

        RedCar.prototype.destroy = function () {
            game.removeChild(this);
        };
        return RedCar;
    })(objects.GameObjects);
    objects.RedCar = RedCar;
})(objects || (objects = {}));
//# sourceMappingURL=redcar.js.map
