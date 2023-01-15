var soundButtons =document.querySelectorAll(".drum").length;


for(var i=0; i<soundButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
       var buttonInnerHTML =this.innerHTML;
      switch (buttonInnerHTML){
        case "B":
          var tom1= new Audio("./Passori - Instrumental ! Piano ! Bgm.mp3");
          tom1.play();
          break;

          case "d":
            var tom2 =new Audio("./Silent Music.mp3");
            tom2.play();
            break;

            default:console.log('buttonInnerHTML');

      }
      
    });
}

document.addEventListener("keypress",function(event) {
  console.log(event);
});