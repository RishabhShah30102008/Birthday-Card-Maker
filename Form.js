class Form{

    constructor(){

    }

    display(){

         
        var title = createElement('h2');
        title.html("Birthday Card");
        title.style('font-size', '60px');
        title.style('color', 'rgb(128,0,0)');
        title.position(width/2.5,height/100);

        var input = createInput("").attribute('placeholder','Name of birthday girl/boy');
        input.style('background', 'yellow');
        input.position(width/20,200);

        var input2 = createInput("").attribute('placeholder','Your Name');
        input2.style('background', 'yellow');
        input2.position(width/20, 260);

        var input3 = createInput("").attribute('placeholder','Greetings');
        input3.style('background', 'yellow');
        input3.position(width/20, height/1.33);

        var button = createButton("Create");
        button.style('background', 'yellow');
        button.position(width/20,height/1.1);

        button.mousePressed(function(){

            input.hide();
            input2.hide();
            input3.hide();
            button.hide();
            
            var name = input.value();
            var name2 = input2.value();
            var name3 = input3.value();

            var greeting1 = createElement('h3');
            greeting1.html("Happy Birthday "+ name, ",");
            greeting1.style('font-size', '40px')
            greeting1.style('color', 'rgb(0))');
            greeting1.position(width/10,height/4)

            var greeting = createElement('h2');
            greeting.html("` " + name3);
            greeting.position(width/9,height/2.5);

            var greeting2 = createElement('h3');
            greeting2.html("From: " + name2);
            greeting2.position(width/9, greeting.height+400);

        })

    }

}