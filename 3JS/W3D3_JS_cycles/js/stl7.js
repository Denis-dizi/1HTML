// (0:14:) video 2
// ForEach
// (1:05:) video 2
//copy from loop2.js and ForOff (stl5.js))
//.filter method
function renderTable(obj){
    data = obj;
    let out = ``;
 
    obj = obj.filter(el => el.id > 80);

    for(let element of obj) {
      out += `<h3>${element.title}</h3>
        <p>${element.body}</p>
        <p>For off</p>
        <p>post ID: ${element.id}</p>`
    }

    posts.innerHTML = out
}
console.log(`.filter method:`)
console.log(`obj = obj.filter(el => el.id > 80);`)