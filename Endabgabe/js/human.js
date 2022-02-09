"use strict";
var Döner_Trainer;
(function (Döner_Trainer) {
    class Human {
        position;
        velocity;
        mood;
        constructor(_position) {
            console.log("Human constructor");
        }
        move(_timeslice) {
            console.log("Human move");
        }
        draw() {
            console.log("Human draw");
        }
        feel(_mood) {
        }
    }
    Döner_Trainer.Human = Human;
})(Döner_Trainer || (Döner_Trainer = {}));
//# sourceMappingURL=human.js.map