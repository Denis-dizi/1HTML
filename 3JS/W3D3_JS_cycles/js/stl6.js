//(0:57:) 2-nd video
//.map method
//loop3.js - analog


console.log('.map method');
console.log('= = = = = = = = = = = ');
console.log('Orig. arr1 =');
const arr1 = [45, 4, 9, 16, 25]
console.log(arr1);
console.log('= = = = = = = = = = = ');

// (0:59:)
console.log('arr2 = arr1.map(el => el * 2)=');
const arr2 = arr1.map(el => el * 2)
console.log(arr2);
console.log('= = = = = = = = = = = ');

// (1:01:)
console.log('arr3 = arr1.map((el, index)=');
const arr3 = arr1.map((el, index) => {console.log(el, index); 
return el * 3})
console.log('arr3 = return el * 3 =');
console.log(arr3);
console.log('= = = = = = = = = = = ');