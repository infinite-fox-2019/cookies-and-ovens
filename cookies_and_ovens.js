// Answer These Questions:
//
// - What are essential classes? Kue, Oven
// - What attributes will each class have? Kelas Kue mempunyai atribut name, menitMatang dan time, sedangkan jenis kue akan mempuyain atribut status dan atribut yang diturunkan dari Kue
// - How will the classes interact with each other? Kelas jenis kue akan dimasukkan dalam fungsi Oven dan dalam method bake()
// - Which classes will inherit from others, if any? Kelas jenis kue akan dapat inheritance dari Kue
//
//
// Your code here


function sleep (milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds) {
        break;
        }
    }
}
  

class Kue{
    constructor(name, menitMatang){
        this.name = name
        this.menitMatang = menitMatang
        this.status = 'mentah'
    }

}

class Coklat extends Kue{
    constructor(menitMatang){
        super('Kue Coklat', menitMatang)
    }
}

class Kacang extends Kue{
    constructor(menitMatang){
        super('Kue Kacang', menitMatang)
    }
}

class Keju extends Kue{
    constructor(menitMatang){
        super('Kue Keju', menitMatang)
    }
}

class Oven{
    constructor(){
        this.cookies  = []
    }

    addCookie(cookie){
        this.cookies.push(cookie)
        console.log(cookie.menitMatang);
        
    }
    bake(time){
        for(let i = 0; i<=time; i +=5){
            let penampung = ''
            for(let j = 0; j<this.cookies.length; j++){
                if(i == this.cookies[j].menitMatang){
                    this.cookies[j].status = 'matang'
                }
                else if(i >= this.cookies[j].menitMatang-5 && i < this.cookies[j].menitMatang){
                    this.cookies[j].status = 'hampir matang' 
                }
                else if(i > this.cookies[j].menitMatang){
                    this.cookies[j].status = 'gosong'
                }
            }
            for(let j = 0; j<this.cookies.length; j++){
                penampung += `${this.cookies[j].name}, menit ke ${i}: ${this.cookies[j].status} \n`
            }
            console.log(penampung);
        }
    }
}
let kacang = new Kacang(30);
let coklat = new Coklat(20);
let keju = new Keju(35);

let oven = new Oven();

oven.addCookie(coklat);
oven.addCookie(keju);


oven.bake(50)