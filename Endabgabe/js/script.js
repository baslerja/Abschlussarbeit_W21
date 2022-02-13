"use strict";
/*
Endabgabe Döner-Trainer
Name: Jasmin Basler
Matrikel: 265114
Datum:
Quellen: Zusammenarbeit mit Fiona Virnich
*/
var Döner_Trainer;
(function (Döner_Trainer) {
    window.addEventListener("load", handleLoad);
    Döner_Trainer.storageLeft = {
        bread: 1000,
        tomato: 1000,
        lettuce: 1000,
        onion: 1000,
        meat: 1000,
    };
    Döner_Trainer.counterLeft = {
        bread: 80,
        tomato: 80,
        lettuce: 80,
        onion: 80,
        meat: 80,
    };
    Döner_Trainer.currentOrder = {
        bread: 0,
        tomato: 0,
        lettuce: 0,
        onion: 0,
        meat: 0,
    };
    let info = document.querySelector("#info");
    let imageData;
    let workers = [];
    let customers = [];
    let orders = [];
    let ordersMade = [];
    let displayOrders = [];
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        Döner_Trainer.crc2 = canvas.getContext("2d");
        let startBtn = document.querySelector("#startBtn");
        startBtn.addEventListener("click", startGame);
        drawBackground();
        drawWarehouse();
        drawContainer();
        drawCashRegister();
        imageData = Döner_Trainer.crc2.getImageData(0, 0, Döner_Trainer.crc2.canvas.width, Döner_Trainer.crc2.canvas.height);
        window.setInterval(update, 20);
    }
    function startGame() {
        console.log("start Game");
        document.querySelector("#addB").addEventListener("click", Döner_Trainer.addBread);
        document.querySelector("#addT").addEventListener("click", Döner_Trainer.addTomato);
        document.querySelector("#addL").addEventListener("click", Döner_Trainer.addLettuce);
        document.querySelector("#addO").addEventListener("click", Döner_Trainer.addOnion);
        document.querySelector("#addM").addEventListener("click", Döner_Trainer.addMeat);
        document.querySelector("#refillBread").addEventListener("click", Döner_Trainer.refillBread);
        document.querySelector("#refillTomato").addEventListener("click", Döner_Trainer.refillTomato);
        document.querySelector("#refillLettuce").addEventListener("click", Döner_Trainer.refillLettuce);
        document.querySelector("#refillOnion").addEventListener("click", Döner_Trainer.refillOnion);
        document.querySelector("#refillMeat").addEventListener("click", Döner_Trainer.refillMeat);
        let buyBtn = document.querySelector("#buyIngredients");
        buyBtn.addEventListener("click", Döner_Trainer.buyIngredients);
        let payBtn = document.querySelector("#pay");
        payBtn.addEventListener("click", cashUpOrder);
        workers = [];
        customers = [];
        orders = [];
        ordersMade = [];
        const form = document.querySelector('form');
        const data = new FormData(form);
        const amountStock = data.get('warehouse');
        let stock = parseInt(amountStock + Math.floor); //string in number parsen
        Döner_Trainer.storageLeft.bread = Döner_Trainer.storageLeft.tomato = Döner_Trainer.storageLeft.lettuce = Döner_Trainer.storageLeft.onion = Döner_Trainer.storageLeft.meat = stock;
        let meterB = document.querySelector('#stockMeterB');
        meterB.setAttribute("value", stock / 100);
        Döner_Trainer.storageLeft.bread = 10 * stock;
        let meterT = document.querySelector('#stockMeterT');
        meterT.setAttribute("value", stock / 100);
        Döner_Trainer.storageLeft.tomato = 10 * stock;
        let meterL = document.querySelector('#stockMeterL');
        meterL.setAttribute("value", stock / 100);
        Döner_Trainer.storageLeft.lettuce = 10 * stock;
        let meterO = document.querySelector('#stockMeterO');
        meterO.setAttribute("value", stock / 100);
        Döner_Trainer.storageLeft.onion = 10 * stock;
        let meterM = document.querySelector('#stockMeterM');
        meterM.setAttribute("value", stock / 100);
        Döner_Trainer.storageLeft.meat = 10 * stock;
        //const stressLevel = data.get('stressLevel') as string;
        // console.log("Stresslevel Worker: " + stressLevel);
        createWorker(data);
        buildCustomer(data);
        setTimeout(function () {
            alert("Game Over!" + " Reload page to start a new game.");
        }, 90000); //wait 90 seconds
    }
    Döner_Trainer.startGame = startGame;
    function update() {
        Döner_Trainer.crc2.putImageData(imageData, 1, 1);
        for (let worker of workers) {
            worker.move(1 / 50);
            worker.draw();
            worker.feel("sleepy");
        }
        for (let customer of customers) {
            customer.move(1 / 50);
            customer.draw();
            customer.feel("happy");
        }
    }
    function createWorker(data) {
        // const form = document.querySelector('form')!;
        // const data = new FormData(form);
        const amountStaff = data.get('amountStaff'); //form Data anzahl worker als string holen
        let staff = parseInt(amountStaff);
        for (let i = 0; i < staff; i++) {
            let randomX = Math.random() * (350 - 150) + 150;
            let randomY = Math.random() * (550 - 50) + 50;
            let worker = new Döner_Trainer.Worker(1, randomX, randomY);
            //worker.feel("sleepy");
            worker.move(1 / 50);
            worker.draw();
            workers.push(worker);
        }
    }
    async function buildCustomer(data) {
        const amountCustomer = data.get('amountCustomer'); //form Data anzahl worker als string holen
        let amountC = parseInt(amountCustomer);
        for (let index = 0; index < amountC; index++) { //solange index kleiner als anzahl costumer ist soll ein neuer costumer erstellt werden
            await new Promise(f => setTimeout(f, 6000 /* / amountC */)); // Math.floor(Math.random() * (60000 - 1000 + 1)) + 1000  
            createCustomer(data);
        }
    }
    function createCustomer(data) {
        const amountCustomer = data.get('amountCustomers'); //form Data anzahl worker als string holen
        let amountC = parseInt(amountCustomer);
        for (let i = 0; i < amountC; i++) {
            let randomX = Math.random() * (750 - 550) + 550;
            let randomY = Math.random() * (550 - 50) + 50;
            let customer = new Döner_Trainer.Customer(1, randomX, randomY);
            orders.push(customer.myOrder);
            customer.move(1 / 50);
            //customer.feel("happy");
            customer.draw();
            customers.push(customer);
            console.log(" Order of Customer: ");
            console.log(customer.myOrder);
            // info.innerHTML = " ";
            let firstOrder = "Ich hätte gerne einen Döner mit " + customer.myOrder.tomato + " Tomaten, " + customer.myOrder.lettuce + " mal Kraut, " + customer.myOrder.onion + " Zwiebeln und " + customer.myOrder.meat + " Fleisch." + "<br> ";
            displayOrders.push(firstOrder);
            info.innerHTML = displayOrders;
        }
    }
    function cashUpOrder() {
        ordersMade.push(Döner_Trainer.currentOrder);
        console.log(Döner_Trainer.currentOrder);
        console.log(ordersMade[0]);
        if (ordersMade[0].bread == orders[0].bread && ordersMade[0].lettuce == orders[0].lettuce && ordersMade[0].meat == orders[0].meat
            && ordersMade[0].onion == orders[0].onion && ordersMade[0].tomato == orders[0].tomato) {
            // if (currentOrder == orders[0]) {
            // debugger;
            customers[0].feel("happy");
            console.log("order was right");
            console.log("länge davor: " + customers.length + " " + ordersMade.length + " " + orders.length);
            ordersMade.shift();
            orders.shift();
            displayOrders.shift();
            setTimeout(function () {
                customers.shift();
                console.log("Thank you! Bye.");
            }, 3000);
            info.innerHTML = "";
            info.innerHTML += displayOrders;
            console.log("länge danach: " + customers.length + " " + ordersMade.length + " " + orders.length);
            Döner_Trainer.currentOrder.bread = 0;
            Döner_Trainer.currentOrder.tomato = 0;
            Döner_Trainer.currentOrder.lettuce = 0;
            Döner_Trainer.currentOrder.onion = 0;
            Döner_Trainer.currentOrder.meat = 0;
        }
        else {
            // debugger;
            customers[0].draw();
            //customers[0].feel(moodCustomer[1]);
            console.log("order was wrong");
            console.log(ordersMade[0]);
            console.log("länge davor: " + customers.length + " " + ordersMade.length + " " + orders.length);
            ordersMade.shift();
            orders.shift();
            displayOrders.shift();
            setTimeout(function () {
                customers.shift();
                console.log("That was not what I've ordered! I'm leaving.");
            }, 3000);
            // let info: any = document.querySelector("#info");
            info.innerHTML = "";
            info.innerHTML += displayOrders;
            console.log("länge danach: " + customers.length + " " + ordersMade.length + " " + orders.length);
            Döner_Trainer.currentOrder.bread = 0;
            Döner_Trainer.currentOrder.tomato = 0;
            Döner_Trainer.currentOrder.lettuce = 0;
            Döner_Trainer.currentOrder.onion = 0;
            Döner_Trainer.currentOrder.meat = 0;
        }
    }
    function drawBackground() {
        //console.log("background");
        //Floor
        let crc2Pattern;
        let canvasPattern = document.createElement("canvas");
        if (!canvasPattern)
            return;
        crc2Pattern = canvasPattern.getContext("2d");
        canvasPattern.width = 50;
        canvasPattern.height = 50;
        crc2Pattern.fillStyle = "#dedede";
        crc2Pattern.strokeStyle = "#c2c2c2";
        crc2Pattern.fillRect(0, 0, canvasPattern.width, canvasPattern.height);
        crc2Pattern.rect(0, 0, 50, 50);
        crc2Pattern.stroke();
        let pattern = Döner_Trainer.crc2.createPattern(canvasPattern, "repeat");
        Döner_Trainer.crc2.fillStyle = pattern;
        Döner_Trainer.crc2.fillRect(0, 0, 800, 600);
        //Counter 1
        Döner_Trainer.crc2.save();
        Döner_Trainer.crc2.beginPath();
        Döner_Trainer.crc2.rect(0, 0, 100, 600);
        Döner_Trainer.crc2.fillStyle = "#bf842c";
        Döner_Trainer.crc2.fill();
        Döner_Trainer.crc2.closePath();
        //Counter 2
        Döner_Trainer.crc2.beginPath();
        Döner_Trainer.crc2.rect(400, 150, 100, 450);
        Döner_Trainer.crc2.fillStyle = "#bf842c";
        Döner_Trainer.crc2.fill();
        Döner_Trainer.crc2.closePath();
        //Tür
        Döner_Trainer.crc2.beginPath();
        Döner_Trainer.crc2.moveTo(800, 200);
        Döner_Trainer.crc2.lineTo(750, 100);
        Döner_Trainer.crc2.strokeStyle = "black";
        Döner_Trainer.crc2.lineWidth = 3;
        Döner_Trainer.crc2.stroke();
        Döner_Trainer.crc2.beginPath();
        Döner_Trainer.crc2.moveTo(800, 200);
        Döner_Trainer.crc2.lineTo(800, 400);
        Döner_Trainer.crc2.strokeStyle = "black";
        Döner_Trainer.crc2.lineWidth = 3;
        Döner_Trainer.crc2.stroke();
        Döner_Trainer.crc2.beginPath();
        Döner_Trainer.crc2.moveTo(800, 400);
        Döner_Trainer.crc2.lineTo(750, 500);
        Döner_Trainer.crc2.strokeStyle = "black";
        Döner_Trainer.crc2.lineWidth = 3;
        Döner_Trainer.crc2.stroke();
        Döner_Trainer.crc2.restore();
    }
    function drawWarehouse() {
        Döner_Trainer.crc2.save();
        Döner_Trainer.crc2.beginPath();
        Döner_Trainer.crc2.rect(20, 50, 60, 60);
        Döner_Trainer.crc2.stroke();
        Döner_Trainer.crc2.lineWidth = 3;
        Döner_Trainer.crc2.fillStyle = "brown";
        Döner_Trainer.crc2.fill();
        Döner_Trainer.crc2.closePath();
        Döner_Trainer.crc2.beginPath();
        Döner_Trainer.crc2.rect(20, 130, 60, 60);
        Döner_Trainer.crc2.stroke();
        Döner_Trainer.crc2.lineWidth = 3;
        Döner_Trainer.crc2.fillStyle = "red";
        Döner_Trainer.crc2.fill();
        Döner_Trainer.crc2.closePath();
        Döner_Trainer.crc2.beginPath();
        Döner_Trainer.crc2.rect(20, 210, 60, 60);
        Döner_Trainer.crc2.stroke();
        Döner_Trainer.crc2.lineWidth = 3;
        Döner_Trainer.crc2.fillStyle = "green";
        Döner_Trainer.crc2.fill();
        Döner_Trainer.crc2.closePath();
        Döner_Trainer.crc2.beginPath();
        Döner_Trainer.crc2.rect(20, 290, 60, 60);
        Döner_Trainer.crc2.stroke();
        Döner_Trainer.crc2.lineWidth = 3;
        Döner_Trainer.crc2.fillStyle = "purple";
        Döner_Trainer.crc2.fill();
        Döner_Trainer.crc2.closePath();
        Döner_Trainer.crc2.beginPath();
        Döner_Trainer.crc2.rect(20, 370, 60, 60);
        Döner_Trainer.crc2.stroke();
        Döner_Trainer.crc2.lineWidth = 3;
        Döner_Trainer.crc2.fillStyle = "pink";
        Döner_Trainer.crc2.fill();
        Döner_Trainer.crc2.closePath();
        Döner_Trainer.crc2.restore();
    }
    function drawContainer() {
        Döner_Trainer.crc2.save();
        Döner_Trainer.crc2.beginPath();
        Döner_Trainer.crc2.rect(420, 170, 60, 60);
        Döner_Trainer.crc2.stroke();
        Döner_Trainer.crc2.lineWidth = 3;
        Döner_Trainer.crc2.fillStyle = "brown";
        Döner_Trainer.crc2.fill();
        Döner_Trainer.crc2.closePath();
        Döner_Trainer.crc2.beginPath();
        Döner_Trainer.crc2.rect(420, 250, 60, 60);
        Döner_Trainer.crc2.stroke();
        Döner_Trainer.crc2.lineWidth = 3;
        Döner_Trainer.crc2.fillStyle = "red";
        Döner_Trainer.crc2.fill();
        Döner_Trainer.crc2.closePath();
        Döner_Trainer.crc2.beginPath();
        Döner_Trainer.crc2.rect(420, 330, 60, 60);
        Döner_Trainer.crc2.stroke();
        Döner_Trainer.crc2.lineWidth = 3;
        Döner_Trainer.crc2.fillStyle = "green";
        Döner_Trainer.crc2.fill();
        Döner_Trainer.crc2.closePath();
        Döner_Trainer.crc2.beginPath();
        Döner_Trainer.crc2.rect(420, 410, 60, 60);
        Döner_Trainer.crc2.stroke();
        Döner_Trainer.crc2.lineWidth = 3;
        Döner_Trainer.crc2.fillStyle = "purple";
        Döner_Trainer.crc2.fill();
        Döner_Trainer.crc2.closePath();
        Döner_Trainer.crc2.beginPath();
        Döner_Trainer.crc2.rect(420, 490, 60, 60);
        Döner_Trainer.crc2.stroke();
        Döner_Trainer.crc2.lineWidth = 3;
        Döner_Trainer.crc2.fillStyle = "pink";
        Döner_Trainer.crc2.fill();
        Döner_Trainer.crc2.closePath();
        Döner_Trainer.crc2.restore();
    }
    function drawCashRegister() {
        //console.log("cash");
        Döner_Trainer.crc2.save();
        Döner_Trainer.crc2.beginPath();
        Döner_Trainer.crc2.rect(400, 0, 100, 150);
        Döner_Trainer.crc2.fillStyle = "brown";
        Döner_Trainer.crc2.fill();
        Döner_Trainer.crc2.closePath();
        Döner_Trainer.crc2.restore();
    }
})(Döner_Trainer || (Döner_Trainer = {}));
//# sourceMappingURL=script.js.map