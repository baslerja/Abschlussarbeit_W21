namespace Döner_Trainer {

    export class Customer extends Human {

        myOrder: Storage;

        constructor(_position: number, _x: number, _y: number) {
            super(_position);

            this.position = new Vector(_x, _y);
            this.velocity = new Vector(0, 0);
            // this.velocity.set();
            this.myOrder = order();
        }

        move(_timeslice: number): void {
            let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
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

        feel(_mood: string): void {

            if (_mood == "happy") {
                crc2.save();
                crc2.translate(this.position.x, this.position.y);

            }

            if (_mood == "angry") {
                crc2.save();
                crc2.translate(this.position.x, this.position.y);

            }
        }

        draw(): void {

            crc2.save();
            crc2.resetTransform();
            crc2.translate(this.position.x, this.position.y);
            crc2.beginPath();
            crc2.arc(0, 0, 20, 0, 2 * Math.PI);
            crc2.fillStyle = "#75b8d1";
            crc2.fill();
            crc2.closePath();

            crc2.beginPath();
            crc2.arc(-5, -5, 3, 0, 2 * Math.PI);
            crc2.arc(5, -5, 3, 0, 2 * Math.PI);
            crc2.fillStyle = "black";
            crc2.fill();
            crc2.closePath();

            crc2.restore();
        }
    }

    function order(): Storage {
        let guestOrder: Storage = {
            bread: 1,
            tomato: randomOrder(),
            lettuce: randomOrder(),
            onion: randomOrder(),
            meat: randomOrder(),
        }
        return guestOrder;
    }

    function randomOrder(): number {

        let random = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
        return random;
    }
}

