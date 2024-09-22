document.addEventListener('DOMContentLoaded', function() { 
    maptilersdk.config.apiKey = mapToken;
    const map = new maptilersdk.Map({
    container: 'map', // container's id or the HTML element to render the map
    style: maptilersdk.MapStyle.STREETS,
    center: listing.geometry.coordinates, // starting position [lng, lat]
    zoom: 9, // starting zoom
    });


// console.log(coordinates);

const marker = new maptilersdk.Marker({color: "black"})
  .setLngLat(listing.geometry.coordinates)  //Listing.geometry.coordinates
  .setPopup(new maptilersdk.Popup({offset: 25})
  .setHTML(`<h4>${listing.title}</h4><p>Exact Location will be provided after booking</p>`))
  .addTo(map);
});

