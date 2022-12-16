const coords = { x: 0, y: 0 }
const circles = document.querySelectorAll(".circle");
const colors = ["#1f005c", "#5b0060", "#870160", "#ac255e", "#ca485c", "#e16b5c", "#f39060", "#ffb56b"]

circles.forEach(function (circle) {
  circle.x = 0;
  circle.y = 0;
})

window.addEventListener("mousemove", function (e) {
  // console.log(e.clientX, e.clientY);
  coords.x = e.clientX
  coords.y = e.clientY
})


function animateCircles() {
  let x = coords.x;
  let y = coords.y

  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";
    // circle.style.backgroundColor = "Pink"
    circle.style.backgroundColor = colors[index % colors.length];

    // For showing like circle has tail:
    circle.style.scale = (circles.length - index) / circles.length;

    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  })

  requestAnimationFrame(animateCircles)
}

animateCircles()