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

class Cookie {
    constructor (name, maxDuration) {
        this._name = name;
        this._status = 'mentah';
        this.maxDuration = maxDuration;
        this.duration = 0;
    }

    get name () {
        return this._name;
    }

    get status () {
        return this._status;
    }

    addDuration (addedTime) {
        this.duration += addedTime;
        if (this.duration < this.maxDuration && this.duration >= this.maxDuration-5) {
            this._status = 'hampir matang';
        } else if (this.duration === this.maxDuration) {
            this._status = 'matang';
        } else if (this.duration >= this.maxDuration+5) {
            this._status = 'hangus';
        }
    }

}

class Chocolate extends Cookie {
    constructor(name) {
        super(name, 20);
    }
}

class Cheese extends Cookie {
    constructor(name) {
        super(name, 35);
    }
}

class Peanut extends Cookie {
    constructor(name) {
        super(name, 30);
    }
}

class Oven {
    constructor() {
        this._cookies = []
        this.kueMatang = []
        this.kueHangus = []
    }

    showCookies() {
        for (let i = 0; i < this._cookies.length; i++) {
            console.log(`${this._cookies[i].name} | Status : ${this._cookies[i].status}`);   
        }
    }

    bake (duration) {
        for (let i = 0; i < this._cookies.length; i++) {
            for (let j = 5; j <= duration; j+=5) {
                this._cookies[i].addDuration(5);
                console.log(`${this._cookies[i].name}, menit ke ${j} : ${this._cookies[i].status}`);
            }
            console.log('');
        }
    }

    inputCookie(cookie, time) {
        this._cookies.push(cookie);
    }

    servedCookies () {
        for (let i = 0; i < this._cookies.length; i++) {
            if (this._cookies[i].status === 'matang') {
                this.kueMatang.push(this._cookies[i])
            }
        }
        for (let i = 0; i < this._cookies.length; i++) {
            if (this._cookies[i].status === 'matang') {
                this._cookies.splice(i, 1)
                i--
            }
        }
        for (let i = 0; i < this.kueMatang.length; i++) {
            console.log(this.kueMatang[i].name);
        }
    }

    rejectedCookies () {
        for (let i = 0; i < this._cookies.length; i++) {
            if (this._cookies[i].status === 'hangus') {
                this.kueHangus.push(this._cookies[i])
            }
        }
        for (let i = 0; i < this._cookies.length; i++) {
            if (this._cookies[i].status === 'hangus') {
                this._cookies.splice(i, 1)
                i--
            }
        }
        for (let i = 0; i < this.kueHangus.length; i++) {
            console.log(this.kueHangus[i].name);
        }
    }
}

//DRIVER CODE
const oven = new Oven();
const kueCoklat = new Chocolate('kue coklat');
const kueKeju = new Cheese('kue keju');
const kueKacang = new Peanut('kue kacang');

oven.inputCookie(kueCoklat); // input kue kedalam oven
oven.inputCookie(kueKeju);
oven.inputCookie(kueKacang);

console.log('=========== status kue ===========');
oven.showCookies();
console.log('');
console.log('');

console.log('=========== status kue ketika dioven ===========');
oven.bake(30)
console.log('');
console.log('');

console.log('=========== kue disajikan ===========');
oven.servedCookies()
console.log('');

console.log('=========== kue yang hangus ===========');
oven.rejectedCookies()
console.log('');

console.log('=========== status kue ===========');
oven.showCookies();
console.log('');

oven.inputCookie(kueKeju); // memasukan/menambahkan kue baru kedalam oven

console.log('=========== status kue ketika dioven ===========');
oven.bake(10)
console.log('');
console.log('');

console.log('=========== kue disajikan ===========');
oven.servedCookies()
console.log('');

console.log('=========== kue yang hangus ===========');
oven.rejectedCookies()
console.log('');