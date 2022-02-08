namespace Döner_Trainer {

    // enum ACTION {
    //     INLINE,
    //     WAITING,
    //     LEAVING,
    // }

    export class Customer extends Human {

        //mood: string[] = ["happy", "angry"];

        constructor(_position: Vector, _x: number, _y: number) {
            super(_position);

            this.position = new Vector(_x, _y);
        }

        move(_timeslice: number): void {

            // switch () {
            //     case ACTION.INLINE:

            //     case ACTION.WAITING:

            //     case ACTION.LEAVING:
            // }
        }

        draw(): void {

            crc2.save();
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