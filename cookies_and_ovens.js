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
    constructor() {
        this.cookies = [];
    }
    addCookies(cookie) {
        this.cookies.push(cookie);
        return this;
    }
    bake(maxtimeBake) {
        for(let j = 0; j<this.cookies.length; j++) {
            for (let i = 0; i < maxtimeBake; i+=5) { 
                if (i >= this.cookies[j].maxTime + 5) {
                    this.cookies[j].status = 'hangus';
                } else if (i >= this.cookies[j].maxTime) {
                    this.cookies[j].status = 'matang';
                } else if (i >= this.cookies[j].maxTime - 5) {
                    this.cookies[j].status = 'hampir matang';
                }
                console.log(`${this.cookies[j].name}, menit ke ${i} : ${this.cookies[j].status}`);
            }
        }
    }
}
class Cookies {
    constructor(name,maxTime) {
    this.name = name;
    this.maxTime = maxTime;
    this.status = 'mentah';
    }
}
class ChocoCookies extends Cookies {
    constructor() {
        super('Chocolate Cookies',20);
    }
}
class BanannaCookies extends Cookies {
    constructor() {
        super('Banana Cookies',30);
    }
}
let oven = new Oven();
let coklat = new ChocoCookies();
let banana = new BanannaCookies();
oven.addCookies(coklat).addCookies(banana);
oven.bake(50);