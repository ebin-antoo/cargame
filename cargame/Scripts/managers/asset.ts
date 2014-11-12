module managers {
        var Data = [
            { id: "road", src: "assets/images/road.jpg" },
            { id: "yay", src: "assets/sounds/yay.ogg" }
        ]

    var spriteSheetData = {
            "images": ["assets/images/imgMap.png"],
            "frames": [

                [2, 2, 95, 78],
                [99, 2, 95, 78],
                [196, 2, 95, 78],
                [390, 2, 60, 65],
                [293, 2, 95, 78]
            ],
            "animations": {

                "car": {
                         frames: [0, 1, 2],
                         speed: 1
                        },               
                "coin": [3],
                "red_car": [4]
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