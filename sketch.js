const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myengine, myworld;

var drop = [];
var boy;
var thunder1,thunder2;
var maxDrops = [];
var thund,thundCreatedFrame;

function preload(){
    thunder1 = loadImage("images/thunderbolt/1.png");
    thunder2 = loadImage("images/thunderbolt/2.png");
}

function setup(){
   
    createCanvas(1200,750);

    myengine = Engine.create();
	  myworld = myengine.world;

    boy = new Umbrella(300,400,10,10);

    Engine.run(myengine);
}

function draw(){

    background(0);

    boy.display();

    if(frameCount%60===0){
      maxDrops.push(new Drop(random(width/2-30, width/2+30), 10,10));
    }
  
    for (var j = 0; j < maxDrops.length; j++) {
      maxDrops[j].display();
    }
    
    for (var j = 0; j < maxDrops.length; j++) {
      maxDrops[j].update();
    }


   if (frameCount % 60 === 0){

    thund = createSprite(600,200,Math.round(random(50,1150)),50);
    thund.addImage("left",thunder1);
    thund.addImage("right",thunder2);

    thundCreatedFrame = frameCount;

       var rand = Math.round(random(1,2));
       switch(rand) {
        case 1: thund.changeImage("left",thunder1);
                thund.scale = 0.5;
                 break;
        case 2: thund.changeImage("right",thunder2);
                thund.scale = 0.5;
                break;
  
        default: break;

         }

        } 

   if(thundCreatedFrame + 10 ===frameCount && thund){ 
      thund.destroy();
      }

      drawSprites();
}   

