//loop3.js - analog

const arr1 = [45, 4, 9, 16, 25]

// const arr2 = arr1.map(el => el * 2)
// console.log(arr2);

const arr3 = arr1.map((el, index) => {console.log(el, index); 
return el * 2})
console.log(arr3);

//filter
console.log(arr1.filter(el => el > 20))