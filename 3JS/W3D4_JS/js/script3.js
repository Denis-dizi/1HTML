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


console.log('type "table" to see data.')
function renderTable(data) {
    table = data
    let out =''
    out += `<table id="myTable"><thead>
    <tr><th>ID</th><th>Name</th><th>User Name</th><th>email</th>
    </tr></thead><tbody>`
    data.forEach(element => {
        out += `<tr>
        <td>${element.id}</td>
        <td>${element.name}</td>
        <td>${element.username}</td>
        <td>${element.email}</td>
        </tr>`
    });
    out += `</tbody></table>`

    document.getElementById('table').innerHTML = out
}
