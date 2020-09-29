// console.group(`Try/Catch/Finaly`);

// try{
// }

// catch{
// }

// finaly{
// }

// console.groupEnd();
// console.log('= = = = = = = = = = = =');

// console.group(`Function`);

// function(){

// }

// console.groupEnd();
console.log('= = = = = = = = = = = =');

console.group(`sum a+b`);

function sum(a, b){
    return a+b
    console.log(a+b)
}

console.groupEnd();
console.log('= = = = = = = = = = = =');

console.log('sum(2, 3):')
console.log(sum(2, 3))
console.log(sum(5, 3))
console.log(sum(2))

console.log('= = = = = = = = = = = =');

function sum(a, b){
    var a = a;
    var b = b;
    return a+b
    console.log(a+b)
}

console.log('= = = = = = = = = = = =');

function sum(a = 0, b = 0){
    return a+b
    console.log(a+b)
}


console.log('= = = = = = = = = = = =');

const n = a => a < 10 ? `0${a}` : a;

if (true) {
    //if true
} else {
    //if false
}

// console.log('= = = = = = = = = = = =');
// function n (a) {
//     if (a < 10){
//         return '0' + a;
//     } else {
//         return a;
//     }
// }


console.log('= = = = = = = = = = = =');

const x = (a) => {
    let b = a+2;
    return b;
}
console.log('= = = = = = = = = = = =');

const y = (b) => ({
    a : b
})
console.log(y(3))

console.log('= = = = = = = = = = = =');

