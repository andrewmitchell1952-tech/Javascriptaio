const ball = document.getElementById("ball");
document.addEventListener("keydown", handleKeyPress);
let position = 50;
let mylocation = 50;
refresh();

function handleKeyPress(e) {
  if (e.code === "ArrowLeft") {
    position = position - 20;
  }
  if (e.code === "ArrowRight") {
    position = position + 20;
  }
  if (e.code === "ArrowDown") {
    mylocation = mylocation + 20;
  }
  if (e.code === "ArrowUp") {
    mylocation = mylocation - 20;
  }
  if (position < 0) {
    position = 0;
  }
  if (mylocation < 0) {
    mylocation = 0;
  }
  refresh();
}
function refresh() {
  ball.style.left = position + "px";
  ball.style.top = mylocation + "px";
}
