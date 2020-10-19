// WD5D1
// 2020.10.19

//Repeat W4D3

let obj = {test: 1, test1: 2};
Object.values(obj);


// let.obj1 = Object.create({});
// obj1;
let arr = new Array();
arr;

function MyArray(...params) {
    const arr = []
    params.forEach((val)=>{
        arr.push(val)
    })
    return arr;
}

//Create your own prototype
// function Food (name, price, amount) {
// }

function Food(nem, price, amount) {
    this.name = name;
    this.price = price;
    this.amount = amount;
}


let pizza = new Food ("pizza", 7, 3);
// pizza.getTotalSum();

let burger = new Food ("burger", 5, 30);

//DOM
//(0:47:)

