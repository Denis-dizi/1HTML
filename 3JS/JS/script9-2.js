console.group(`HW`);

// HW (0:38/43:)  W3D2  2020.09.29

var hwobj = [
    {name: 'Player 1', notes: [3, 5, 8]},
    {name: 'Player 2', notes: [4, 6, 9]},
    {name: 'Player 3', notes: [2, 7, 9]},
    {name: 'Player 4', notes: [1, 5, 9]},
]


var out = '';
out += `<H1>Scores</H1>`
out += `<h3>${hwobj[0].name}</h3>`
out += `<ul>`
out += `<li>Points 1-st game: ${hwobj[0].notes[0]}</li>`
out += `<li>Points 2-nd game: ${hwobj[0].notes[1]}</li>`
out += `<li>Points 3-rd game: ${hwobj[0].notes[2]}</li>`
out += `</ul>`

out += `<h3>${hwobj[1].name}</h3>`
out += `<ul>`
out += `<li>Points 1-st game: ${hwobj[1].notes[0]}</li>`
out += `<li>Points 2-nd game: ${hwobj[1].notes[1]}</li>`
out += `<li>Points 3-rd game: ${hwobj[1].notes[2]}</li>`
out += `</ul>`

out += `<h3>${hwobj[2].name}</h3>`
out += `<ul>`
out += `<li>Points 1-st game: ${hwobj[2].notes[0]}</li>`
out += `<li>Points 2-nd game: ${hwobj[2].notes[1]}</li>`
out += `<li>Points 3-rd game: ${hwobj[2].notes[2]}</li>`
out += `</ul>`

out += `<h3>${hwobj[3].name}</h3>`
out += `<ul>`
out += `<li>Points 1-st game: ${hwobj[3].notes[0]}</li>`
out += `<li>Points 2-nd game: ${hwobj[3].notes[1]}</li>`
out += `<li>Points 3-rd game: ${hwobj[3].notes[2]}</li>`
out += `</ul>`

console.log(out);

// document.getElementById('hwobj').innerHTML = out;

function clickMe(){
    document.getElementById("hwobj").innerHTML = out;
}


console.groupEnd();
console.log('= = = = = = = = = = = =');

