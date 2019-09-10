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
class Cookies {
    constructor(name){
        this._name = name;
        this._status = "mentah";
    }
}
class Oven {
    constructor(name){
        this._name = name;
        this._waktuAwal = 0;
        if(name._name == "Kue cokelat"){
            this._waktuMatang = 20;
        } else if(name._name == "Kue kacang"){
            this._waktuMatang = 30;
        } else if(name._name == "Kue keju"){
            this._waktuMatang = 35;
        } else {
            this._waktuMatang = 40;
        }
    }
    bake(waktu){
        while(this._waktuAwal < waktu){
            this._waktuAwal += 5;
            if(this._waktuAwal+5 == this._waktuMatang){
                this._name._status = "hampir matang"
            } else if (this._waktuAwal == this._waktuMatang){
                this._name._status = "matang";
            } else if (this._waktuAwal < this._waktuMatang){
                this._name._status = "mentah";
            } else {
                this._name._status = "gosong";
            }
            console.log(`${this._name._name},menit ke ${this._waktuAwal} : ${this._name._status}`);
        }
    }
} 
const kueKacang = new Cookies("Kue kacang");
const kueCokelat = new Cookies("Kue cokelat");
const kueKeju = new Cookies("Kue keju");
const panggangKueCokelat = new Oven(kueCokelat);
const panggangKueKacang = new Oven(kueKacang);
const panggangKueKeju = new Oven(kueKeju);
const statusKueCokelat = panggangKueCokelat.bake(30);
const statusKueKeju = panggangKueKeju.bake(40);
const statusKueKacang = panggangKueKacang.bake(30);
console.log(statusKueCokelat);
console.log(statusKueKacang);
console.log(statusKueKeju);
