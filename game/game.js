var chooseElement;
var points = 0;
const bin = document.querySelector(".bin");
const pointsDisplay = document.createElement("div");

pointsDisplay.className = "points-display";
document.body.appendChild(pointsDisplay);

function initGame() {
  moveElementsRandomly();
}

function moveElementsRandomly() {
  const elements = document.querySelectorAll(".element");

  elements.forEach((element) => {
    element.style.left = Math.floor(Math.random() * 900) + "px";
    element.style.top = Math.floor(Math.random() * 400) + "px";

    element.addEventListener("mousedown", () => {
      element.style.position = "absolute";
      chooseElement = element;

      document.onmousemove = (e) => {
        var x = e.pageX;
        var y = e.pageY;

        chooseElement.style.left = x - 550 + "px";
        chooseElement.style.top = y - 645 + "px";
      };
    });
  });

  document.onmouseup = function (e) {
    if (chooseElement && isColliding(chooseElement, bin)) {
      handleCollision();
    }
    chooseElement = null;
  };
}

function handleCollision() {
  const isRecycleable = chooseElement.classList.contains("recycleable");

  if (isRecycleable) {
    points += 2;
  } else {
    points -= 1;
  }

  updatePointsDisplay();

  chooseElement.style.display = "none";

  chooseElement.style.left = Math.floor(Math.random() * 900) + "px";
  chooseElement.style.top = Math.floor(Math.random() * 400) + "px";
}

function isColliding(element1, element2) {
  const rect1 = element1.getBoundingClientRect();
  const rect2 = element2.getBoundingClientRect();

  return !(
    rect1.right < rect2.left ||
    rect1.left > rect2.right ||
    rect1.bottom < rect2.top ||
    rect1.top > rect2.bottom
  );
}

function updatePointsDisplay() {
  pointsDisplay.textContent = "Points: " + points;
}
