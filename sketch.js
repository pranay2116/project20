// creating var for the car and wall
var car,wall;

// creating var for speed and weight 
 var speed,weight;

var deformation;

    function setup() {
      // craeting the game area 
      createCanvas(1600,400);
      
      // giving the random a speed and weght 
      speed=Math.round(random(50,90))
      weight=Math.round(random(400,1500))

      // creating sprite for car 
      car = createSprite(50,200,100,50);

      // creating sprite for wall 
      wall = createSprite (1500,200,60,height/2);
    }

    function draw() {
      // clearing the background
      background(255,255,255);  
      
      car.velocityX = speed;
      
      // Giving if to d=see the output  
      if (wall.x-car.x<(car.width+wall.width)/2)
      {
        car.velocityX = 0;
        deformation = 0.5*weight*speed*speed/22509
        

        if (deformation<100)
        {
          car.shapeColor=color(0,255,0)
        }


        if (deformation>180)
        {
          car.shapeColor=color(255,0,0)  
        }
      

        if (deformation<180 && deformation>100)
        {
          car.shapeColor=color(230,230,0)
        }
      }
      
      

      // to make everything visible 
      drawSprites();
    }