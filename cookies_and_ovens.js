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

class Cake {
    constructor ( cakeName , time ) {
        this.cakeName = cakeName ;
        this.time = time;
        this.start = 0;
        this.status = '';
    }

    baking () {
        this.start += 5
        if ( this.start > this.time ) this.status = 'Hangus!';
        else if ( this.start === this.time ) this.status = 'Matang!';
        else if ( this.start == this.time -5 ) this.status = 'Hampir Matang!';
        else this.status = 'Mentah!';
    }
}

class Cokelat extends Cake {
    constructor ( cakeName ) {
        super ( cakeName , 20 );
    }
}

class Kacang extends Cake {
    constructor ( cakeName ) {
        super ( cakeName , 30 );
    }
}

class Keju extends Cake {
    constructor ( cakeName ) {
        super ( cakeName , 35 );
    }
}

const kue1 = new Cokelat ( 'Kue Cokelat' );
const kue2 = new Kacang ( 'Kue Kacang' );
const kue3 = new Keju ( 'Kue Keju' );

console.log(' ============================================================================');
console.log(`Make ${kue1.cakeName}`);

for (  let i=0; i<kue1.time+5; i+=5 ) {
    kue1.baking()
    console.log(`${kue1.cakeName}, menit ke ${kue1.start} : ${kue1.status}`)
}

console.log(' ============================================================================');
console.log(`Make ${kue2.cakeName}`);

for (  let i=0; i<kue2.time+5; i+=5 ) {
    kue2.baking()
    console.log(`${kue2.cakeName}, menit ke ${kue2.start} : ${kue2.status}`)
}

console.log(' ============================================================================');
console.log(`Make ${kue3.cakeName}`);

for (  let i=0; i<kue3.time+5; i+=5 ) {
    kue3.baking()
    console.log(`${kue3.cakeName}, menit ke ${kue3.start} : ${kue3.status}`)
}

