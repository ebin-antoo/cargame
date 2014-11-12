module objects {
    //car class
    export class Car extends objects.GameObjects { 
        constructor() {
           super("car");
            this.x = 65;
            this.y = 302;

            stage.addChild(this);
            //play car engine sound
            createjs.Sound.play("police_siren",0,0,0,-1,1,0);
        }

        update() {
            if (stage.mouseY >= 70 && stage.mouseY <= 550) {
                this.y = stage.mouseY;
            }
        }
    } //EO car class
} 