function scrollDown(){
    var element = document.getElementById("subtipp1")
    element.scrollIntoView(false);
}

function myFunction() {
    var x = document.getElementById("topnav");
    if (x.className == "topnav") {
      document.getElementById("topnav").style.height = '35vw'  
      x.className += " responsive";
    } 
    else {
      document.getElementById("topnav").style.height = '15vw'  
      x.className = "topnav";
    }
  }

var screenWidth = document.body.clientWidth;
window.onresize = resize
    
function resize(){
    screenWidth = document.body.clientWidth
    if(screenWidth>700){
        changeTopnav()
    }
    else{
        document.getElementById("topnav").style.top = 0;
        document.getElementById("topnav").style.position = 'fixed'
        document.getElementById("topnav").style.width = '100%'
        document.getElementById("topnav").style.height = '15vw'
        document.getElementById("headerImage").style.width = "14.5vw"
    }
}

function changeTopnav(){
    if(screenWidth>700){
        document.getElementById("topnav").style.top = 0;
        document.getElementById("topnav").style.position = 'absolute'
        document.getElementById("topnav").style.width = '100%'
        document.getElementById("topnav").style.height = '10vw'
        document.getElementById("headerImage").style.width = "9.5vw"

        window.onscroll = function() {
            if (window.pageYOffset > 20 && screenWidth>700) {  	
                document.getElementById("topnav").style.top = 0;
                document.getElementById("topnav").style.position = 'fixed'
                document.getElementById("topnav").style.width = '100vw'
                document.getElementById("topnav").style.height = '5.5vw'
                document.getElementById("headerImage").style.width = "5vw";
            } 

            else if(window.pageYOffset <= 101 && screenWidth>700) {
                document.getElementById("topnav").style.top = 0;
                document.getElementById("topnav").style.position = 'absolute'
                document.getElementById("topnav").style.width = '100%'
                document.getElementById("topnav").style.height = '10vw'
                document.getElementById("headerImage").style.width = "10vw";
            }
        }
    }  
}    

if(screenWidth>700){
    changeTopnav()
}