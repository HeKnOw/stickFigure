import Matter from 'matter-js'

const Bodies = Matter.Bodies

class Ground {
  constructor(height, width) {
    this.height = height
    this.width = width
    this.ground = Bodies.rectangle(400, this.height - 80, this.width, 50, { isStatic: true });
  }

  getBodies = () => { return this.ground }

  show = () => {
    rect(0, this.height - 105, this.width , 5)
  }
}

export { Ground as default }
