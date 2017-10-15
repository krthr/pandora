var planets,
  theta = 0,
  planet,
  backgroundSound

function preload() {
  // Información de los planetas
  planets = {
    sun: {
      texture: loadImage("/images/textures/sun.jpg"),
      size: 300,
      gravity: 0,
      sound: ''
    },
    mercury: {
      texture: loadImage("/images/textures/mercury.jpg"),
      gravity: 0
    },
    venus: {
      texture: loadImage("/images/textures/venus.jpg"),
      gravity: 0
    },
    earth: {
      texture: loadImage("/images/textures/earth.jpg"),
      gravity: 9.8
    },
    mars: {
      texture: loadImage("/images/textures/mars.jpg"),
      gravity: 0
    },
    jupiter: {
      texture: loadImage("/images/textures/jupiter.jpg"),
      gravity: 0
    },
    saturn: {
      texture: loadImage("/images/textures/saturn.jpg"),
      gravity: 0
    },
    uranus: {
      texture: loadImage("/images/textures/uranus.jpg"),
      gravity: 0
    },
    neptune: {
      texture: loadImage("/images/textures/neptune.jpg"),
      gravity: 0
    }
  }
  soundFormats('mp3')
  // backgroundSound = loadSound('/sounds/interstellar.mp3')
}

function setup() {
  var x = windowWidth - 500;
  var canvas = createCanvas(x, windowHeight, WEBGL);
  canvas.parent('canvas')
  // backgroundSound.loop() // Repetir canción
}

function draw() {
  background(0);
  push();
  var dirY = (mouseY / height - 0.5) * 4;
  var dirX = (mouseX / width - 0.5) * 4;
  directionalLight(200, 200, 200, dirX, dirY, 1);
  rotateX(map(-1 * mouseX / 7, 0, height, 0, PI));
  rotateY(theta);

  texture(planets[planet].texture);

  var size;
  if (planets[planet].size) size = planets[planet].size;
  else size = 250;
  
  sphere(size);

  pop();
  theta += 0.005;
}
