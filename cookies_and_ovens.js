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

    bake(time) {
        for(let i = 0; i < this.cookies.length; i++) {
            for(let j = 0; j < time; j += 5) {
                if(j >= this.cookies[i].maxTime + 5) {
                    this.cookies[i].status = 'burnt';
                } else if(j >= this.cookies[i].maxTime) {
                    this.cookies[i].status = 'cooked';
                } else if(j >= this.cookies[i].maxTime - 5) {
                    this.cookies[i].status = 'almost done';
                }
                console.log(`${this.cookies[i].name} menit ke ${j} : ${this.cookies[i].status}`);
            }
        }
    }
}

class Cookie {
    constructor(name, maxTime) {
        this.name = name;
        this.maxTime = maxTime;
        this.status = 'raw';
    }
}

class ChocolateCookie extends Cookie {
    constructor() {
        super('Choko', 10)
    }
}

class CheeseCookie extends Cookie {
    constructor() {
        super('Cheez', 20)
    }
}

let stove = new Oven();

let goodTime = new ChocolateCookie();
let ritz = new CheeseCookie();
stove.addCookies(goodTime).addCookies(ritz);
stove.bake(30);