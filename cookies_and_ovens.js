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
    constructor(waktuMasak, waktuHampirMatang,  waktuHangus){
        this.time = 0
        this.waktuMasak = waktuMasak
        this.waktuHampirMatang = waktuHampirMatang
        this.waktuHangus = waktuHangus
    }

    get status() {
        if(this.time >= this.waktuHangus) return 'hangus'
        else if(this.time >= this.waktuMasak) return 'matang'
        else if(this.time >= this.waktuHampirMatang) return 'hampir matang'
        else return 'mentah'
    }

    addTime(inputTime){
        this.time += inputTime
    }

}

class Coklat extends Kue{
    constructor(){
        super(20, 15,25)
    }
}

class Kacang extends Kue{
    constructor(){
        super(30, 25, 35)       
    }
}

class Keju extends Kue{
    constructor(){
        super(35, 30, 40)
    }
}

class Oven{
    constructor(){
        this.cookies = []
    }
    addCookie(cookie){
        switch (cookie){
            case 'coklat':
                this.cookies.push(new Coklat())
                break
            case 'kacang':
                this.cookies.push(new Kacang())
                break
            case 'keju':
                    this.cookies.push(new Keju())
                    break
            default: return 'kue tidak tersedia'
        }
    }
    masak(waktu){
        this.cookies.forEach(cookie => {
            for(let i = 0; i <= waktu; i+=5){
                cookie.addTime(5)
                console.log(`kue ${cookie.constructor.name}, menit ke ${i} : ${cookie.status}`);
            }
        });
    }
}

let oven = new Oven()
oven.addCookie('coklat')
oven.masak(20)