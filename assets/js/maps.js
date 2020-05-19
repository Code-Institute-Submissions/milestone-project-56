function initAutocomplete() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 54.5260, lng: 15.2551 },
    zoom: 3,
    mapTypeId: 'roadmap'
  });
  // Cluster Markers

  const locations = [
    { lat: 43.7228, lng: 10.4017, name: "Italy, Pisa" },
    { lat: 41.015609, lng: 28.985123, name: "Turkey, Istanbul" },
    { lat: 48.8566, lng: 2.3522, name: "France, Paris" },
    { lat: 37.9838, lng: 23.7275, name: "Greece, Athens" },
    { lat: 52.5200, lng: 13.4050, name: "Germany, Berlin" }

  ];


  const infowindow = new google.maps.InfoWindow(); // Only one InfoWindow
  function placeMarker(loc) {
    const marker = new google.maps.Marker({
      position: new google.maps.LatLng(loc.lat, loc.lng),
      map: map
    });
    google.maps.event.addListener(marker, 'click', function() {
      infowindow.close(); // Close previously opened infowindow
      infowindow.setContent(`<div id="infowindow">${loc.name}</div>`);
      infowindow.open(map, marker);
    });
  }

  // ITERATE ALL LOCATIONS. Pass every location to placeMarker
  locations.forEach(placeMarker);

}

google.maps.event.addDomListener(window, 'load', initGoogleMap)

// var markers = locations.map(function(location, i) {
//     return new google.maps.Marker({
//         position: location,
//         // label: labels[i % labels.length]
//     });
// });

// var markerCluster = new MarkerClusterer(map, markers,
//         {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});


// Linking Search Bar with map
// Create the search box and link it to the UI element.
var input = document.getElementById('pac-input');
var searchBox = new google.maps.places.SearchBox(input);
// map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

// Bias the SearchBox results towards current map's viewport.
map.addListener('bounds_changed', function() {
  searchBox.setBounds(map.getBounds());
});

var markers = [];
// Listen for the event fired when the user selects a prediction and retrieve
// more details for that place.
searchBox.addListener('places_changed', function() {
  var places = searchBox.getPlaces();

  if (places.length == 0) {
    return;
  }

  // Clear out the old markers.
  markers.forEach(function(marker) {
    marker.setMap(null);
  });
  markers = [];

  // For each place, get the icon, name and location.
  var bounds = new google.maps.LatLngBounds();
  places.forEach(function(place) {
    if (!place.geometry) {
      console.log("Returned place contains no geometry");
      return;
    }
    var icon = {
      url: place.icon,
      size: new google.maps.Size(71, 71),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(17, 34),
      scaledSize: new google.maps.Size(25, 25)
    };

    // Create a marker for each place.
    markers.push(new google.maps.Marker({
      map: map,
      icon: icon,
      title: place.name,
      position: place.geometry.location
    }));

    if (place.geometry.viewport) {
      // Only geocodes have viewport.
      bounds.union(place.geometry.viewport);
    }
    else {
      bounds.extend(place.geometry.location);
    }
  });
  map.fitBounds(bounds);
});



// Adding information of countries to maps

// function initMap() {
//         var berlin = {lat: 52.5200, lng: 13.4050 };
//         var map = new google.maps.Map(document.getElementById('map'), {
//           zoom: 4,
//           center: berlin
//         });

//         var contentString = '<div id="content">'+
//             '<div id="siteNotice">'+
//             '</div>'+
//             '<h1 id="firstHeading" class="firstHeading">Berlin</h1>'+
//             '<div id="bodyContent">'+
//             '<p><b>Berlin</b>, is the capital and largest city of Germany by both area and population. ' +
//             'Its 3,769,495 (2019) inhabitants make it the most populous city proper of the European Union. '+
//             '<p><a href="https://en.wikipedia.org/wiki/Berlin">'+
//             'Read More</a> '+
//             '</p>'+
//             '</div>'+
//             '</div>';

//         var infowindow = new google.maps.InfoWindow({
//           content: contentString
//         });

//         var marker = new google.maps.Marker({
//           position: Berlin,
//           map: map,
//           title: 'Berlin'
//         });
//         marker.addListener('click', function() {
//           infowindow.open(map, marker);
//         });
//       }

// function initMap() {
//         var berlin = {lat: -25.363, lng: 131.044};
//         var map = new google.maps.Map(document.getElementById('map'), {
//           zoom: 4,
//           center: uluru
//         });

//         var contentString = '<div id="content">'+
//             '<div id="siteNotice">'+
//             '</div>'+
//             '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
//             '<div id="bodyContent">'+
//             '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
//             'sandstone rock formation in the southern part of the '+
//             'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
//             'south west of the nearest large town, Alice Springs; 450&#160;km '+
//             '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
//             'features of the Uluru - Kata Tjuta National Park. Uluru is '+
//             'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
//             'Aboriginal people of the area. It has many springs, waterholes, '+
//             'rock caves and ancient paintings. Uluru is listed as a World '+
//             'Heritage Site.</p>'+
//             '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
//             'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
//             '(last visited June 22, 2009).</p>'+
//             '</div>'+
//             '</div>';

//         var infowindow = new google.maps.InfoWindow({
//           content: contentString
//         });

//         var marker = new google.maps.Marker({
//           position: uluru,
//           map: map,
//           title: 'Uluru (Ayers Rock)'
//         });
//         marker.addListener('click', function() {
//           infowindow.open(map, marker);
//         });
//       }
