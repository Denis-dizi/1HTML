// v2 - video 2
// v3 - video 3

// Will be seen only in console F12:
//(0:00: v2)
console.log("Hello from JS");

//(0:09: v2)
console.log(document.getElementById(`user`));

//(0:15: v2)
document.getElementById(`user`).innerHTML = `<h4>Hello from innerHTML</h4>`;

//(0:18: v2)
document.write("<p>Document .write</p>");
console.log(`= = = = = = = = = = = (¬‿¬) (ᵔᴥᵔ) }<((((°>`);// ASCII Images

//(0:18: v2)
//unusable because owerwrites the document
//window.onload = () => {
    // document.write(`Document`);
//}

//(0:20: v2)
// unusable cos stopping the script 
// window.alert("Hello from Alert");

//(0:22: v2)
console.log(`Log`);
console.warn(`Warning`);
console.error(`Error`);
console.info(`Info`);
console.log(`= = = = = = = = = = = ಠ_ಠ`); //https://textfac.es/

//(0:24: v2)
var a;
var b;
//(0:27: v2) const can not be reasigned. Browser will show error
const C = 'hello const C';
// const C = `reasign conct C`;

//(:30:) 
// comment
/* coment 
coment  */
// Ctrl+/, Shift+Alt+a. //, /* */.

//(:33: v2)
//a, b - parametrs for function. max 3 parametrs - best practice.
function hello(a, b) {
    console.log(a+b);
}
// call the function
hello(2, 3);
hello(5, 8);
hello(2, 8);
console.log(`= = = = = = = = = = = ¯\_(ツ)_/¯ `); //Shrug Emoji

// (:37: v2)
a = 2;
console.log(a);
b = `b`;
console.log(b);
c = {};
console.log(c);
console.log(`= = = = = = = = = = = `);


// (:38: v2) OOP:
class Hello {
    constructor(name){
        this.name = name;
    }
    sayName(){
        console.log(this.name);
        console.log(`sayName is called`);
    }
}

// (0:52: v2)
class Hello2 extends Hello {
    constructor(name){
        super(name);
    }

}

const user = new Hello(`John`);
const user2 = new Hello(`Jane`);
const user3 = new Hello2(`Helen`);


console.log(user.name);
// console.log(user2.name);

//(0:42: v2)
// user.prototype.sayName = function(){
//     console.log(this.name);
// }

user2.sayName();
//end of OOP
console.log(`= = = = = = = = = = = `);