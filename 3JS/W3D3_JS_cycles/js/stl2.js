// (0:01/08:) video 2
// While cycle

var data;
const posts = document.getElementById('posts');

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => renderTable(data));

  function renderTable(obj){
      data = obj
      let out = ``
      let j = 0
  
  var arrLength = obj.length
  //For cycle
    // for (let i = 0; i < arrLength; i++){
    // out += `<h3>${obj[i].title}</h3>
    // <p>${obj[i].body}</p>`

  //While cycle
    while(j < arrLength){
      out += `<h3>${obj[j].title}</h3>
      <p>${obj[j].body}</p>`
      j++ // j = j + 1, j += 1
    }
    posts.innerHTML = out
  }
