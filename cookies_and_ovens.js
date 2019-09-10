// Answer These Questions:

// - What are essential classes?
//   Parent class (Cookie) and its children classes (PeanutCookie, ChocoCookie, CheeseCookie), with Oven class existing separately

// - What attributes will each class have?
//   Cookie classes (both parent and children) have name, time where it's cooked, and its current status of cooking

// - What interface will each class provide?

// - How will the classes interact with each other?
//   Oven interacts with cookies by changing cookies' current status

// - Which classes will inherit from others, if any?
//   Children classes (PeanutCookie, ChocoCookie, CheeseCookie) that inherit from its parent, Cookie

class Cookie {
  constructor (nama, waktuMatang){
    this.nama = nama
    this.waktuMatang = waktuMatang
    this._status = ''
  }

  changeStatus(time) {
    if (time <= this.waktuMatang - 10) {
      this._status = 'mentah'
    }
    else if (time <= this.waktuMatang - 5) {
      this._status = 'hampir matang'
    }
    else if (time <= this.waktuMatang) {
      this._status = 'matang'
    }
    else {
      this._status = 'hangus'
    }
  }
}

class PeanutCookie extends Cookie {
  constructor (nama){
    super (nama, 30)
  }
}

class ChocoCookie extends Cookie {
  constructor (nama){
    super (nama, 20)
  }
}

class CheeseCookie extends Cookie {
  constructor (nama){
    super (nama, 35)
  }
}

class Oven {
  constructor() {
    this._cakes = []
  }
  
  insert (cake) {
    this._cakes.push(cake)
  }

  bake (time) {
    for (let i = 0; i < this._cakes.length; i++) {
      for (let j = 0; j <= time; j += 5) {
        this._cakes[i].changeStatus(j)
        console.log(`${this._cakes[i].nama}, menit ke ${j} : ${this._cakes[i]._status}`);
      }
    }
  }
}

let oven = new Oven()

oven.insert(new PeanutCookie ('kue kacang'))
oven.insert(new ChocoCookie ('kue cokelat'))
oven.insert(new CheeseCookie ('kue keju'))
oven.bake(30)


