class Oven {

    bake(kue, time) {

        for (let i = 0; i < time; i += 5) {
            for (let j = 0; j < kue.length; j++) {
                kue[j].time = i
                console.log(`${kue[j].name} menit ke ${i} : ${kue[j].status}`);
            }
            console.log('++++++++++++++++++++++++++++++++++\n');
        }

    }

}

class Kue {
    constructor(name, cookedTime) {
        this._name = name
        this._time = 0
        this._cookedTime = cookedTime
    }

    get name() {
        return this._name
    }

    set time(value) {
        return this._time = value
    }

    get status() {
        let output = ''
        let hangus = this._cookedTime * 1.5
        let matang = this._cookedTime * 1
        let hampirMatang = this._cookedTime * 0.95
        if (this._time >= hangus) {
            output = 'hangus'
        } else if (this._time >= matang) {
            output = 'matang'
        } else if (this._time >= hampirMatang) {
            output = 'hampir matang'
        } else {
            output = 'mentah'
        }
        return output

    }
}

class KueCoklat extends Kue {
    constructor() {
        super('Kue Coklat', 20)
    }

}

class KueKacang extends Kue {
    constructor() {
        super('Kue Kacang', 30)
    }

}

class KueKeju extends Kue {
    constructor() {
        super('Kue Keju', 35)
    }

}

const oven = new Oven()
const coklat = new KueCoklat()
const keju = new KueKeju()
const kacang = new KueKacang()

oven.bake([coklat, keju, kacang], 45)

// console.log(coklat);
// console.log(keju);
// console.log(kacang);


