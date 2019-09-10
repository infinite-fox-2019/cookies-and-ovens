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
  constructor(){
    this.electric = '300Watt'
    this.material = 'stell'
    this.color = 'silver'
    this._kue = []
  }

  get kue(){
    return this._kue;
  }

  addKue(kueMasuk){
    this._kue.push(kueMasuk)
  }

  bake(time){
    for(let i = 0; i < this._kue.length; i++){
      this._kue[i].statusMatang(time)
    }
  }
  
}

class Cookie {
  constructor(name, timeForBake, minuteNow){
    this.name = name;
    this.status = 'mentah';
    this.timeForBake = timeForBake;
  }

  statusMatang(waktuOven){
    for(let i = 1; i <= waktuOven; i+=5){
      if(i <= this.timeForBake-10){
        this.status = 'mentah';
        console.log(`${this.name}, menit ke ${i} : ${this.status}`)
      }
      else if(i <= this.timeForBake+5){
        this.status = 'matang'
        console.log(`${this.name}, menit ke ${i} : ${this.status}`)
      }
      else if(i > this.timeForBake-10){
        this.status = 'hampir matang'
        console.log(`${this.name}, menit ke ${i} : ${this.status}`)
      }
      else{
        this.status = 'hangus'
        console.log(`${this.name}, menit ke ${i} : ${this.status}`)
      }
    }
    console.log(' ')
  }
}

class KueCoklat extends Cookie {
  constructor(){
    super('Kue Coklat', 20);
  }
}

class KueKacang extends Cookie {
  constructor(){
    super('Kue Kacang', 30);
  }
}

class KueKeju extends Cookie {
  constructor(){
    super('Kue Keju', 35);
  }
}



let ovenMahal = new Oven;
// console.log(ovenMahal)

ovenMahal.addKue(new KueKeju)
ovenMahal.addKue(new KueKacang)
ovenMahal.addKue(new KueCoklat)
ovenMahal.bake(30)

console.log(ovenMahal.kue)