namespace Döner_Trainer {

    export function addBread(): any {
        console.log("bread was clicked");
        currentOrder.bread++;
        counterLeft.bread -= 10;
        let meter: any = document.querySelector('#meterB')
        meter.setAttribute("value", counterLeft.bread / 100);
       /*  console.log("bread was added");
        console.log("current order is: ");
        console.log(currentOrder) */;

        if (counterLeft.bread <= 0) {
            alert("refill bread!")
        }
    }

    export function addTomato(): any {
        currentOrder.tomato++;
        counterLeft.tomato -= 10;
        let meter: any = document.querySelector('#meterT')
        meter.setAttribute("value", counterLeft.tomato / 100);
        /*   console.log("tomato was added");
          console.log("current order is: ");
          console.log(currentOrder); */

        if (counterLeft.tomato <= 0) {
            alert("refill tomatos!")
        }
    }

    export function addLettuce(): any {
        currentOrder.lettuce++;
        counterLeft.lettuce -= 10;
        let meter: any = document.querySelector('#meterL')
        meter.setAttribute("value", counterLeft.lettuce / 100);
        /*  console.log("lettuce was added");
         console.log("current order is: ");
         console.log(currentOrder); */

        if (counterLeft.lettuce <= 0) {
            alert("refill lettuce!")
        }
    }

    export function addOnion(): any {
        currentOrder.onion++;
        counterLeft.onion -= 10;
        let meter: any = document.querySelector('#meterO')
        meter.setAttribute("value", counterLeft.onion / 100);
        /*  console.log("onion was added");
         console.log("current order is: ");
         console.log(currentOrder); */

        if (counterLeft.onion <= 0) {
            alert("refill onion!")
        }
    }

    export function addMeat(): any {
        currentOrder.meat++;
        counterLeft.meat -= 10;
        let meter: any = document.querySelector('#meterM')
        meter.setAttribute("value", counterLeft.meat / 100);
        /*   console.log("meat was added");
          console.log("current order is: ");
          console.log(currentOrder); */

        if (counterLeft.meat <= 0) {
            alert("refill meat!")
        }
    }
}