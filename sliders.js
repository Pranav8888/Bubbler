var speedSlider = document.getElementById("speedSlider");
var speed = document.getElementById("speed");
var isChecked = document.getElementById("checkbox");

speed.innerHTML = speedSlider.value;

speedSlider.oninput = function () {
  speed.innerHTML = this.value;
}

var bubblesSlider = document.getElementById("numSlider");
var bubblesNum = document.getElementById("num");
bubblesNum.innerHTML = bubblesSlider.value;

bubblesSlider.oninput = function () {
  bubblesNum.innerHTML = this.value
}

function colors() {
  var _red = document.getElementById("red").value;
  var _green = document.getElementById("green").value;
  var _blue = document.getElementById("blue").value;
  document.getElementById("output").innerHTML =
    "rgb(" + _red + "," + _green + "," + _blue + ")";
}