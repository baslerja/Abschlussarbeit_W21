namespace Döner_Trainer {

    // enum ACTION {
    //     INLINE,
    //     WAITING,
    //     LEAVING,
    // }

    export class Customer extends Human {

        //mood: string[] = ["happy", "angry"];

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

            // switch () {
            //     case ACTION.INLINE:

            //     case ACTION.WAITING:

            //     case ACTION.LEAVING:
            // }
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
            crc2.restore();
        }
    }

}