let score = 0;
let difficulty = '';
let avatar = '';
 
function startGame() {
  document.getElementById('home-screen').style.display = 'none';
  document.getElementById('difficulty-screen').style.display = 'block';
  document.getElementById('game-screen').style.position = 'absolute';
  document.getElementById('difficulty-screen').style.position = 'absolute';
  document.getElementById('difficulty-screen').style.top = '500px';
  document.getElementById('difficulty-screen').style.left = '800px';
}
 
function setDifficulty(diff) {
  difficulty = diff;
  document.getElementById('difficulty-screen').style.display = 'none';
  document.getElementById('avatar-screen').style.display = 'block';
  document.getElementById('avatar-screen').style.position = 'absolute';
  document.getElementById('avatar-screen').style.top = '500px';
  document.getElementById('avatar-screen').style.left = '800px';
}
 
function setAvatar(selectedAvatar) {
  avatar = selectedAvatar;
  document.getElementById('avatar-screen').style.display = 'none';
  document.getElementById('game-screen').style.display = 'block';
  document.getElementById('game-screen').style.position = 'absolute';
  document.getElementById('game-screen').style.top = '500px';
  document.getElementById('game-screen').style.left = '800px';
  startConveyorBelt();
}
 
function startConveyorBelt() {
  const conveyorBelt = document.getElementById('conveyor-belt');
 
  setInterval(() => {
    const element = document.createElement('div');
    element.className = 'conveyor-element';
    const random = Math.random();
    element.textContent = random < 0.5 ? 'Recyclable' : 'Non-Recyclable';
   
    conveyorBelt.innerHTML = '';
    conveyorBelt.appendChild(element);
  }, 2000);
}
 
function recycle() {
  const bin = document.getElementById('bin');
  const conveyorElement = document.querySelector('.conveyor-element');
 
  if (conveyorElement) {
    const type = conveyorElement.textContent;
 
    if ((type === 'Recyclable' && bin.style.backgroundColor === '#00f') ||
        (type === 'Non-Recyclable' && bin.style.backgroundColor !== '#00f')) {
      score -= 1;
    } else {
      score += 2;
    }
 
    document.getElementById('score').textContent = score;
    conveyorElement.remove();
  }
}
 
class ConveyorElement {
    constructor(color, positionX, positionY) {
      this.color = color;
      this.positionX = positionX;
      this.positionY = positionY;
    }
  }