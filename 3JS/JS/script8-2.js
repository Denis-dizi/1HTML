// W3D1 2020.09.28
// (0:54:)
// Data Types. Primitive, Complex.

// primitivie - dod vertibas
// string, number, boolean, undefined

// complex - dod atsuces uz obj
// function, object

// (1:08:)
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
console.log('= = = = = = = = = = = = = = = = =');


// (1:12:)
// https://www.youtube.com/watch?time_continue=779&v=x2RNw4M6cME&feature=emb_logos

// (1:12:)
var c = 5;
var d = { c: 10 }

hello3(c);
hello4(d);

function hello3(par) {
    par = 20
}

function hello4(obj) {
    obj.c = 30
}
console.log(c); //5
console.log(d); //obj c:30
console.log('= = = = = = = = = = = = = = = = =');