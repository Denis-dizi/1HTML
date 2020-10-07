// W3D1 2020.09.28
// (1:20:)
var a = 2
var b = 3

console.group(`Operators`);
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a**b);
console.log(`= = = = = = = = = = = = =`);
console.log(25%7); //4
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
a %= b // 2
console.log(a);
console.groupEnd();

// (1:35:)
console.group(`Increment / Decrement`);
console.log(a);
console.log(a++) // postfix increment
console.log(++a) // prefix increment
console.groupEnd();

// (1:45:)
console.group(`Srtring. Concatenate oper.`);
var str1 = `Hello`;
var str2 = `World`;

console.log(`Hello` + ` World`); // Hello World
console.log(str1 + ` ` + str2);  // Hello World
console.log(`${str1} ${str2}`);  // Hello World
console.log(4 + `8`);       // 48
console.log(4 + + '8');     // 12 // " + +" - converts string to number (1:50:)
console.log(4 + 4 + '8');   // 88
console.log(4 + '8' + 4);   // 484

console.groupEnd();