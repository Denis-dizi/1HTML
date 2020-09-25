// hoisting

//undefined

console.log(`a`, a);

var a; // undefined

// for(var i=0; i<6; i++){
//     setTimeout(function(){
//         console.log(`var`, i)
//     }, 0)
// }

// for(let k=0; k<6; k++){
//     setTimeout(function(){
//         console.log(`let`, k)
//     }, 0)
// }


// String
// `xxx`, "xxx"
// 
let str = `Hello Andrew\`s home.`
console.log(str);

let num = 2;
let num2 = 2.34;
let num3 = .456;
let num4 = 6.456e6;

console.table(`Number:`, num, num2, num3, num4)

let bool = true;
let bool2 = false;

console.log(`Boolean:`, bool, bool2);

let nul = null;
let undef = undefined;
let nan = NaN;

console.log(9 / `hello`);
console.log(NaN == (9 / `hello`));
console.log(NaN == NaN);

let arr = [1, 2, 3, 4, 5, 6, ];
let arr2 = new Array(); // not suggested

let obj = {} // object
let obj2 = {};
let obj3 = obj2;
console.log(obj == obj2);
console.log(obj2 == obj3);

let aa = 1;
let ab = 1;
console.log(`aa==ab??: `,aa == ab);

console.log(`Who is "ab"? - `, typeof ab);
console.log(`Who is "obj{}"? - `, typeof obj);
console.log(`Who is "arr[]"? - `, typeof arr);

