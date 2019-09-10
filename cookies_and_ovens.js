class Oven {
    constructor () {
      this.cakeBakingTray = []
    }
  
    addCake (cake) {
      this.cakeBakingTray.push(cake)
      return this
    }
  
    bake (timer) {
      // looping pertambahan timer setiap 5 menit

      for (let i = 0; i <= timer; i += 5) {
        console.log(`\n Time: ${i} minutes \n`)
        for (let j = 0; j < this.cakeBakingTray.length; j++) {
          const cake = this.cakeBakingTray[j]
          cake.checkStatus(i)
          console.log(`${cake.name}, minutes to ${i} : ${cake.status}`)
        }
      }
    }
}

class Cake {
    constructor (name = 'Cake', cookedTime = 10, status = 'uncooked') {
      this.name = name
      this.cookedTime = cookedTime
      this.status = status
    }
  
    checkStatus (time) {
      if (time > this.cookedTime) {
        this.status = 'burnt'
      } else if (time === this.cookedTime) {
        this.status = 'well-done'
      } else if (time < this.cookedTime && time >= this.cookedTime - 5) {
        this.status = 'half-cooked'
      }
    }
}
  
  class ChocolateCake extends Cake {
    constructor () {
      super('Chocolate cake', 20)
      this.containChocolate = true
    }
    // waktu panggang kue cokelat : 20 menit
  }
  
  class PeanutCake extends Cake {
    constructor () {
      super('Peanut cake', 30)
      this.isCrispy = true
    }
    // waktu panggang kue kacang : 30 menit
  }
  
  class CheeseCake extends Cake {
    constructor () {
      super('Cheese cake', 35)
      this.containCheese = true
    }
    // waktu panggang keju : 35 menit
  }
  
  const chococolateCake = new ChocolateCake()
  const cheeseCake = new CheeseCake()
  const peanutCake = new PeanutCake()
  
  const oven = new Oven()
  oven.addCake(chococolateCake).addCake(cheeseCake).addCake(peanutCake)
  oven.bake(35)
  