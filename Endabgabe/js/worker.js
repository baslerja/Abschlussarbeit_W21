"use strict";
var Döner_Trainer;
(function (Döner_Trainer) {
    // enum TASK {
    //     COOK,
    //     RESTOCKING,
    //     WAITING, RESTING
    // }
    class Worker extends Döner_Trainer.Human {
        constructor(_position, _x, _y) {
            super(_position);
            this.position = new Döner_Trainer.Vector(_x, _y);
            this.velocity = new Döner_Trainer.Vector(0, 0);
            this.velocity.set(30, 0);
        }
        move(_timeslice) {
            let offset = new Döner_Trainer.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            // switch () {
            //     case TASK.COOK:
            //     case TASK.RESTOCKING:
            //     case TASK.WAITING:
            // }
        }
        feel(_mood) {
            if (_mood == "happy") {
                Döner_Trainer.crc2.save();
                Döner_Trainer.crc2.translate(this.position.x, this.position.y);
            }
            if (_mood == "sleepy") {
                Döner_Trainer.crc2.save();
                Döner_Trainer.crc2.translate(this.position.x, this.position.y);
            }
            if (_mood == "stressed") {
                Döner_Trainer.crc2.save();
                Döner_Trainer.crc2.translate(this.position.x, this.position.y);
            }
        }
        draw() {
            Döner_Trainer.crc2.save();
            Döner_Trainer.crc2.translate(this.position.x, this.position.y);
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