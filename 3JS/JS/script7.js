// v2 - video 2
// v3 - video 3

// Will be seen only in console F12:
//(0:00: v2)
console.log("Hello from JS");

//(0:09: v2)
console.log(document.getElementById(`user`));

//(0:15: v2)
document.getElementById(`user`).innerHTML = `<h2>Hello from innerHTML</h2>`;
document.write("Document .write");

window.onload = () => {
    // document.write(`Document`);
}
// window.alert("Alert");

console.warn(`Warning`);
console.error(`Error`);
console.info(`Info`);

var a;
var b;
const C = 'hello const C';

// comment
/* coment 
coment  */

function hello(a, b) {
    console.log(a+b);
}
hello(2, 3);
hello(5, 8);
hello(2, 8);

a = 2;
b = `b`;
c = {};

class Hello {
    constructor(name){
        this.name = name;
    }
    sayName(){
        console.log(this.name);
    }
}

class Hello2 extends Hello {
    constructor(name){
        super(name);
    }

}


const user = new Hello(`John`);
const user2 = new Hello(`Jane`);
const user3 = new Hello(`Helen`);


console.log(user.name);
// console.log(user2.name);

// user.prototype.sayName = function(){
//     console.log(this.name);
// }

user2.sayName();
