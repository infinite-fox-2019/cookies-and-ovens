// Answer These Questions:
//
// - What are essential classes?
//  Ans: Kue and Oven. The rest are optional.
// - What attributes will each class have?
//  Ans: Name, and time for each status.
// - What interface will each class provide?
// - How will the classes interact with each other?
//  Ans: The oven class will receive all information and attributes of cakes,
//      and determine the process flow of each cakes thus starting to cook.
// - Which classes will inherit from others, if any?
//  Ans: All types of cakes inherit the Cake master class.

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
                if(j >= this.cookies[i].timeFinished + 5) {
                    this.cookies[i].status = 'overcooked';
                } else if(j >= this.cookies[i].timeFinished) {
                    this.cookies[i].status = 'well done';
                } else if(j >= this.cookies[i].timeFinished - 5) {
                    this.cookies[i].status = 'almost done';
                }
                console.log(`${this.cookies[i].name} menit ke ${j} : ${this.cookies[i].status}`);
            }
        }
    }
}

class Cookie {
    constructor(name, timeFinished) {
        this.name = name;
        this.timeFinished = timeFinished;
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