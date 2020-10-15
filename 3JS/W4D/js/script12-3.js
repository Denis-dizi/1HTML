// W4D1
// (2:37)
console.log("W4D1");
console.group('JS Demo')
console.log('= = = = = = = = = = = ');console.log('\n');

let obj1 = {test: 1, test2: 3};
console.log('Object:');
console.log('let obj1 = {test: 1, test2: 3};');
console.log('obj1 =');
console.log(obj1);
console.log('Try: \"typeof obj1;\"!');
console.log('= = = = = = = = = = = ');console.log('\n');

console.log("JavaScript data types.");
console.log('\n');

let str1 = 'Stringuo';
console.log('String:');
console.log('let str1 = \'Stringuo\';\nstr1 =');
console.log(str1);
console.log('\n');

let str2 = "123";
console.log("let str2 = \"123\";\nstr2 = ")
console.log(str2);
console.log('\n');

let str3 = "abc321";
console.log('let str3 = "abc321";\nstr3 = ');
console.log(str3);
console.log('= = = = = = = = = = = ');console.log('\n');

let num1 = 371;
console.log('Number:');
console.log('let num1 = 371;');
console.log('num1 =');
console.log(num1);console.log('\n');

console.log("Convert String to Number:");
let num2 = +str2;
console.log('let num2 = +str2;');
console.log('num2 =');
console.log(num2);
console.log('\n');

console.log("Not a Number:")
console.log('let num3 = +str3;');
let num3 = +str3;
console.log('num3 =');
console.log(num3);
console.log('= = = = = = = = = = = ');console.log('\n');

const arr1 = [];
console.log("Array");
console.log('Empty array:\nconst arr1 = [];\narr1 =');
console.log(arr1);
console.log('\n');

console.log('let arr2 = [1,2,3];');
let arr2 = [1,2,3];
console.log(`arr2 =`);
console.log(arr2);
console.log('\n');

console.log(`arr2.length =`);
console.log(arr2.length);
console.log('\n');

console.log("Get arrays second element by index [1]:");
console.log(`arr2[1] =`);
console.log(arr2[1]);
console.log('\n');

console.log("Get arrays last element by -1:");
console.log('arr2[arr2.length - 1] =');
console.log(arr2[arr2.length - 1]);
console.log('\n');

console.log("Example");
let arr3 = ['test', true, [1, 2, 3, `4z`], null, "a1", `b2`]
console.log('let arr3 = [\'test\', true, [1, 2, 3, `4z`], null, \"a1\", \`b2\`];');
console.log(`arr3 =`);
console.log(arr3);
console.log(`arr3.length =`);
console.log(arr3.length);

console.log(`arr3[4] =`);
console.log(arr3[4]);

console.log('arr3[arr3.length - 4] =');
console.log(arr3[arr3.length - 4]);

console.log('Get from multyarr:');
console.log('arr3[2][3])=');
console.log(arr3[2][3]);
console.log('\n');

console.log('.indexOf()');
console.log('arr3.indexOf("a1") =');
console.log(arr3.indexOf("a1"));
console.log('= = = = = = = = = = = ');console.log('\n');

console.log("Object")
console.log('let obj2 = {test: "test 1", woop: `woopy!`, bu: "dubadu", nmbr: 654};');
let obj2 = {test: "test 1", woop: `woopy!`, bu: "dubadu", nmbr: 654}
console.log('obj2 =');
console.log(obj2);
console.log('Call objects element by objects key:');
console.log('obj2["bu"] =');
console.log(obj2["bu"]);
console.log('\n');

console.log('let obj3 = {test: "test 1", woop: `woopy!`, arrzz: [12, 25, "abirvalG"]};');
let obj3 = {test: "test 1", woop: `woopy!`, arrzz: [12, 25, "abirvalG"]}
console.log('obj3 =');
console.log(obj3);
console.log('Call: \nconsole.log(obj3["arrzz"][2]) =');
console.log(obj3["arrzz"][2]);
console.log('\n');

console.log("user example:");
console.log('const user = {name: "Anatol", lastName: `Kasper`, drink: "water", eat: "food"};');
const user = {name: "Anatol", lastName: `Kasper`, drink: "water", eat: "food"};
console.log('user =');
console.log(user);
console.log('user["name"] =');
console.log(user["name"]);
console.log("concatenate\nconsole.log(user[\"name\"] + \"\'s \" +user[\'lastName\'] + \" favorite drink is \" +user[\"drink\"] +\".\"); =");
console.log(user["name"] + "'s " +user['lastName'] + " favorite drink is " +user["drink"] +".");
console.log('= = = = = = = = = = = ');
console.groupEnd();