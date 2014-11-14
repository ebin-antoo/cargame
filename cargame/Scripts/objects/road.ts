/// <reference path="../managers/asset.ts" />
module objects {
    //Road class
    export class Road extends createjs.Bitmap{
        game: createjs.Container;
        stage: createjs.Stage;
        width: number;
        height: number;
        dx: number;
        constructor(stage: createjs.Stage, game: createjs.Container) {
            this.stage = stage;
            this.game = game;
            super(managers.Asset.loader.getResult("road"));
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.dx = 5;

            game.addChild(this);
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

        destroy() {
            game.removeChild(this);
        }
    } //EO coin class
}