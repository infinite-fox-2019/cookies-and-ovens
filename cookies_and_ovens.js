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
    constructor(off) {
        this.listKue = [];
        this.timeOvenOff = off;
    }
    set addKue(kue) {
        this.listKue.push(kue);
    }
    get result() {
        let resultStatus = '';
        for (let i = 0; i < this.listKue.length; i++) {
            let kueNow = this.listKue[i];
            for (let j = 5; j <= this.timeOvenOff; j += 5) {
                if (j === kueNow['_cookTime']) {
                    resultStatus += `Kue ${kueNow['_name']}, menit ke ${j} : ${kueNow['_status']}`;
                    resultStatus += '\n';
                } else if (j > kueNow['_cookTime']) {
                    resultStatus += `Kue ${kueNow['_name']}, menit ke ${j} : Hangus`;
                    resultStatus += '\n';
                } else if (kueNow['_cookTime'] - j === 5) {
                    resultStatus += `Kue ${kueNow['_name']}, menit ke ${j} : Hampir Matang`;
                    resultStatus += '\n';
                } else {
                    resultStatus += `Kue ${kueNow['_name']}, menit ke ${j} : Mentah`;
                    resultStatus += '\n';
                }
            }
            resultStatus += '\n';
        }
        return resultStatus;
    }
}

class JenisKue {
    constructor(name, time, status) {
        this._name = name;
        this._cookTime = time;
        this._status = status;
    }
}

class Cokelat extends JenisKue {
    constructor() {
        super('cokelat', 20, 'matang');
    }
}

class Kacang extends JenisKue {
    constructor() {
        super('kacang', 15, 'matang');
    }
}

class Keju extends JenisKue {
    constructor() {
        super('keju', 30, 'matang');
    }
}


function setup() {
    const kueCokelat = new Cokelat();
    const kueKacang = new Kacang();
    const kueKeju = new Keju();
    const masak = new Oven(30); // input lama mengoven
    masak.addKue = kueCokelat;
    masak.addKue = kueKacang;
    masak.addKue = kueKeju;
    console.log(masak.result)
}

setup();