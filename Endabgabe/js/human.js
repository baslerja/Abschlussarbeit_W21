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
        feel(_mood) {
            console.log("Human feel");
        }
        draw() {
            console.log("Human draw");
        }
    }
    Döner_Trainer.Human = Human;
})(Döner_Trainer || (Döner_Trainer = {}));
//# sourceMappingURL=human.js.map