class Umbrella {

    constructor(x,y,width,height){

        var ball_options = {
            restitution : 0.5 , density : 1.5 , isStatic : true
        }
 
        this.body = Bodies.rectangle(x,y,width,height, ball_options);
        this.width = 10;
        this.height = 10;
        //this.radius = 10;
        this.x = x;
        this.y = y;
        this.anim = loadAnimation("images/walkingFrame/walking_1.png","images/walkingFrame/walking_2.png","images/walkingFrame/walking_3.png","images/walkingFrame/walking_4.png");
        World.add(myworld,this.body);

    }

    

    display(){

        var position = this.body.position;
        var angle = this.body.angle;
       // ellipseMode(RADIUS);
        rectMode(CENTER)
        push();
        translate(position.x,position.y);
        rotate(angle);
        animation(this.anim,0,0,this.width,this.height);
        pop();
    }

    

}