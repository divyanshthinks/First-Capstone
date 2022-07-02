const hamburger = document.querySelector('.hamburger');

const hamlist = document.querySelector('.ham-list');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  hamlist.classList.toggle('active');
});

hamlist.addEventListener('click', () => {
  hamburger.classList.remove('active');
  hamlist.classList.remove('active');
});

const animelist = [
  {
    serial: 'first',
    imageurl: 'images/one-piece.jpeg',
    animename: 'One Piece',
    animesub: 'Adventure',
    animedes: 'One Piece is an anime series',
  },

  {
    serial: 'second',
    imageurl: 'images/narutoanime.png',
    animename: 'Naruto',
    animesub: 'Action',
    animedes: 'Naruto is a popular anime series',
  },

  {
    serial: 'third',
    imageurl: 'images/clannad.jpg',
    animename: 'Clannad',
    animesub: 'Romance',
    animedes: 'Clannad is a very sweet romance anime',
  },

  {
    serial: 'fourth',
    imageurl: 'images/Deathnote.png',
    animename: 'Death Note',
    animesub: 'Crime',
    animedes: 'Death Note is a popular thriller anime',
  },

  {
    serial: 'fifth',
    imageurl: 'images/Code.jpg',
    animename: 'Code Geass',
    animesub: 'Thriller',
    animedes: 'Code Geass is an exciting thriller anime',
  },

  {
    serial: 'sixth',
    imageurl: 'images/Pancreas.jpg',
    animename: 'I want to eat your Pancreas',
    animesub: 'Romance',
    animedes: 'I want to eat your pancreas<br> is a heart touching anime',
  },

];

const ulli = document.getElementById('anime-list');
const deskli = document.getElementById('desk-anime-list');

const additems = () => {
  let card = '';

  for (let i = 0; i < animelist.length; i += 1) {
    const items = `
    <ul class="${animelist[i].serial}">
    <li><img class="an1" src="${animelist[i].imageurl}" alt="anime"></li>
    <div class="li-items>
    <li class="anime-name">${animelist[i].animename}</li>
    <li class="anime-sub">${animelist[i].animesub}</li>
    <br>
    <hr>
    <br>
    <br>
    <li class="animedes">${animelist[i].animedes}</li>
    </div>
    </ul>
    <br>
    `;
    card += items;
  }
  ulli.innerHTML = card;

  deskli.innerHTML = card;
};

additems();

const press = document.querySelector('.more');
const hide = document.querySelector('.third');
const hide2 = document.querySelector('.fourth');
const hide3 = document.querySelector('.fifth');
const hide4 = document.querySelector('.sixth');

press.addEventListener('click', () => {
  press.classList.toggle('active');
  hide.classList.toggle('active');
  hide2.classList.toggle('active');
  hide3.classList.toggle('active');
  hide4.classList.toggle('active');
});