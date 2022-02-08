/*
Endabgabe Döner-Trainer
Name: Jasmin Basler
Matrikel: 265114
Datum: 
Quellen: Zusammenarbeit mit Fiona Virnich
*/
namespace Döner_Trainer {
    export interface Vector {
        x: number;
        y: number;
    }

    window.addEventListener("load", handleLoad);

    export let crc2: CanvasRenderingContext2D;

    let workers: Worker[] = [];
    let customers: Customer[] = [];

    function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        let startBtn: HTMLElement = <HTMLElement>document.querySelector("#startBtn");
        startBtn.addEventListener("click", startGame);

        let resetBtn: HTMLElement = <HTMLElement>document.querySelector("#resetBtn");
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

    function startGame(): void {
        console.log("start Game");

        const form = document.querySelector('form')!;
        const data = new FormData(form);

        //Get amount workers

        const amountStaff = data.get('amountStaff') as string;    //form Data anzahl worker als string holen
        let staff: number = parseInt(amountStaff);

        for (let i = 0; i < staff; i++) {      //solange index kleiner als anzahl worker ist soll ein neuer worker erstellt werden
            let randomX: number = Math.random() * 300 + Math.random() * 300 + 80;
            let worker: Human = new Worker(1, randomX, 200);
            worker.draw();
            workers.push(worker);
        }

        //Get amount customers

        const amountCustomer = data.get('amountCustomer') as string;    //form Data anzahl worker als string holen
        let customer: number = parseInt(amountCustomer);

        for (let i = 0; i < customer; i++) {      //solange index kleiner als anzahl worker ist soll ein neuer worker erstellt werden
            let randomX: number = Math.random() * 300 + Math.random() * 300 + 80;
            let customer: Human = new Customer(1, randomX, 200);
            customer.draw();
            customers.push(customer);
        }
    }

    function drawBackground(): void {
        //console.log("background");

        //Floor
        let crc2Pattern: CanvasRenderingContext2D;
        let canvasPattern: HTMLCanvasElement = document.createElement("canvas");
        if (!canvasPattern)
            return;
        crc2Pattern = <CanvasRenderingContext2D>canvasPattern.getContext("2d");

        canvasPattern.width = 50;
        canvasPattern.height = 50;

        crc2Pattern.fillStyle = "#dedede";
        crc2Pattern.strokeStyle = "#c2c2c2";
        crc2Pattern.fillRect(0, 0, canvasPattern.width, canvasPattern.height);
        crc2Pattern.rect(0, 0, 50, 50);
        crc2Pattern.stroke();

        let pattern: CanvasPattern = <CanvasPattern>crc2.createPattern(canvasPattern, "repeat");
        crc2.fillStyle = pattern;
        crc2.fillRect(0, 0, 800, 600);

        //Counter 1
        crc2.save();

        crc2.beginPath();
        crc2.rect(0, 0, 100, 600);
        crc2.fillStyle = "#bf842c";
        crc2.fill();
        crc2.closePath();

        //Counter 2

        crc2.beginPath();
        crc2.rect(400, 150, 100, 450);
        crc2.fillStyle = "#bf842c";
        crc2.fill();
        crc2.closePath();

        //Tür

        crc2.beginPath();
        crc2.moveTo(800, 200);
        crc2.lineTo(750, 100);
        crc2.strokeStyle = "black";
        crc2.lineWidth = 3;
        crc2.stroke();

        crc2.beginPath();
        crc2.moveTo(800, 200);
        crc2.lineTo(800, 400);
        crc2.strokeStyle = "black";
        crc2.lineWidth = 3;
        crc2.stroke();

        crc2.beginPath();
        crc2.moveTo(800, 400);
        crc2.lineTo(750, 500);
        crc2.strokeStyle = "black";
        crc2.lineWidth = 3;
        crc2.stroke();

        crc2.restore();
    }

    function drawWarehouse(): void {
        crc2.save();

        crc2.beginPath();
        crc2.rect(20, 50, 60, 60);
        crc2.stroke();
        crc2.lineWidth = 3;
        crc2.fillStyle = "brown";
        crc2.fill();
        crc2.closePath();

        crc2.beginPath();
        crc2.rect(20, 130, 60, 60);
        crc2.stroke();
        crc2.lineWidth = 3;
        crc2.fillStyle = "red";
        crc2.fill();
        crc2.closePath();

        crc2.beginPath();
        crc2.rect(20, 210, 60, 60);
        crc2.stroke();
        crc2.lineWidth = 3;
        crc2.fillStyle = "green";
        crc2.fill();
        crc2.closePath();

        crc2.beginPath();
        crc2.rect(20, 290, 60, 60);
        crc2.stroke();
        crc2.lineWidth = 3;
        crc2.fillStyle = "purple";
        crc2.fill();
        crc2.closePath();

        crc2.beginPath();
        crc2.rect(20, 370, 60, 60);
        crc2.stroke();
        crc2.lineWidth = 3;
        crc2.fillStyle = "pink";
        crc2.fill();
        crc2.closePath();

        crc2.restore();
    }

    function drawContainer(): void {
        crc2.save();

        crc2.beginPath();
        crc2.rect(420, 170, 60, 60);
        crc2.stroke();
        crc2.lineWidth = 3;
        crc2.fillStyle = "brown";
        crc2.fill();
        crc2.closePath();

        crc2.beginPath();
        crc2.rect(420, 250, 60, 60);
        crc2.stroke();
        crc2.lineWidth = 3;
        crc2.fillStyle = "red";
        crc2.fill();
        crc2.closePath();

        crc2.beginPath();
        crc2.rect(420, 330, 60, 60);
        crc2.stroke();
        crc2.lineWidth = 3;
        crc2.fillStyle = "green";
        crc2.fill();
        crc2.closePath();

        crc2.beginPath();
        crc2.rect(420, 410, 60, 60);
        crc2.stroke();
        crc2.lineWidth = 3;
        crc2.fillStyle = "purple";
        crc2.fill();
        crc2.closePath();

        crc2.beginPath();
        crc2.rect(420, 490, 60, 60);
        crc2.stroke();
        crc2.lineWidth = 3;
        crc2.fillStyle = "pink";
        crc2.fill();
        crc2.closePath();

        crc2.restore();
    }

    function drawCashRegister(): void {
        console.log("cash");

        crc2.save();

        crc2.beginPath();
        crc2.rect(400, 0, 100, 150);
        crc2.fillStyle = "brown";
        crc2.fill();
        crc2.closePath();

        crc2.restore();
    }
}