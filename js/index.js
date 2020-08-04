
// change the Fun Bus header to color green when mouse moves on to it

const pageTitle =  document.querySelector('.logo-heading')

pageTitle.addEventListener('mouseover', event => {
    pageTitle.style.color = 'green';
})

pageTitle.addEventListener('mouseout', event => {
    pageTitle.style.color = 'black';
})

// change the fun bus picture to a ferrari along with the text below when clicked.
// change it back when the esc key is hit 

const busImg = document.querySelector('.intro img')
const busHeader = document.querySelector('.intro h2')

busImg.addEventListener('click', event => {
    busImg.setAttribute('src', 'https://library.kissclipart.com/20180901/zvw/kissclipart-ferrari-california-side-view-clipart-2011-ferrari-f1cc52794067d219.jpg')
    busHeader.textContent = 'Welcome to Fun Ferrari!'
})

document.addEventListener('keydown', event => {
    if(event.key === 'Escape' && busHeader.textContent === 'Welcome to Fun Ferrari!'){
        busImg.setAttribute('src', '/fun-bus.927a34f2.jpg');
        busHeader.textContent = 'Welcome to Fun Bus!'
    }
})

// double click for picture borders and double click to reverse it

const mapPic = document.querySelector('.img-content img')
const canalPic = document.querySelector('.img-fluid')

document.addEventListener('dblclick', event => {
    if(mapPic.style.border === '7px dashed cyan'){
        mapPic.style.border = '0px solid black';
        canalPic.style.border = '0px solid black'
    } else {
        mapPic.style.border = '7px dashed cyan';
        mapPic.style.transition = '1s';
        canalPic.style.border = '7px dashed cyan';
        canalPic.style.transition = '1s'
    }
})

// load

const wholePage = document.querySelector('html')


window.addEventListener('load', event => {
    wholePage.style.transition = '2s'
    wholePage.style.border = '10px dashed black'
})

// dark mode

pageTitle.addEventListener('click', event => {
    if(wholePage.style.backgroundColor === 'black' && wholePage.style.color === 'white'){
        wholePage.style.backgroundColor = 'white'
        wholePage.style.color = 'black'
    }else {
        wholePage.style.backgroundColor = 'black'
        wholePage.style.color = 'white'
    }
})






