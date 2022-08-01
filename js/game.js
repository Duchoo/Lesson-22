const myArray = [
    {
        name:'mario',
        img:'img/mario.jpg'
    },
    {
        name:'monkey',
        img:'img/monkey.jpg'
    },
    {
        name:'ninja',
        img:'img/ninja.jpg'
    },
    {
        name:'pinkdino',
        img:'img/pinkdino.jpg'
    },
    {
        name:'turtle',
        img:'img/turtle.jpg'
    },
    {
        name:'turtleninja',
        img:'img/turtleninja.jpg'
    },
    {
        name:'mario',
        img:'img/mario.jpg'
    },
    {
        name:'monkey',
        img:'img/monkey.jpg'
    },
    {
        name:'ninja',
        img:'img/ninja.jpg'
    },
    {
        name:'pinkdino',
        img:'img/pinkdino.jpg'
    },
    {
        name:'turtle',
        img:'img/turtle.jpg'
    },
    {
        name:'turtleninja',
        img:'img/turtleninja.jpg'
    },
]

myArray.sort(()=> 0.5 - Math.random())
const gridDisplay = document.querySelector('#myDiv');
const result = document.getElementById('result');
let cardsChosen = [];
let cardsChosenIds = [];
let cardsFound = [];


function createBoard(){
    for(let i = 0 ; i < myArray.length; i++){
        const card = document.createElement('img');
        card.setAttribute('src', 'img/blank.png');
        card.setAttribute('data-id', i);
        card.addEventListener('click',flipCard);
        gridDisplay.append(card)
    }
}
createBoard();

function checkMatch(){
   const cards = document.querySelectorAll('img');
   const optionOneId = cardsChosenIds[0];
   const optionTwoId =  cardsChosenIds[1];
   if (optionOneId == optionTwoId){
       cards[optionOneId].setAttribute('src','img/blank.png'); 
       cards[optionTwoId].setAttribute('src','img/blank.png')
       alert("You Clicked Same Image!")
   }
   else if(cardsChosen[0] == cardsChosen[1] ){
        alert("Its a Match!");
        cards[optionOneId].setAttribute('src','img/white.png');
        cards[optionTwoId].setAttribute('src','img/white.png');
        cards[optionOneId].removeEventListener('click', flipCard);         
        cards[optionTwoId].removeEventListener('click', flipCard);         
        cardsFound.push(cardsChosen);
    }else{
        cards[optionOneId].setAttribute('src','img/blank.png');
        cards[optionTwoId].setAttribute('src','img/blank.png');
    }
    cardsChosen = [];
    cardsChosenIds = [];
    result.innerHTML = cardsFound.length;
    if (cardsFound.length === myArray.length/2){
        result.textContent = 'Congratulations! You have won!!';
    }
}


function flipCard(){
   const cardId = this.getAttribute('data-id')
    cardsChosen.push(myArray[cardId].name);
    cardsChosenIds.push(cardId);
    this.setAttribute('src',myArray[cardId].img)
    if(cardsChosen.length === 2){
        setTimeout(checkMatch, 500)
    }
}