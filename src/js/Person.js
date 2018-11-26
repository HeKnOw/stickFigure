import Matter from 'matter-js'

class Person {
  constructor(x, y) {
    const Bodies = Matter.Bodies
    // create two boxes and a ground
    this.x = x
    this.y = y
    //head
    this.head = Bodies.circle(this.x, this.y, 25)
  }

  getBodies = () => this.head

  show = () => {
    push()
    translate(this.head.position.x, this.head.position.y);
    ellipse(0, 0, 50, 50)
    pop()
  }

}

export { Person as default }
