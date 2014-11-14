/// <reference path="../managers/asset.ts" />
module objects {
    //red car class
    export class RedCar extends objects.GameObjects {
        stage: createjs.Stage;
        game: createjs.Container;
        dy: number;
        dx: number;
        constructor(stage: createjs.Stage, game: createjs.Container) {
            this.stage = stage;
            this.game = game;
            super("red_car");
            //this.dx = 10;            
            this.reset();
            game.addChild(this);           
        }

        reset() {
            this.x = stage.canvas.width + this.width;//805 + Math.floor(Math.random() * 50);
            this.y = Math.floor(Math.random() * stage.canvas.height);
            this.dx = Math.floor(Math.random() * 10 + 5);
           // this.dy = Math.floor(Math.random() * 5 + 5);
        }

        update() {
            this.x -= this.dx;
            if (this.x <= -stage.canvas.width) {
                this.reset();
            }
        }

        destroy() {
            game.removeChild(this);
        }
    } //EO red car class

} 