
      function initAutocomplete() {
        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 54.5260, lng: 15.2551},
          zoom: 3,
          mapTypeId: 'roadmap'
        });
//Cluster Markers
            
            var locations = [
        { lat: 43.7228, lng: 10.4017 },
        { lat: 41.015609, lng: 28.985123},
        { lat: 48.8566, lng: 2.3522 },
        { lat: 37.9838, lng: 23.7275 },
        { lat: 52.5200, lng: 13.4050 }
        
    ];

    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            // label: labels[i % labels.length]
        });
    });

    var markerCluster = new MarkerClusterer(map, markers,
            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
        

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
            } else {
              bounds.extend(place.geometry.location);
            }
          });
          map.fitBounds(bounds);
        });
      }
      
      
// Adding information of countries to maps

function initMap() {
        var berlin = {lat: 52.5200, lng: 13.4050 };
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: berlin
        });

        var contentString = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Berlin</h1>'+
            '<div id="bodyContent">'+
            '<p><b>Berlin</b>, is the capital and largest city of Germany by both area and population. ' +
            'Its 3,769,495 (2019) inhabitants make it the most populous city proper of the European Union. '+
            '<p><a href="https://en.wikipedia.org/wiki/Berlin">'+
            'Read More</a> '+
            '</p>'+
            '</div>'+
            '</div>';

        var infowindow = new google.maps.InfoWindow({
          content: contentString
        });

        var marker = new google.maps.Marker({
          position: Berlin,
          map: map,
          title: 'Berlin'
        });
        marker.addListener('click', function() {
          infowindow.open(map, marker);
        });
      }