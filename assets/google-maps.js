function initMap(latitude, longitude) {
    // Create the map object
    let map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: latitude, lng: longitude},
        zoom: 15
    });

    // Add a marker to the map
    google.maps.event.addListenerOnce(map, 'tilesloaded', function () {
        // Add a marker to the map
        let marker = new google.maps.Marker({
            position: {lat: latitude, lng: longitude},
            map: map
        });
    });

    // Create the places service.
    let service = new google.maps.places.PlacesService(map);

    // Perform a nearby search.
    service.nearbySearch(
        {location: {lat: latitude, lng: longitude}, radius: 1000, type: 'restaurant'},
        (results, status, pagination) => {
            if (status !== "OK" || !results) return;

            // Add markers to the map for each place returned
            results.forEach((place) => {
                if (!place.geometry || !place.geometry.location) return;

                new google.maps.Marker({
                    map,
                    position: place.geometry.location,
                });
            });
        }
    );
}