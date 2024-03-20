//Переменные
const btnRight = document.querySelector("#carousel-btn-right")
const btnLeft = document.querySelector("#carousel-btn-left")
const carouselList = document.querySelector("#carousel-list")

let length = 0
let counter = 0

// Функции

//Right button
function moveRight() {

    if(counter === 0) {
        length = length - 322
        counter++
    
        carouselList.style.translate = `${length}px`
        carouselList.style.transition = '1s'

        btnLeft.style.display = "flex"
    } else if(counter < 2) {
        length = length - 322
    
        carouselList.style.translate = `${length}px`
        carouselList.style.transition = '1s'

        counter++
    } 
    else if(counter === 2) {
        length = length - 322
        counter++

        carouselList.style.translate = `${length}px`
        carouselList.style.transition = '1s'

        btnRight.style.display = 'none'
    }
}

//Left button
function moveLeft() {

    if(counter === 0) {
        length = length + 322
        
        carouselList.style.translate = `${length}px`
        carouselList.style.transition = '1s'

        btnRight.style.display = 'flex'

    } else if(counter <= 1) {
        length = length + 322

        carouselList.style.translate = `${length}px`
        carouselList.style.transition = '1s'

        btnLeft.style.display = 'none'
        counter--

    } else if(counter >= 2) {
        length = length + 322

        carouselList.style.translate = `${length}px`
        carouselList.style.transition = '1s'

        btnRight.style.display = 'flex'
        counter--
    }
}


//События
btnRight.addEventListener('click', moveRight)
btnLeft.addEventListener('click', moveLeft)
