class SlingShot
{
constructor(bodyA,pointB)
{
    var options=
    {
        bodyA:bodyA,
        pointB:pointB,
        length:10,
        stiffness:0.05
    }
    this.pointB=pointB
    this.sling = Constraint.create(options)
    this.image3=loadImage("sling3.png")
    World.add(world,this.sling)
    }

    fly ()
    {
    this.sling.bodyA=null
    }

display()
{
    image(this.image,200,20)
if (this.sling.bodyA) 
{

    var pointA=this.sling.bodyA.position
    var pointB=this.pointB
    

push()
    if(pointA.x<220)
    {
        strokeWeight(4)
    stroke(48,22,8)
    line(pointA.x-25,pointA.y,pointB.x-10,pointB.y)
    line(pointA.x-25,pointA.y,pointB.x+20,pointB.y)
    image(this.image3,pointA.x-30,pointA.y-10,20,20)
    }

    else

    {
        strokeWeight(3)
        line(pointA.x+25,pointA.y,pointB.x-10,pointB.y)                                                                         
        line(pointA.x+25,pointA.y,pointB.x+20,pointB.y)
        image(this.image3,pointA.x+15,pointA.y-10,20,20)
    }
pop()
}

}

}

