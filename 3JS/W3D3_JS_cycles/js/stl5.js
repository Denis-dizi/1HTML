// (0:47:) video 2
// For of cycle

function renderTable(obj){
  data = obj
  let out = ''
  let j = 0

  // obj.forEach(element => {
  //   out += `<h3>${element.title}</h3>
  //     <p>${element.body}</p>
  //     <p>post ID: ${element.id}</p>`
  // });

  // for(let index in obj) {
  //   out += `<h3>${obj[index].title}</h3>
  //     <p>${obj[index].body}</p>
  //     <p>ForIn</p>
  //     <p>post ID: ${obj[index].id}</p>`
  // }

  for(let element of obj) {
    out += `<h3>${element.title}</h3>
      <p>${element.body}</p>
      <p>For off</p>
      <p>post ID: ${element.id}</p>`
  }

  posts.innerHTML = out
}