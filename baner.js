var slide = document.querySelector('.slideshow')
var images = [
    'img/destaque-home.png',
    'img/destaque-home-2.png',
];

var time = ''
var count = 0

function setInterval() {
    slide.src = images[count];

    if(count < images.length - 1){
        count++
    } else {
        count = 0
    } 

   timer = setTimeout("setInterval()", 4000)
}

function stop() {
    clearTimeout(timer)
}

function play() {
    setInterval()
}

window.onload = setInterval