class Rope{
    constructor(body1,point2){
        var op = {
            bodyA: body1,
            pointB: point2,
            length: 450,
            stiffness: 0.04
        }
   
        this.band = Matter.Constraint.create(op);
        World.add(world,this.band);
       }
       display(){
           var point1 = this.band.bodyA.position;
           var point2 = this.band.pointB;
           
           strokeWeight(2);

           line(point1.x,point1.y,point2.x,point2.y);
           
       }
   
   }