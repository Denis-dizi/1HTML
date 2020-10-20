// W4D3
// 20203.10.15
// W03L02 - JavaScript looping & functions & prototypes.

//Repeat W4D2 data types:
//(0:07:) 1st video
console.group('repeat W4D2. JS data types.')
console.log('Boolean. False, True values:');
console.log('falsely - 0, \'\' (empty string), null, undefined, NaN');
console.log('truly - not empty strings, all numbers except zero, arrays, objects, functions, etc.');
console.log('!!(\"\"); - (empty string) =');
console.log(!!(""));
console.log('!!(\"smthing 321\"); =');
console.log(!!("smthing 321"));
console.log('!!(0); =');
console.log(!!(0));
console.log('!!(79); =');
console.log(!!(79));
console.log('\n');

console.log('check is an array empty?');
let arrE = [];
console.log('let arrE = [];');
console.log('arrE; =');
console.log(arrE);
console.log('arrE.length; =');
console.log(arrE.length);
console.log('\n');

console.log('check is an object empty?');
let objE = {keyE: "valueE"};
console.log('let objE = {keyE: "valueE"};');
console.log('objE; =');
console.log(objE);
console.log('objE.length; =');
console.log(objE.length);
console.log('Object.keys(objE); =');
console.log(Object.keys(objE));
Object.keys(objE);
console.log('Object.keys(objE).length; =');
console.log(Object.keys(objE).length);
console.log('\n');

console.log('Comparison strict / not-strict');
console.log('=== strict test if values and data types are equal;');
console.log('== not-strict test if values are equal;');
console.log('!== - tests if not equal;');
console.log('\'a\'===\'b\'; =');
console.log('a'==='b');
console.log('1===\'a\'; =');
console.log(1==='a');
// console.log(1=='a');
console.log('(\'b2\'==\'c3\'); =');
console.log('b2'=='c3');
// let b2 = 3;
// let c3 = 3;
// c3 = b2;
// console.log('(\'b2\'==\'c3\'); =');
// console.log('b2'=='c3');
console.log('2==2; =');
console.log(2==2);
console.log('\n');

console.log('AND statement (all 100% must be true): &&');
console.log('true && true && true; =');
console.log(true && true && true);
console.log('true && true && false; =');
console.log(true && true && false);
console.log('false && false; =');
console.log(false && false);
console.log('\n');

console.log('OR statement (at least one must be true): ||');
console.log('true || true || true; =');
console.log(true || true || true);
console.log('true || true || false; =');
console.log(true || true || false);
console.log('false || false; =');
console.log(false || false);
console.log('\n');

console.log('Example ||');
let age1 = 30;
let age2 = 70;
console.log('let age1 = 30;\nlet age2 = 70;')
console.log('age1 < 18 || age1 > 65; =');
console.log(age1 < 18 || age1 > 65);
console.log('age2 < 18 || age2 > 65; =');
console.log(age2 < 18 || age2 > 65);
console.log('\n');

console.log('Conditions. \nif/else is/else')
console.log('if (true) {\n// Run this code if the condition is tru\n} else if (true) {\n// Run this code if the first is false and the second is true\n} else {\n// Run this in any other case when the first two are falss\n}');
console.log('\n');

console.log('Shorthand for if/else\ntrue ? "If true, execute this code" : "If false, execute this code";');
console.log('One line if statement with no {}\nif (true) "Do something";');
console.log('\n');

console.log('Switch');
console.log('see *.js file');
// switch(item) {
//     case "this_value":
//     // Do something
//     break;
//     case "other_value":
//     // Do this
//     break;
//     default:
//     // Do this if no exact item
//     break;
// }
console.groupEnd();
console.log('\n');

// = = = = = = Date = = = = = = 
//(0:30:) 1st video
console.group('Dates');
console.log('Dates');
console.log('new Date; =');
console.log(new Date);
console.log('\n');

console.log('let date = new Date();');
let date = new Date();
console.log('console.log(date.getHours()); =');
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log('date.getHours() + \':\' + date.getMinutes(); =');
console.log(date.getHours() + ':' + date.getMinutes());
console.log('\n');

console.log('Convert date:');
console.log('date.toGMTString(); =')
console.log(date.toGMTString());
console.log('\n');

console.log('date.toISOString(); =')
console.log(date.toISOString());
console.log('\n');

console.log('https://momentjs.com/');
console.groupEnd();
console.log('\n');

// = = = = = = = LOOPS = = = = = = = = = = = = =
console.group('Loops: For, While, forEach, Map. .filer, .find');
console.log('https://www.freecodecamp.org/news/javascript-loop-tutorial-how-to-iterate-over-an-array-in-javascript/');
// For loop
//(0:20:) 1st video
console.group('===== For');
console.log('for (let i = 0; i < 6; i+=2) {\nconsole.log("Hello For loop 1");\n}; =');
for (let i = 0; i < 6; i+=2) {
    console.log("Hello For loop 1");
}
console.log('for (let i = 1; i <= 6; i++) {cons...}; =');
for (let i = 1; i <= 6; i++) {
    console.log("Hello For loop 2");
}
console.log('\n');

console.log('for (let i = 0; i < 3; i++) {console.log(\'Hello For loop 3. Nr. \' + i)}; =');
for (let i = 0; i < 3; i++) {
    console.log('Hello For loop 3. Nr. ' + i)
}
console.log('\n');

console.log('for (let i = 10; i >= 0; i-=2) {...}; =');
for (let i = 10; i >= 0; i-=2) {
    console.log('Hello For loop 4. Nr. ' + i);
}
console.log('\n');

// = = = For loop through an array = = =
//(0:35:) 1st vid
console.log('For loop through an array');
console.log('var arr1 = ["a", "b", "c"]; =');
var arr1 = ["a", "b", "c"]
console.log(arr1);
console.log('for (let i = 0; i < arr1.length; i++){console.log(arr1[i]);} =');
for (let i = 0; i < arr1.length; i++){
console.log(arr1[i]);
}
console.log('\n');

var arr1 = [1, 2, 3, 4]
console.log('var arr1 = [1, 2, 3, 4];\nfor(...){console.log(arr1[i]**2);} =')
for (let i = 0; i < arr1.length; i++){
console.log(arr1[i]**2);
}
console.log('\n');

//For loop through text (string)
console.log('For loop through text (string)');
//(0:38:) 1st vid
let str = "Mobilis in Mobili" //Moving within a moving element
console.log('let str = \"Mobilis in Mobili\"\nfor (...){console.log(str[i]);} =');
for (let i = 0; i < str.length; i++){
    console.log(str[i]);
}
console.log('\n');
console.log('Data validation for user name:')
console.log('str.length; =');
console.log(str.length);
console.log('str.length < 8; =');
console.log(str.length < 8);
console.groupEnd();
console.log('\n');

// = = = = = = = = While loop
//(0:00:) 2nd vid
console.group('===== While');
var j = 0;
while (j < 0.5){
    console.log(j);
    j = Math.random();    
}
console.log("\n");

var m = 0;
while (m < 5){
    console.log(m)
    m++;
}
console.log("\n");

var i = 3;
while (i > 0) {
    console.log('Hello Nr' + i)
    i--
}
console.groupEnd();
console.log('\n');

// = = = = = = = = For each. only for arrays
//(0:12:) 2nd vid
console.log("===== forEach.\nonly for arrays");
console.log('\n');

console.log("example with index:");
var array = [true, true, false, true];
array.forEach(function(value, index) {
    if (value) {
        console.log('The value at index ' +index+ ' is true')
    } else {
        console.log('The value at index ' +index+ ' is false')
    }
});
console.log('\n');

console.log("example with price list:");
var arr = [1, 0, 2, 5, 7, 2, 8, 3];
console.log(arr);
var sum = 0;
arr.forEach(function(val, i) {
    sum += val;
    console.log(sum);
})
console.log('\n');

console.log("example sumAll():");
function sumAll(arr) {
    let sum = 0;
    arr.forEach(function(val, i){
        sum += val;
    })
    return sum;
}
// console.log(sumAll([10, 12, 14, 16]));
var arr = [10, 20, 30, 40, 50]
console.log(arr);
console.log('sumAll =');
console.log(sumAll(arr));
console.log('\n');

console.log("example print (val, i):");
console.log(arr);
arr.forEach(function(val, i) {
    console.log(val, i);
})
console.log('\n');

console.log("example tickets overbooked:");
var arr = [1, 2, '3', 4, 'c', 6, 7]
console.log(arr);
arr.forEach(function(val, i) {
    if (i < 5) {
        console.log('Reserved');
    } else {
        console.log('Overbooked');
    }
    // console.log(val, i);
})
console.log('\n');

console.log("example full up an empty array:");
//(0:25:) 2nd vid
var arr = [];
for (let i = 0; i < 5; i++){
    arr[i] =
    Math.round(Math.random()*100);
    // console.log(arrR);
    // return arrR;
}
console.log(arr);

var sum = 0;
arr.forEach(function(val){
    sum += val;
})
console.log('Sum af array:')
console.log(sum);
console.log('\n');

console.log("example print 'test' for every arrays value:");
arr.forEach(function(){
    console.log('test');
})
console.log('\n');

console.log("example print arrays value:");
arr.forEach(function(val, i){
    console.log('Print ' + i, val);
})
console.log('\n');


//= = = = = = = Map. only for arrays
//(0:38:) 2nd vid
console.log("===== Map. \nonly for arrays\n(modifies it self, not modifies orig arr).");
console.log('\n');

var arr = [1, 2, 3, 4, 5];
console.log('arr =');
console.log(arr);
arr.map(function(val, i){
    console.log(val + 1);
    return val + 1;
})
console.log(arr);
console.log('\n');

console.log("save as new arr1:");
var arr1 = arr.map(function(val, i){
    return val + val * 0.1;
    // return val * 1.1; //why not val*1.1?????
})
console.log('arr1 = arr * 1.1 =');
console.log(arr1);
console.log('\n');

console.log("add different percentage if (val < 3):");
console.log('arr =');
console.log(arr);
var arr2 = arr.map(function(val, i){
    if (val < 3) {
        return val + val * 0.2;
    }
    return val + val * 0.1;
})
console.log('arr2 =');
console.log(arr2);
console.log('\n');

console.log("without second return:");
console.log('arr =');
console.log(arr);
var arr3 = arr.map(function(val, i){
    if (val < 3) {
        return val + val * 0.2;
    }
})
console.log('arr3 =');
console.log(arr3);
console.log('\n');

// = = = = Filter = = = = = 
console.log('===== arr.filter()');
console.log('arr.filter((){!!val}): - get only defined elements');
var arr4 = arr3.filter(function(val) {
    return !!val;
})
console.log(arr4);
console.log('\n');

console.log('arr.filter((){val < 4}):');
var arr5 = arr2.filter(function(val) {
    return val < 4;
})
console.log(arr5);
console.log('\n');

console.log('Name filter:');
var arr = ["Ed", "Jan", "Jim", "Bim", "Jan"]
console.log('arr = ');
console.log(arr);
console.log('New array. Filtred by name Jan:');
var arr = arr.filter(function(val) {
    return val === "Jan";
})
console.log(arr);

console.log('New arrays length:');
var arr = arr.filter(function(val) {
    return val === "Jan";
}).length
console.log(arr);

console.log('New array with .map, get booleans:');
// console.log('works in console, doesn\'t work in VSCode:');
// console.log('https://forum.freecodecamp.org/t/map-is-suddenly-not-a-function/134196');
var arr = ["Ed", "Jan", "Jim", "Bim", "Jan"]
// arr.map(function(val) {
//     return val === "Jan";
// })
console.log(arr);

var arr1 = arr.map(function(val) {
    return val === "Jan";
})
console.log(arr1);

console.log('New array with .map, get booleans, filtred:');
var arr = arr.map(function(val) {
    return val === "Jan";
}).filter(function(val) {
    return val;
})
console.log(arr);
console.log('\n');

// = = = = = arr.find = = = = =
//(0:54:)
console.log('===== arr.find()\n - gets only first result from array');
// arr.find(function(val) {
//     return val === "Jan";
// })
// console.log(arr);

console.log('arr.find in array with names:');
arr = [{name: "Ed", lastName: "Pce"}, {name: "Jon", lastName: "Test"}, {name: "Io", lastName: "SnmIo"}]
console.log(arr);
console.log('.find by key:');
var arr1 = arr.find(function(val) {
    return val ["name"] === "Jon";
})
console.log(arr1);

console.log('.find by key.lastName:');
var arr2 = arr.find(function(val) {
    return val ["name"] === "Ed";
}).lastName
console.log(arr2);

console.log('.find by index:');
var arr3 = arr.find(function(val, i) {
    return i === 2;
})
console.log(arr3);
console.groupEnd();
console.log('\n');

// = = = = = = = Anonymous/Declared functions = = = = = = = 
//(1:00:)
console.group('Anonymous/Declared, Arrow functions')
console.log('Declared');
function logArray (val, i) {
    console.log(JSON.stringify(val) + " with index " + i);
}
console.log(arr);
console.log(logArray.toString());
console.log('arr.forEach(logArray); =');
console.log(arr.forEach(logArray));
console.log('\n');

console.log('https://www.w3schools.com/js/js_function_definition.asp');
console.log('=== Declared function:\nfunction functionName(parameters) { code to be executed }');
function myFunc (a, b) {
    return a * b;
}
document.getElementById("funcDeclar").innerHTML = myFunc.toString();
console.log(myFunc.toString());
console.log('myFunc(3, 5); =');
console.log(myFunc(3, 5));
console.log('\n');

console.log('=== Anonymous function:\nvar anFunc = ')
var anFunc = function (a, b) {
    return a ** b;
}
// console.log(anFunc);
console.log(anFunc.toString());
console.log('anFunc(3, 2); =');
console.log(anFunc(3, 2));
console.log('\n');

console.log('Return variable where the function stored in:\nvar x = ');
var x = function (a, b) {return a * b};
console.log(x);
console.log('Return variable where the function stored in as a string:\nx.toString() = ');
console.log(x.toString());
console.log('\n');

// = = = = = = = arrow functions ES6 = = = = = = =  
// (1:06:)
console.log('=== Arrow function');
// let customFn = () => {
//     Do something
// }
console.log('let customFn = () => { Do something }');
console.log('\n');

console.log('Old style ES5:');
console.log('arr.forEach(function(){ });');
console.log('New style ES6:');
console.log('arr.forEach(()=>{ });');
console.log('\n');

console.log('Old style ES5:\nvar x =');
var x = function(x, y) {
    return x * y;
}
console.log(x.toString());
console.log('New style ES6:\nconst xCnst =');
const xCnst = (x, y) => { return x * y };
console.log(xCnst.toString());

console.groupEnd();
console.log('\n');

// = = = = = = visible/unvisible function 
//(1:09:)
console.group('visible/unvisible function');

console.log('myFun1(); =');
console.log(myFun1());
console.log('myFun2(); - returns: "myFun2 is not defined"');
console.log('function definition by function:')
function myFun1() {
    console.log('I\'m visible myFun1');
    function myFun2() {
        console.log('Not visible');
    } 
}
console.log(myFun1.toString());
console.log('\n');

console.log('function definition by variable:')
console.log('myFun3(); - returns: Cannot access \'myFun3\' before initialization.\nBecause variable is called before function is defined.');
console.log('const myFun3 =');
const myFun3 = function () {
    console.log('I\'m myFun3');
}
console.log(myFun3.toString());
console.log('myFun3(); =');
console.log(myFun3());

console.groupEnd();
console.log('\n');

// = = = = = = Passing multiple parameters with "...rest" = = = = 
// (1:14:)
console.group('Passing multiple parameters with "...rest"');

function myFn(a, b, c, sdf, df, m) {
    console.log(a, b, c, sdf, df, m);
}
console.log(myFn.toString());
console.log('myFn(1, 2, 3); =');
console.log(myFn(1, 2, 3));
console.log('\n');

function mySum(a, b) {
    return a + b; 
}
console.log(mySum.toString());
console.log('mySum(2, 3); = ');
console.log(mySum(2, 3));
console.log('parametrs not definet in function are ignored:');
console.log('mySum(2, 3, 4, 6) =');
console.log(mySum(2, 3, 4, 6));
console.log('\n');

function mySum3(a, b,...rest) {
    let sum = a + b;
    console.log(a, b, rest);
    rest.forEach((val) => {
        sum += val;
    })
    return sum;
}
console.log(mySum3.toString());
console.log('mySum3 (2, 3, 4, 6, 9, 7) =');
console.log(mySum3(2, 3, 4, 6, 9, 7));

console.groupEnd();
console.log('\n');

// = = = = = = Reading parameters from object = = = = 
// (1:22:)
console.group('Reading parameters from object');

//????????????? Doesn't work
// const usr = {name: "Ed", lastName: "Surname", age: 23}
// function user (params) {
//     const {name, lastName, age} = params;
//     //The same is:
//     // const name = params.name;
//     // const lastName = params.lastName;
//     // const age = params.age;

//     console.log(name + " " + lastName);
//     console.log(name);
//     // return (name + " " + lastName);
//     return name;
// }
// console.log('\n');

let myData = (params) => {
    const {name, surname, isActive} = params;
    console.log(name)
    console.log(surname)
    console.log(isActive)
}
myData({name: 'Ed', surname: 'Pūce', isActive:true});
console.log(myData.toString());

console.groupEnd();
console.log('\n');

// = = = = = = = JS prototypes  = = = = = = = = = 
// (1:35:)
console.group('JS prototypes');

let date1 = new Date();
console.log(date1.getMinutes());
console.log(date1.getSeconds());
console.log('\n');

let date2 = new Date();
console.log(date2.getMinutes());
console.log(date2.getSeconds());
console.log('\n');

function User(name, lastName) {
    this.name = name;
    this.lastName = lastName;
    this.printFullName = function() {
        return this.name + " " + this.lastName
    }
}

const user1 = new User ("Edd", "Eddy");
const user2 = new User ("Bob", "Body", false);
const user3 = new User ("Jim", "Cart", true);
console.log(user1);
console.log(user1.name);
console.log(user1.lastName);
console.log(user1.printFullName());
console.log('\n');

console.log(user2.name);
console.log(user2.lastName);
console.log(user2.printFullName());
console.log('\n');

function User(name, lastName, isAdmin) {
    this.name = name;
    this.lastName = lastName;
    this.isAdmin = isAdmin;
    this.printFullName = function() {
        return this.name + " " + this.lastName
    }
    this.canAcces = function() {
        this.isAdmin ? console.log("You are admin") : console.log("Can't acces")
    }
}
console.log(user1.canAcces());
console.log(user2.canAcces());
console.log(user3.canAcces());

console.groupEnd();
console.log('\n');


// = = = = = = = = = CheckUp = = = = = = = = = 
console.group('Checkup');
//1. create a loop that prints every second number starting from 10 and ending with 20
console.log('1. loop that prints every second number from 10 to 20:')
for (let i = 10; i < 21; i+=2) {
    console.log('Nr. ' + i);
}
console.log('\n');

//2. loop thru an array and print out it's content
console.log('2. loop thru an array and print out it\'s content:');
var array = [true, "trulala", false, true];
console.log(array);

for (let i = 0; i < array.length; i++) {
    console.log(array[i])
}
console.log('\n');

//3. modify array of numbers by multiplying the numbers by itself
console.log('3. modify array of numbers by multiplying the numbers by itself:');
var arr = [0, 1, 2, 3, 4, 6];
var arr1 = arr.map(function(val, i){
    return val ** 2;
})
console.log('arr =');
console.log(arr);
console.log(arr.map.toString());
console.log('arr1 =');
console.log(arr1);
console.log('\n');

//4. Declare a function that can be called even if it's defined after it is called
console.log('4. Declare a function that can be called even if it\'s defined after it is called:');

console.log('myFun1(); =');
console.log(myFun1());
console.log('function definition by function:')
function myFun1() {
    console.log('I\'m visible myFun1');
}
console.log(myFun1.toString());

console.log('\n');

//5. define a function that can be called only after it has been declared
console.log('5. define a function that can be called only after it has been declared:');

console.log('function definition by variable:')
console.log('myFun30(); - returns: Cannot access \'myFun30\' before initialization.\nBecause variable is called before function is defined.');
console.log('const myFun30 =');
const myFun30 = function () {
    console.log('I\'m myFun30');
}
console.log(myFun30.toString());
console.log('myFun30(); =');
console.log(myFun30());

console.log('\n');

//6. create an arrow function with two or more parameters
console.log('6. create an arrow function with two or more parameters:');
console.log('const tsk6 = ');
const tsk6 = (a, b, c) => {return a + b * c};
console.log(tsk6.toString());
console.log('tsk6(2, 4, 5); =');
console.log(tsk6(2, 4, 5));

console.log('\n');

//7. create a function with unknown amount of parameters
console.log('7. create a function with unknown amount of parameters:');
function mySum3(a, b,...rest) {
    let sum = a + b;
    rest.forEach((val) => {
        sum += val;
    })
    return sum;
}
console.log(mySum3.toString());
console.log('mySum3 (2, 3, 4, 6, 9, 7) =');
console.log(mySum3(2, 3, 4, 6, 9, 7));

console.log('\n');

//8. create a function that accepts object as an parameters and reads assigns it's key/value pairs to function variables
console.log('8. create a function that accepts object as an parameters and reads assigns it\'s key/value pairs to function variables:');

let myData1 = (params) => {
    const {name, surname} = params;
    console.log(name + " " + surname);
}
console.log('let myData1 = ');
console.log(myData1.toString());
myData1({name: 'Bendzh', surname: 'Frankl'});

console.log('\n');

//9. Use two of built in prototype functions
console.log('9. Use two of built in prototype functions:');
console.log('?????????');
console.log('\n');

//10. Create your own prototype
console.log('10. Create your own prototype.');
//10.1. create new instance
console.log('10.1. create new instance:');

function Userr(name, lastName) {
    this.name = name;
    this.lastName = lastName;
    this.printFullName = function() {
        return this.name + " " + this.lastName
    }
}
console.log(Userr);
//10.2. call a function from it
console.log('10.2. call a function from it:');

const user10 = new Userr ("Nils", "Bor");
console.log(user10.name);
console.log(user10.lastName);
console.log(user10.printFullName());

console.groupEnd();