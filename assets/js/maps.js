// function initMap() {
//     var map = new google.maps.Map(document.getElementById("map"), {
//         zoom: 3,
//         center: {
//             lat: 57.0000,
//             lng: 17.0000
//         }
//     });

//     var locations = [
//         { lat: 43.744616, lng: 10.374227 },
//         { lat: 41.015609, lng: 28.985123},
//         { lat: 48.858525, lng: 2.294471 },
//         { lat: 39.0742, lng: 21.8243 },
//         { lat: 51.1657, lng: 10.4515 }
        
//     ];

//     var markers = locations.map(function(location, i) {
//         return new google.maps.Marker({
//             position: location,
//             // label: labels[i % labels.length]
//         });
//     });

//     var markerCluster = new MarkerClusterer(map, markers,
//             {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
// }

      function initAutocomplete() {
        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 57.0000, lng: 17.0000},
          zoom: 13,
          mapTypeId: 'roadmap'
        });


        // Create the search box and link it to the UI element.
        var input = document.getElementById('pac-input');
        var searchBox = new google.maps.places.SearchBox(input);
        map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

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
            } else {
              bounds.extend(place.geometry.location);
            }
          });
          map.fitBounds(bounds);
        });
      }
