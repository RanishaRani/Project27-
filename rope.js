class rope{
    constructor(body1,body2,OffsetX,OffsetY){
        var options = {
            bodyA: body1,
            bodyB : body2,
            pointB:{x :this.OffsetX, y: this.OffsetY}
        }
this.rope = Constraint.create(options);
World.add(world,this.rope);
    }
    display(){
        push();
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;
        strokeWeight(2);
        
        line(pointA.x,pointA.y,pointB.x + this.OffsetX,pointB.y + this.OffsetY);
        pop();
    }
    
}