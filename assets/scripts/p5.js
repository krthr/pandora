var planets = {
  sun: {
    name: 'Sol',
    size: 300,
    gravity: 0,
    sound: ''
  },
  mercury: {
    name: 'Mercurio',
    gravity: 0
  },
  venus: {
    gravity: 0
  },
  earth: {
    gravity: 9.8
  },
  mars: {
    name: 'Marte',
    gravity: 0
  },
  jupiter: {
    name: 'Júpiter',
    gravity: 0
  },
  saturn: {
    name: 'Saturno',
    gravity: 0
  },
  uranus: {
    gravity: 0
  },
  neptune: {
    gravity: 0
  }
}

var theta = 0
var backgroundSound


function preload() {
  // Cargar texturas
  planets.sun.texture = loadImage("/images/textures/sun.jpg")
  planets.mercury.texture = loadImage("/images/textures/mercury.jpg")
  planets.venus.texture = loadImage("/images/textures/venus.jpg")
  planets.earth.texture = loadImage("/images/textures/earth.jpg")
  planets.mars.texture = loadImage("/images/textures/mars.jpg")
  planets.jupiter.texture = loadImage("/images/textures/jupiter.jpg")
  planets.saturn.texture = loadImage("/images/textures/saturn.jpg")
  planets.uranus.texture = loadImage("/images/textures/uranus.jpg")
  planets.neptune.texture = loadImage("/images/textures/neptune.jpg")
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
  var dirY = (250 / height - 0.5) * 4;
  var dirX = (250 / width - 0.5) * 4;
  directionalLight(200, 200, 200, dirX, dirY, 1);
  rotateX(map(-1 * mouseX / 7, 0, height, 0, PI));
  rotateY(theta);

  texture(planets[planet].texture);
  var size = (planets[planet].size ? planets[planet].size : 250)
  sphere(size);

  pop();
  theta += 0.005;
}
