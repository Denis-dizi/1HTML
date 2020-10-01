function renderTable(obj){
  data = obj
  let out = ''
  let j = 0

  var arrLength = obj.length

  while(j < arrLength){
    out += `<h3>${obj[j].title}</h3>
      <p>${obj[j].body}</p>`
    j++ // j = j + 1, j += 1
  }

  
  posts.innerHTML = out
}