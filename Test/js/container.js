"use strict";
var Döner_Trainer;
(function (Döner_Trainer) {
    function buyIngredients() {
        console.log("buy ingredients");
        let stockMeterB = document.querySelector('#stockMeterB').getAttribute("value");
        let amountMissingBread = 1000 - stockMeterB * 1000;
        Döner_Trainer.storageLeft.bread += amountMissingBread;
        let b = document.querySelector('#stockMeterB');
        b.setAttribute("value", 1);
        let stockMeterT = document.querySelector('#stockMeterT').getAttribute("value");
        let amountMissingTomato = 1000 - stockMeterT * 1000;
        Döner_Trainer.storageLeft.tomato += amountMissingTomato;
        let t = document.querySelector('#stockMeterT');
        t.setAttribute("value", 1);
        let stockMeterL = document.querySelector('#stockMeterL').getAttribute("value");
        let amountMissingLettuce = 1000 - stockMeterL * 1000;
        Döner_Trainer.storageLeft.lettuce += amountMissingLettuce;
        let l = document.querySelector('#stockMeterL');
        l.setAttribute("value", 1);
        let stockMeterO = document.querySelector('#stockMeterO').getAttribute("value");
        let amountMissingOnion = 1000 - stockMeterO * 1000;
        Döner_Trainer.storageLeft.onion += amountMissingOnion;
        let o = document.querySelector('#stockMeterO');
        o.setAttribute("value", 1);
        let stockMeterM = document.querySelector('#stockMeterM').getAttribute("value");
        let amountMissingMeat = 1000 - stockMeterM * 1000;
        Döner_Trainer.storageLeft.meat += amountMissingMeat;
        let m = document.querySelector('#stockMeterM');
        m.setAttribute("value", 1);
    }
    Döner_Trainer.buyIngredients = buyIngredients;
    function refillBread() {
        console.log("worker is going to refill bread");
        //workers[0].move(3)      // walk to bread stock
        let meterB = document.querySelector('#meterB').getAttribute("value");
        let amountMissing = 100 - meterB * 100;
        //console.log("missing: " + amountMissing) 
        // console.log("before Storage " + storageLeft.bread)
        Döner_Trainer.storageLeft.bread -= amountMissing;
        // console.log("after Storage " + storageLeft.bread) 
        let meterStockB = document.querySelector('#stockMeterB');
        meterStockB.setAttribute("value", Döner_Trainer.storageLeft.bread / 1000);
        // console.log("rechnung Storage /1000 " + storageLeft.bread /1000) 
        // if workers position is in front of container:
        setTimeout(bringBread, 5000);
    }
    Döner_Trainer.refillBread = refillBread;
    function bringBread() {
        console.log("worker is bringing bread to counter");
        //workers[0].move(3)      // walk back to bread counter
        //workers[0].draw          // draw extra refillcontainer at worker
        Döner_Trainer.counterLeft.bread = 100;
        let meterB = document.querySelector('#meterB');
        meterB.setAttribute("value", 1);
    }
    function refillTomato() {
        console.log("worker is going to refill tomato");
        //workers[0].move(3)      // walk to bread stock
        let meterT = document.querySelector('#meterT').getAttribute("value");
        let amountMissing = 100 - meterT * 100;
        //console.log("missing: " + amountMissing) 
        // console.log("before Storage " + storageLeft.bread)
        Döner_Trainer.storageLeft.tomato -= amountMissing;
        // console.log("after Storage " + storageLeft.bread) 
        let meterStockT = document.querySelector('#stockMeterT');
        meterStockT.setAttribute("value", Döner_Trainer.storageLeft.tomato / 1000);
        // console.log("rechnung Storage /1000 " + storageLeft.bread /1000) 
        // if workers position is in front of container:
        setTimeout(bringTomato, 5000);
    }
    Döner_Trainer.refillTomato = refillTomato;
    function bringTomato() {
        console.log("worker is bringing tomato to counter");
        //workers[0].move(3)      // walk back to bread counter
        //workers[0].draw          // draw extra refillcontainer at worker
        Döner_Trainer.counterLeft.tomato = 100;
        let meterT = document.querySelector('#meterT');
        meterT.setAttribute("value", 1);
    }
    function refillLettuce() {
        console.log("worker is going to refill lettuce");
        //workers[0].move(3)      // walk to bread stock
        let meterL = document.querySelector('#meterL').getAttribute("value");
        let amountMissing = 100 - meterL * 100;
        console.log("missing: " + amountMissing);
        console.log("before Storage " + Döner_Trainer.storageLeft.lettuce);
        Döner_Trainer.storageLeft.lettuce -= amountMissing;
        console.log("after Storage " + Döner_Trainer.storageLeft.lettuce);
        let meterStockL = document.querySelector('#stockMeterL');
        meterStockL.setAttribute("value", Döner_Trainer.storageLeft.lettuce / 1000);
        console.log("rechnung Storage /1000 " + Döner_Trainer.storageLeft.lettuce / 1000);
        // if workers position is in front of container:
        setTimeout(bringLettuce, 5000);
    }
    Döner_Trainer.refillLettuce = refillLettuce;
    function bringLettuce() {
        console.log("worker is bringing lettuce to counter");
        //workers[0].move(3)      // walk back to bread counter
        //workers[0].draw          // draw extra refillcontainer at worker
        Döner_Trainer.counterLeft.lettuce = 100;
        let meterL = document.querySelector('#meterL');
        meterL.setAttribute("value", 1);
    }
    function refillOnion() {
        console.log("worker is going to refill bread");
        //workers[0].move(3)      // walk to bread stock
        let meterO = document.querySelector('#meterO').getAttribute("value");
        let amountMissing = 100 - meterO * 100;
        //console.log("missing: " + amountMissing) 
        // console.log("before Storage " + storageLeft.bread)
        Döner_Trainer.storageLeft.onion -= amountMissing;
        // console.log("after Storage " + storageLeft.bread) 
        let meterStockO = document.querySelector('#stockMeterO');
        meterStockO.setAttribute("value", Döner_Trainer.storageLeft.onion / 1000);
        // console.log("rechnung Storage /1000 " + storageLeft.bread /1000) 
        // if workers position is in front of container:
        setTimeout(bringOnion, 5000);
    }
    Döner_Trainer.refillOnion = refillOnion;
    function bringOnion() {
        console.log("worker is bringing onion to counter");
        //workers[0].move(3)      // walk back to bread counter
        //workers[0].draw          // draw extra refillcontainer at worker
        Döner_Trainer.counterLeft.onion = 100;
        let meterO = document.querySelector('#meterO');
        meterO.setAttribute("value", 1);
    }
    function refillMeat() {
        console.log("worker is going to refill meat");
        //workers[0].move(3)      // walk to bread stock
        let meterM = document.querySelector('#meterM').getAttribute("value");
        let amountMissing = 100 - meterM * 100;
        //console.log("missing: " + amountMissing) 
        // console.log("before Storage " + storageLeft.bread)
        Döner_Trainer.storageLeft.meat -= amountMissing;
        // console.log("after Storage " + storageLeft.bread) 
        let meterStockM = document.querySelector('#stockMeterM');
        meterStockM.setAttribute("value", Döner_Trainer.storageLeft.meat / 1000);
        // console.log("rechnung Storage /1000 " + storageLeft.bread /1000) 
        // if workers position is in front of container:
        setTimeout(bringMeat, 5000);
    }
    Döner_Trainer.refillMeat = refillMeat;
    function bringMeat() {
        console.log("worker is bringing meat to counter");
        //workers[0].move(3)      // walk back to bread counter
        //workers[0].draw          // draw extra refillcontainer at worker
        Döner_Trainer.counterLeft.meat = 100;
        let meterM = document.querySelector('#meterM');
        meterM.setAttribute("value", 1);
        console.log(Döner_Trainer.storageLeft.meat);
    }
})(Döner_Trainer || (Döner_Trainer = {}));
//# sourceMappingURL=container.js.map