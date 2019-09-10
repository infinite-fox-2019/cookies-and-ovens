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
        this.kue = []
    }

    insertCake(martabak){
        this.kue.push(martabak)
    }

    baking(maxTime){
        let time = 0
        while(time < maxTime){
            time += 5
            for(let i = 0 ; i < this.kue.length; i++){
                if(time >= this.kue[i]._maxTime + 5){
                    this.kue[i]._status = 'hangus'
                }
                else if(time === (this.kue[i]._maxTime) - 5){
                    this.kue[i]._status = `ding dong! 5 menit lagi ${this.kue[i]._name} matang`
                }
                else if(time >= this.kue[i]._maxTime){
                    this.kue[i]._status = `ting! ${this.kue[i]._name} sudah matang`
                }
                console.log(`${this.kue[i]._name} matang, menit ke${time}, : ${this.kue[i]._status}`)
            }
        }
    }
}

class Kue {
    constructor(name,maxTime){
        this._name = name
        this._maxTime = maxTime
        this._status = 'mentah'
    } 
}

class MartabakCokelat extends Kue {
    constructor(){
        super('MartabakCokelat', 20)
    }
}

class MartabakKacang extends Kue {
    constructor(){
        super('MartabakKacang', 30)
    }
}

class MartabakKeju extends Kue {
    constructor(){
        super('MartabakKeju', 35)
    }
}


let oven = new Oven()
let cokelat = new MartabakCokelat()
let kacang = new MartabakKacang()
let keju = new MartabakKeju()

oven.insertCake(cokelat)
oven.baking(30)