var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    //car class
    var Car = (function (_super) {
        __extends(Car, _super);
        function Car() {
            _super.call(this, "car");
            this.x = 65;
            this.y = 302;

            stage.addChild(this);
            //play car engine sound
            //createjs.Sound.play("yay",0,0,0,-1,1,0);
        }
        Car.prototype.update = function () {
            if (stage.mouseY >= 70 && stage.mouseY <= 550) {
                this.y = stage.mouseY;
            }
        };
        return Car;
    })(objects.GameObjects);
    objects.Car = Car;
})(objects || (objects = {}));
//# sourceMappingURL=car.js.map
