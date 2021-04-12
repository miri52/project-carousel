const btnPrev = document.querySelector(".btn-prev");
const btnNext = document.querySelector(".btn-next");
const indicators = document.getElementsByClassName("indicator")
const cards = document.getElementsByClassName("cards");
const totalCards = cards.length;
let position = 0;

function hideActive(){
 for (card of cards){
     card.classList.remove("cards-visible");
     card.classList.add("cards-hidden")
 }

 for (indicator of indicators){
     indicator.classList.remove("indicator-active");
 }
}

function addNextVisibile(){
    if (position === totalCards - 1){
        position = 0
    } else {
        position++
    }
    cards[position].classList.add("cards-visible")
    indicators[position].classList.add("indicator-active")
}

function addPrevVisible(){
 if (position === 0){
        position = totalCards - 1
    } else {
        position--
    }
    cards[position].classList.add("cards-visible")
    indicators[position].classList.add("indicator-active")
}

function showPreviousCards(){
    stopAutoShow();
    hideActive();
    addPrevVisible();
}

function showNextCards(){
    stopAutoShow();
    hideActive();
    addNextVisibile();
}

function autoShowNextCards(){
    hideActive();
    addNextVisibile();
}

btnPrev.addEventListener("click", showPreviousCards)
btnNext.addEventListener("click", showNextCards)


const intervalID = setInterval(autoShowNextCards, 4000)
function stopAutoShow(){
    clearInterval(intervalID)
}