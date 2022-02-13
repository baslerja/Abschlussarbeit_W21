namespace Döner_Trainer {

    export function buyIngredients(): void {
        console.log("buy ingredients");

        let stockMeterB: any = document.querySelector('#stockMeterB')!.getAttribute("value");
        let amountMissingBread: number = 1000 - stockMeterB * 1000;
        storageLeft.bread += amountMissingBread;
        
        let b: any = document.querySelector('#stockMeterB');
        b.setAttribute("value", 1);

        let stockMeterT: any = document.querySelector('#stockMeterT')!.getAttribute("value");
        let amountMissingTomato: number = 1000 - stockMeterT * 1000;
        storageLeft.tomato += amountMissingTomato;
        
        let t: any = document.querySelector('#stockMeterT');
        t.setAttribute("value", 1);

        let stockMeterL: any = document.querySelector('#stockMeterL')!.getAttribute("value");
        let amountMissingLettuce: number = 1000 - stockMeterL * 1000;
        storageLeft.lettuce += amountMissingLettuce;
        
        let l: any = document.querySelector('#stockMeterL');
        l.setAttribute("value", 1);

        let stockMeterO: any = document.querySelector('#stockMeterO')!.getAttribute("value");
        let amountMissingOnion: number = 1000 - stockMeterO * 1000;
        storageLeft.onion += amountMissingOnion;
        
        let o: any = document.querySelector('#stockMeterO');
        o.setAttribute("value", 1);

        let stockMeterM: any = document.querySelector('#stockMeterM')!.getAttribute("value");
        let amountMissingMeat: number = 1000 - stockMeterM * 1000;
        storageLeft.meat += amountMissingMeat;
        
        let m: any = document.querySelector('#stockMeterM');
        m.setAttribute("value", 1);
    }

    export function refillBread(): void {
        console.log("worker is going to refill bread");

        //workers[0].move(3)      // walk to bread stock
        let meterB: any = document.querySelector('#meterB')!.getAttribute("value");
        let amountMissing: number = 100 - meterB * 100;
        //console.log("missing: " + amountMissing) 
        // console.log("before Storage " + storageLeft.bread)
        storageLeft.bread -= amountMissing;
        // console.log("after Storage " + storageLeft.bread) 
        let meterStockB: any = document.querySelector('#stockMeterB');
        meterStockB.setAttribute("value", storageLeft.bread / 1000);
        // console.log("rechnung Storage /1000 " + storageLeft.bread /1000) 

        // if workers position is in front of container:
        setTimeout(bringBread, 5000);
    }

    function bringBread(): void {
        console.log("worker is bringing bread to counter")
        //workers[0].move(3)      // walk back to bread counter
        //workers[0].draw          // draw extra refillcontainer at worker
        counterLeft.bread = 100;
        let meterB: any = document.querySelector('#meterB')
        meterB.setAttribute("value", 1);
    }

    export function refillTomato(): void {
        console.log("worker is going to refill tomato");

        //workers[0].move(3)      // walk to bread stock
        let meterT: any = document.querySelector('#meterT')!.getAttribute("value");
        let amountMissing: number = 100 - meterT * 100;
        //console.log("missing: " + amountMissing) 
        // console.log("before Storage " + storageLeft.bread)
        storageLeft.tomato -= amountMissing;
        // console.log("after Storage " + storageLeft.bread) 
        let meterStockT: any = document.querySelector('#stockMeterT');
        meterStockT.setAttribute("value", storageLeft.tomato / 1000);
        // console.log("rechnung Storage /1000 " + storageLeft.bread /1000) 

        // if workers position is in front of container:
        setTimeout(bringTomato, 5000);
    }

    function bringTomato(): void {
        console.log("worker is bringing tomato to counter")
        //workers[0].move(3)      // walk back to bread counter
        //workers[0].draw          // draw extra refillcontainer at worker
        counterLeft.tomato = 100;
        let meterT: any = document.querySelector('#meterT')
        meterT.setAttribute("value", 1);

    }

    export function refillLettuce(): void {
        console.log("worker is going to refill lettuce");

        //workers[0].move(3)      // walk to bread stock
        let meterL: any = document.querySelector('#meterL')!.getAttribute("value");
        let amountMissing: number = 100 - meterL * 100;
        console.log("missing: " + amountMissing)
        console.log("before Storage " + storageLeft.lettuce)
        storageLeft.lettuce -= amountMissing;
        console.log("after Storage " + storageLeft.lettuce)
        let meterStockL: any = document.querySelector('#stockMeterL');
        meterStockL.setAttribute("value", storageLeft.lettuce / 1000);
        console.log("rechnung Storage /1000 " + storageLeft.lettuce / 1000)

        // if workers position is in front of container:
        setTimeout(bringLettuce, 5000);
    }

    function bringLettuce(): void {
        console.log("worker is bringing lettuce to counter")
        //workers[0].move(3)      // walk back to bread counter
        //workers[0].draw          // draw extra refillcontainer at worker
        counterLeft.lettuce = 100;
        let meterL: any = document.querySelector('#meterL')
        meterL.setAttribute("value", 1);

    }

    export function refillOnion(): void {
        console.log("worker is going to refill bread");

        //workers[0].move(3)      // walk to bread stock
        let meterO: any = document.querySelector('#meterO')!.getAttribute("value");
        let amountMissing: number = 100 - meterO * 100;
        //console.log("missing: " + amountMissing) 
        // console.log("before Storage " + storageLeft.bread)
        storageLeft.onion -= amountMissing;
        // console.log("after Storage " + storageLeft.bread) 
        let meterStockO: any = document.querySelector('#stockMeterO');
        meterStockO.setAttribute("value", storageLeft.onion / 1000);
        // console.log("rechnung Storage /1000 " + storageLeft.bread /1000) 

        // if workers position is in front of container:
        setTimeout(bringOnion, 5000);
    }

    function bringOnion(): void {
        console.log("worker is bringing onion to counter")
        //workers[0].move(3)      // walk back to bread counter
        //workers[0].draw          // draw extra refillcontainer at worker
        counterLeft.onion = 100;
        let meterO: any = document.querySelector('#meterO')
        meterO.setAttribute("value", 1);
    }

    export function refillMeat(): void {
        console.log("worker is going to refill meat");

        //workers[0].move(3)      // walk to bread stock
        let meterM: any = document.querySelector('#meterM')!.getAttribute("value");
        let amountMissing: number = 100 - meterM * 100;
        //console.log("missing: " + amountMissing) 
        // console.log("before Storage " + storageLeft.bread)
        storageLeft.meat -= amountMissing;
        // console.log("after Storage " + storageLeft.bread) 
        let meterStockM: any = document.querySelector('#stockMeterM');
        meterStockM.setAttribute("value", storageLeft.meat / 1000);
        // console.log("rechnung Storage /1000 " + storageLeft.bread /1000) 

        // if workers position is in front of container:
        setTimeout(bringMeat, 5000);
    }

    function bringMeat(): void {
        console.log("worker is bringing meat to counter")
        //workers[0].move(3)      // walk back to bread counter
        //workers[0].draw          // draw extra refillcontainer at worker
        counterLeft.meat = 100;
        let meterM: any = document.querySelector('#meterM')
        meterM.setAttribute("value", 1);
        console.log(storageLeft.meat);

    }
}