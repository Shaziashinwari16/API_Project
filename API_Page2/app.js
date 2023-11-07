console.log("Hello World!");

function myFunction() {
  const inputNum = document.getElementById("id1");
  if (!inputNum.checkValidity()) {
    document.getElementById("test1").innerHTML = inputNum.validationMessage;
  } else {
    document.getElementById("test1").innerHTML = "Input Accepted!";
  }
}

function goBack() {
  window.history.back();
}

const x = document.getElementById("test2");

function findMe() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML =
    "Latitude: " +
    position.coords.latitude +
    "<br>Longitude: " +
    position.coords.longitude;
}