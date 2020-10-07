// W3D1 2020.09.28
// (2:04:)

console.group(`Array, Object`);
// (2:09:)
// Array
console.log('Array:');

var arr = [
    1,          // index = 0
    2,          // index = 1
    3,          // index = 2
    4,          // index = 3
]

var obj = {
}

console.log(arr);
console.log(`Get element from array by index: arr[2]:`);
console.log(arr[2]);

console.log(obj);
console.log('= = = = = = = = = = = =');

// (2:13:)
// Object
console.log('Object car:');
var car = {
    color: `white`,        // ipashiba
    wheels: 4,
    makeBeep: function(){ //funkcija ieks objekta - metode
        console.log(`Beep`)
    }
}

// (2:21:)
console.log(car);
console.log('car color: ' + car.color); //white
console.log('car wheels: ' + car['wheels']); //4
var parametr = 'wheels'
console.log('car wheels: ' + car[parametr]); //4
console.log('car wheels: ' + car.wheels); //4

console.log('= = = = = = = = = = = =');
console.log('Date:');
//(2:17:)
var d = new Date(); // Veido objektu uz klases pamata
                    //Klase "Date", izsaucam  "konstruktor" funkciju, funkcija ievieto "d" mainigajaa objektu.
console.log(d);
console.log(d.getDay());
console.log(d.getMinutes());
console.log(d.getSeconds());
console.groupEnd();
console.log('= = = = = = = = = = = =');


console.group(`Person`);
// (2:22:)
var person = {
    name: 'Jane',
    age: 24,
    greet() {
        console.log(`Hello, I am ${this.name} and I am ${this.age} years old.`)
        console.log('Return age: ')
        return this.age
    },
}

console.log(person);
console.log(person.greet());
console.groupEnd();
console.log('= = = = = = = = = = = =');

// (2:31:)
function clickMe(){
    // console.log(this)
    document.getElementById("demo").innerHTML = "Hello World";
    // document.getElementById("demo1").innerHTML = "YOU CLICKED ME!"
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