class block {
constructor(x, y, width, height) {
var options = {
restitution:0.4,
friction:0.0
}
this.width = width;
this.height = height;
this.body = Bodies.rectangle(x, y, width, height, options);
this.visiblity=255;
  
World.add(world, this.body);
}

display(){ 
World.remove(world,this.body);
push();
this.visibility=this.visibility - 5;
tint(255, this.visibility);
rect(this.body.position.x,this.body.position.y,this.width,this.height);
pop();

}
};