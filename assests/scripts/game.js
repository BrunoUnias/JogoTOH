 const grid = document.querySelector('.grid');   

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

 const createCard = (character) => {
    const card = createElement('div', 'card');
    const front = createElement('div', 'face front');
    const back = createElement('div', 'face back');

    front.style.backgroundImage = `url('../memoria/${character}.png')`;

    card.appendChild(front);
    card.appendChild(back);

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