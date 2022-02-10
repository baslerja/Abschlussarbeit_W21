"use strict";
var Döner_Trainer;
(function (Döner_Trainer) {
    // document.querySelector("#addB")!.addEventListener("click", addBread);
    // document.querySelector("#addT")!.addEventListener("click", addTomato);
    // document.querySelector("#addL")!.addEventListener("click", addLettuce);
    // document.querySelector("#addO")!.addEventListener("click", addOnion);
    // document.querySelector("#addM")!.addEventListener("click", addMeat);
    function addBread() {
        console.log("bread was clicked");
        Döner_Trainer.currentOrder.bread++;
        Döner_Trainer.counterLeft.bread -= 10;
        let meter = document.querySelector('#meterB');
        meter.setAttribute("value", Döner_Trainer.counterLeft.bread / 100);
        /*  console.log("bread was added");
         console.log("current order is: ");
         console.log(currentOrder) */ ;
        if (Döner_Trainer.counterLeft.bread <= 0) {
            alert("refill bread!");
        }
    }
    Döner_Trainer.addBread = addBread;
    function addTomato() {
        Döner_Trainer.currentOrder.tomato++;
        Döner_Trainer.counterLeft.tomato -= 10;
        let meter = document.querySelector('#meterT');
        meter.setAttribute("value", Döner_Trainer.counterLeft.tomato / 100);
        /*   console.log("tomato was added");
          console.log("current order is: ");
          console.log(currentOrder); */
        if (Döner_Trainer.counterLeft.tomato <= 0) {
            alert("refill tomatos!");
        }
    }
    Döner_Trainer.addTomato = addTomato;
    function addLettuce() {
        Döner_Trainer.currentOrder.lettuce++;
        Döner_Trainer.counterLeft.lettuce -= 10;
        let meter = document.querySelector('#meterL');
        meter.setAttribute("value", Döner_Trainer.counterLeft.lettuce / 100);
        /*  console.log("lettuce was added");
         console.log("current order is: ");
         console.log(currentOrder); */
        if (Döner_Trainer.counterLeft.lettuce <= 0) {
            alert("refill lettuce!");
        }
    }
    Döner_Trainer.addLettuce = addLettuce;
    function addOnion() {
        Döner_Trainer.currentOrder.onion++;
        Döner_Trainer.counterLeft.onion -= 10;
        let meter = document.querySelector('#meterO');
        meter.setAttribute("value", Döner_Trainer.counterLeft.onion / 100);
        /*  console.log("onion was added");
         console.log("current order is: ");
         console.log(currentOrder); */
        if (Döner_Trainer.counterLeft.onion <= 0) {
            alert("refill onion!");
        }
    }
    Döner_Trainer.addOnion = addOnion;
    function addMeat() {
        Döner_Trainer.currentOrder.meat++;
        Döner_Trainer.counterLeft.meat -= 10;
        let meter = document.querySelector('#meterM');
        meter.setAttribute("value", Döner_Trainer.counterLeft.meat / 100);
        /*   console.log("meat was added");
          console.log("current order is: ");
          console.log(currentOrder); */
        if (Döner_Trainer.counterLeft.meat <= 0) {
            alert("refill meat!");
        }
    }
    Döner_Trainer.addMeat = addMeat;
})(Döner_Trainer || (Döner_Trainer = {}));
//# sourceMappingURL=ingredient.js.map