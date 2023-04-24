const colorSwapper = document.getElementById("colorSwapper");
const colors = ["color1.png", "color2.png", "color3.png", "color4.png", "color5.png"];
let currentColor = 0;

colorSwapper.addEventListener("click", function() {
  currentColor = (currentColor + 1) % colors.length;
  colorSwapper.src = colors[currentColor];
});