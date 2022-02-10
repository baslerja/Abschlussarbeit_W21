/*
Endabgabe Döner-Trainer
Name: Jasmin Basler
Matrikel: 265114
Datum: 
Quellen: Zusammenarbeit mit Fiona Virnich
*/
namespace Döner_Trainer {
    window.addEventListener("load", handleLoad);

    export interface Vector {
        x: number;
        y: number;
    }

    export interface Storage {
        bread: number;
        tomato: number;
        lettuce: number;
        onion: number;
        meat: number;
    }

    export let storageLeft: Storage = {
        bread: 1000,
        tomato: 1000,
        lettuce: 1000,
        onion: 1000,
        meat: 1000,
    };

    export interface Counter {
        bread: number;
        tomato: number;
        lettuce: number;
        onion: number;
        meat: number;
    }

    export let counterLeft: Counter = {
        bread: 80,
        tomato: 80,
        lettuce: 80,
        onion: 80,
        meat: 80,
    };

    export let currentOrder: Storage = {
        bread: 0,
        tomato: 0,
        lettuce: 0,
        onion: 0,
        meat: 0,
    };

    let imageData: ImageData;
    export let crc2: CanvasRenderingContext2D;

    let workers: Worker[] = [];
    let customers: Customer[] = [];
    let orders: Storage[] = [];
    let ordersMade: Storage[] = [];

    function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        let startBtn: HTMLElement = <HTMLElement>document.querySelector("#startBtn");
        startBtn.addEventListener("click", startGame);

        // let resetBtn: HTMLElement = <HTMLElement>document.querySelector("#resetBtn");
        // resetBtn.addEventListener("click", handleLoad);

        let buyBtn: HTMLElement = <HTMLElement>document.querySelector("#buyIngredients");
        buyBtn.addEventListener("click", buyIngredients);

        let payBtn: HTMLElement = <HTMLElement>document.querySelector("#pay");
        payBtn.addEventListener("click", cashUpOrder);

        drawBackground();
        drawWarehouse();
        drawContainer();
        drawCashRegister();

        imageData = crc2.getImageData(0, 0, crc2.canvas.width, crc2.canvas.height);
        window.setInterval(update, 20);
    }

    export function startGame(): void {
        console.log("start Game");

        document.querySelector("#addB")!.addEventListener("click", addBread);
        document.querySelector("#addT")!.addEventListener("click", addTomato);
        document.querySelector("#addL")!.addEventListener("click", addLettuce);
        document.querySelector("#addO")!.addEventListener("click", addOnion);
        document.querySelector("#addM")!.addEventListener("click", addMeat);

        document.querySelector("#refillBread")!.addEventListener("click", refillBread);
        document.querySelector("#refillTomato")!.addEventListener("click", refillTomato);
        document.querySelector("#refillLettuce")!.addEventListener("click", refillLettuce);
        document.querySelector("#refillOnion")!.addEventListener("click", refillOnion);
        document.querySelector("#refillMeat")!.addEventListener("click", refillMeat);

        workers = [];
        customers = [];
        orders = [];
        ordersMade = [];

        counterLeft.bread = 80;
        counterLeft.tomato = 80;
        counterLeft.lettuce = 80;
        counterLeft.onion = 80;
        counterLeft.meat = 80;

        const form = document.querySelector('form')!;
        const data = new FormData(form);
        
        const amountStock = data.get('warehouse') as string;
        let stock: number = parseInt(amountStock + Math.floor);    //string in number parsen
        storageLeft.bread = storageLeft.tomato = storageLeft.lettuce = storageLeft.onion = storageLeft.meat = stock;

        let meterB: any = document.querySelector('#stockMeterB');
        meterB.setAttribute("value", stock / 100);
        storageLeft.bread = 10 * stock;

        createWorker();
        createCustomer();
    }

    function update(): void {
        crc2.putImageData(imageData, 1, 1);

        for (let worker of workers) {
            worker.move(1 / 50);
            worker.draw();
            worker.feel("neutral");
        }

        for (let customer of customers) {
            customer.move(1 / 50);
            customer.draw();
            customer.feel("sad");
        }
    }

    function createWorker(): void {
        const form = document.querySelector('form')!;
        const data = new FormData(form);

        const amountStaff = data.get('amountStaff') as string;    //form Data anzahl worker als string holen
        let staff: number = parseInt(amountStaff);

        for (let i = 0; i < staff; i++) {
            let randomX: number = Math.random() * (350 - 150) + 150;
            let randomY: number = Math.random() * (550 - 50) + 50;
            let worker: Human = new Worker(1, randomX, randomY);
            // worker.feel("happy");
            worker.move(1 / 50);
            worker.draw();
            workers.push(worker);
        }
    }

    function createCustomer(): void {
        const form = document.querySelector('form')!;
        const data = new FormData(form);

        const amountCustomer = data.get('amountCustomers') as string;    //form Data anzahl worker als string holen
        let amountC: number = parseInt(amountCustomer);

        for (let i = 0; i < amountC; i++) {
            let randomX: number = Math.random() * (750 - 550) + 550;
            let randomY: number = Math.random() * (550 - 50) + 50;
            let customer: Human = new Customer(1, randomX, randomY);
            orders.push(customer.myOrder)
            customer.move(1 / 50);
            // customer.feel("happy");
            customer.draw();
            customers.push(customer);

            console.log(" Order of Customer: ")
            console.log(customer.myOrder);
        }
    }

    function cashUpOrder(): any {

        ordersMade.push(currentOrder);
        console.log(currentOrder);

        if (ordersMade[0] == orders[0]) {
            customers[0].feel("happy");
            console.log(ordersMade[0]);
            console.log("order was right");

        } else {
            customers[0].feel("sad");
            console.log("order was wrong");
            console.log(ordersMade[0]);
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
        //console.log("cash");

        crc2.save();

        crc2.beginPath();
        crc2.rect(400, 0, 100, 150);
        crc2.fillStyle = "brown";
        crc2.fill();
        crc2.closePath();

        crc2.restore();
    }
}