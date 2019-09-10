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
    this.allCookies = []
  }

  addKue(cookie) {
    this.allCookies.push(cookie)
  }

  bake(time) {
    for (let i = 0; i < this.allCookies.length; i++) {
      this.allCookies[i].countStatus(time)
    }
  }
}

class Cookie {
  constructor(name, matang) {
    this.name = name
    this.time = 0
    this.matang = matang
    this.status = null
  }

  countStatus(time) {
    for (let i = 0; i < time; i += 5) {
      if (i > this.matang){
        this.status = 'hangus'
        console.log(`Kue ${this.name}, menit ke ${i} : ${this.status}`)
      }
      if (i == this.matang) {
        this.status = 'matang'
        console.log(`Kue ${this.name}, menit ke ${i} : ${this.status}`)
      }
      if (i == this.matang - 5) {
        this.status = 'hampir matang'
        console.log(`Kue ${this.name}, menit ke ${i} : ${this.status}`)
      }
      if (i <= this.matang && i <= this.matang - 10) {
        this.status = 'mentah'
        console.log(`Kue ${this.name}, menit ke ${i} : ${this.status}`)
      }
    }
  }
}


class KueCoklat extends Cookie {
  constructor() {
    super('Coklat', 20);
  }
}

class KueKacang extends Cookie {
  constructor() {
    super('Kacang', 30);
  }
}

class KueKeju extends Cookie {
  constructor() {
    super('Keju', 35);
  }
}

const oven = new Oven()

oven.addKue(new KueKeju)
oven.addKue(new KueKacang)
oven.addKue(new KueCoklat)
oven.bake(60)

console.log(oven)
