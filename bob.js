class bob{
    constructor(x,y,radius){
        var options = {
            
            isStatic : false,
            restitution : 0.3,
            density : 1.2,
            friction : 0.5
        }
        this.radius = radius;
        this.body = Matter.Bodies.circle(x,y,radius,options);
        
        World.add(world,this.body)
    }
    display(){
    
        var pos = this.body.position;
        push();
        fill("pink");
       
        circle(pos.x,pos.y,this.radius);
        pop();

    }
}