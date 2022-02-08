namespace Döner_Trainer {
    export class Human {
        position: Vector;
        velocity: Vector;
        mood: string;
        
        constructor(_position: Vector) {
            console.log("Human constructor");
        }

        move(_timeslice: number): void {
            console.log("Human move");
        }

        feel(_mood: string): void {
            console.log("Human feel");
        }

        draw(): void {
            console.log("Human draw");
        }
    }
}