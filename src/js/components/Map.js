// import L from 'leaflet'

const odaconnectPLlonLat = [49.9656593, 20.6081992];
const map = L.map('map').setView(odaconnectPLlonLat, 16);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker(odaconnectPLlonLat).addTo(map)
  .bindPopup('Brzesko, ul. Rzeźnicza 5')
  .openPopup(); 