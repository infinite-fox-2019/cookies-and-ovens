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

class Oven{

    bake(kue, waktu){
        for(let i = 0; i<=waktu; i+= 5){
            for(let j = 0; j<kue.length; j++){
                kue[j].time = i
                console.log(`${kue[j].name}, menit ke ${i} : ${kue[j].status()}`)
            }
        }
    }
}

class Kue{
    constructor(nama, matang){
        this.name=nama
        this.time=0
        this.cooked=matang
    }

    
    status(){
        let hasil = ""
        if(this.time>=this.cooked+5){
            hasil = "hangus"
        }else if(this.time>=this.cooked){
            hasil = "matang"
        }else if(this.time>=this.cooked-5){
            hasil = "belum matang"
        }else{
            hasil = "mentah"
        }
        return hasil
        
    }
}

class Coklat extends Kue{
    constructor(){
        super("Kue Coklat",20)

    }
}

class Kacang extends Kue{
    constructor(){
        super("Kue Kacang",30)
    }
}

class Keju extends Kue{
    constructor(){
        super("Kue Keju",35)
    }
}


const oven = new Oven()
const coklat = new Coklat()
const kacang = new Kacang()
const keju = new Keju()

oven.bake([coklat,kacang,keju], 40)
