var inputs = document.querySelectorAll("input");
var spans = document.querySelectorAll(".clr");
var values = document.querySelectorAll(".value");

getValue();
changeColor();

function getValue() {
  inputs.forEach(function (item, index) {
    var value = item.value;
    spans[index].innerText = value;
    values[index].innerText = value;
  });
}

function changeColor() {
  var colors = [];
  var inputs = document.querySelectorAll("input");
  var body = document.querySelector("body");

  inputs.forEach(function (item) {
    colors.push(item.value);
  });

  if (colors[0] <= 155) {
    body.style.color = "white";
  } else if (colors[0] > 155) {
    body.style.color = "black";
  }

  body.style.backgroundColor =
    "rgb(" + colors[0] + "," + colors[1] + "," + colors[2] + ")";
}

inputs.forEach(function (item) {
  item.addEventListener("mousedown", function () {
    setInterval(function () {
      getValue();
      changeColor();
    }, 0);
  });
});
