// (0:11:) video 2
//While cyle
function renderTable(obj){
  data = obj
  let out = ''
  let j = 0

  var arrLength = obj.length

  while(j < arrLength){
    console.log(obj[j].id);
    out += `<h3>${obj[j].title}</h3>
      <p>${obj[j].body}</p>
      <p>post ID: ${obj[j].id}</p>`
       j++ // j = j + 1, j += 1
        // (0:21/25:) add ID for control
  }

  
  posts.innerHTML = out
}