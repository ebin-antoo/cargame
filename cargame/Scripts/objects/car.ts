/// <reference path="../managers/asset.ts" />
module objects {
    //car class
    //var carSound;
    export class Car extends objects.GameObjects { 
        stage: createjs.Stage;
        game: createjs.Container;
        //carSound: createjs.SoundInstance;
        //carSound: createjs.SoundInstance;
        constructor(stage: createjs.Stage, game: createjs.Container) {
            this.stage = stage;
            this.game = game;
            super("car");
            this.x = 65;
            this.y = 302;

            game.addChild(this);
            //play car engine sound
            createjs.Sound.play("police_siren",0,0,0,-1,1,0);
        }

        update() {
            if (stage.mouseY >= 70 && stage.mouseY <= 550) {
                this.y = stage.mouseY;
            }
        }

        destroy() {
            //this.carSound.pause();
            createjs.Sound.stop();
            //this.carSound.stop();
            game.removeChild(this);
        }
    } //EO car class
} 