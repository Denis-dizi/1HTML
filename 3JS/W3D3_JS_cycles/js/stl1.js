var data;
const posts = document.getElementById('posts');

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => renderTable(data));

  function renderTable(obj){
      data = obj
      let out = ''
  
  var arrLength = obj.length
  for (let i = 0; i < arrLength; i++){
      out += `<h3>${obj[i].title}</h3>`
      out += `<p>${obj[i].body}</p>`
  }
  posts.innerHTML = out
}