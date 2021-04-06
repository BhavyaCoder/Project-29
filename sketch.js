const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint
var gameState="OnSling"
var engine, world;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world=engine.world
    polygon=Bodies.circle(50,200,20);
    World.add(world,polygon);
    slingshot=new SlingShot(this.polygon,{x:100,y:200});
    ground=new Ground(800,400,315,10)
block1 = new Block(800,200,40,50);
block2  = new Block(800,100,40,50);
block3  = new Block(800,90,40,50);
block4  = new Block(800,70,40,50);
block5  = new Block(760,200,40,50);
block6  = new Block(720,200,40,50);
block7  = new Block(680,200,40,50);
block8  = new Block(840,200,40,50);
block9  = new Block(880,200,40,50);
block10 = new Block(920,180,40,50);
block11 = new Block(760,160,40,50);
block12 = new Block(760,120,40,50);
block13 = new Block(720,160,40,50);
block14 = new Block(840,160,40,50);
block15 = new Block(840,110,40,50);
block16 = new Block(880,160,40,50);

polygon=Bodies.circle(50,200,20);
World.add(world,polygon);
slingshot=new SlingShot(this.polygon,{x:100,y:200});

}

function draw()
{
    background(0)
    Engine.update(engine);
    ground.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();

    imageMode(CENTER)
    image(polygon.png,polygon.position.x,polygon.position.y,40,40)

    slingshot.display();
    
}


function mouseDragged ()
{
Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY})
}

function mouseReleased ()
{
slingshot.fly ()
}
