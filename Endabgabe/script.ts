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

    interface Storage {
        bread: number;
        tomato: number;
        lettuce: number;
        onion: number;
        meat: number;
    }

    let storageLeft: Storage = {
        bread: 1000,
        tomato: 1000,
        lettuce: 1000,
        onion: 1000,
        meat: 1000,
    };

    interface Counter {
        bread: number;
        tomato: number;
        lettuce: number;
        onion: number;
        meat: number;
    }

    let counterLeft: Counter = {
        bread: 80,
        tomato: 80,
        lettuce: 80,
        onion: 80,
        meat: 80,
    };

    let imgageData: ImageData;
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

        let buyBtn: HTMLElement = <HTMLElement>document.querySelector("#buyIngredients");
        buyBtn.addEventListener("click", buyIngredients);

        drawBackground();
        drawWarehouse();
        drawContainer();
        drawCashRegister();
        //drawWorker({ x: 250, y: 300 });
        //drawCustomer({ x: 600, y: 300 });

        imgageData = crc2.getImageData(0, 0, crc2.canvas.width, crc2.canvas.height);
        //window.setInterval(update, 20);
    }

    function startGame(): void {
        //console.log("start Game");

        workers = [];
        customers = [];

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

        //const stressLevel = data.get('breaks') as string;

        createWorker();
        createCustomer();
    }

    function update(): void {
        console.log();

        drawBackground();
        drawWarehouse();
        drawContainer();
        drawCashRegister();

        createCustomer();
    }
    
    function buyIngredients(): void {
        let stockMeterB: any = document.querySelector('#stockMeterB').getAttribute("value");
        let amountMissingBread: number = 1000 - stockMeterB * 1000;
        storageLeft.bread += amountMissingBread;
        
        let b: any = document.querySelector('#stockMeterB');
        b.setAttribute("value", 1);

        let stockMeterT: any = document.querySelector('#stockMeterT').getAttribute("value");
        let amountMissingTomato: number = 1000 - stockMeterT * 1000;
        storageLeft.tomato += amountMissingTomato;
        
        let t: any = document.querySelector('#stockMeterT');
        t.setAttribute("value", 1);

        let stockMeterL: any = document.querySelector('#stockMeterL').getAttribute("value");
        let amountMissingLettuce: number = 1000 - stockMeterL * 1000;
        storageLeft.lettuce += amountMissingLettuce;
        
        let l: any = document.querySelector('#stockMeterL');
        l.setAttribute("value", 1);

        let stockMeterO: any = document.querySelector('#stockMeterO').getAttribute("value");
        let amountMissingOnion: number = 1000 - stockMeterO * 1000;
        storageLeft.onion += amountMissingOnion;
        
        let o: any = document.querySelector('#stockMeterO');
        o.setAttribute("value", 1);

        let stockMeterM: any = document.querySelector('#stockMeterM').getAttribute("value");
        let amountMissingMeat: number = 1000 - stockMeterM * 1000;
        storageLeft.meat += amountMissingMeat;
        
        let m: any = document.querySelector('#stockMeterM');
        m.setAttribute("value", 1);
    }

    function createWorker(): void {
        const form = document.querySelector('form')!;
        const data = new FormData(form);

        const amountStaff = data.get('amountStaff') as string;    //form Data anzahl worker als string holen
        let staff: number = parseInt(amountStaff);

        for (let i = 0; i < staff; i++) {      //solange index kleiner als anzahl worker ist soll ein neuer worker erstellt werden
            let worker: Human = new Worker();
            worker.feel("happy");
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
            let customer: Human = new Customer();
            customer.move(1 / 50);
            customer.feel("happy");
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