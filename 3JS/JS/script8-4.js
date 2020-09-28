console.group(`Array, Object`);
var arr = [
    1,          // index = 0
    2,          // index = 1
    3,          // index = 2
    4,          // index = 3
]

var obj = {

}

console.log(arr);
console.log(`arr[2]: `+ arr[2]);
console.log(arr[2]);

console.log(obj);

// (2:14:)
var car = {
    color: `white`,
    wheels: 4,
    makeBeep: function(){
        console.log(`Beep`)
    }
}

console.log('car:');
console.log(car);
console.log('car color: ' + car.color);
console.log('car wheels: ' + car['wheels']);

var parametr = 'wheels'
console.log('car wheels: ' + car[parametr]);

console.log('Date:');
var d = new Date();

console.groupEnd();
console.log('= = = = = = = = = = = =');


console.group(`Function`);

var person = {
    name: 'Jane',
    age: 24,
    greet() {
        console.log(`Hello, I am ${this.name} and I am ${this.age} years old.`)
        console.log('Return age: ')
        return this.age
    },
}
console.log(person.greet());
console.groupEnd();
console.log('= = = = = = = = = = = =');

function clickMe(){
    console.log(clickMe)
}

console.log('= = = = = = = = = = = =');

const norm = a => a< 10 ? `0${a}` : a
var func = function(){
    //code
}

var func2 = () => {
    //code
}

console.log('= = = = = = = = = = = =');