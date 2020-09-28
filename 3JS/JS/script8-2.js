// primitivie
// string, number, boolean, undefined


// complex
// function, object

var a = "hello";

var b = {
    a: `hello`
}

hello(a);
hello2(b);

function hello(par) {
    par = `there`
}

function hello2(obj) {
    obj.a = `there`
}
console.log(a);
console.log(b);