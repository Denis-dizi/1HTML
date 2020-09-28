var a = `Hello`;



document.getElementById(`h2`);
console.log(document.getElementById(`h2`));
document.getElementsByClassName(`button`);
console.log(document.getElementsByClassName(`button`));
console.log(document.getElementsByClassName(button));
// document.getElementsByClassName();
// document.getElementsByTagName();
console.log(`= = = = = = = = = = = = =`);

document.querySelector(`button`);
console.log(document.querySelector(`button`));
console.log(document.querySelector(`h2`));
console.log(document.querySelectorAll(`button`));


var buttons = document.querySelectorAll(`.button`);

console.log(buttons);
console.log(`= = = = = = = = = = = = =`);

var button = `button`// undefined

for (let i=0; i<buttons.length; i++) {
    // buttons[i].innerHTML = i;
    button = buttons[i];
    button.innerHTML = i;
    button.onclick = function (){
        console.log(i)
    }
}