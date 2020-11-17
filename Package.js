class Package{
    constructor(width,height,scale){
        var options={
            'restitution':0.1
        }
          this.body = Bodies.rectangle(375,169,50,50,options);
          this.scale = scale;
          this.width = 50;
          this.height = 50;
          this.image = loadImage("package.png")
          
          
          World.add(world,this.body);
    }
    display(){
        
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y)
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height)
        pop();
    }
}