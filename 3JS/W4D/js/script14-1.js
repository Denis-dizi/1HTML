// W4D3
// 20203.10.15
// W03L02 - JavaScript looping & functions & prototypes.

//Repeat W4D2 data types:

console.group('repeat data types')
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

console.group('Loops');



console.log('\n');
// For loop

for (let i = 0; i < 5; i+=3) {
    console.log("Hello For loop 1");
}
// console.log(for());


for (let i = 1; i <= 5; i++) {
    console.log("Hello For loop 2");
}

new Date()
console.log(new Date);

let date = new Date();
date.getHours();
console.log(date.getHours());

date.toGMTString

var arr1 = ["a", "b", "c"]
console.log(arr1);
 for (let i = 0; i < arr1.length; i++){
    console.log(arr1[i]);
 }

 for (let i = 0; i < arr1.length; i++){
    console.log(arr1[i]**2);
 }

// str.length
// str.length < 8

//While loop

var j = 0;
while (j < 0.5){
    console.log(j);
    j = Math.random();    
}
console.log("\n");

var m = 0;
while (m < 5){
    console.log(j)
    m++;
}


//For each

var array = [true, true, false, true];

array.forEach(function(value, index) {
    if (value) {
        console.log('The value at index ' +index+ ' is true')
    } else {
        console.log('The value at index ' +index+ ' is false')
    }
});

// var sum = 0;

// arr1.forEach(function(val, i)) {
//     console.log(sum);
//     sum += val;
// }


var arr = [];
for (let i = 0; i < 100; i++){
    arr[i];
    Math.round(Math.random()*100);
}

//map


// CheckUp

// setInterval(for (let i = 10; i < 21; i++)) {
//     console.log('Hello Nr' + i)
// //     setTimeout(1000);
// }, 1000);
// https://www.codegrepper.com/code-examples/javascript/Javascript+Call+Function+Every+Second

for (let i = 10; i < 21; i+=2) {
    console.log('Nr' + i)
}


var array = [true, true, false, true];

for (let i = 0; i < array.length; i++) {
    console.log(array[i])
}


console.groupEnd();