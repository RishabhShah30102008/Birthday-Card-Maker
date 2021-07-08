class Game{

    constructor(){

    }

    getState(){

        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value",function(data){

          gameState = data.val();

        })

    }

    update(state){
        
        database.ref('/').update({

            gameState : state

        })

    }

   /* select(){

 if(gameState === 0){
            
  var maintitle = createElement('h2');
  maintitle.html("Card Maker");
  maintitle.style('font-size', '60px');
  maintitle.style('color', 'rgb(128,0,0)');
  maintitle.position(width/2.5,height/100);

  var r = createElement('h3');
  r.html("Choose the type of card that you want to make");
  r.style('color', '#0984e3');
  r.position(width/8,height/5);

  strokeWeight(2.8);
  stroke("#d63031")
  fill("#0984e3");
  textSize(25);
  text("Choose the type of card that you want to make.", width/8, height/4);

  var bdayButton = createButton('Birthday Card');
  bdayButton.position(width/7,height/3.5);
  bdayButton.mousePressed(()=>{

    gameState = 1;
    bdayButton.hide();
    maintitle.hide();
    r.hide();

  })

 // birthdaybutton = createSprite(width/5, height/3);
  //birthdaybutton.addImage(birthdaybuttonImg);
  //birthdaybutton.scale = 0.2;
    }
}*/

    start(){
 
        if(gameState === 0){

            form = new Form();
            form.display();

        }

    }
}