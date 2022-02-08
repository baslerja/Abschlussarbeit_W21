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
    // let moveables = Moveable[] = [];
    let startBtn;
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        Döner_Trainer.crc2 = canvas.getContext("2d");
        // startBtn = <HTMLButtonElement>document.querySelector("startBtn");
        // startBtn.addEventListener("click", startGame);
        //crc2.fillStyle = "black";
        drawBackground();
        drawCashRegister();
        drawWorker({ x: 250, y: 300 });
        drawCustomer({ x: 600, y: 300 });
    }
    // function startGame(): void {
    //     console.log("start Game");
    //     let formData: FormData = new FormData(document.forms[0]);
    // }
    function drawBackground() {
        console.log("background");
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
    function drawWorker(_position) {
        console.log("worker");
        Döner_Trainer.crc2.save();
        Döner_Trainer.crc2.translate(_position.x, _position.y);
        Döner_Trainer.crc2.beginPath();
        Döner_Trainer.crc2.arc(0, 0, 20, 0, 2 * Math.PI);
        Döner_Trainer.crc2.fillStyle = "#d18075";
        Döner_Trainer.crc2.fill();
        Döner_Trainer.crc2.closePath();
        Döner_Trainer.crc2.restore();
    }
    function drawCustomer(_position) {
        console.log("customer");
        Döner_Trainer.crc2.save();
        Döner_Trainer.crc2.translate(_position.x, _position.y);
        Döner_Trainer.crc2.beginPath();
        Döner_Trainer.crc2.arc(0, 0, 20, 0, 2 * Math.PI);
        Döner_Trainer.crc2.fillStyle = "#75b8d1";
        Döner_Trainer.crc2.fill();
        Döner_Trainer.crc2.closePath();
        Döner_Trainer.crc2.restore();
    }
})(Döner_Trainer || (Döner_Trainer = {}));
//# sourceMappingURL=script.js.map