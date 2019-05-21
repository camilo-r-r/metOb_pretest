    PennController.ResetPrefix(null);
    PennController.AddHost("https://filedn.com/lDf2Oa0trFMzhcSFiv5VDuu/ibex_workshop/");
    PennController(
        newText("question", "Who is cuter, Meme or Lola?")
              .print()
        ,
        newButton("meme", "Meme")
            .print()
           
        ,
        newButton("lola", "Lola")
            .print()
        ,
         newSelector("cats") 
            .settings.add( getButton("meme") , getButton("lola") )
            .wait()
        
        );
    PennController(
        newText("question2","And how cute are both cats?")
                .print
        ,
        newScale("cuteness", 10)
        .settings.before( newText("left", "moderately cute") )
        .settings.after( newText("right", "cutest cats ever") )
        .settings.slider()
        .print()
        .wait()
   );
    PennController(

        newText("instructions", "Please look at the image below and click on the button")
            .print()
        ,
        newImage("cats", "meme_lola1.jpg")
            .settings.size(300, 200)
            .print()
        ,
        newButton("validation", "Validate")
            .print()
            .wait()
    );
    PennController(
        newText("instructions", "Please press any key to start playing the soundfile")
            .print()
        ,
        newKey("anyKey", "")
            .wait()
        ,
        getText("instructions")
            .remove()
        ,
        newAudio("purr", "meow.mp3")
            .play()
            .wait()
        ,
        newText("thanks", "Thank you for listening")
            .print()
        ,
        newButton("finish", "Click here to continue")
            .print()
           .wait()
    );
    PennController(
        defaultImage
              .settings.size(400, 300),
              
        newText("test sentence", "The cats are on the chair")
            .print()       
        ,
        newImage("competitor", "meme_lola_milk.jpg")
        
            .print()         
        ,
        newImage("target", "meme_lola_chair.jpg")

            .print()        
        ,
            newCanvas(450,450)
        .settings.add(   0 , 0 , getImage("target") )
        .settings.add( 300 , 0 , getImage("competitor") )
        .print()
        ,
        newSelector("tank") 
            .settings.add( getImage("target") , getImage("competitor") )
            .wait()         
     );
