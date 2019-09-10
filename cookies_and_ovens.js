// Answer These Questions:
//
// - What are essential classes?
// Cake, PeanutCake, ChocoCake, CheeseCake Oven?
// - What attributes will each class have?
// Cake has maxHeatTime
// - What interface will each class provide?
// 
// - How will the classes interact with each other?
// Oven aggregates with the other cake classes and manipulate it with methods
// - Which classes will inherit from others, if any?
// PeanutCake, ChocoCake, CheeseCake will inherit Cake
//
//
// Your code here
class Cake {
    constructor(name, maxHeatTime) {
        this.name = name;
        this.maxHeatTime = maxHeatTime;
        this.status = 'mentah';
    }
}

class ChocoCake extends Cake {
    constructor() {
        super('Kue coklat', 20);
    }
}

class PeanutCake extends Cake {
    constructor() {
        super('Kue kacang', 30);
    }
}

class CheeseCake extends Cake {
    constructor() {
        super('Kue keju', 35);
    }
}

class Oven {
    constructor() {
        this.cakes = []
    }

    insertCake(cake) {
        this.cakes.push(cake);
        return this;
    }

    heatCakes(maxMinute) {
        let minute = 0;
        while(minute < maxMinute) {
            minute += 5
            for(let i = 0; i < this.cakes.length; i++) {
                if(minute >= this.cakes[i].maxHeatTime + 5) {
                    this.cakes[i].status = 'hangus';
                } else if(minute >= this.cakes[i].maxHeatTime) {
                    this.cakes[i].status = 'matang';
                } else if(minute >= this.cakes[i].maxHeatTime - 5) {
                    this.cakes[i].status = 'hampir matang';
                }
                console.log(`${this.cakes[i].name}, menit ke ${minute} : ${this.cakes[i].status}`);
            }
        }
    }
}

let cosmos = new Oven();
let brownies = new ChocoCake();
let nutz = new PeanutCake();
let cheesy = new CheeseCake();

cosmos.insertCake(brownies).insertCake(nutz).insertCake(cheesy);
cosmos.heatCakes(50);
