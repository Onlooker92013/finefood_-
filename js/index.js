// 侧边栏
let Logos = document.getElementById('Logo');
let logoBtn = document.getElementById('logo_btn');
let sidebar = document.querySelector('.sidebar');

Logos.addEventListener('click',function(){
    if(sidebar.style.right !== '0px'){
        sidebar.style.right = '0px';
    }
})

logoBtn.addEventListener('click',function(){
    if(sidebar.style.right !== '350px'){
        sidebar.style.right = '-350px'
    }
})


// 轮播图
let imets = document.querySelectorAll('.linet');
let pinets = document.querySelectorAll('.pinet');
let Left = document.getElementById('left');
let Right = document.getElementById('right');
let wrap = document.querySelector('.slideshow_top');
let index = 0;
let Time = 0;

let clearActive = function () {
    for (i = 0; i < imets.length; i++) {
        imets[i].className = 'linet';
    }
    for (j = 0; j < pinets.length; j++) {
        pinets[j].className = 'pinet';
    }
}

let goindex = function () {
    clearActive();
    imets[index].className = 'linet active';
    pinets[index].className = 'pinet active';
}

let goLeft = function () {
    if (index === 0) {
        index = 4;
    } else {
        index--;
    }
    goindex();
}
let goRight = function () {
    if (index < 4) {
        index++;
    } else {
        index = 0;
    }
    goindex();
}

Left.addEventListener('click', function () {
    goLeft();
    Time = 0;
})

Right.addEventListener('click', function () {
    goRight();
    Time = 0;

})

for (i = 0; i < pinets.length; i++) {
    pinets[i].addEventListener('click', function () {
        let pinetIndex = this.getAttribute('data-index');
        index = pinetIndex;
        goindex();
        Time = 0;
    })
}

let Timer;
function paly() {
    Timer = setInterval(() => {
        Time++;
        if (Time == 20) {
            goRight();
            Time = 0;
        }
    }, 200);
}
paly();


let timer = new Date('2023-7-10 9:00');
let now = new Date();
let time = timer - now;
let days = time / 1000 / 60 / 60 / 24;
let hours = time / 1000 / 60 / 60 % 24;
let minutes = time / 1000 / 60 % 60;
let seconds = time / 1000 % 60;

$('.cleatime').remove();
$('.days').append('<div class="cleatime">' + parseInt(days / 10) + '</div>');
$('.days').append('<div class="cleatime">' + parseInt(days % 10) + '</div>');
$('.hours').append('<div class="cleatime">' + parseInt(hours / 10) + '</div>');
$('.hours').append('<div class="cleatime">' + parseInt(hours % 10) + '</div>');
$('.minutes').append('<div class="cleatime">' + parseInt(minutes / 10) + '</div>');
$('.minutes').append('<div class="cleatime">' + parseInt(minutes % 10) + '</div>');
$('.seconds').append('<div class="cleatime">' + parseInt(seconds / 10) + '</div>');
$('.seconds').append('<div class="cleatime">' + parseInt(seconds % 10) + '</div>');


setInterval(() => {
    let now = new Date();
    let time = timer - now; 
    let days = time / 1000 / 60 / 60 / 24;
    let hours = time / 1000 / 60 / 60 % 24;
    let minutes = time / 1000 / 60 % 60;
    let seconds = time / 1000 % 60;

    $('.cleatime').remove();
    $('.days').append('<div class="cleatime">' + parseInt(days / 10) + '</div>');
    $('.days').append('<div class="cleatime">' + parseInt(days % 10) + '</div>');
    $('.hours').append('<div class="cleatime">' + parseInt(hours / 10) + '</div>');
    $('.hours').append('<div class="cleatime">' + parseInt(hours % 10) + '</div>');
    $('.minutes').append('<div class="cleatime">' + parseInt(minutes / 10) + '</div>');
    $('.minutes').append('<div class="cleatime">' + parseInt(minutes % 10) + '</div>');
    $('.seconds').append('<div class="cleatime">' + parseInt(seconds / 10) + '</div>');
    $('.seconds').append('<div class="cleatime">' + parseInt(seconds % 10) + '</div>');
}, 1000)

