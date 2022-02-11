"use strict";
var Döner_Trainer;
(function (Döner_Trainer) {
    class Worker extends Döner_Trainer.Human {
        constructor(_position, _x, _y) {
            super(_position);
            this.position = new Döner_Trainer.Vector(_x, _y);
            this.velocity = new Döner_Trainer.Vector(0, 0);
            // this.velocity.set();
        }
        move(_timeslice) {
            let offset = new Döner_Trainer.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            // if (this.position.x < 100) {
            //     this.position.x += 10;
            //     this.velocity.set(15, 0);
            //     this.velocity.scale(5);
            // }
            // if (this.position.x > 400) {
            //     this.position.x -= 10;
            //     this.velocity.set(-15, 0);
            //     this.velocity.scale(5);
            // }
            // if (this.position.y < 0) {
            //     this.position.x += 30;
            //     this.velocity.set(15, 0);
            //     this.velocity.scale(5);
            // }
            // if (this.position.y > 600) {
            //     this.position.x -= 30;
            //     this.velocity.set(-15, 0);
            //     this.velocity.scale(5);
            // }
        }
        feel(_mood) {
            if (_mood == "sleepy") {
                Döner_Trainer.crc2.save();
                Döner_Trainer.crc2.translate(this.position.x, this.position.y);
                Döner_Trainer.crc2.beginPath();
                Döner_Trainer.crc2.moveTo(-10, -5);
                Döner_Trainer.crc2.lineTo(-3, -5);
                Döner_Trainer.crc2.moveTo(3, -5);
                Döner_Trainer.crc2.lineTo(10, -5);
                Döner_Trainer.crc2.lineWidth = 3;
                Döner_Trainer.crc2.strokeStyle = "black";
                Döner_Trainer.crc2.stroke();
                Döner_Trainer.crc2.closePath();
                Döner_Trainer.crc2.beginPath();
                Döner_Trainer.crc2.arc(0, 5, 5, 0, 2 * Math.PI);
                Döner_Trainer.crc2.lineWidth = 2;
                Döner_Trainer.crc2.strokeStyle = "black";
                Döner_Trainer.crc2.stroke();
                Döner_Trainer.crc2.closePath();
                Döner_Trainer.crc2.beginPath();
                Döner_Trainer.crc2.moveTo(35, -10);
                Döner_Trainer.crc2.lineTo(25, -10);
                Döner_Trainer.crc2.lineTo(35, -20);
                Döner_Trainer.crc2.lineTo(25, -20);
                Döner_Trainer.crc2.lineWidth = 2;
                Döner_Trainer.crc2.strokeStyle = "blue";
                Döner_Trainer.crc2.stroke();
                Döner_Trainer.crc2.closePath();
                Döner_Trainer.crc2.restore();
            }
            if (_mood == "stressed") {
                Döner_Trainer.crc2.save();
                Döner_Trainer.crc2.translate(this.position.x, this.position.y);
                Döner_Trainer.crc2.beginPath();
                Döner_Trainer.crc2.arc(-5, -5, 3, 0, 2 * Math.PI);
                Döner_Trainer.crc2.arc(5, -5, 3, 0, 2 * Math.PI);
                Döner_Trainer.crc2.fillStyle = "black";
                Döner_Trainer.crc2.fill();
                Döner_Trainer.crc2.closePath();
                Döner_Trainer.crc2.beginPath();
                Döner_Trainer.crc2.moveTo(-8, 8);
                Döner_Trainer.crc2.lineTo(8, 8);
                Döner_Trainer.crc2.lineWidth = 3;
                Döner_Trainer.crc2.strokeStyle = "black";
                Döner_Trainer.crc2.stroke();
                Döner_Trainer.crc2.closePath();
                Döner_Trainer.crc2.restore();
            }
        }
        draw() {
            Döner_Trainer.crc2.save();
            Döner_Trainer.crc2.resetTransform();
            Döner_Trainer.crc2.translate(this.position.x, this.position.y);
            //hat
            Döner_Trainer.crc2.beginPath();
            Döner_Trainer.crc2.arc(-10, -35, 9, 0, 2 * Math.PI);
            Döner_Trainer.crc2.arc(0, -45, 9, 0, 2 * Math.PI);
            Döner_Trainer.crc2.arc(10, -35, 9, 0, 2 * Math.PI);
            Döner_Trainer.crc2.rect(-12, -35, 25, 25);
            Döner_Trainer.crc2.fillStyle = "white";
            Döner_Trainer.crc2.fill();
            Döner_Trainer.crc2.closePath();
            //head
            Döner_Trainer.crc2.beginPath();
            Döner_Trainer.crc2.arc(0, 0, 20, 0, 2 * Math.PI);
            Döner_Trainer.crc2.fillStyle = "#d18075";
            Döner_Trainer.crc2.fill();
            Döner_Trainer.crc2.closePath();
            Döner_Trainer.crc2.restore();
        }
    }
    Döner_Trainer.Worker = Worker;
})(Döner_Trainer || (Döner_Trainer = {}));
//# sourceMappingURL=worker.js.map