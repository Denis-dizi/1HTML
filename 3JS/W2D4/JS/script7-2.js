// (1:06:) hoisting 

//(1:08:)
//undefined
console.log(`a`, a);
var a; // value is undefined. Look console
//let a; // Error. Can not be after function

//(1:29:)
var a = 1; //undefined
console.log(`a`, a);
console.log(`= = = = = = = = = = = `);

//(1:30:)
// `xxx`, "xxx"
console.log(`String.`);
let str = `Andrew\`s home (use backslash \\ + \` ).`
console.log(str);

let str2 = `Double quote: \"; \nNew Line \\n; \tTabulator \\t`
console.log(str2);
console.log(`= = = = = = = = = = = `);

// (1:34:)
console.log("Number.");
let num = 2;
let num2 = 2.34;
let num3 = .456;
let num4 = 6.456e6;
console.table(`Numbers:`, num, num2, num3, num4)

let bool = true;
let bool2 = false;
console.log(`Boolean:`, bool, bool2);

let nul = null;
let undef = undefined;
let nan = NaN;

console.log(9 / `hello`);
console.log(isNaN(9 / `hello`));
console.log(NaN == (9 / `hello`));
console.log(NaN == NaN);
console.log(`= = = = = = = = = = = `);

//(1:42:)
console.log(`Arrays.`);
let arr = [1, 2, 3, 4, 5, 6, ];
console.log(arr);
let arr2 = new Array(); // not suggested
console.log(arr2);

console.log(`Objects.`);
let obj = {} // object
console.log(obj);
let obj2 = {};
let obj3 = obj2;
console.log(obj == obj2);
console.log(obj2 == obj3);
console.log(`= = = = = = = = = = = `);

console.log(`Typeoff.`);
let aa = 1;
let ab = 1;
console.log(`aa==ab??: `,aa == ab);

console.log(`Who is "ab"? - `, typeof ab);
console.log(`Who is "obj{}"? - `, typeof obj);
console.log(`Who is "arr[]"? - `, typeof arr);
console.log(`= = = = = = = = = = = `);