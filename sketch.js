const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;
 
var particle;
var count = 0;

var gameState = "play";

var division = [];
var plinkos = [];

var divisionHeight = 300;
var score = 0;


function setup() {

  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     division.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    
}
 

function draw() {

  background("black");

  Engine.update(engine);

  textSize(30);
  text("Score : " + score, 20, 30);

  textSize(25);
  text("500", 20, 530);

  textSize(25);
  text("500", 100, 530);

  textSize(25);
  text("500", 180, 530);

  textSize(25);
  text("500", 260, 530);

  textSize(25);
  text("100", 340, 530);

  textSize(25);
  text("100", 420, 530);

  textSize(25);
  text("100", 500, 530);

  textSize(25);
  text("200", 580, 530);

  textSize(25);
  text("200", 660, 530);

  textSize(25);
  text("200", 740, 530);

  if(gameState === "end") {
    textSize(30);
    text("Game Over", 310, 230);
    text("Wow, you scored " + score + "!!", 260, 440);
  }
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
  
   for (var k = 0; k < division.length; k++) {
     
     division[k].display();

   }

   if(particle!=null) {

     particle.display();

     if(particle.body.position.y > 700) {

       if(particle.body.position.x < 325) {

         score = score + 500;
         particle = null;

         if(count >= 5) {
           gameState = "end";
         }

       }

     }

   }

   if(particle!=null) {

    particle.display();

    if(particle.body.position.y > 700) {

      if(particle.body.position.x > 326 || particle.body.position.x < 525) {

        score = score + 100;
        particle = null;

        if(count >= 5) {
          gameState = "end";
        }

      }

    }
  
  }

  if(particle!=null) {

    particle.display();

    if(particle.body.position.y > 700) {

      if(particle.body.position.x < 325 || particle.body.position.x > 0) {

        score = score + 200;
        particle = null;

        if(count >= 5) {
          gameState = "end";
        }

      }

    }

  }
console.log(mouseX, mouseY);
}


function mousePressed() {

  if(gameState!=="end") {

    count++; // or count = count + 1
    particle = new Particle(mouseX, 10, 10, 10);

  }

}
