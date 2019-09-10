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
class Oven {
  constructor() {
    this.cakes = []
  }

  addCake(cake) {
    this.cakes.push(cake)
  }

  bake(times) {
    for (let i = 0; i < this.cakes.length; i++) {
      let cake = this.cakes[i];
      for (let j = 0; j < times; j += 5) {
        if (cake.halfBaked === j) {
          cake.status = "hampir matang"
        } else if (cake.baked === j) {
          cake.status = "matang"
        } else if (cake.baked < j) {
          cake.status = "hangus"
        }
        if (j !== 0) {
          console.log(`${cake.name}, menit ke-${j} : ${cake.status}`)
        }
      }
      console.log(`\n`)
    }
  }
}

class Cakes {
  constructor(name, halfBaked, baked) {
    this.status = "mentah"
    this.name = name
    this.halfBaked= halfBaked
    this.baked = baked
}  
}

class PeanutCake extends Cakes {
  constructor() {
    super('Kue Kacang', 12, 20)
  }
}

class ChocoCake extends Cakes {
  constructor() {
    super('Kue Coklat', 15, 30)
  }
}

class CheeseCake extends Cakes {
  constructor() {
    super('Kue Keju', 20, 30);
  }
}

const peanutCake = new PeanutCake()
const chocoCake = new ChocoCake()
const cheeseCake = new CheeseCake()

const oven = new Oven()
oven.addCake(peanutCake)
oven.addCake(chocoCake)
oven.addCake(cheeseCake)

// console.log(oven.cakes)
oven.bake(40); 