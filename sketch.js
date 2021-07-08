var database;
var position;

var gameState = 0;

var playerCount;

var form, player, game;

var sound,sound1;

var birthdayImg, birthday, birthday_1;

var birthdayImg2, birthday2, birthday_2;

var birthdayImg3, birthday3, birthday_3;

var birthdayImg4, birthday4, birthday_4;

var bd1, bd2, bd3, bd4;

var title2;

var birthdaybutton, birthdaybuttonImg, bImg;

function preload(){

  birthdayImg = loadImage("birthday.jpg");
  birthdayImg2 = loadImage("birthday2.jpg");
  birthdayImg3 = loadImage("birthday3.jpg");
  birthdayImg4 = loadImage("birthday4.jpg");

 // birthdaybuttonImg = loadImage("bImg.png");

}

function setup(){

  database = firebase.database();
  console.log(database);

  createCanvas(windowWidth-16,windowHeight-37);

  game = new Game();
   
  game.getState();
  game.start();

  //if(gameState === 1){

        title2 = createElement('h3');
        title2.html("Select your background theme");
        title2.style('color','blue');
        title2.position(width/20, height/2.6);

        var button2 = createButton('Image');
        button2.position(width/20, height/2.2);
        button2.mousePressed(() => {
            button2.hide();
            button3.hide();

            bd1 = createSprite(width/8, button2.y+100,260, 150);
            bd1.addImage(birthdayImg);
            bd1.scale = 0.12;
          
            bd2 = createSprite(width/8+300, button2.y+100,260, 150);
            bd2.addImage(birthdayImg2);
            bd2.scale = 0.12;
          
            bd3 = createSprite(width/8+600, button2.y+100,260, 150);
            bd3.addImage(birthdayImg3);
            bd3.scale = 0.4;

            bd4 = createSprite(width/8+900, button2.y+100,269,150);
            bd4.addImage(birthdayImg4);
            bd4.scale = 0.4;

        });

        var button3 = createButton('Colour');
        button3.position(button2.x+60, height/2.2);
        button3.mousePressed(()=>{
            button3.hide();
            button2.hide();

            birthday_1 = createSprite(width/8, button3.y+100,260, 150);
            birthday_1.shapeColor = "red";
            //birthday_1.addImage(birthdayImg);
            //birthday_1.scale = 0.2;
          
            birthday_2 = createSprite(width/8+300, button3.y+100,260, 150);
            birthday_2.shapeColor = "lightblue";
            //birthday_2.addImage(birthdayImg2);
            //birthday_2.scale = 0.108;
          
            birthday_3 = createSprite(width/8+600, button3.y+100,260,150);
            birthday_3.shapeColor = "yellow"; 

            birthday_4 = createSprite(width/8+900, button3.y+100,260, 150);
            birthday_4.shapeColor = "pink"
            //birthday_4.addImage(birthdayImg4);
            //birthday_4.scale = 0.127;
            
        })
      //}

}

function draw(){
  
  if(mousePressedOver(birthday_1)){
    b1();
    title2.hide();
    }

  if(mousePressedOver(birthday_2)){
    b2();
    title2.hide();
    }

  if(mousePressedOver(birthday_3)){
    b3();
    title2.hide();
    }

  if(mousePressedOver(birthday_4)){
    b4();
    title2.hide();
    } 
    
  if(mousePressedOver(bd1)){
    b5();
    title2.hide();
      } 
      
  if(mousePressedOver(bd2)){
     b6();
     title2.hide();
        }  

  if(mousePressedOver(bd3)){
       b7();
      title2.hide();
          }  
  if(mousePressedOver(bd4)){
       b8();
      title2.hide();
            }          

  drawSprites();
  
}

function b1(){

  background("red");

  birthday_1.destroy();
  birthday_2.destroy();
  birthday_3.destroy();
  birthday_4.destroy();

}

function b2(){

  background("lightblue");

  birthday_1.destroy();
  birthday_2.destroy();
  birthday_3.destroy();
  birthday_4.destroy();

}

function b3(){

  background("yellow");

  birthday_1.destroy();
  birthday_2.destroy();
  birthday_3.destroy();
  birthday_4.destroy();

}

function b4(){

  background("lightpink");

  birthday_1.destroy();
  birthday_2.destroy();
  birthday_3.destroy();
  birthday_4.destroy();

}

function b5(){

  background(birthdayImg);

  bd1.destroy();
  bd2.destroy();
  bd3.destroy();
  bd4.destroy();

}

function b6(){

  background(birthdayImg2);

  bd1.destroy();
  bd2.destroy();
  bd3.destroy();
  bd4.destroy();

}

function b7(){

  background(birthdayImg3);

  bd1.destroy();
  bd2.destroy();
  bd3.destroy();
  bd4.destroy();

}

function b8(){

  background(birthdayImg4);

  bd1.destroy();
  bd2.destroy();
  bd3.destroy();
  bd4.destroy();

}

/*function rishabh(){
  gameState = 1;
}*/