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
    constructor(name, time_needed) {
        this.name = name
        this.time_raw = time_needed - 10
        this.time_almost_done = time_needed - 5
        this.time_done = time_needed
        this.time_overcooked = time_needed + 5
        this.status
    }

    statement() {
        console.log(`${this.name} takes ${this.time} minutes`)
    }
}

class Oven{
    static cook(cake) {
        let time_raw = cake.time_raw
        let time_almost_done = cake.time_almost_done
        let time_done = cake.time_done
        let time_overcooked = cake.time_overcooked
        let status = ''

        for (let i = 5; i <= time_overcooked; i += 5) {
            if (i <= time_raw) {
                status = 'mentah'
            }
            else if (i <= time_almost_done) {
                status = 'hampir matang'
            }
            else if (i <= time_done) {
                status = 'matang'
            }
            else if (i <= time_overcooked) {
                status = 'hangus'
            }
            console.log(`${cake.name}, menit ke ${i} : ${status}`)
        }
    }
}


const Kue_Coklat = new Kue('Kue Coklat', 20)
const Kue_Kacang = new Kue('Kue Kacang', 30)
const Kue_Keju = new Kue('Kue Keju', 35)
Oven.cook(Kue_Coklat)
console.log(' ')
Oven.cook(Kue_Kacang)
console.log(' ')
Oven.cook(Kue_Keju)