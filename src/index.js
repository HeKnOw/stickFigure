import logMessage from './js/logger'
import './css/style.css'
import CreateWorld from './js/createWorld'
import * as p5 from 'p5'

const HEIGHT = 900
const WIDTH = 800

let world = null
// module aliases
const setup = () => {
  const canvas = createCanvas(HEIGHT, WIDTH)
  world = new CreateWorld(canvas, HEIGHT, WIDTH)
  background(150)
}

const draw = () => {
  background(150)
  world.show()
}

const mouseDragged = () => {
  world.mousePressed()

}

window.setup = setup
window.draw = draw
window.mouseDragged = mouseDragged


// Log message to console
//logMessage('Welcome to Stick Figure!')

// Needed for Hot Module Replacement
if(typeof(module.hot) !== 'undefined') {
  module.hot.accept() // eslint-disable-line no-undef
}
