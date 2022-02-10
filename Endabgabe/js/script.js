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
    let storageLeft = {
        bread: 1000,
        tomato: 1000,
        lettuce: 1000,
        onion: 1000,
        meat: 1000,
    };
    let counterLeft = {
        bread: 80,
        tomato: 80,
        lettuce: 80,
        onion: 80,
        meat: 80,
    };
    let imgageData;
    let workers = [];
    let customers = [];
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        Döner_Trainer.crc2 = canvas.getContext("2d");
        let startBtn = document.querySelector("#startBtn");
        startBtn.addEventListener("click", startGame);
        let resetBtn = document.querySelector("#resetBtn");
        resetBtn.addEventListener("click", handleLoad);
        let buyBtn = document.querySelector("#buyIngredients");
        buyBtn.addEventListener("click", buyIngredients);
        // let refillBreadBtn: HTMLElement = <HTMLElement>document.querySelector("#refillBread");
        // refillBreadBtn.addEventListener("click", refillBread);
        drawBackground();
        drawWarehouse();
        drawContainer();
        drawCashRegister();
        //drawWorker({ x: 250, y: 300 });
        //drawCustomer({ x: 600, y: 300 });
        imgageData = Döner_Trainer.crc2.getImageData(0, 0, Döner_Trainer.crc2.canvas.width, Döner_Trainer.crc2.canvas.height);
        //window.setInterval(update, 20);
    }
    function startGame() {
        //console.log("start Game");
        workers = [];
        customers = [];
        counterLeft.bread = 80;
        counterLeft.tomato = 80;
        counterLeft.lettuce = 80;
        counterLeft.onion = 80;
        counterLeft.meat = 80;
        const form = document.querySelector('form');
        const data = new FormData(form);
        const amountStock = data.get('warehouse');
        let stock = parseInt(amountStock + Math.floor); //string in number parsen
        storageLeft.bread = storageLeft.tomato = storageLeft.lettuce = storageLeft.onion = storageLeft.meat = stock;
        createWorker();
        createCustomer();
    }
    function update() {
        console.log();
        drawBackground();
        drawWarehouse();
        drawContainer();
        drawCashRegister();
        createCustomer();
    }
    function buyIngredients() {
        let stockMeterB = document.querySelector('#stockMeterB').getAttribute("value");
        let amountMissingBread = 1000 - stockMeterB * 1000;
        storageLeft.bread += amountMissingBread;
        let b = document.querySelector('#stockMeterB');
        b.setAttribute("value", 1);
        let stockMeterT = document.querySelector('#stockMeterT').getAttribute("value");
        let amountMissingTomato = 1000 - stockMeterT * 1000;
        storageLeft.tomato += amountMissingTomato;
        let t = document.querySelector('#stockMeterT');
        t.setAttribute("value", 1);
        let stockMeterL = document.querySelector('#stockMeterL').getAttribute("value");
        let amountMissingLettuce = 1000 - stockMeterL * 1000;
        storageLeft.lettuce += amountMissingLettuce;
        let l = document.querySelector('#stockMeterL');
        l.setAttribute("value", 1);
        let stockMeterO = document.querySelector('#stockMeterO').getAttribute("value");
        let amountMissingOnion = 1000 - stockMeterO * 1000;
        storageLeft.onion += amountMissingOnion;
        let o = document.querySelector('#stockMeterO');
        o.setAttribute("value", 1);
        let stockMeterM = document.querySelector('#stockMeterM').getAttribute("value");
        let amountMissingMeat = 1000 - stockMeterM * 1000;
        storageLeft.meat += amountMissingMeat;
        let m = document.querySelector('#stockMeterM');
        m.setAttribute("value", 1);
    }
    function createWorker() {
        const form = document.querySelector('form');
        const data = new FormData(form);
        const amountStaff = data.get('amountStaff'); //form Data anzahl worker als string holen
        let staff = parseInt(amountStaff);
        for (let i = 0; i < staff; i++) {
            let randomX = Math.random() * (350 - 150) + 150;
            let randomY = Math.random() * (550 - 50) + 50;
            let worker = new Döner_Trainer.Worker(1, randomX, randomY);
            // worker.feel("happy");
            worker.move(1 / 50);
            worker.draw();
            workers.push(worker);
        }
    }
    function createCustomer() {
        const form = document.querySelector('form');
        const data = new FormData(form);
        const amountCustomer = data.get('amountCustomers'); //form Data anzahl worker als string holen
        let amountC = parseInt(amountCustomer);
        for (let i = 0; i < amountC; i++) {
            let randomX = Math.random() * (750 - 550) + 550;
            let randomY = Math.random() * (550 - 50) + 50;
            let customer = new Döner_Trainer.Customer(1, randomX, randomY);
            customer.move(1 / 50);
            // customer.feel("happy");
            customer.draw();
            customers.push(customer);
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
        console.log("cash");
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