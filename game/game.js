var chooseElement;
var points = 0;
const recycleBin = document.querySelector(".recycle-bin");
const nonRecycleBin = document.querySelector(".non-recycle-bin");
const pointsDisplay = document.querySelector(".points-display");
const messageDisplay = document.getElementById("message");

function initGame() {
  const allElements = Array.from(document.querySelectorAll('.element'));
  const randomIndices = getRandomIndices(allElements.length, 16);

  let currentIndex = 0;
  allElements.forEach((e) => {
    e.style.display = "none";
  })

  function displayNextRandomElement() {
    const element = allElements[randomIndices[currentIndex]];
    element.style.display = "";

    
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

    document.onmouseup = function (e) {
      if (chooseElement) {
        if (isColliding(chooseElement, recycleBin)) {
          handleCollision(true);
        } else if (isColliding(chooseElement, nonRecycleBin)) {
          handleCollision(false);
        }
      }
      chooseElement = null;
      document.onmousemove = null;
    };

    currentIndex++;

    
  }

  displayNextRandomElement();
}

function getRandomIndices(totalElements, count) {
  const indices = Array.from({ length: totalElements }, (_, i) => i);
  const shuffled = indices.sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

function handleCollision(isRecycleBin) {
  const isRecycleable = chooseElement.classList.contains("recycleable");


  if ((isRecycleBin && isRecycleable) || (!isRecycleBin && !isRecycleable)) {
    points += 2;
    showMessage("Good job! +2 points");
  } else {
    points -= 1;
    showMessage("Oops! -1 point");
  }


  updatePointsDisplay();



  chooseElement.style.display = "none";


  showRandomElement();
}

function showRandomElement() {
  const elements = document.querySelectorAll(".element");

  
  elements.forEach((element) => (element.style.display = "none"));


  const randomIndex = Math.floor(Math.random() * elements.length);
  const newElement = elements[randomIndex];



  newElement.style.display = "block";
}

function isColliding(element, bin) {
  const rect1 = element.getBoundingClientRect();
  const rect2 = bin.getBoundingClientRect();

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

function showMessage(msg) {
  messageDisplay.textContent = msg;
  messageDisplay.style.display = "block";
  setTimeout(() => {
    messageDisplay.style.display = "none";
  }, 1500);
}


function EndGame() {
  if(points < 0 || points > 20)
  {
    showMessage("You have won!");
    
  }
}