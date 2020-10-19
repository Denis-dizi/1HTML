// W4D3
// 20203.10.15
// W03L02 - JavaScript looping & functions & prototypes.

//Repeat W4D2 data types:
//(0:07:) 1st video
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

// = = Date = =
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
console.group('Loops');
// For loop
//(0:20:) 1st video
console.log('For loop');
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
console.log(' = = = = = = = = = = = = = =');console.log('\n');

//While loop
//(0:00:) 2nd vid
console.log('While loop');
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
console.log(' = = = = = = = = = = = = = =');console.log('\n');

//For each. only for arrays
//(0:12:) 2nd vid
console.log("forEach. only for arrays");
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