// W3D2  2020.09.29

// (1:43:)
let cities = {Riga: 'Rīga'}

// (1:18:)
var abj = {}
var weather = document.getElementById('weather');


fetch('http://127.0.0.1/api/inbox/')
// C:\xampp\htdocs\api\inbox
  .then(res => res.json())
  .then(data => callback(data))
  .catch(e => console.log(e))

  // (1:21:)
  function callback(data){
    console.log(data);
    obj = data;
    var out = 
    // `<h4 class="center">${data.geoip.city}</h4>
    // <p class="center">
    // `<h4 class="center">${data.geoip.city}</h4>
    `<h4 class="center">${cities[data.geoip.city] || data.geoip.city}</h4>
    <p>
    Temperatura: ${data.weather.currTemp}&#8451;<br>
    Veja virziens: ${data.weather.windDir};<br>
    Veja atrums: ${data.weather.windSpeed};<br>
    Debesis: ${data.weather.icoSymbol};<br>
    </p>`;
    weather.innerHTML = out;
  
  }