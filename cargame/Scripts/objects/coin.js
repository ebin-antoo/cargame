var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    //Coin class
    var Coin = (function (_super) {
        __extends(Coin, _super);
        function Coin() {
            _super.call(this, "coin");
            this.dy = 5;

            stage.addChild(this);
            this.reset();
        }
        Coin.prototype.reset = function () {
            this.x = 805;
            this.y = Math.floor(Math.random() * stage.canvas.height);
        };

        Coin.prototype.update = function () {
            this.x -= this.dy;
            if (this.x <= (-stage.canvas.width)) {
                this.reset();
            }
        };
        return Coin;
    })(objects.GameObjects);
    objects.Coin = Coin;
})(objects || (objects = {}));
//# sourceMappingURL=coin.js.map
