console.log("Hello from JS!");

console.log(document.getElementById(`user`));

document.getElementById(`user`).innerHTML = `<h1>Hello from inner HTML</h1>`;
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
