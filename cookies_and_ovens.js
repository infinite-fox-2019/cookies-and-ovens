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
    addCookie(kue) {
        this.cookies.push(kue)
    }
    bake(time) {
        for (let i=0; i<=time; i+=5) {
            for (let j=0; j<this.cookies.length; j++) {
                this.cookies[j].time = i
                console.log(`${this.cookies[j].name}, menit ke ${i} : ${this.cookies[j].status}`);
                
            }
        }
    }
}


class Cookie {
    constructor (name, cookedTime) {
       this.name = name
       this.time = 0
       this.cookedTime = cookedTime
    }
    get status() {
        if (this.time > this.cookedTime) {
            return "over cooked"
        } else if (this.time === this.cookedTime) {
            return "perfectly cooked"
        } else if (this.time === this.cookedTime - 5) {
            return "almost cooked"
        } else if (this.time < this.cookedTime - 5 && this.time >= 5) {
            return "under cooked"
        } else if (this.time < 5) {
            return "raw"
        }
    }
}

const kueCoklat = new Cookie('kueCoklat', 20)
const kueKeju = new Cookie('kueKeju', 30)
const kueDuren = new Cookie('kueDuren', 10)

let coklat = new Oven() 
let keju = new Oven()
let duren = new Oven()

coklat.addCookie(kueCoklat)
keju.addCookie(kueKeju)
duren.addCookie(kueDuren)

coklat.bake(30)
console.log(`\n`);
keju.bake(30)
console.log(`\n`);
duren.bake(30)






