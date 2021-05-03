class Drop {

    constructor(x,y){

        var drop_options = {
            restitution : 0.5 , density : 1.5 
        }

        this.body = Bodies.circle(x,y,7, drop_options);
        this.radius = 7 ;
        this.x = x;
        this.y = y;
        World.add(myworld,this.body);

    }

    

    display(){

        var position = this.body.position;
        var angle = this.body.angle;
        ellipseMode(RADIUS);
        push();
        translate(position.x,position.y);
        rotate(angle);
        fill("blue"); 
        circle(0, 0,this.radius);
        pop();
    }

    update(){

        if(this.body.position.y > height){
            Matter.Body.setPosition(this.body,{ x : random(0,1200) , y : 10 });
        }
    }

}