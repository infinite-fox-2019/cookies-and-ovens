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
class Kue{
    constructor (){
        this.status = null
    }
}

class KueCoklat extends Kue{
    constructor(){
        super()
        this.name = 'Kue Coklat'
        this.mentah = 10
        this.hampirMatang = 15
        this.matang = 20
    }

    getStatus(time){
        if(time <= this.mentah) this.status=  'masih mentah'
        else if(time <= this.hampirMatang) this.status= 'hampir matang'
        else if(time <= this.matang) this.status= 'sudah matang'
        else if( time > this.matang) this.status= 'gosong'
    }
}

class KueKacang extends Kue{
    constructor(){
        super()
        this.name = 'Kue Kacang'
        this.mentah = 10
        this.hampirMatang = 25
        this.matang = 30
    }

    getStatus(time){
        if(time <= this.mentah) this.status=  'masih mentah'
        else if(time <= this.hampirMatang) this.status= 'hampir matang'
        else if(time <= this.matang) this.status= 'sudah matang'
        else if( time > this.matang) this.status= 'gosong'
    }
}

class KueKeju extends Kue{
    constructor(){
        super()
        this.name = 'Kue Keju'
        this.mentah = 15
        this.hampirMatang = 20
        this.matang = 35
    }

    getStatus(time){
        if(time <= this.mentah) this.status=  'masih mentah'
        else if(time <= this.hampirMatang) this.status= 'hampir matang'
        else if(time <= this.matang) this.status= 'sudah matang'
        else if( time > this.matang) this.status= 'gosong'
    }
}

class Oven{
    constructor(){
        this.cookies = []
    }

    addCookie(cookie){
        this.cookies.push(cookie)
    }

    bake(time){
        for(let i = 5; i <= time ; i+=5){
            console.log(`Menit ke-${i}`);
            for(let j = 0; j < this.cookies.length; j++){
                this.cookies[j].getStatus(i)
                console.log(`${this.cookies[j].name} ${this.cookies[j].status}`);
            }
        }
    }
}


let oven = new Oven()
let kacang = new KueKacang()
let keju = new KueKeju()
let coklat = new KueCoklat()
oven.addCookie(kacang)
oven.addCookie(keju)
oven.addCookie(coklat)
oven.bake(35)
