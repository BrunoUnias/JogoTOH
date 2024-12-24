 const grid = document.querySelector('.grid');   

 grid.getAttribute

 const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className; 
    return element;

 }

 const characters = [
   'luz',
   'willow',
   'amity',
   'eda',
   'hunter',
   'gus',
   'lilith',
   'corujito',
   'colecionador',
   'vee'

 ];


 let firstCard = '';
 let secondCard = '';

 const checkCard = () => {
   const firstCharacter = firstCard.getAttribute('data-character');
   const secondCharacter = secondCard.getAttribute('data-character');

   if(firstCharacter === secondCharacter){

   } else {
      setTimeout(() => {
         firstCard.classList.remove('reveal-card');
         secondCard.classList.remove('reveal-card');

         firstCard = '';
         secondCard = '';
         
      }, 500);
   }
 }

 const cardReveal = ({target}) => {

   if(firstCard === '') {
      target.parentNode.classList.add('reveal-card');
      firstCard = target.parentNode;

   } else if (secondCard === '') {
      target.parentNode.classList.add('reveal-card');
      secondCard = target.parentNode;

      checkCard();
   }

 }

 const createCard = (character) => {
    const card = createElement('div', 'card');
    const front = createElement('div', 'face front');
    const back = createElement('div', 'face back');

    front.style.backgroundImage = `url('../memoria/${character}.png')`;

    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener('click', cardReveal);
    card.setAttribute('data-character', character)

    return card;
    
 }

 const loadGame = () => {

   const duplicateCharacters = [...characters, ...characters];

   const embaralhado = duplicateCharacters.sort(() => Math.random() - 0.5);

   embaralhado.forEach((character) => {
      
      const card = createCard(character);
      grid.appendChild(card)

   });

 }

loadGame();