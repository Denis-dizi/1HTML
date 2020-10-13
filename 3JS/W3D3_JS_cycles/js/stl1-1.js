// (0:49/52:)(1:11/16:)
// For cycle

var data;
const posts = document.getElementById('posts');

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => renderTable(data))
  // .then(data => console.log(data));

function renderTable(obj){
  data = obj
  let out = ''

  var arrLength = obj.length // lai navajdz'etu katru reizi skait'it no jauna
  for (let i = 0; i < arrLength; i++){
    out += `<h3>${obj[i].title}</h3>`
    out += `<p>${obj[i].body}</p>`
  }
  posts.innerHTML = out
}

console.log(`data:`);
console.log(data);
console.log(`posts:`);
console.log(posts);
// console.log(arrLength);
// console.log(data.length);

