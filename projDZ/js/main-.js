var abj = {}
var weather = document.getElementById('weather');


fetch('http://127.0.0.1/api/inbox/')
  .then(res => res.json())
  .then(data => callback(data))
  .catch(e => console.log(e))

  function callback(data){
    var out = ''
    <h4 class="center"></h4><h5 class="center">15.8℃</h5>
  }