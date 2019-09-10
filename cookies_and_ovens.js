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
        this.kumpulanKue = []
    }
    bake(waktu){
        for(let j = 0 ; j<this.kumpulanKue.length ; j++){
            for(let i = 5 ; i<=waktu ; i+=5){
                if(i >= this.kumpulanKue[j].hangus){
                    console.log(`${this.kumpulanKue[j].nama}, menit ke ${i} : hangus`);
                }
                else if(i < this.kumpulanKue[j].hangus && i >= this.kumpulanKue[j].matang){
                    console.log(`${this.kumpulanKue[j].nama}, menit ke ${i} : matang`);
                }
                else if(i < this.kumpulanKue[j].matang && i >= this.kumpulanKue[j].hampirMatang){
                    console.log(`${this.kumpulanKue[j].nama}, menit ke ${i} : hampir matang`);
                }
                else if(i <= this.kumpulanKue[j].mentah){
                    console.log(`${this.kumpulanKue[j].nama}, menit ke ${i} : mentah`);
                }
            }
            console.log("---------------------------------------------------------");
        }
    }
    addcookies(nama){
        if (nama == "kueCoklat"){
            this.kumpulanKue.push(new kueCoklat)
        }
        else if (nama == "kueKacang"){
            this.kumpulanKue.push(new kueKacang)
        }
        else if (nama == "kueKeju"){
            this.kumpulanKue.push(new kueKeju)
        }
    }
}

class Cookies {
    constructor(nama, mentah, hampirMatang, matang, hangus){
        this.nama = nama
        this.mentah = mentah
        this.hampirMatang = hampirMatang
        this.matang = matang
        this.hangus = hangus
    }
}

class kueCoklat extends Cookies{
    constructor(nama, mentah, hampirMatang, matang, hangus){
        super("kue coklat", 10, 15, 20, 25)
    }
}

class kueKacang extends Cookies{
    constructor(nama, mentah, hampirMatang, matang, hangus){
        super("kue kacang", 20, 25, 30, 35)
    }
}

class kueKeju extends Cookies{
    constructor(nama, mentah, hampirMatang, matang, hangus){
        super("kue keju", 25, 30, 35, 40)
    }
}

let masak = new Oven()
masak.addcookies("kueCoklat")
masak.addcookies("kueKacang")
masak.addcookies("kueKeju")
masak.bake(30)