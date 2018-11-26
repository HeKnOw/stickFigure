import Matter from 'matter-js'
import Person from './Person.js'
import Ground from './Ground.js'

const Engine = Matter.Engine,
      Render = Matter.Render,
      World = Matter.World,
      Mouse = Matter.Mouse,
      MouseConstraint = Matter.MouseConstraint

class CreateWorld {

  constructor(canvas, height, width) {

    // const mouse = Mouse.create(canvas.elt)
    // mouse.pixelRatio = pixelDensity()
    // create an engine
    this.engine = Engine.create();

    // this.mouseConstraint = MouseConstraint.create(this.engine, { mouse })
    this.person = null
    this.people = []

    this.ground = new Ground(height, width)

    // add all of the bodies to the world
    World.add(this.engine.world, this.ground.getBodies());
    // World.add(this.engine.world, this.person.getBodies());

    // run the engine
    Engine.run(this.engine);

    // run the renderer
    // Render.run(render);
  }

  show = () => {
    for(let i=0; i < this.people.length; i++ ) {
      this.people[i].show()
    }
    // this.person && this.person.show()
    this.ground.show()
    // console.log(this.people.length)
  }

  getPeople() {
    return this.people
  }

  mousePressed = () => {
    this.personToAdd = new Person(mouseX, mouseY)
    this.people.push(this.personToAdd)
    World.add(this.engine.world, this.personToAdd.getBodies())
    // this.person = new Person(mouseX, mouseY)
    // World.add(this.engine.world, this.person.getBodies())
  }
}


export { CreateWorld as default }
