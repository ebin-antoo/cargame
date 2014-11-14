/// <reference path="../objects/car.ts" />
/// <reference path="../objects/coin.ts" />
/// <reference path="../objects/redcar.ts" />
/// <reference path="../objects/scoreboard.ts" />
var managers;
(function (managers) {
    //collision Manager class
    var Collision = (function () {
        function Collision(car, coin, redcar, scoreboard) {
            this.redcar = [];
            this.car = car;
            this.coin = coin;
            this.redcar = redcar;
            this.scoreboard = scoreboard;
        }
        //distance function
        Collision.prototype.distance = function (p1, p2) {
            var firstpoint;
            var secondpoint;
            var theXs;
            var theYs;
            var result;

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
        };

        //collision btwn car and coin
        Collision.prototype.carAndCoin = function () {
            var p1 = new createjs.Point();
            var p2 = new createjs.Point();

            p1.x = this.car.x;
            p1.y = this.car.y;
            p2.x = this.coin.x;
            p2.y = this.coin.y;
            if (this.distance(p1, p2) < ((this.car.height * 0.5) + (this.coin.height * 0.5))) {
                createjs.Sound.play("1-up");
                this.scoreboard.scores += 100;
                this.coin.reset();
            }
        };

        //collision btwn car and red car
        Collision.prototype.carAndRedCar = function (theRedCar) {
            var p1 = new createjs.Point();
            var p2 = new createjs.Point();

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
        };

        //collision check function
        Collision.prototype.update = function () {
            for (var count = 0; count < constants.REDCAR_NUM; count++) {
                this.carAndRedCar(this.redcar[count]);
            }

            this.carAndCoin();
        };
        return Collision;
    })();
    managers.Collision = Collision;
})(managers || (managers = {}));
//# sourceMappingURL=collision.js.map
