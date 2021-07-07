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
      this.cookies = []
  }
  addCake (kue) {
      this.cookies.push(kue)
  }
  bake (time) {
      for (let i=0; i<=time; i+=5) {
          for (let j=0; j<this.cookies.length; j++) {
              this.cookies[j].waktu = i
              console.log(`${this.cookies[j].name}, menit ke ${i} : ${this.cookies[j].status}`);
              
          }
      }
  }
}

class Cake {
  constructor (name, cookedTime) {
     this.name = name
     this.waktu = 0
     this.cookedTime = cookedTime
  }
  get status() {
      if (this.waktu > this.cookedTime) {
          return "Hangus"
      } else if (this.waktu === this.cookedTime) {
          return "Matang"
      } else if (this.waktu === this.cookedTime - 5) {
          return "Hampir Matang"
      } else if (this.waktu <= this.cookedTime - 10) {
          return "Mentah"
      } else if (this.waktu < this.cookedTime - 5 && this.time >= 5) {
        return "Mentah"
    }
  }
}

class Coklat extends Cake {
  constructor () {
    super('kue coklat',20)
  }
}

class Kacang extends Cake {
  constructor () {
    super('kue kacang',30)
  }
}

class Keju extends Cake {
  constructor () {
    super('kue keju',35)
  }
}


const kueCoklat = new Coklat()
const kueKeju = new Keju()
const kueKacang = new Kacang()

let oven = new Oven() 


// oven.addCake(kueCoklat)
// oven.addCake(kueKeju)
oven.addCake(kueKacang)

oven.bake(40)
