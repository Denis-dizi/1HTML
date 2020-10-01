fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => renderTable(data));

  function renderTable(obj){
      data = obj
  }

  var arrLength = obj.length
  for (let i = 0; arrLength; i++){
      
  }