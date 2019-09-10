// Answer These Questions:
//
// - What are essential classes?
// Cake, PeanutCake, ChocoCake, CheeseCake Oven?
// - What attributes will each class have?
// Cake has heat_time
// - What interface will each class provide?
// 
// - How will the classes interact with each other?
// 
// - Which classes will inherit from others, if any?
// PeanutCake, ChocoCake, CheeseCake will inherit Cake
//
//
// Your code here
class Cake {
    constructor(heatTime) {
        this.heatTime = heatTime;
        this.status = 'mentah';
    }
}

class PeanutCake {
    constructor() {
        super(20);
    }
}

class ChocoCake {
    constructor() {
        super(30);
    }
}

class CheeseCake {
    constructor() {
        super(35);
    }
}

class Oven {
    constructor() {
        this.cakes = []
    }

    heatCakes() {
        
    }
}
