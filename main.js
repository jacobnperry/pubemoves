var chrisNeeds;





function setNeeds() {
  document.getElementById("showChris").innerHTML = document.getElementById("chrisNeeds").innerHTML;
}

function pullNeeds() {
  document.getElementById("showChris").innerHTML = chrisNeeds;
}
let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 37.5407, lng: -77.4360 },
    zoom: 8,
  });
}
