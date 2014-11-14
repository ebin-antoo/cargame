var managers;
(function (managers) {
    var Data = [
        { id: "road", src: "assets/images/road.jpg" },
        { id: "1-up", src: "assets/sounds/1-up.mp3" },
        { id: "police_siren", src: "assets/sounds/police_siren.mp3" },
        { id: "car_crash", src: "assets/sounds/car_crash.mp3" },
        { id: "lost_a_life", src: "assets/sounds/lost_a_life.mp3" }
    ];

    var spriteSheetData = {
        "images": ["assets/images/imgMap.png"],
        "frames": [
            [2, 2, 95, 78],
            [2, 82, 95, 78],
            [328, 2, 95, 78],
            [2, 162, 60, 65],
            [99, 2, 227, 71],
            [328, 82, 95, 78],
            [99, 75, 227, 71],
            [99, 148, 227, 71]
        ],
        "animations": {
            "car": {
                frames: [0, 1, 2],
                speed: 1
            },
            "coin": [3],
            "instructionsButton": [4],
            "red_car": [5],
            "startButton": [6],
            "tryAgainButton": [7]
        }
    };

    //asset manager class
    var Asset = (function () {
        function Asset() {
        }
        Asset.init = function () {
            this.loader = new createjs.LoadQueue();
            this.loader.installPlugin(createjs.Sound);
            this.loader.loadManifest(Data);

            this.imgMap = new createjs.SpriteSheet(spriteSheetData);
        };
        return Asset;
    })();
    managers.Asset = Asset;
})(managers || (managers = {}));
//# sourceMappingURL=asset.js.map
