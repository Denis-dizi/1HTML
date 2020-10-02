// 2-nd video
// JS other Array Methods

console.log('arr1:');
const arr1 = [45, 4, 9, 16, 25]
console.log(arr1);
console.log('= = = = = = = = = = = ');

//filter
// (1:03:)
console.log('filter:');
console.log(arr1.filter(el => el > 20))
console.log('= = = = = = = = = = = ');

//reduce
// (1:06:)
console.log('reduce:');
console.log('SUM +(arr1):');
console.log(arr1.reduce((acc, el) => acc + el, 0))
console.log('*(arr1):');
console.log(arr1.reduce((acc, el) => acc * el, 1))
console.log('= = = = = = = = = = = ');

//every
// (1:12:)
console.log('every/some:');
console.log('check elements for cretereas');
console.log('every from arr1 > 1:');
console.log(arr1.every((el) => el > 1)) // true
console.log('some from arr1 > 41:');
console.log(arr1.some((el) => el > 41)) // true
console.log('some from arr1 > 45:');
console.log(arr1.some((el) => el > 45)) // false
console.log('= = = = = = = = = = = ');

//find
// (1:15:)
console.log('find:');
console.log(arr1.find((el) => el == 45))
console.log(arr1.find((el) => el == 9))
console.log(arr1.find((el) => el > 23)) //??????
console.log('find index:');
console.log(arr1.findIndex((el) => el == 9)) // 2
console.log(arr1.findIndex((el) => el == 7)) // -1
console.log('= = = = = = = = = = = ');

// (1:18:)
//wont work because "some"
// if (arr1.findIndex((el) => el == 7) != -1)

//sort
// (1:19:)
console.log('sort:');
console.log('orig arr1:');
console.log(arr1);
console.log('sorted arr1:');
console.log(arr1.sort((a, b) => a - b))
console.log(arr1.sort((a, b) => b - a))
console.log('= = = = = = = = = = = ');

//reverse
// (1:21:)
console.log('reverse:');
console.log(arr1.reverse())
console.log('= = = = = = = = = = = ');
