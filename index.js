const btnPrev = document.querySelector(".btn-prev");
const btnNext = document.querySelector(".btn-next");
const cards = document.getElementsByClassName("cards");
const totalCards = cards.length;
let position = 0;

function hideCards(){
 for (card of cards){
     card.classList.remove("cards-visible");
     card.classList.add("cards-hidden")
 }
}

function showPreviousCards(){
    hideCards();

    if (position === 0){
        position = totalCards - 1
        console.log(position)
    } else {
        position--
        console.log(position)
    }
    cards[position].classList.add("cards-visible")
}

function showNextCards(){

    hideCards();

    if (position === totalCards - 1){
        position = 0
        console.log(position)
    } else {
        position++
        console.log(position)
    }
    cards[position].classList.add("cards-visible")
}


btnPrev.addEventListener("click", showPreviousCards)
btnNext.addEventListener("click", showNextCards)
