namespace Döner_Trainer {

    export class Worker extends Human {

        constructor(_position: number, _x: number, _y: number) {
            super(_position);

            this.position = new Vector(_x, _y);
            this.velocity = new Vector(0, 0);
            // this.velocity.set();
        }

        move(_timeslice: number): void {
            let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
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

        feel(_mood: string): void {

            if (_mood == "sleepy") {
                crc2.save();
                crc2.translate(this.position.x, this.position.y);

                crc2.beginPath();
                crc2.moveTo(-10, -5);
                crc2.lineTo(-3, -5);
                crc2.moveTo(3, -5);
                crc2.lineTo(10, -5);
                crc2.lineWidth = 3;
                crc2.strokeStyle = "black";
                crc2.stroke();
                crc2.closePath();

                crc2.beginPath();
                crc2.arc(0, 5, 5, 0, 2 * Math.PI);
                crc2.lineWidth = 2;
                crc2.strokeStyle = "black";
                crc2.stroke();
                crc2.closePath();

                crc2.beginPath();
                crc2.moveTo(35, -10);
                crc2.lineTo(25, -10);
                crc2.lineTo(35, -20);
                crc2.lineTo(25, -20);
                crc2.lineWidth = 2;
                crc2.strokeStyle = "blue";
                crc2.stroke();
                crc2.closePath();

                crc2.restore();
            }

            if (_mood == "stressed") {
                crc2.save();
                crc2.translate(this.position.x, this.position.y);

                crc2.beginPath();
                crc2.arc(-5, -5, 3, 0, 2 * Math.PI);
                crc2.arc(5, -5, 3, 0, 2 * Math.PI);
                crc2.fillStyle = "black";
                crc2.fill();
                crc2.closePath();

                crc2.beginPath();
                crc2.moveTo(-8, 8);
                crc2.lineTo(8, 8);
                crc2.lineWidth = 3;
                crc2.strokeStyle = "black";
                crc2.stroke();
                crc2.closePath();

                crc2.restore();
            }
        }

        draw(): void {

            crc2.save();
            crc2.resetTransform();
            crc2.translate(this.position.x, this.position.y);

            //hat
            crc2.beginPath();
            crc2.arc(-10, -35, 9, 0, 2 * Math.PI);
            crc2.arc(0, -45, 9, 0, 2 * Math.PI);
            crc2.arc(10, -35, 9, 0, 2 * Math.PI);
            crc2.rect(-12, -35, 25, 25);
            crc2.fillStyle = "white";
            crc2.fill();
            crc2.closePath();

            //head
            crc2.beginPath();
            crc2.arc(0, 0, 20, 0, 2 * Math.PI);
            crc2.fillStyle = "#d18075";
            crc2.fill();
            crc2.closePath();

            crc2.restore();
        }
    }

}