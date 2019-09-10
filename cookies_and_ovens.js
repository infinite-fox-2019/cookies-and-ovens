class Oven {
    constructor() {
        this._cookies = [];
    };

    addCookie(cookieObj) {
        this._cookies.push(cookieObj);
    };

    bake(minute) {
        for (let i = 0;i <= minute; i+=5) {
            for (let j = 0;j<this._cookies.length;j++) {
                this._cookies[j].addTimeBake(5);
                console.log(this._cookies[j].status)
                
            }
            console.log('-----------------------')
        }
    };

}//

class Cookies {
    constructor() {
        this._timeBake = 0;
    };

    addTimeBake(time) {
        this._timeBake += time;
    };

}//

class ChocolateCookie extends Cookies {
    constructor() {
        super();
    };

    get status() {
        if (this._timeBake < 10) {
            return `Kue cokelat, menit ke ${this._timeBake} : mentah`;
        } else if (this._timeBake < 15) {
            return `Kue cokelat, menit ke ${this._timeBake} : hampir matang`;
        } else if (this._timeBake <= 20) {
            return `Kue cokelat, menit ke ${this._timeBake} : masak`;
        } else {
            return `Kue cokelat, menit ke ${this._timeBake} : hangus`;
        }
    };

}//

class PeanutCookie extends Cookies {
    constructor(timeBake = 30) {
        super()
    };

    get status() {
        if (this._timeBake < 20) {
            return `Kue kacang, menit ke ${this._timeBake} : mentah`;
        } else if (this._timeBake < 25) {
            return `Kue kacang, menit ke ${this._timeBake} : hampir matang`;
        } else if (this._timeBake <= 30) {
            return `Kue kacang, menit ke ${this._timeBake} : masak`;
        } else {
            return `Kue kacang, menit ke ${this._timeBake} : hangus`;
        }
    }

}//

class CheeseCookie extends Cookies {
    constructor(timeBake = 35) {
        super()
    };

    get status() {
        if (this._timeBake < 25) {
            return `Kue keju, menit ke ${this._timeBake} : mentah`;
        }else if (this._timeBake < 30) {
            return `Kue keju, menit ke ${this._timeBake} : hampir matang`;
        }else if (this._timeBake <= 35) {
            return `Kue keju, menit ke ${this._timeBake} : masak`
        }else {
            return `Kue keju, menit ke ${this._timeBake} : hangus`;
        }
    };

}//

let oven = new Oven();

oven.addCookie(new CheeseCookie());
oven.addCookie(new ChocolateCookie());
oven.addCookie(new PeanutCookie());
oven.bake(40)
