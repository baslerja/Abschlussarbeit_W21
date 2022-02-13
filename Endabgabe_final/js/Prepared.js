"use strict";
var DoenerTest;
(function (DoenerTest) {
    class Prepared {
        constructor(_position, _x, _y) {
            console.log("Prepared CONSTRUCTOR");
            this.position = new DoenerTest.Vector(_x, _y);
            this.velocity = new DoenerTest.Vector(0, 0);
            this.velocity.random(100, 150);
        }
        move(_timeslice, _x, _y) {
            // console.log("Human move");
        }
        drawContainer() {
            // console.log("Human feel");
            DoenerTest.crc2.resetTransform();
            DoenerTest.crc2.save();
            DoenerTest.crc2.translate(this.position.x, this.position.y);
            DoenerTest.crc2.fillStyle = "grey";
            //Arm rechts
            DoenerTest.crc2.beginPath();
            DoenerTest.crc2.ellipse(50, -50, 5, 12, 2, 20, 40);
            DoenerTest.crc2.closePath();
            DoenerTest.crc2.fill();
            DoenerTest.crc2.stroke();
        }
        drawBread() {
            // console.log("Human feel");
            DoenerTest.crc2.resetTransform();
            DoenerTest.crc2.save();
            DoenerTest.crc2.translate(this.position.x, this.position.y);
            DoenerTest.crc2.fillStyle = "orange";
            //Arm rechts
            DoenerTest.crc2.beginPath();
            DoenerTest.crc2.ellipse(50, -50, 5, 12, 2, 20, 40);
            DoenerTest.crc2.closePath();
            DoenerTest.crc2.fill();
            DoenerTest.crc2.stroke();
        }
        drawTomato() {
            // console.log("Human draw");
            DoenerTest.crc2.resetTransform();
            DoenerTest.crc2.save();
            DoenerTest.crc2.translate(this.position.x, this.position.y);
            DoenerTest.crc2.fillStyle = "red";
            //Arm rechts
            DoenerTest.crc2.beginPath();
            DoenerTest.crc2.ellipse(40, -50, 5, 12, 2, 20, 40);
            DoenerTest.crc2.closePath();
            DoenerTest.crc2.fill();
            DoenerTest.crc2.stroke();
        }
        drawLettuce() {
            // do something
            DoenerTest.crc2.resetTransform();
            DoenerTest.crc2.save();
            DoenerTest.crc2.translate(this.position.x, this.position.y);
            DoenerTest.crc2.fillStyle = "yellowgreen";
            //Arm rechts
            DoenerTest.crc2.beginPath();
            DoenerTest.crc2.ellipse(30, -50, 5, 12, 2, 20, 40);
            DoenerTest.crc2.closePath();
            DoenerTest.crc2.fill();
            DoenerTest.crc2.stroke();
        }
        drawOnion() {
            // do something
            DoenerTest.crc2.resetTransform();
            DoenerTest.crc2.save();
            DoenerTest.crc2.translate(this.position.x, this.position.y);
            DoenerTest.crc2.fillStyle = "purple";
            //Arm rechts
            DoenerTest.crc2.beginPath();
            DoenerTest.crc2.ellipse(20, -50, 5, 12, 2, 20, 40);
            DoenerTest.crc2.closePath();
            DoenerTest.crc2.fill();
            DoenerTest.crc2.stroke();
        }
        drawMeat() {
            // do something
            DoenerTest.crc2.resetTransform();
            DoenerTest.crc2.save();
            DoenerTest.crc2.translate(this.position.x, this.position.y);
            DoenerTest.crc2.fillStyle = "brown";
            //Arm rechts
            DoenerTest.crc2.beginPath();
            DoenerTest.crc2.ellipse(10, -50, 5, 12, 2, 20, 40);
            DoenerTest.crc2.closePath();
            DoenerTest.crc2.fill();
            DoenerTest.crc2.stroke();
        }
    }
    DoenerTest.Prepared = Prepared;
})(DoenerTest || (DoenerTest = {}));
//# sourceMappingURL=Prepared.js.map