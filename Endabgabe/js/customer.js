"use strict";
var Döner_Trainer;
(function (Döner_Trainer) {
    class Customer extends Döner_Trainer.Human {
        myOrder;
        constructor(_position, _x, _y) {
            super(_position);
            this.position = new Döner_Trainer.Vector(_x, _y);
            this.velocity = new Döner_Trainer.Vector(0, 0);
            // this.velocity.set();
            this.myOrder = order();
        }
        move(_timeslice) {
            let offset = new Döner_Trainer.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
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
        orderFood() {
            //Zeichne Sprechblase mit Zutaten
            switch (this.myOrder) {
                case "bread":
                case "tomato":
                case "lettuce":
                case "onion":
                case "meat":
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
    }
    Döner_Trainer.Customer = Customer;
    function order() {
        let guestOrder = {
            bread: 1,
            tomato: randomOrder(),
            lettuce: randomOrder(),
            onion: randomOrder(),
            meat: randomOrder(),
        };
        return guestOrder;
    }
    function randomOrder() {
        let random = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
        return random;
    }
})(Döner_Trainer || (Döner_Trainer = {}));
//# sourceMappingURL=customer.js.map