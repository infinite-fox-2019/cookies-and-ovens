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

class KueCoklat {
    constructor(max){
        this._status = 'Mentah'
        this._max = max
        this._minutes = 5
        this._matang = 25
    }
    bake(name){
        for(let i=0; i<=this._max; i+=this._minutes){
            if(i === this._matang){
                this._status = 'Matang'
                console.log(`${name}, menit ke ${i} : ${this._status}`)
            }else if(i === this._matang - this._minutes){
                this._status = 'Setengah Matang'
                console.log(`${name}, menit ke ${i} : ${this._status}`)
            }else if(i === this._max){
                this._status = 'Hangus'
                console.log(`${name}, menit ke ${i} : ${this._status}`)
            }else{
                console.log(`${name}, menit ke ${i} : ${this._status}`) 
            }
        }
    }
}
  
class KueKacang {
    constructor(max){
        this._status = 'mentah'
        this._max = max
        this._minutes = 6
        this._matang = 30
    }
    bake(name){
        for(let i=0; i<=this._max; i+=this._minutes){
            if(i === this._matang){
                this._status = 'Matang'
                console.log(`${name}, menit ke ${i} : ${this._status}`)
            }else if(i === this._matang-this._minutes*2){
                this._status = 'Setengah Matang'
                console.log(`${name}, menit ke ${i} : ${this._status}`)
            }else if(i === this._matang-this._minutes){
                this._status = 'Hampir Matang'
                console.log(`${name}, menit ke ${i} : ${this._status}`)
            }else if(i === this._max){
                this._status = 'Hangus'
                console.log(`${name}, menit ke ${i} : ${this._status}`)
            }else{
                console.log(`${name}, menit ke ${i} : ${this._status}`)
            }
        }
    }
}
  
class KueKeju {
    constructor(max){
        this._status = 'mentah'
        this._max = max
        this._minutes = 4
        this._matang = 12
    }
    bake(name){
        for(let i=0; i<=this._max; i+=this._minutes){
            if(i===this._matang-this._minutes){
                this._status = 'Setengah Matang'
                console.log(`${name}, menit ke ${i} : ${this._status}`)
            }else if(i===this._matang){
                this._status = 'Matang'
                console.log(`${name}, menit ke ${i} : ${this._status}`)
            }else if(i>this._matang){
                this._status = 'Hangus'
                console.log(`${name}, menit ke ${i} : ${this._status}`)
            }else{
                console.log(`${name}, menit ke ${i} : ${this._status}`)
            } 
        }
    }
}
  
class Oven {
    constructor(name,max){
        this._coklat = new KueCoklat(max)
        this._kacang = new KueKacang(max)
        this._keju = new KueKeju(max)
        this._name = name
    }
  
    get result(){
        if(this._name === 'Kue Cokelat'){
            return this._coklat.bake(this._name)
        }
        if(this._name === 'Kue Keju'){
            return this._keju.bake(this._name)
        }
        if(this._name === 'Kue Kacang'){
            return this._kacang.bake(this._name)
        }
    }
}
  
let ovenKacang = new Oven('Kue Kacang',36)
ovenKacang.result
console.log('\n')
let ovenCokelat = new Oven('Kue Cokelat',30)
ovenCokelat.result
console.log('\n')
let ovenKeju = new Oven('Kue Keju',16)
ovenKeju.result