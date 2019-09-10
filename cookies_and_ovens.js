/*
Answer These Questions:

- What are essential classes?
--> akan membutuhkan 2 essential classes, class Oven dan class Cooke

- What attributes will each class have?
--> setiap class kue akan memiliki properti waktu yang dibutuhkan agar kue tsb matang, nama kue dan method status yang menunjukkan status kue tersebut

- What interface will each class provide?

- How will the classes interact with each other?
--> interaksi antara oven dengan kue adalah aggegration dimana kue akan dimasukkan kedalam array kumpulan kue didalam oven

- Which classes will inherit from others, if any?
--> dalam kasus ini class kue akan mewariskan properti dari class Cookie
*/

//Your code here
class Oven {
  constructor() {
    this.Kue = []
  }

  tambahKue(namakue) {
    this.Kue.push(namakue)
  }

  bake(time){
    for (let i = 0; i<=time;i+=5){
      for (let j = 0 ; j<this.Kue.length ; j++){
        this.Kue[j].time = i
        this.Kue[j].status
      }
      console.log("---------------")
    }
  }
}

class Cookie{
  constructor(nama,waktuMateng){
    this.nama = nama
    this.waktuMateng = waktuMateng
    this.time = 0
  }
  get status(){
    if (this.time === this.waktuMateng){
      console.log(`${this.nama}, menit ke ${this.time} : sudah mateng`)
    } else if (this.time > this.waktuMateng){
      console.log(`${this.nama}, menit ke ${this.time} : hangus`);
    }  else if (this.time < this.waktuMateng){
      console.log(`${this.nama}, menit ke ${this.time} : masih belum mateng`);
    }
  }

}



const KueCoklat = new Cookie("KueCoklat",20)
const KueKacang = new Cookie("KueKacang",30)
const KueKeju = new Cookie("KueKeju",35)

let masak = new Oven()
masak.tambahKue(KueCoklat)
masak.tambahKue(KueKacang)
masak.tambahKue(KueKeju)
masak.bake(40)
// console.log(masak)

