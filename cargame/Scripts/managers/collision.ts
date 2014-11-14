/// <reference path="../objects/car.ts" />
/// <reference path="../objects/coin.ts" />
/// <reference path="../objects/redcar.ts" />
/// <reference path="../objects/scoreboard.ts" />

module managers {
    //collision Manager class
    export class Collision {
        // class variables
        private car: objects.Car;
        private coin: objects.Coin;
        private redcar = [];
        private scoreboard: objects.Scoreboard;

        constructor(car: objects.Car, coin: objects.Coin, redcar, scoreboard: objects.Scoreboard) {
            this.car = car;
            this.coin = coin;
            this.redcar = redcar;
            this.scoreboard = scoreboard;
        }


        //distance function
        private distance(p1: createjs.Point, p2: createjs.Point): number {
            var firstpoint: createjs.Point;
            var secondpoint: createjs.Point;
            var theXs: number;
            var theYs: number;
            var result: number;

            firstpoint = new createjs.Point();
            secondpoint = new createjs.Point();

            firstpoint.x = p1.x;
            firstpoint.y = p1.y;

            secondpoint.x = p2.x;
            secondpoint.y = p2.y;

            theXs = secondpoint.x - firstpoint.x;
            theYs = secondpoint.y - firstpoint.y;

            theXs *= theXs;
            theYs *= theYs;

            result = Math.sqrt(theXs + theYs);

            return result;
        }

        //collision btwn car and coin
        private carAndCoin() {
            var p1: createjs.Point = new createjs.Point();
            var p2: createjs.Point = new createjs.Point();

            p1.x = this.car.x;
            p1.y = this.car.y;
            p2.x = this.coin.x;
            p2.y = this.coin.y;
            if (this.distance(p1, p2) < ((this.car.height * 0.5) + (this.coin.height * 0.5))) {
                createjs.Sound.play("1-up");
                this.scoreboard.scores += 100;
                this.coin.reset();
            }
        }

        //collision btwn car and red car
        private carAndRedCar(theRedCar: objects.RedCar) {
            var p1: createjs.Point = new createjs.Point();
            var p2: createjs.Point = new createjs.Point();

            //var redcar: objects.RedCar = new objects.RedCar();

            //redcar = theRedCar;

            p1.x = this.car.x;
            p1.y = this.car.y;
            p2.x = theRedCar.x;
            p2.y = theRedCar.y;
            if (this.distance(p1, p2) < ((this.car.height * 0.5) + (theRedCar.height * 0.5))) {
                createjs.Sound.play("car_crash");
                createjs.Sound.play("lost_a_life", 0, 1, 0, 0);
                this.scoreboard.lives -= 1;
                theRedCar.reset();
                //redcar.reset();
            }
        }

        //collision check function
        update() {
            for (var count = 0; count < constants.REDCAR_NUM; count++) {
                this.carAndRedCar(this.redcar[count]);
            }

            this.carAndCoin();
        }
    }
}