function renderTable(obj){
    data = obj
    let out = ``

    obj.forEach(element => {
        out += `<h3>${element.title}</h3>
      <p>${element.body}</p>`
    });

    posts.innerHTML = out
}
