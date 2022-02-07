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
    let crc2;
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = canvas.getContext("2d");
        //crc2.fillStyle = "black";
        drawBackground();
        drawWorker({ x: 250, y: 300 });
        drawCustomer({ x: 600, y: 300 });
    }
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
        crc2Pattern.fillStyle = "lightgrey";
        crc2Pattern.strokeStyle = "grey";
        crc2Pattern.fillRect(0, 0, canvasPattern.width, canvasPattern.height);
        crc2Pattern.rect(0, 0, 50, 50);
        crc2Pattern.stroke();
        let pattern = crc2.createPattern(canvasPattern, "repeat");
        crc2.fillStyle = pattern;
        crc2.fillRect(0, 0, 800, 600);
        //Counter 1
        crc2.save();
        crc2.beginPath();
        crc2.rect(0, 0, 100, 600);
        crc2.fillStyle = "grey";
        crc2.fill();
        crc2.closePath();
        //Counter 2
        crc2.beginPath();
        crc2.rect(400, 0, 100, 600);
        crc2.fillStyle = "grey";
        crc2.fill();
        crc2.closePath();
        crc2.restore();
    }
    function drawWorker(_position) {
        console.log("worker");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.arc(0, 0, 20, 0, 2 * Math.PI);
        crc2.fillStyle = "red";
        crc2.fill();
        crc2.closePath();
        crc2.restore();
    }
    function drawCustomer(_position) {
        console.log("customer");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.arc(0, 0, 20, 0, 2 * Math.PI);
        crc2.fillStyle = "blue";
        crc2.fill();
        crc2.closePath();
        crc2.restore();
    }
})(Döner_Trainer || (Döner_Trainer = {}));
//# sourceMappingURL=script.js.map