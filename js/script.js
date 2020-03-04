const smiles = ['😀', '😃', '😄', '😁', '😆', '😅', '🤣', '😂', '🙂',];
const qoutes = [
  'Ooh. It was the best one.',
  'Please stop!',
  'I cant laugh anymore.',
  'I need new pants.',
  'Stop...',
  'Ok... it was funny.',
  '...',
];

const contentArea = document.querySelector('.content');
const anotherJokeBtn = document.querySelector('.content__btn');
const joke = document.querySelector('.joke');
const jokeName = joke.querySelector('.joke__title');
const jokeText = joke.querySelector('.joke__text');
const jokeSmile = joke.querySelector('.joke__smile');
const jokeReacrtion = joke.querySelector('.joke__reaction');

getRandomItem = (array) => {
  return randomItem = array[Math.floor(Math.random() * array.length)];
}

pullRandomDadsJokes = (datas) => {
  const randomJoke = datas[Math.floor(Math.random() * datas.length)];
  jokeName.textContent = `"${randomJoke.name}"`;
  jokeText.textContent = `${randomJoke.joke}`;
  jokeSmile.textContent = `${getRandomItem(smiles)}`;
  jokeReacrtion.textContent = `${getRandomItem(qoutes)}`;
}

pullRandomDadsJokes(jokes);

anotherJokeBtn.addEventListener('click', () => {
  pullRandomDadsJokes(jokes);
  contentArea.style.backgroundColor = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
  contentArea.classList.add('content--animate');
});
