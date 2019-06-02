// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

function carBox() {
    var result = document.getElementById("vehicle").checked; 
    if (result) {
        document.getElementById("fuel type").disabled = false;
    }
    else {
        document.getElementById("fuel type").disabled = true;
    }
}

function walkBox() {
    var result = document.getElementById("feet").checked;
    if (result) {
        document.getElementById("walkBox").disabled = false;
    }
    else {
        document.getElementById("walkBox").disabled = true;
    }
}

function bikeBox() {
    var result = document.getElementById("pedal").checked;
    if (result) {
        document.getElementById("bikeBox").disabled = false;
    }
    else {
        document.getElementById("bikeBox").disabled = true;
    }
}