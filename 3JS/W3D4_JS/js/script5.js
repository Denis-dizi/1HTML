//W3D4-3   2020.10.02
//(2:33:)

// https://jsonplaceholder.typicode.com/users
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

//(2:33:)
var table;

// console.log('Fetch. Data:')
fetch('data3.json')
  .then(response => response.json())
//   .then(data => console.log(data))
  .then(data => renderTable(data));

//Render Table with "arr.map" + "arr.join"
console.log('type "table" to see data.')
function renderTable(data) {
    table = data
    let out =''
    out += 
    `<table id="myTable2"><thead>
    <tr><th>ID</th><th>Name</th><th>User Name</th><th>email</th>
    </tr></thead><tbody>`
    out += data.map(element => {
      return `<tr>
      <td>${element.id}</td>
      <td>${element.name}</td>
      <td>${element.username}</td>
      <td>${element.email}</td>
      </tr>`
    }).join(' ');
    out += `</tbody></table>`
    // console.log(out)
    document.getElementById('table').innerHTML = out
}
