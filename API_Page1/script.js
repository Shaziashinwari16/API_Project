let map;

async function initMap() {
  try {
    const { Map } = await google.maps.importLibrary("maps");

    map = new Map(document.getElementById("map"), {
      center: { lat: 35.6764, lng: 139.6500 },
      zoom: 8,
      mapTypeId: "terrain"
    });

    const marker = new google.maps.Marker({
      position:  { lat: 35.6764, lng: 139.6500 },
      map: map,
      label: "A",
      title: "Tokyo",
      draggable: false,
      animation: google.maps.Animation.DROP,
    });

    const infoWindow = new google.maps.InfoWindow({
      content: '<p>This is an info window</p>'
    });

    marker.addListener('click', function() {
      infoWindow.open(map, marker);
    });

  } catch (error) {
    console.error('Error loading Google Maps:', error);
  }
}