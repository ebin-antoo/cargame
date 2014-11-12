var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    var GameObjects = (function (_super) {
        __extends(GameObjects, _super);
        function GameObjects(imageString) {
            _super.call(this, queue.getResult(imageString));
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.regX = this.width * 0.5;
            this.regY = this.width * 0.5;
        }
        return GameObjects;
    })(createjs.Bitmap);
    objects.GameObjects = GameObjects;
})(objects || (objects = {}));
//# sourceMappingURL=gameobjects.js.map
