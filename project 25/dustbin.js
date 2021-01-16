class dustbin{
    constructor(x,y,width,height) {
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);

        this.image = loadImage("images/dustbingreen.png");
      }
      display(){
        var pos =this.body.position;
        imageMode(CENTER);
        fill("red");
        scale (0.6);
      
        image (this.image,pos.x-300, pos.y-250,300,300);
        
       // rect (pos.x, pos.y, this.width, this.height);
      } 
}