/* --> Declare all needed variables <-- */
var chooseElement;
var points = 0;
var gameend = false;

/* --> "Link" the bins from the html file <-- */
const recycleBin = document.querySelector(".recycle-bin");
const nonRecycleBin = document.querySelector(".non-recycle-bin");
const pointsDisplay = document.querySelector(".points-display");
const messageDisplay = document.getElementById("message");

document.getElementById("startButton").addEventListener("click", startGame);

function startGame() {
  // Set up game when the start button is pressed
  document.getElementById("startButton").style.display = "none"; // Hide the start button
  document.getElementById("game-container").style.display = "flex"; // Show the game-container
  initGame(); // Initialize the game
}

/* --> Function that starts the game's loop <-- */
function initGame() {
  const allElements = Array.from(document.querySelectorAll('.element'));
  const randomIndices = getRandomIndices(allElements.length, 16);

  let currentIndex = 0;
  allElements.forEach((e) => {
    e.style.display = "none";
  })

  /* --> Function that checks if the game has ended <-- */
  if (gameend = true) {
    function displayNextRandomElement() {
      if (currentIndex < randomIndices.length) {
        const element = allElements[randomIndices[currentIndex]];

        /* --> Code that decides when the next element should be displayed <-- */
        const currentElement = document.querySelector('.element:not([style*="display: none"])');
        if (currentElement) {
          currentElement.style.display = "none";
        }

        element.style.display = "";

        /* --> Code that makes the element class to be moveable <-- */
        element.addEventListener("mousedown", () => {
          element.style.position = "absolute";
          chooseElement = element;

          document.onmousemove = (e) => {
            var x = e.pageX;
            var y = e.pageY;

            chooseElement.style.left = x - 450 + "px";
            chooseElement.style.top = y - 550 + "px";
          };
        });

        /* --> Function that starts the game's loop <-- */
        document.onmouseup = function (e) {
          if (chooseElement) {
            if (isColliding(chooseElement, recycleBin)) {
              handleCollision(true);
              currentIndex++;
              setTimeout(displayNextRandomElement, 1000);
            } else if (isColliding(chooseElement, nonRecycleBin)) {
              handleCollision(false);
              currentIndex++;
              setTimeout(displayNextRandomElement, 1000);
            }
          }
          chooseElement = null;
          document.onmousemove = null;
        };
      }
    }


    displayNextRandomElement();
  }
  /* --> Code that displays text after a certain goal has been reached <-- */
  else {
    showMessage("Game Over! Better luck next time!");
  }
}

/* --> Function that shuffels all elements and sends out a random one <-- */
function getRandomIndices(totalElements, count) {
  const indices = Array.from({ length: totalElements }, (_, i) => i);
  const shuffled = indices.sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

/* --> Function that decides what to do after an element has collided with another element <-- */
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

  endGame();
}

/* --> Function that allows only one random element to be shown <-- */
function showRandomElement() {
  const elements = document.querySelectorAll(".element");


  elements.forEach((element) => (element.style.display = "none"));


  const randomIndex = Math.floor(Math.random() * elements.length);
  const newElement = elements[randomIndex];



  newElement.style.display = "block";
}

/* --> Function that calculates when two elements have collided <-- */
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

/* --> Function to update the "Points display" after a collision has occured <-- */
function updatePointsDisplay() {
  pointsDisplay.textContent = "Points: " + points;
}

/* --> Function made to show a message after a certain goal has been reached <-- */
function showMessage(msg) {
  messageDisplay.textContent = msg;
  messageDisplay.style.display = "block";
  setTimeout(() => {
    messageDisplay.style.display = "none";
    endGame();
  }, 1500);
}

/* --> Function made to show and endgame message <-- */
function endGame() {
  if (points < 0 || points >= 15) {
    const endMessage = points < 0 ? "Game Over! Better luck next time!" : "Congratulations! You won!";
    showMessage(endMessage);
    gameend = true;
  }
}