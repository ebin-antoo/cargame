module objects {
    //red car class
    export class RedCar extends objects.GameObjects {
        dy: number;
        dx: number;
        constructor() {
            super("redcar");
            this.dx = 10;

            stage.addChild(this);
            this.reset();
        }

        reset() {
            this.x = 805 + Math.floor(Math.random() * 50);
            this.y = Math.floor(Math.random() * stage.canvas.height);
            this.dx = Math.floor(Math.random() * 10 + 5);
            this.dy = Math.floor(Math.random() * 5 + 5);
        }

        update() {
            this.x -= this.dx;
            if (this.x <= (-stage.canvas.width)) {
                this.reset();
            }
        }
    } //EO red car class

} 