// Answer These Questions:
//
// - What are essential classes?
// Answer: Kue and Oven
// - What attributes will each class have?
// Answer: KueCoklat-class, KueKacang-class, and KueKeju-class will have raw-time, almost done-time, done-time, overcooked-time (inherited from Kue-Class), and Oven-class will have a method that require cake's information
// - How will the classes interact with each other?
// Answer: Put cake's (KueCoklat and friends) information (attribute) on Oven-Class, then oven will start to cook (oven's method)
// - Which classes will inherit from others, if any?
// Answer: KueCoklat-class, KueKacang-class, and KueKeju-class will inherit from Kue-class


// Your code here

class Kue {
    constructor(name, waktu, waktu_hampir_matang, waktu_matang, waktu_hangus) {
        this.name = name
        this.waktu = waktu 
        this.waktu_hampir_matang = waktu_hampir_matang
        this.waktu_matang = waktu_matang
        this.waktu_hangus = waktu_hangus
        this.status = 'mentah'
    }

    display() { //For Release 0
        return `${this.name}, waktu memanggang di dalam oven ${this.waktu} menit`
    }
}

class KueCoklat extends Kue {
    constructor(name, waktu, waktu_hampir_matang, waktu_matang, waktu_hangus) {
        super(name, waktu, waktu_hampir_matang, waktu_matang, waktu_hangus)
    }
}

class KueKacang extends Kue {
    constructor(name, waktu, waktu_hampir_matang, waktu_matang, waktu_hangus) {
        super(name, waktu, waktu_hampir_matang, waktu_matang, waktu_hangus)
    }
}

class KueKeju extends Kue {
    constructor(name, waktu, waktu_hampir_matang, waktu_matang, waktu_hangus) {
        super(name, waktu, waktu_hampir_matang, waktu_matang, waktu_hangus)
    }
}

class Oven {
    static cook(kue) {
        for (let i = 5; i <= kue.waktu_hangus; i+=5) {
            if (i >= kue.waktu && i < kue.waktu_hampir_matang) {
                kue.status = 'mentah'
                console.log(`${kue.name}, menit ke ${i}: ${kue.status}`)
            } else if (i >= kue.waktu_hampir_matang && i < kue.waktu_matang) {
                kue.status = 'hampir matang'
                console.log(`${kue.name}, menit ke ${i}: ${kue.status}`)
            } else if (i >= kue.waktu_matang && i < kue.waktu_hangus) {
                kue.status = 'matang'
                console.log(`${kue.name}, menit ke ${i}: ${kue.status}`)
            } else if (i === kue.waktu_hangus) {
                kue.status = 'hangus'
                console.log(`${kue.name}, menit ke ${i}: ${kue.status}`)
            }
        }
    }

}

//Release 0
// const KCoklat = new KueCoklat('Kue Coklat', 20)
// const KKacang = new KueKacang('Kue Kacang', 20)
// const KKeju = new KueKeju('Kue Keju', 20)
// console.log(KCoklat.display())
// console.log()
// console.log(KKacang.display())
// console.log()
// console.log(KKeju.display())

//Release 1 dan 2
const KCoklat = new KueCoklat('Kue Coklat', 0, 15, 20, 25)
const KKacang = new KueKacang('Kue Kacang', 0, 15, 20, 25)
const KKeju = new KueKeju('Kue Keju', 0, 15, 20, 25)

Oven.cook(KCoklat)
console.log()
Oven.cook(KKacang)
console.log()
Oven.cook(KKeju)