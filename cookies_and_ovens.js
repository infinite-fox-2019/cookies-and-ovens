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
        this.time = 0
    }
}

class Coklat extends Kue{
    constructor(menitMatang){
        super('Kue Coklat', menitMatang)
        this.status = 'mentah'
    }
}

class Kacang extends Kue{
    constructor(menitMatang){
        super('Kue Kacang', menitMatang)
        this.status = 'mentah'
    }
}

class Keju extends Kue{
    constructor(menitMatang){
        super('Kue Keju', menitMatang)
        this.status = 'mentah'
    }
}

class Oven{
    bake(kue, time){
        for(let i = 0; i<=time; i += 5){
            kue.status = 'mentah';
            if(i == kue.menitMatang){
                kue.status = 'matang'
            }
            else if(i>= kue.menitMatang-5 && i<kue.menitMatang){
                kue.status = 'hampir matang'
            }
            else if(i>kue.menitMatang){
                kue.status = 'gosong'
            }
            console.log(`${kue.name}, menit ke ${i}: ${kue.status}`);
            sleep(200);
        }
    }
}
let kacang = new Kacang(30);
let coklat = new Coklat(20);
let keju = new Keju(35);
let oven = new Oven();

oven.bake(keju, 40)