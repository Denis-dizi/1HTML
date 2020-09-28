var a = 2
var b = 3

console.group(`Operators`);
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a**b);

console.log(25%7);
console.log(25/7);
console.log(.1+.2);
console.log(parseFloat((.1+.2)).toFixed(2));

console.groupEnd();
console.log(`= = = = = = = = = = = = =`);

console.group(`Assignment Operators`);
a += b // a = a+b => a = 5
a -= b // a = a-b => 5 - 3 = 2
a *= b // a = a*b => 2 * 3 = 6
a /= b // a = a/b => 6 / 3 = 2
a %= b // 
console.log(a);
console.groupEnd();


console.group(`Increment / Decrement`);
console.log(a);
console.log(a++) // postfix increment
console.log(++a) // prefix increment
console.groupEnd();


console.group(`Srtring. Concatenate oper.`);
var str1 = `Hello`;
var str2 = `World`;

console.log(`Hello` + ` World`);
console.log(str1 + ` ` + str2);
console.log(4 + `8`);
console.log(4 + + '8');
console.log(4 + 4 + '8');
console.log(4 + '8' + 4);
console.log(`${str1} ${str2}`);

console.groupEnd();