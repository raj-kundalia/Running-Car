let outer = document.querySelector('.city-outer')
let inner = document.querySelector(".city-inner");
let car = document.querySelector(".car");
let cloud = document.querySelector(".cloud")

let audio = new Audio("../Running Car/song.mp3");

let light = false;
let myCarArr = ['lights-off.png','lights-on.png']
let music = false;

setInterval(() => {
    outer.classList.toggle('dayToNight');
}, 5000);


document.addEventListener('keypress', keyControl)

function keyControl(e){
    if(e.keyCode === 32){
        inner.classList.toggle('cityAnimation');
        car.classList.toggle('carAnimation');
        cloud.classList.toggle('cloudAnimation');
    }
    if(e.keyCode === 108){
        if(light){
        car.setAttribute('src', myCarArr[0]);
        light = false;
    }else{
        car.setAttribute('src', myCarArr[1]);
        light = true;
    }
    }
    if(e.keyCode === 109){
        if(music){
            audio.pause();
            music = false;
        }else{
            audio.play();
            music = true;
        }
    }
}



