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

  for(let element of obj) {
    out += `<h3>${element.title}</h3>
      <p>${element.body}</p>
      <p>For off</p>
      <p>post ID: ${element.id}</p>`
  }

  posts.innerHTML = out
}