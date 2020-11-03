// WD5D1
// 2020.10.19

//  ----=====Repeat W4D3=====----
console.group('repeat W4D3. JS prototypes.')
//(0:02:) ; vs ,
var test = 10,
    test1 = 11,
    test2 = 12;
//(0:10:)
var EdPuce = "Ed" + " " + "Puce";

//(0:11:) built in prototype functions(?????):
Array;
Object;
Math;
Date;
// Create your own prototype(?????):
// User; - returns an Error: "User is not defined" if not defined.
function User() {};
User;

function City() {};
City;

// (0:20:) arrow function
var coolFn = () => {};
var coolFn = function () {}; //- the same

// (0:24:) built in prototype:
let obj = {
    test: 1,
    test1: 2
};
Object.values(obj); // built in prototype is Object.
console.log(Object.values(obj));

new Date(); //initialize prototype instance

let obj1 = Object.create({});
obj1;

let arr2 = new Array(1, 2, 3, 4);
arr2;
console.log('\t')

console.log('arr6 = [5,7,8,\'a\']')
arr6 = [5, 7, 8, 'a']
console.log(arr6);
console.log('\t')

//built in prototype function
let arr3 = new Array([1, 2, 3, 4], 9, 10, 11);
console.log('let arr3 = new Array([1,2,3,4],9,10,11)');
console.log(arr3.toString());
console.log(arr3);
console.log('\t')

// (0:28:) Create your own prototype
function MyArray1(...params) {
    const arr = []
    params.forEach((val) => {
        arr.push(val)
    })
    return arr;
}
console.log(MyArray1.toString())
console.log('let arr4 = new MyArray1(1, 2, 4, 5)')
let arr4 = new MyArray1(1, 2, 4, 5)
console.log(arr4);
console.log('\t')

//(0:31:)
let date = new Date(); // created instance
date.getFullYear; // one of prototype functions. Returns full actual year
date.getYear; // no longer recommended. year of the given date,... minus 1900

// = = = = = = = = = = = = = = = = = = = = = =
//(0:35/39:) Create your own prototype
console.log(' = = = = = = = = = = =');
console.log('Create your own prototype.\n+++++Example with food:');

function Food(name, price, amount) {
    this.name = name;
    this.price = price;
    this.amount = amount;

    this.getTotalSum = function () {
        console.log((this.price * this.amount) + " EUR")
    }

    this.getOneItemPrice = function () {
        console.log("One " + name + " const " + price + " EUR")
    }
}
console.log(Food.toString());

console.log('let pizza = new Food("pizza", 7, 3);');
let pizza = new Food("pizza", 7, 3); //create new instance
// pizza.getTotalSum();

let burger = new Food("burger", 5, 30); //create new instance
console.log('let burger = new Food("burger", 5, 30);');
console.log(`burger:`)
console.log(burger)
console.log('burger.getTotalSum()=');
console.log(burger.getTotalSum()); // call a function from it
console.log('burger.getOneItemPrice()=');
console.log(burger.getOneItemPrice());
//(0:40:)
console.log('burger.amount>pizza.amount:')
console.log(burger.amount > pizza.amount);
console.log('(burger.price + pizza.price)*5 = ');
console.log((burger.price + pizza.price) * 5);
console.log(' = = = = = = = = = = =');
console.log('\t');
// = = = = = = = = = = = = = = = = = = = = = =

//(0:42:) JS Classes. Old, New (ES6) standarts

function MyClass1(a, b) {

}

class MyClass2 {
    constructor(a, b) {}
}
const test3 = new MyClass2(1, 2);
console.log(' = = = = = = = = = = =');
console.groupEnd();
console.log('\t');
// = = = = = = = = = = = = = = = = = = = = = =

//  ----=====DOM=====----
console.group('W5D1. DOM');
//(0:47:)
console.log('window.location:');
console.log(window.location)
console.log('window.location.href:');
console.log(window.location.href)
console.log('window.location.pathname:');
console.log(window.location.pathname)
//(0:52:)
console.log('window.innerWidth/Height:');
console.log(window.innerWidth);
console.log(window.innerHeight);
console.log('\t');

// (0:59) open and close window (New Tab):
// let win5 = window.open(); // window.open(URL, name, specs, replace)
// console.log(win5);
// win5.close();

// open for 3sec after button pressed
function openWind1() {
    var myWindow = window.open("", "myWindow", "width=500, height=300");
    myWindow.document.write("<head> <title>3 seconds New window</title> </head><p> This is 'myWindow1' </p>"+"<p> This is 'myWindow2' </p>");
    myWindow.document.write("<p> This is 'myWindow3' </p>");
        setTimeout(function () {
            myWindow.close()
        }, 3000);
    }
    // (1:01:) open and close window (New separate Tab):
    // let win = window.open("", "test", {
    //     targe: "blank"
    // })
    // win.close();
    // console.log(win.document);

    // (1:17:)
    // open on WIN2 button pushing
    document.getElementById("win2").addEventListener("click", openWind2);

    function openWind2() {
        console.log('win2 pressed');
        let win2 = window.open("", "", "")
        win2.document; // attiecas uz jauno atverto logu
        document; // attiecas uz teko'so atverto logu
        // (1:19:)
        win2.document.write("<head> <title>WIN2</title> </head>");
        win2.document.write('<h1 id="title">I\'m a title</h1>')
        win2.document.write('<button id="title">I\'m a title</button>')
        win2.document.write('<button id="closeBtn">Close window</button>')
        // (1:21:)
        win2.document.getElementById
        win2.document.getElementsByTagName

        // (1:24:)
        win2.document.getElementsByTagName('h1')[0].addEventListener('mouseover', function (e) {
            win2.console.log('mouseovered');
            win2.console.log(e);
        })
        win2.document.getElementsByTagName('button')[0].addEventListener('click', function (e) {
            win2.console.log("clicked");
            win2.console.log(e);
        })
        // (1:30:)
        win2.document.getElementById('closeBtn').addEventListener('click', function (e) {
            win2.console.log("clicked close");
            win2.console.log(e);
            win2.close()
        })
    }


    // (1:31:)
    // open on WIN3 button pushing
    document.getElementById("win3").addEventListener("click", openWind3);

    function openWind3() {
        console.log('win3 pressed');
        let win3 = window.open();
        win3.document.write("<head> <title>WIN3</title> </head>");
        win3.document.write("<button>Click me to close</button>")
        win3.document.getElementsByTagName("button")[0].addEventListener("click", function () {
            win3.close();
        })
        win3.console.log(win3.document);
        win3.console.log(win3.document.getElementsByTagName("button"));
    }


    // (1:37:)
    // = = =  Task = = = 
    // open for 60sec after WIN4 button pressed
    document.getElementById("win4").addEventListener("click", openWind4);

    function openWind4() {
        const userNames = [];
        userNames.push("Ed");
        userNames.push("Jon");
        userNames.push("Jim");
        userNames.push("Bill");
        userNames.push("Jack", "Grace", "Jane");
        console.log(userNames);

        // (1:41:)
        let win4 = window.open();
        // setTimeout(function () {
        //     win4.close()
        // }, 60*1000);

        // let win4 = window.open("", "myWindow", "width=200, height=100");
        setTimeout(function () {
            win4.close()
        }, 60 * 1000);

        win4.document.write("<head> <title>WIN4</title> </head>");
        win4.document.write("<button>Close this window</button>")
        win4.document.getElementsByTagName("button")[0].addEventListener("click", function () {
            win4.close();
        })

        userNames.forEach(function (value, index) {
            win4.document.write("<h1>Element in array with " + index + " is " + value + "</h1>");
        })
        win4.console.log('win4.document:');
        win4.console.log(win4.document);
        // (1:51:)
        win4.console.log('win4.document.getElementsByTagName("h1"):');
        win4.console.log(win4.document.getElementsByTagName("h1")); //HTMLCollection. Can't be aplied function forEach
        win4.console.log('Object.values(win4.document.getElementsByTagName("h1")):');
        win4.console.log(Object.values(win4.document.getElementsByTagName("h1"))); //Array
        win4.console.log('\t');

        // (1:52:) Add classes to ALL elements 'h1' // Object.values() - to read values to make an array.
        Object.values(win4.document.getElementsByTagName("h1")).forEach(function (element) {
            element.classList.add('title');
        });
        // (1:54:) Add classe to 1 element 'h1' ONLY
        win4.document.getElementsByTagName("h1")[0].classList.add('font-large');
        // (1:55:) remove the class from element:
        win4.document.getElementsByTagName("h1")[1].classList.remove("title");
        // (1:56:) toggle: remove if the class is set and add if class not set:
        win4.document.getElementsByTagName("h1")[2].classList.toggle("title");
        win4.document.getElementsByTagName("h1")[3].classList.toggle("cool");
        win4.document.getElementsByTagName("h1")[4].classList.toggle("cooler");

        //Trying to add style myself. Not working:
        //(1:57:) add 'cool' class and style?????????????????????
        // element.style{
        //     .cool{
        //         color: red;
        //     }
        // }
        // element.style.cool = `color: red`;
        // element.style.cool.color = `red`;
        // className = 'cool';
        // let cool = win4.document.getElementsByClassName('cool');
        // cool.style.color = "red";
        // win4.document.getElementsByClassName('cool').style.color="red";

        // https://stackoverflow.com/questions/42942002/set-style-using-pure-javascript
        win4.document.getElementsByClassName('cool')[0].style.color = "red";
        // https://gomakethings.com/two-ways-to-set-an-elements-css-with-vanilla-javascript/
        //++++ gomakethings.com
        let elem = win4.document.getElementsByClassName('cooler')[0];
        elem.style.color = 'green';

        //(1:58:)
        win4.document.getElementsByTagName("h1")[5].removeAttribute("class");
        win4.document.getElementsByTagName("h1")[6].setAttribute("id", "tst1");
        win4.document.getElementsByTagName("h1")[6].setAttribute("cool-atribut", "tst2");
        win4.console.log('win4.document.getElementById("tst1"):');
        win4.console.log(win4.document.getElementById("tst1"));
        win4.console.log('win4.document.getElementById("tst1").classList:');
        win4.console.log(win4.document.getElementById("tst1").classList);
        // (2:02:) add some classes at once
        win4.document.getElementById("tst1").classList.add("one", "two");
    }

    //(2:11:)
    // NO RECORD
    // cookies vs localStorage
    // document.cookie = "nosaukums = vertiba";
    // document.cookie;
    // localStorage;
    // localStorage.clear();
    // localStorage.saraksts = {
    //     test: 1,
    //     test1: 2
    // };
    // localStorage.saraksts;
    // localStorage.saraksts = JSON.stringify({
    //     test: 1,
    //     test1: 2
    // });
    // localStorage.saraksts;
    // JSON.parse(localStorage.saraksts);
    // localStorage.users = [];