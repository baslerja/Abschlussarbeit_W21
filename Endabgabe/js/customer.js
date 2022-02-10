"use strict";
var Döner_Trainer;
(function (Döner_Trainer) {
    // enum ACTION {
    //     INLINE,
    //     WAITING,
    //     LEAVING,
    // }
    class Customer extends Döner_Trainer.Human {
        //mood: string[] = ["happy", "angry"];
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
            // switch () {
            //     case ACTION.INLINE:
            //     case ACTION.WAITING:
            //     case ACTION.LEAVING:
            // }
        }
        feel(_mood) {
            if (_mood == "happy") {
                Döner_Trainer.crc2.save();
                Döner_Trainer.crc2.translate(this.position.x, this.position.y);
            }
            if (_mood == "angry") {
                Döner_Trainer.crc2.save();
                Döner_Trainer.crc2.translate(this.position.x, this.position.y);
            }
        }
        draw() {
            Döner_Trainer.crc2.save();
            Döner_Trainer.crc2.resetTransform();
            Döner_Trainer.crc2.translate(this.position.x, this.position.y);
            Döner_Trainer.crc2.beginPath();
            Döner_Trainer.crc2.arc(0, 0, 20, 0, 2 * Math.PI);
            Döner_Trainer.crc2.fillStyle = "#75b8d1";
            Döner_Trainer.crc2.fill();
            Döner_Trainer.crc2.closePath();
            Döner_Trainer.crc2.restore();
        }
    }
    Döner_Trainer.Customer = Customer;
})(Döner_Trainer || (Döner_Trainer = {}));
//# sourceMappingURL=customer.js.map