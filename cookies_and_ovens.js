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

class Cookie {
    constructor(name,timesCooked) {
        this.name = name
        this.timesCooked = timesCooked
        this.durationBaked = 0
    }

    get status(){
        if (this.durationBaked > this.timesCooked){
            return 'overcook'
        } else if (this.durationBaked === this.timesCooked){
            return 'perfect cook'
        } else if (this.durationBaked < this.timesCooked-(this.timesCooked/2)){
            return 'half cook'
        } else if (this.durationBaked < 5){
            return 'raw'
        }
    }
}

class Oven{
    constructor(){
        this.cookies = []
    }
    addCookie(cookiesName){
        this.cookies.push(cookiesName)
    }
    bakeTime(time){
        for (let i=0; i<this.cookies.length; i++){
            for (let j=0; j<time; j+=4){
                this.cookies[i].durationBaked = j
                console.log(`${this.cookies[i].name} is ${this.cookies[i].status} in ${j} min`)
            }
        }
    }
}

const chocolateCookie = new Cookie('Chocolate Cookie', 15)
const peanutCookie = new Cookie('Peanut Cookie', 30)
const cheeseCokie = new Cookie('Cheese Cookie', 20)

let oven = new Oven()
oven.addCookie(chocolateCookie)
oven.addCookie(peanutCookie)
oven.addCookie(cheeseCokie)
oven.bakeTime(30)
