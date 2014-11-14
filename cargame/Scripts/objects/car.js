var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/// <reference path="../managers/asset.ts" />
var objects;
(function (objects) {
    //car class
    //var carSound;
    var Car = (function (_super) {
        __extends(Car, _super);
        //carSound: createjs.SoundInstance;
        //carSound: createjs.SoundInstance;
        function Car(stage, game) {
            this.stage = stage;
            this.game = game;
            _super.call(this, "car");
            this.x = 65;
            this.y = 302;

            game.addChild(this);

            //play car engine sound
            createjs.Sound.play("police_siren", 0, 0, 0, -1, 1, 0);
        }
        Car.prototype.update = function () {
            if (stage.mouseY >= 70 && stage.mouseY <= 550) {
                this.y = stage.mouseY;
            }
        };

        Car.prototype.destroy = function () {
            //this.carSound.pause();
            createjs.Sound.stop();

            //this.carSound.stop();
            game.removeChild(this);
        };
        return Car;
    })(objects.GameObjects);
    objects.Car = Car;
})(objects || (objects = {}));
//# sourceMappingURL=car.js.map
