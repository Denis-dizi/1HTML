// (0:42:) video 2
// For in cycle
function renderTable(obj){
  data = obj
  let out = ''
  let j = 0
  // var arrLength = obj.length

  // obj.forEach(element => {
  //   out += `<h3>${element.title}</h3>
  //     <p>${element.body}</p>
  //     <p>post ID: ${element.id}</p>`
  // });

  for(let index in obj) {
    out += `<h3>${obj[index].title}</h3>
      <p>${obj[index].body}</p>
      <p>ForIn</p>
      <p>post ID: ${obj[index].id}</p>`
  }

  posts.innerHTML = out
}