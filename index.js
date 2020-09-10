for(var i = 0; i < document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
}
function handleClick(){
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML); 
    makeAnimation(buttonInnerHTML);       
}

document.addEventListener("keydown", handleKeyPress);

function handleKeyPress(event){
    makeSound(event.key);
    makeAnimation(event.key);
}

function makeSound(key){
    switch(key){
        case "w":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "a":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        case "s":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "d":
            var t1 = new Audio("sounds/tom-1.mp3");
            t1.play();
            break;
        
        case "j":
            var t2 = new Audio("sounds/tom-2.mp3");
            t2.play();
            break;

        case "k":
            var t3 = new Audio("sounds/tom-3.mp3");
            t3.play();
            break;

        case "l":
            var t4 = new Audio("sounds/tom-4.mp3");
            t4.play();
            break;
        
        default: console.log(buttonInnerHTML);
    }
}

function makeAnimation(key){
    var keyToAnimate = document.querySelector("." + key);
    keyToAnimate.classList.add("pressed");
    setTimeout(function(){
        keyToAnimate.classList.remove("pressed");
    }, 100);
}