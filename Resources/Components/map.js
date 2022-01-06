function initMap() {
    // Map options
    var options = {
        zoom: 12,
        center: {
            lat: 54.524889,
            lng: -1.554139
        }
    }
    // New map
    var map = new google
        .maps
        .Map(document.getElementById('map'), options);

    // Add marker
    var marker = new google
        .maps
        .Marker({
            position: {
                lat: 54.53314444872029,
                lng: -1.509961444090491
            },
            map: map
        });
}