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
        let almostCooked = Math.floor(this.timesCooked-(this.timesCooked/4))
        let halfCooked = Math.floor(this.timesCooked-(this.timesCooked/2))

        if (this.durationBaked > this.timesCooked ){
            return 'overcook'
        } else if (this.durationBaked === this.timesCooked){
            return 'perfect cooked'
        } else if (this.durationBaked <= almostCooked && this.durationBaked > halfCooked){
            return 'almost cooked'
        } else if (this.durationBaked <= halfCooked && this.durationBaked > 5){
            return 'half cooked'
        } else if (this.durationBaked <= 5){
            return 'raw'
        } else return 'almost cooked'
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
            for (let j=0; j<=time; j+=5){
                this.cookies[i].durationBaked = j
                console.log(`${this.cookies[i].name} is ${this.cookies[i].status} in ${j} min`)
            }
        }
    }
}

const chocolateCookie = new Cookie('Chocolate Cookie', 30)
const peanutCookie = new Cookie('Peanut Cookie', 25)
const cheeseCokie = new Cookie('Cheese Cookie', 20)

let oven = new Oven()
oven.addCookie(chocolateCookie)
oven.addCookie(peanutCookie)
oven.addCookie(cheeseCokie)
oven.bakeTime(30)
