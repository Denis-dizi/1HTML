var a = `Hello`;

// document.qsela
console.log('getElementBy*:');
document.getElementById(`h2`);
console.log('typeof:');
console.log(typeof document.getElementById('h2'));
console.log(document.getElementById(`h2`));
document.getElementsByClassName(`button`);
console.log(document.getElementsByClassName(`button`));
console.log(document.getElementsByClassName(button));
// document.getElementsByClassName();
console.log(document.getElementsByTagName('button'));
console.log(`= = = = = = = = = = = = =`);

document.querySelector(`button`);
console.log(document.querySelector(`button`));
console.log(document.querySelector(`h2`));
// (0:17:)
console.log(document.querySelectorAll(`button`));
console.log(`= = = = = = = = = = = = =`);

// (0:32:)
// querySelector VS SelAll
console.log('querySelector VS SelAll:');
console.log(document.querySelector(`.button`));
var buttons = document.querySelectorAll(`.button`);

console.log(buttons);
console.log(`= = = = = = = = = = = = =`);

// (0:35:)
// numbers for buttons. test task
var button = `button`// undefined

for (let i = 0; i < buttons.length; i++) {
    // buttons[i].innerHTML = i;
    button = buttons[i];
    button.innerHTML = i;
    button.onclick = function (){
        console.log(i)
    }
}