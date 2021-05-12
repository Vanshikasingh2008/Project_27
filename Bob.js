class Bob {

    constructor(x,y){
        var options = {
            isStatic: false,
            restitution: 1.3,
            friction: 0.5,
            density: 1.2 
        }
        this.body = Bodies.circle(x,y,50,options);
        this.xpos = x;
        this.ypos = y;
        World.add(world, this.body);
    
    }
    
    display(){
        push();
        ellipseMode(RADIUS);
        fill(254,0,255);
        ellipse(this.body.position.x,this.body.position.y,50,50);
        pop();
    }
    
    }