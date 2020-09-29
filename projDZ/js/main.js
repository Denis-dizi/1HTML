var abj = {}
var weather = document.getElementById('weather');


fetch('http://127.0.0.1/api/inbox/')
  .then(res => res.json())
  .then(data => callback(data))
  .catch(e => console.log(e))

  function callback(data){
    obj = data
    var out = `<h4 class="center">${data.geoip.city}</h4><h5 class="center">${data.weather.currTemp}&#8451;</h5>`
    weather.innerHTML = out
  
  }