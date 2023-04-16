/* ---------- Setup for the Leaflet map ----------*/
// Get the empty map <div> and form elements
const emissionsMap = document.getElementById("emissionsMap");
const formCity1 = document.getElementById("cityName1");
const formCity2 = document.getElementById("cityName2");
const mapButton = document.getElementById("mapSubmitButton");

// Variables to store the city names and coordinates
let cityName1 = "Toronto";
let cityName2 = "Barrie";
let lat1 = 43.65107;
let long1 = -79.347015;
let lat2 = 44.389;
let long2 = -79.69;

// Event listener for the Submit button
mapButton.addEventListener("click", function (e) {
	cityName1 = formCity1.value;
	cityName2 = formCity2.value;
	console.log(cityName1);
	console.log(cityName2);
});

// Initialize a new map
let map = L.map("emissionsMap").setView([lat1, long1], 13);

// Add a tile layer, adding visual layout to the map
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
	maxZoom: 19,
	attribution:
		'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

// Add markers
let marker1 = L.marker([lat1, long1]).addTo(map);
let marker2 = L.marker([lat2, long2]).addTo(map);

// Add a popup to the markers showing the city names
marker1.bindPopup(cityName1).openPopup();
marker2.bindPopup(cityName2).openPopup();
