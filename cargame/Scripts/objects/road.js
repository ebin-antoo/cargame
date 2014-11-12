var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/// <reference path="../managers/asset.ts" />
var objects;
(function (objects) {
    //Road class
    var Road = (function (_super) {
        __extends(Road, _super);
        function Road() {
            _super.call(this, managers.Asset.loader.getResult("road"));
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.dx = 5;

            stage.addChild(this);
            this.reset();
        }
        Road.prototype.reset = function () {
            this.x = 0;
        };

        Road.prototype.update = function () {
            this.x -= this.dx;
            if (this.x <= -600) {
                this.reset();
            }
        };
        return Road;
    })(createjs.Bitmap);
    objects.Road = Road;
})(objects || (objects = {}));
//# sourceMappingURL=road.js.map
