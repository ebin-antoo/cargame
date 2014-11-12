/// <reference path="../managers/asset.ts" />
module objects {
    //Road class
    export class Road extends createjs.Bitmap{
        width: number;
        height: number;
        dx: number;
        constructor() {

            super(managers.Asset.loader.getResult("road"));
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.dx = 5;

            stage.addChild(this);
            this.reset();
        }

        reset() {
            this.x = 0;
        }

        update() {
            this.x -= this.dx;
            if (this.x <= -600) {
                this.reset();
            }
        }
    } //EO coin class
}