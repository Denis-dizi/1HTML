var abj = {}
var weather = document.getElementById('weather');


fetch('http://127.0.0.1/api/inbox/')
  .then(res => res.json())
  .then(data => callback(data))
  .catch(e => console.log(e))

  function callback(data){
    console.log(data)
    obj = data
}