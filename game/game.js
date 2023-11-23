var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);


let img = document.getElementById('img');
      let dynamicImage = document.createElement('img');
      dynamicImage.src = "../images/";
      img.appendChild(dynamicImage);

function preload ()
{
    
}

function create ()
{
    this.add.image(400, 300, 'sky');
}

function update ()
{
}