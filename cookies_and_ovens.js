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

class Kue {
  constructor(name, waktuMatang){
    this._name = name
    this._time = 0
    this._waktuMatang = waktuMatang
  }

  get status() {
    if(this._time === this._waktuMatang){
      return 'Matang'
    } else if (this._time === this._waktuMatang-5){
      return 'Hampir Matang'
    } else if(this._time > this._waktuMatang){
      return 'Hangus'
    } else {
      return 'Mentah'
    }
  }
}

class Oven {
  constructor(){
    this.kues = []
  }

  addKue(kue){
    this.kues.push(kue)
  }

  bake(minutes){
    for(let i=0 ; i<this.kues.length ; i++){
      for(let j=0 ; j<minutes ; j+=5){
        this.kues[i]._time = j
        console.log(`${this.kues[i]._name}, menit ke ${this.kues[i]._time}: ${this.kues[i].status}`)
      }
    }
  }
}

let kueCoklat = new Kue('Kue Coklat', 20)
let kueKacang = new Kue('Kue Kacang', 30)
let kueKeju = new Kue('Kue Keju', 35)

console.log(kueCoklat)
console.log(kueKacang)
console.log(kueKeju)


let oven = new Oven()
oven.addKue(kueCoklat)
oven.addKue(kueKacang)
oven.addKue(kueKeju)
oven.bake(30)








