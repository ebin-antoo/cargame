var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    //red car class
    var RedCar = (function (_super) {
        __extends(RedCar, _super);
        function RedCar() {
            _super.call(this, "redcar");
            this.dx = 10;

            stage.addChild(this);
            this.reset();
        }
        RedCar.prototype.reset = function () {
            this.x = 805 + Math.floor(Math.random() * 50);
            this.y = Math.floor(Math.random() * stage.canvas.height);
            this.dx = Math.floor(Math.random() * 10 + 5);
            this.dy = Math.floor(Math.random() * 5 + 5);
        };

        RedCar.prototype.update = function () {
            this.x -= this.dx;
            if (this.x <= (-stage.canvas.width)) {
                this.reset();
            }
        };
        return RedCar;
    })(objects.GameObjects);
    objects.RedCar = RedCar;
})(objects || (objects = {}));
//# sourceMappingURL=redcar.js.map
