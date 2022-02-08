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
        drawBackground();
        drawWarehouse();
        drawContainer();
        drawCashRegister();
        //drawWorker({ x: 250, y: 300 });
        //drawCustomer({ x: 600, y: 300 });
        //imageData = crc2.getImageData(0, 0, 800, 600);
        //window.setInterval(update, 20);
    }
    function startGame() {
        console.log("start Game");
        const form = document.querySelector('form');
        const data = new FormData(form);
        //Get amount workers
        const amountStaff = data.get('amountStaff'); //form Data anzahl worker als string holen
        let staff = parseInt(amountStaff);
        for (let i = 0; i < staff; i++) { //solange index kleiner als anzahl worker ist soll ein neuer worker erstellt werden
            let randomX = Math.random() * 300 + Math.random() * 300 + 80;
            let worker = new Döner_Trainer.Worker(1, randomX, 200);
            worker.draw();
            workers.push(worker);
        }
        //Get amount customers
        const amountCustomer = data.get('amountCustomer'); //form Data anzahl worker als string holen
        let customer = parseInt(amountCustomer);
        for (let i = 0; i < customer; i++) { //solange index kleiner als anzahl worker ist soll ein neuer worker erstellt werden
            let randomX = Math.random() * 300 + Math.random() * 300 + 80;
            let customer = new Döner_Trainer.Customer(1, randomX, 200);
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