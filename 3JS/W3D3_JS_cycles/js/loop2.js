// (0:14:) video 2
// ForEach
function renderTable(obj){
    data = obj
    let out = ``

    obj.forEach(element => {
        out += `<h3>${element.title}</h3>
      <p>${element.body}</p>
      <p>For Each. Loop2.js</p>
      <p>post ID: ${element.id}</p>`
      // (0:21/25:) add ID for control
    });

    posts.innerHTML = out
}
