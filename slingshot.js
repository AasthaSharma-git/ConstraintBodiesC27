class Slingshot {

constructor(body1,body2){
    var options={
        bodyA:body1,
        bodyB:body2,
        length:100,
        stiffness:0.04
    }
    
    this.slingshot=Matter.Constraint.create(options);
    World.add(world,this.slingshot);
    this.bodyA=body1;
    this.bodyB=body2;
    
}
display(){

  var pointA=this.bodyA.position;
  var pointB=this.bodyB.position;
  strokeWeight(10)
  line(pointA.x,pointA.y,pointB.x,pointB.y);



}

}