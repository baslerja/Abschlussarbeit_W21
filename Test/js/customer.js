"use strict";
var Döner_Trainer;
(function (Döner_Trainer) {
    class Customer extends Döner_Trainer.Human {
        constructor(_position, _x, _y) {
            super(_position);
            this.position = new Döner_Trainer.Vector(_x, _y);
            this.velocity = new Döner_Trainer.Vector(0, 0);
            this.velocity.set(100, 0);
            this.myOrder = this.showOrder();
        }
        move(_timeslice) {
            let offset = new Döner_Trainer.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 520) {
                this.position.x += 10;
                this.velocity.set(10, 0);
                this.velocity.scale(5);
            }
            if (this.position.x > 780) {
                this.position.x -= 10;
                this.velocity.set(-10, 0);
                this.velocity.scale(5);
            }
            if (this.position.y < 20) {
                this.position.y += 10;
                this.velocity.set(10, 0);
                this.velocity.scale(5);
            }
            if (this.position.y > 580) {
                this.position.y -= 10;
                this.velocity.set(-10, 0);
                this.velocity.scale(5);
            }
        }
        feel(_mood) {
            if (_mood == "happy") {
                Döner_Trainer.crc2.save();
                Döner_Trainer.crc2.translate(this.position.x, this.position.y);
                Döner_Trainer.crc2.beginPath();
                Döner_Trainer.crc2.arc(-5, -5, 3, 0, 2 * Math.PI);
                Döner_Trainer.crc2.arc(5, -5, 3, 0, 2 * Math.PI);
                Döner_Trainer.crc2.fillStyle = "black";
                Döner_Trainer.crc2.fill();
                Döner_Trainer.crc2.closePath();
                Döner_Trainer.crc2.beginPath();
                Döner_Trainer.crc2.strokeStyle = "black";
                Döner_Trainer.crc2.lineWidth = 3;
                Döner_Trainer.crc2.arc(0, 3, 8, 0, 1 * Math.PI);
                Döner_Trainer.crc2.stroke();
                Döner_Trainer.crc2.closePath();
                Döner_Trainer.crc2.restore();
            }
            if (_mood == "angry") {
                Döner_Trainer.crc2.save();
                Döner_Trainer.crc2.translate(this.position.x, this.position.y);
                Döner_Trainer.crc2.beginPath();
                Döner_Trainer.crc2.strokeStyle = "black";
                Döner_Trainer.crc2.lineWidth = 3;
                Döner_Trainer.crc2.arc(0, 10, 8, 0, 1 * Math.PI, true);
                Döner_Trainer.crc2.stroke();
                Döner_Trainer.crc2.closePath();
                Döner_Trainer.crc2.restore();
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
            Döner_Trainer.crc2.beginPath();
            Döner_Trainer.crc2.arc(-5, -5, 3, 0, 2 * Math.PI);
            Döner_Trainer.crc2.arc(5, -5, 3, 0, 2 * Math.PI);
            Döner_Trainer.crc2.fillStyle = "black";
            Döner_Trainer.crc2.fill();
            Döner_Trainer.crc2.closePath();
            Döner_Trainer.crc2.restore();
        }
        showOrder() {
            let guestOrder = {
                bread: 1,
                tomato: Döner_Trainer.randomOrder(),
                lettuce: Döner_Trainer.randomOrder(),
                onion: Döner_Trainer.randomOrder(),
                meat: Döner_Trainer.randomOrder(),
            };
            return guestOrder;
        }
    }
    Döner_Trainer.Customer = Customer;
})(Döner_Trainer || (Döner_Trainer = {}));
//# sourceMappingURL=customer.js.map