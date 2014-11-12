module objects {
    //car class
    export class Car { 
        image: createjs.Bitmap;
        width: number;
        height: number;
        constructor() {
            this.image = new createjs.Bitmap(queue.getResult("car"));
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.image.regX = this.width * 0.5;
            this.image.regY = this.width * 0.5;
            this.image.x = 65;
            this.image.y = 302;

            stage.addChild(this.image);
            //play car engine sound
            //createjs.Sound.play("yay",0,0,0,-1,1,0);
        }

        update() {
            if (stage.mouseY >= 70 && stage.mouseY <= 550) {
                this.image.y = stage.mouseY;
            }
        }
    } //EO car class
} 