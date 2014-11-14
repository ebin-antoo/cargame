﻿module managers {
        var Data = [
            { id: "road", src: "assets/images/road.jpg" },
            { id: "1-up", src: "assets/sounds/1-up.mp3" },
            { id: "police_siren", src: "assets/sounds/police_siren.mp3" },
            { id: "car_crash", src: "assets/sounds/car_crash.mp3" },
            { id: "lost_a_life", src: "assets/sounds/lost_a_life.mp3" }
        ]

    var spriteSheetData = {
        "images": ["assets/imgMap.png"],
        "frames": [

            [2, 2, 95, 78],
            [2, 82, 95, 78],
            [231, 148, 95, 78],
            [328, 2, 60, 65],
            [99, 2, 227, 71],
            [99, 75, 227, 71],
            [2, 162, 227, 71]
        ],
        "animations": {

            "car": {
                frames: [0, 1, 2],
                speed: 1
            },
            "coin": [3],
            "instructionsButton": [4],
            "startButton": [5],
            "tryAgainButton": [6]
        }
    };

    //asset manager class
    export class Asset {
        public static manifest;
        public static data;

        public static loader;
        public static imgMap: createjs.SpriteSheet;

        public static init() {
            this.loader = new createjs.LoadQueue();
            this.loader.installPlugin(createjs.Sound);
            this.loader.loadManifest(Data); 

            this.imgMap = new createjs.SpriteSheet(spriteSheetData);
        }
    }
}