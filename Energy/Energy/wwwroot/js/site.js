// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.


// RENDERING MAP
       // Initialize and add the map
/*function initMap() {
    // The location of Uluru
    var uluru = { lat: -25.344, lng: 131.036 };
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), { zoom: 4, center: uluru });
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({ position: uluru, map: map });
}*/


// Global variables for markers (hehe)
var marker1;
var marker2
var resultCar = document.getElementById("vehicle").checked;
var resultWalk = document.getElementById("feet").checked;
var resultBike = document.getElementById("pedal").checked;
var resultTransit = document.getElementById("bus").checked;


function initMap() {
    var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer;
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 7,
        center: { lat: 41.85, lng: -87.65 }
    });
    marker1 = new google.maps.Marker({ position: { lat: 41.85, lng: -87.65 }, map: map, draggable: true });
    marker2 = new google.maps.Marker({ position: { lat: 41.95, lng: -87.65 }, map: map, draggable: true });
    directionsDisplay.setMap(map);
    directionsDisplay.setPanel(document.getElementById('right-panel'));

    var onChangeHandler = function () {
        calculateAndDisplayRoute(directionsService, directionsDisplay);
    };

    var onReverseChangeHandler = function () {
        var temp = marker2;
        marker2 = marker1;
        marker1 = temp;
        calculateAndDisplayRoute(directionsService, directionsDisplay);
    };
    document.getElementById('route').addEventListener('click', onChangeHandler);
    document.getElementById('reverse').addEventListener('click', onReverseChangeHandler);
}

function calculateAndDisplayRoute(directionsService, directionsDisplay) {
    var responseWalk;
    var responseBike;
    var responseTransit;
    var responseCar;
    resultCar = document.getElementById("vehicle").checked;
    resultWalk = document.getElementById("feet").checked;
    resultBike = document.getElementById("pedal").checked;
    resultTransit = document.getElementById("bus").checked;

  /*  if (resultCar) {
        directionsService.route({
            origin: marker1.position,
            destination: marker2.position,
            travelMode: 'WALKING'
        }, function (responseWalk, status) {
            if (status === 'OK') {
                directionsDisplay.setDirections(response);
            } else {
                window.alert('Directions request failed due to ' + status);
            }
        });*/

    directionsService.route({
        origin: marker1.position,
        destination: marker2.position,
        travelMode: 'DRIVING'
    }, function (response, status) {
        if (status === 'OK') {
            directionsDisplay.setDirections(response);
        } else {
            window.alert('Directions request failed due to ' + status);
        }
    });
}


// SELECTING TRAVEL METHOD FUNCTIONS

function carBox() {
    resultCar = document.getElementById("vehicle").checked; 
    if (resultCar) {
        document.getElementById("fuel type").disabled = false;
    }
    else {
        document.getElementById("fuel type").disabled = true;
    }
}

function walkBox() {
    resultWalk = document.getElementById("feet").checked;
    if (resultWalk) {
        document.getElementById("walkBox").disabled = false;
    }
    else {
        document.getElementById("walkBox").disabled = true;
    }
}

function bikeBox() {
    resultBike = document.getElementById("pedal").checked;
    if (resultBike) {
        document.getElementById("bikeBox").disabled = false;
    }
    else {
        document.getElementById("bikeBox").disabled = true;
    }
}