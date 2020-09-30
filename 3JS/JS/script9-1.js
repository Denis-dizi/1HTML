// W3D2     2020.09.29
// 3-d video
// (0:04:)
// console.group(`Try/Catch/Finaly`);

// try{} // put code that could make error. If no error, catch block will not run. If there is error, will run catch block.
// catch{}
// finaly{} // is not obligatory. Block of code that will run whatever.
//= = = = = = = = = = = = = = = = = = = = = = 

// console.groupEnd();
// console.log('= = = = = = = = = = = =');

// (0:10:)
// function(){ }

console.group(`Function`);

// var a = 5;
// var b = 7;

function sum(a, b){ // sum - functions name; a, b - parametrs.
    console.log(a + b);
    return a + b;    // stops funkction
}
console.log(sum);
console.log(sum());
// console.log(a, b);
console.groupEnd();
console.log('= = = = = = = = = = = =');

console.log('sum(2, 3):');
console.log(sum(2, 3));
console.log(sum(5, 3));
console.log(sum(2));

console.log('= = = = = = = = = = = =');

function sum(a, b){
    var a = a;
    var b = b;
    return a+b
    console.log(a+b)
}

console.log('= = = = = = = = = = = =');

function sum(a = 0, b = 0){ //default values
    return a+b
    console.log(a+b)
}


console.log('= = = = = = = = = = = =');


// (0:20:)
// ternary operator
// if a < 10 ==>`0${a}`, if now ==> a
const n = a => a < 10 ? `0${a}` : a;

if (true) {
    //if true
} else {
    //if false
}

// classicaly same function would look like:
// function n (a) {
//     if (a < 10){
//         return '0' + a;
//     } else {
//         return a;
//     }
// }


console.log('= = = = = = = = = = = =');


// (0:30:)
const x = (a) => {
    let b = a+2;
    return b;
}
console.log(x);
console.log(x(5));
console.log(x());
console.log('= = = = = = = = = = = =');

//(0:37:)
console.log(`Object:`)
const y = (b) => ({
    a : b
})
console.log(y(3))
console.log('= = = = = = = = = = = =');

// HW (0:38/43:)
var obj = {}
var weather = document.getElementById('weather');
var hwobj = [
    {name: 'Ann', notes: [3, 5, 8]},
    {name: 'Jeanny', notes: [4, 6, 9]},
    {name: 'John', notes: [2, 7, 9]},
    {name: 'Max', notes: [1, 5, 9]},
]


var out = '';
out += `<h3>${hwobj[0].name}</h3>`
out += `<ul>`
out += `<li>Note1: ${hwobj[0].notes[0]}</li>`
out += `<li>Note2: ${hwobj[0].notes[1]}</li>`
out += `<li>Note3: ${hwobj[0].notes[2]}</li>`
out += `</ul>`

out += `<h3>${hwobj[1].name}</h3>`
out += `<ul>`
out += `<li>Note1: ${hwobj[1].notes[0]}</li>`
out += `<li>Note2: ${hwobj[1].notes[1]}</li>`
out += `<li>Note3: ${hwobj[1].notes[2]}</li>`
out += `</ul>`

out += `<h3>${hwobj[2].name}</h3>`
out += `<ul>`
out += `<li>Note1: ${hwobj[2].notes[0]}</li>`
out += `<li>Note2: ${hwobj[2].notes[1]}</li>`
out += `<li>Note3: ${hwobj[2].notes[2]}</li>`
out += `</ul>`

console.log(out);

document.getElementById('hwobj').innerHTML = out;

console.log('= = = = = = = = = = = =');
