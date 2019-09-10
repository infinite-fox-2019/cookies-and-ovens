// Answer These Questions:
//
// - What are essential classes?
// Answer: Kue and Oven, I can make KueCoklat, KueKeju, and KuePeanut if I want, but I think it's not necessary
// - What attributes will each class have?
// Answer: Class-kue will have raw-time, almost done-time, done-time, overcooked-time, and class-oven will have a method that require cake's (object from class-kue) information
// - What interface will each class provide?
// Answer: Class-kue will display the cake's name and the minutes it will cooked on oven, and class-oven will display the process of cook (method)
// - How will the classes interact with each other?
// Answer: Put cake's information (attribute) on class-oven, then oven will start to cook (oven's method)
// - Which classes will inherit from others, if any?
// Answer: Nothing


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
// const KueCoklat = new Kue('Kue Coklat', 20)
// const KueKacang = new Kue('Kue Kacang', 20)
// const KueKeju = new Kue('Kue Keju', 20)
// console.log(KueCoklat.display())
// console.log(KueKacang.display())
// console.log(KueKeju.display())

//Release 1
const KueCoklat = new Kue('Kue Coklat', 0, 15, 20, 25)
const KueKacang = new Kue('Kue Kacang', 0, 15, 20, 25)
const KueKeju = new Kue('Kue Keju', 0, 15, 20, 25)

Oven.cook(KueCoklat)
console.log()
Oven.cook(KueKacang)
console.log()
Oven.cook(KueKeju)