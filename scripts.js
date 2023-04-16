// Setup for the Leaflet map
const emissionsMap = document.getElementById("emissionsMap");
let map = L.map("emissionsMap").setView([44.389, -79.69], 13);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
	maxZoom: 19,
	attribution:
		'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);
