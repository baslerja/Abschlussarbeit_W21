"use strict";
var Döner_Trainer;
(function (Döner_Trainer) {
    class Vector {
        x;
        y;
        constructor(_x, _y) {
            this.set(_x, _y);
        }
        set(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        scale(_factor) {
            this.x *= _factor;
            this.y *= _factor;
        }
        add(_addend) {
            this.x += _addend.x;
            this.y += _addend.y;
        }
    }
    Döner_Trainer.Vector = Vector;
})(Döner_Trainer || (Döner_Trainer = {}));
//# sourceMappingURL=vector.js.map