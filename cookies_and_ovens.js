"use strict"

class Cookie{
    constructor(name){
        
        this._name = name
        this._status = 0
    }
}

class KueCokelat extends Cookie{
    constructor(){
        super('Kue cokelat')
        this._cookTime = 20
    }
}

class KueKacang extends Cookie{
    constructor(){
        super('Kue kacang')
        this._cookTime = 30
    }
}

class KueKeju extends Cookie{
    constructor(){
        super('Kue keju')
        this._cookTime = 35
    }
}

class CookieFactory{
    constructor(){
    }
    static produce(cookieList){
        let cookieArr = []
        for(let i=0; i<cookieList.length; i++){
            if(cookieList[i] === 'Kue cokelat'){
                cookieArr.push(new KueCokelat())
            }
            else if(cookieList[i] === 'Kue kacang'){
                cookieArr.push(new KueKacang())
            }
            else if(cookieList[i] === 'Kue keju'){
                cookieArr.push(new KueKeju())
            }
        }
        return cookieArr
    }
        
}

class Oven{
    constructor(order){
        this._order = order
    }
    bake(bakeTime){
        var status = ['mentah','hampir matang','matang','hangus']
        for(let i=0; i<=bakeTime; i+=5 ){
            console.log(`Panggangan menit ke : ${i}`)
            for(let j=0; j<this._order.length; j++){
                let step = this._order[j]._cookTime / 2
                if(i > this._order[j]._cookTime){
                    this._order[j]._status = 3
                }
                else if(i/step >= this._order[j]._status){
                    this._order[j]._status ++
                }
                let nowStatus = status[this._order[j]._status]
                console.log(`${this._order[j]._name} ==> ${nowStatus}`)
            }
            console.log('===============================')
        }
    }
}

var list = ['Kue cokelat','Kue kacang','Kue keju']
var order = CookieFactory.produce(list)
console.log(order)
console.log('------------------------')

let ovenCookie = new Oven(order)
ovenCookie.bake(35)