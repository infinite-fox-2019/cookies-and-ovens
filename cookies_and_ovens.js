
// Answer These Questions:
//
// - What are essential classes?
// - What attributes will each class have?
// - What interface will each class provide?
// - How will the classes interact with each other?
// - Which classes will inherit from others, if any?
//
//
// Your code here

class Cake {
    constructor(bakingTime, cookTime = 0) {
        this._bakingTime = bakingTime
        this._cookTime = cookTime
        this._status = this.getStatus()
    }
    get bakingTime() {
        return this._bakingTime
    }

    set cookTime(value) {
        this._cookTime = value
        this.getStatus()
    }

    getStatus() {
        if (this._bakingTime < this._cookTime) {
            return this._status = 'hangus'
        } else if (this._bakingTime === this._cookTime) {
            return this._status = 'matang'
        } else {
            return this._status = 'mentah'
        }
    }
}

class PeanutCake extends Cake {
    constructor() {
        super(30)
    }
}

class ChocolateCake extends Cake {
    constructor() {
        super(20)
    }
}

class CheeseCake extends Cake {
    constructor() {
        super(35)
    }
}

class Oven {
    constructor() {
        this.cakes = []
    }

    input(cakes) {

        cakes.forEach(cake => {
            this.cakes.push(cake)
        })

        return this
    }

    bake(time) {
        for (let i = 0; i < time; i += 5) {
            console.log('\n========================');
            console.log(`minutes: ${i}`)
            console.log('========================');
            this.cakes.forEach(cake => {
                cake.cookTime = i
                console.log(cake);
            })

        }
        let cooked = this.cakes.slice()
        this.cakes = []
        return cooked
    };
}

const kacang = new PeanutCake()
const coklat = new ChocolateCake()
const keju = new CheeseCake()

const oven = new Oven()

oven.input([kacang, coklat, keju])
// console.log(oven);
oven.bake(40)

oven.input([kacang])
oven.bake(30)