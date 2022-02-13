namespace Döner_Trainer {
    export class Human {
        position: Vector;
        velocity: Vector;
        mood: string;
        myOrder: Storage;
        
        constructor(_position: number) {
            console.log("Human constructor");
        }

        move(_timeslice: number): void {
            console.log("Human move");
        }

        draw(): void {
            console.log("Human draw");
        }

        feel(_mood: string): void {

        }
    }
}