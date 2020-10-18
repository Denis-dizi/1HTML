// W4D3
// 20203.10.15
// W03L02 - JavaScript looping & functions & prototypes.

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