module objects {
    export class GameObjects extends createjs.Bitmap {
        width: number;
        height: number;
        constructor(imageString: string) {
            super(queue.getResult(imageString));
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.regX = this.width * 0.5;
            this.regY = this.width * 0.5;

        }
    }
} 