function setNeeds() {
    document.getElementById("needs").innerHTML = "I need these things";
}
let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 37.5407, lng: -77.4360 },
    zoom: 8,
  });
}
