// (0:11:) video 2
var data;
const posts = document.getElementById('posts');

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => renderTable(data));