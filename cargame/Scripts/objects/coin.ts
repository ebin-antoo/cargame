module objects {
    //Coin class
    export class Coin extends objects.GameObjects{
        stage: createjs.Stage;
        game: createjs.Container;
        dy: number;
        constructor(stage: createjs.Stage, game: createjs.Container) {
            this.stage = stage;
            this.game = game;
            super("coin");
            this.dy = 5;

            game.addChild(this);
            //this.reset();
        }

        reset() {
            this.x = 805;
            this.y = 50+Math.floor(Math.random() * 250);
        }

        update() {

            this.x -= this.dy;
            if (this.x <= (-stage.canvas.width)) {
                this.reset();
            }
        }

        destroy() {
            game.removeChild(this);
        }
    } //EO coin class
} 