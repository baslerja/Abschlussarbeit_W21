namespace Döner_Trainer {

    // enum TASK {
    //     COOK,
    //     RESTOCKING,
    //     WAITING,
    // }

    export class Worker extends Human {

        //mood: string[] = ["bored", "stressed", "sleeping"];

        constructor(_position: Vector, _x: number, _y: number) {
            super(_position);

            this.position = new Vector(_x, _y);
        }

        move(_timeslice: number): void {
            let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);

            // switch () {
            //     case TASK.COOK:

            //     case TASK.RESTOCKING:

            //     case TASK.WAITING:
            // }

        }

        draw(): void {

            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.beginPath();
            crc2.arc(0, 0, 20, 0, 2 * Math.PI);
            crc2.fillStyle = "#d18075";
            crc2.fill();
            crc2.closePath();
            crc2.restore();
        }
    }

}