var planets = {
  sun: {
    name: 'Sol',
    size: 300,
    gravity: 274,
    sound: '',
    satelites: '-',
    year: '-',
    day: 24.5
  },
  mercury: {
    name: 'Mercurio',
    gravity: 2.8,
    satelites: 0,
    day: 58.6,
    year: 0.24
  },
  venus: {
    name: 'Venus',
    gravity: 8.9,
    satelites: 0,
    day: -243,
    year: 0.615
  },
  earth: {
    name: 'Tierra',
    gravity: 9.8,
    satelites: 1,
    day: 1,
    year: 1
  },
  mars: {
    name: 'Marte',
    gravity: 3.7,
    satelites: 2,
    day: 1.03,
    year: 1.88
  },
  jupiter: {
    name: 'Júpiter',
    size: 270,
    gravity: 22.9,
    satelites: 63,
    day: 0.414,
    year: 11.86
  },
  saturn: {
    name: 'Saturno',
    gravity: 9.1,
    satelites: 61,
    day: 0.426,
    year: 29.46
  },
  uranus: {
    name: 'Urano',
    gravity: 7.8,
    satelites: 27,
    day: 0.718,
    year: 84.01
  },
  neptune: {
    name: 'Neptuno',
    gravity: 11.00,
    satelites: 13,
    day: 0.6745,
    year: 164.8
  }
}

var theta = 0
var backgroundSound, guiSelect, startSound, guiClick
var normalVel = false,
  pause = false

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
  soundFormats('mp3', 'wav') // Formato de sonidos que trabajaremos
  // Cargar sonido de fondo
  backgroundSound = loadSound('/sounds/interstellar.mp3')
  guiSelect = loadSound('/sounds/gui_select.mp3')
  startSound = loadSound('/sounds/start.mp3')
  guiClick = loadSound('/sounds/click.wav')
}

function setup() {
  var canvas = createCanvas(windowWidth - 500, windowHeight, WEBGL) // Crear canvas
  canvas.parent('canvas') // El canvas se creará sobre el div#canvas
  // backgroundSound.loop() // Iniciar y repetir sonido de fondo
  startSound.loop()
}

function draw() {
  background(0) // Color de fondo (negro)
  push()
  var dirY = (250 / height - 0.5) * 4;
  var dirX = (250 / width - 0.5) * 4;
  directionalLight(200, 200, 200, dirX, dirY, 1);
  rotateX(map(-1 * mouseX / 7, 0, height, 0, PI));
  rotateY(theta) // Rotar un ángulo theta

  texture(planets[planet].texture) // Cargar textura del planeta
  var size = (planets[planet].size ? planets[planet].size : 250) // Obtener el tamaño del planeta o usar 250 por defecto
  sphere(size) // Crear la esfera

  pop();

  if (!pause) {
    if (!normalVel) theta += (0.01 / planets[planet].day);
    else theta += 0.005;
  }

}
