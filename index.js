
for(let i=0; i<document.querySelectorAll(".button").length; i++){
 document.querySelectorAll(".button")[i].addEventListener("click", function(){
    let clickThis = this.innerHTML;
    sound(clickThis);
    button(clickThis);   
 });
}
 
document.addEventListener("keypress", function(event){
    sound(event.key);
    button(event.key)

});


function sound(key){
    switch(key){
        case "a":
            let clap = new Audio("sounds/clap.wav");
            clap.play();
            break;
        case "s":
            let hihat = new Audio("sounds/hihat.wav");
            hihat.play();
            break;
        case "d":
            let kick = new Audio("sounds/kick.wav");
            kick.play();
            break;
        case "f":
            let openhat = new Audio("sounds/openhat.wav");  
            openhat.play();
            break;
        case "g":
            let boom = new Audio("sounds/boom.wav");
            boom.play();
            break;
        case "h":
            let ride = new Audio("sounds/ride.wav");
            ride.play();
            break;
        case "j":
            let snare = new Audio("sounds/snare.wav");
            snare.play();
            break;
        case "k":
            let tom = new Audio("sounds/tom.wav");
            tom.play();
            break;
        case "l":
            let tink = new Audio("sounds/tink.wav");
            tink.play();
            break;                               
    }
}

function button(currentkey) {
    let button = document.querySelector("." + currentkey);
    button.classList.add("pressed");

    setTimeout(function(){
        button.classList.remove("pressed");
    },100);
}
