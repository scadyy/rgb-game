var colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)"
];

var squares = document.querySelectorAll(".square");
var pickedColor = colors[3];
var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
    // Add initial colors to squares
    squares[i].style.background = colors[i];

    // Add click listeners to sqaures
    squares[i].addEventListener("click", function() {
        // grab color of clicked sqaure
        var clickedColor = this.style.background;
        // compare color of pickedColor
        if (clickedColor === pickedColor) {
            alert("correct");
        } else {
            alert("wrong");
        }
    });
}