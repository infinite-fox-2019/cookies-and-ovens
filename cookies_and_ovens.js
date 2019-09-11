class Cookies {
    constructor(name){
        this._name = name;
        this._bakeTime = 0;
        if(name == "Kue cokelat"){
            this._waktuMatang = 20;
        } else if (name == "Kue keju"){
            this._waktuMatang = 30;
        } else if(name == "Kue kacang"){
            this._waktuMatang = 35;
        } else {
            this._waktuMatang = 25;
        }
    }

    get status(){
        if(this._bakeTime === this._waktuMatang){
            return 'matang';
        } else if (this._bakeTime+5 == this._waktuMatang){
            return "hampir matang";
        } else if (this._bakeTime < this._waktuMatang){
            return "mentah";
        } else {
            return "gosong";
        }
    }
}
class Oven {
    constructor(){
        this.cookies = [];
    }

    addCookie(cookie){
        this.cookies.push(cookie)
    }

    bake(waktu){
        for(let i = 0; i < this.cookies.length; i++){
            while (this.cookies[i]._bakeTime < waktu){
                this.cookies[i]._bakeTime += 5;
                console.log(`${this.cookies[i]._name},menit ke ${this.cookies[i]._bakeTime} : ${this.cookies[i].status}`);
            }
            // console.log(this.cookies._)
            console.log(`Sudah selesai memanggang, ${this.cookies[i]._name} yang kamu masak ${this.cookies[i].status}`)
        }
    }
} 
const kueKacang = new Cookies("Kue kacang");
const kueCokelat = new Cookies("Kue cokelat");
const kueKeju = new Cookies("Kue keju");

const oven = new Oven();

oven.addCookie(kueKeju);
oven.addCookie(kueCokelat);
oven.addCookie(kueKacang);

oven.bake(40);