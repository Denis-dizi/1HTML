// WD5D1
// 2020.10.19

//Repeat W4D3

let obj = {test: 1, test1: 2};
Object.values(obj);


// let.obj1 = Object.create({});
// obj1;
let arr = new Array();
arr;

function MyArray(...params) {
    const arr = []
    params.forEach((val)=>{
        arr.push(val)
    })
    return arr;
}

//Create your own prototype
// function Food (name, price, amount) {
// }

function Food(nem, price, amount) {
    this.name = name;
    this.price = price;
    this.amount = amount;
}


let pizza = new Food ("pizza", 7, 3);
// pizza.getTotalSum();

let burger = new Food ("burger", 5, 30);

//DOM
//(0:47:)

//localStorage
// (0:54:)

//Window
// (0:59)
let win = window.open("", "test", {targe: "blank"})
// win.resizeTo(500, 500);


let win2 = window.open("", "", "");
// win2.document;

// win2.document.write('<h1 id="title">I\'m a title</h1>')

// win2.document.getElementById

// [0].addEventListener('hover', function(e) {
//     console.log(e);
// })

// let win3 = window.open();
// win3.document.write("<button>Click me to close</button>")

// win3.document.getElementsByTagName("button")[0].addEventListener("click", function(){
//     win3.close();
// })


// = = =  Task = = = 
const userNames = [];
userNames.push("Ed");
userNames.push("Jon");
userNames.push("Jim");
userNames.push("bill");

let win4 = window.open();

userNames.forEach(function(value, index) {
    win4.document.write("<h1>Element in array with" + index + " is " +value +"</h1>");
})

win4.document;
win4.document.getElementsByTagName("h1");
Object.values(win4.document.getElementsByTagName("h1"));

win4.document.getElementsByTagName("h1").forEach();

win4.document.getElementsByTagName("h1")[0].classList;
win4.document.getElementsByTagName("h1")[0].classList.add("title");
win4.document.getElementsByTagName("h1")[0].classList.remoove("title");
win4.document.getElementsByTagName("h1")[0].classList.toggle("title");
win4.document.getElementsByTagName("h1")[0].classList.toggle("cool");
win4.document.getElementsByTagName("h1")[0].removeAttribute("class");
win4.document.getElementsByTagName("h1")[0].setAttribute("what-a-cool-atribut", "test");
win4.document.getElementById("first");
win4.document.getElementById("first").classList.add("one", "two");


//cookies vs localStorage
//(2:09:)
document.cookie = "nosaukums = vertiba";
document.cookie;
localStorage;
localStorage.clear();
localStorage.saraksts = {test: 1, test1: 2};
localStorage.saraksts;
localStorage.saraksts = JSON.stringify({test: 1, test1: 2});
localStorage.saraksts;
JSON.parse(localStorage.saraksts);
localStorage.users = [];
