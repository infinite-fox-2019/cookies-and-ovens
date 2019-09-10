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
class CookieOven{
    constructor(){
        this.name = 'Cookie'
        this.status = 'mentah'
        this.cookingTime = 0
    }

    baking(time){
        for(let i = 5; i <= time; i += 5){
            if (i < this.cookingTime -10){
                this.status = 'mentah'
            }else if(i === this.cookingTime -5){
                this.status = 'hampir matang'
            }else if(i === this.cookingTime){
                this.status = 'matang'
            }else if(i > this.cookingTime){
                this.status = 'hangus'
            }
            console.log(`${this.name}, menit ke ${i} : ${this.status}`)
        }
    }
}

class Chocolate extends CookieOven{
    constructor(){
        super()
        this.name = 'Kue Coklat'
        this.cookingTime = 20
    }
}

class Peanut extends CookieOven{
    constructor(){
        super()
        this.name = 'Kue Kacang'
        this.cookingTime = 30
    }
}

class Cheese extends CookieOven{
    constructor(){
        super()
        this.name = 'Kue Keju'
        this.cookingTime = 35
    }
}

console.log('-- Masak kue Coklat Enak --');
let chocolate = new Chocolate()
chocolate.baking(25)
console.log('\n');
console.log('-- Masak kue Kacang Enak --');
let peanut = new Peanut()
peanut.baking(35)
console.log('\n');
console.log('-- Masak kue Keju Enak --');
let cheese = new Cheese()
cheese.baking(40)