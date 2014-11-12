module objects {
    //Coin class
    export class Coin extends objects.GameObjects{
        dy: number;
        constructor() {
            super("coin");
            this.dy = 5;

            stage.addChild(this);
            this.reset();
        }

        reset() {
            this.x = 805;
            this.y = Math.floor(Math.random() * stage.canvas.height);
        }

        update() {

            this.x -= this.dy;
            if (this.x <= (-stage.canvas.width)) {
                this.reset();
            }
        }
    } //EO coin class
} 