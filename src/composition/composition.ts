export class Car {
    private readonly engine = new Engine();

    start(): void {
        this.engine.start();
    }

    accelerate(): void {
        this.engine.accelerate();
    }

    stop(): void {
        this.engine.stop();
    }

    turnOff(): void {
        this.engine.turnOff();
    }
}

export class Engine {
    start(): void {
        console.log("Engine is starting...");
    }

    accelerate(): void {
        console.log("Engine is accelerating...");
    }

    stop(): void {
        console.log("Engine is stoping...");
    }

    turnOff(): void {
        console.log("Engine is turning off...");
    }
}

const car = new Car();
car.start();
car.accelerate();
car.stop();
car.turnOff();
