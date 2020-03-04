const smiles = ['😀', '😃', '😄', '😁', '😆', '😅', '🤣', '😂', '🙂',];
const qoutes = []

const contentArea = document.querySelector('.content');
const anotherJokeBtn = document.querySelector('.content__btn');
const joke = document.querySelector('.joke');
const jokeName = joke.querySelector('.joke__title');
const jokeText = joke.querySelector('.joke__text');
const jokeSmile = joke.querySelector('.joke__smile');

getRandomItem = (array) => {
  return randomItem = array[Math.floor(Math.random() * array.length)];
}

pullRandomDadsJokes = (datas) => {
  const randomJoke = datas[Math.floor(Math.random() * datas.length)];
  jokeName.textContent = `"${randomJoke.name}"`;
  jokeText.textContent = `${randomJoke.joke}`;
  jokeSmile.textContent = `${getRandomItem(smiles)}`;
}

pullRandomDadsJokes(jokes);

anotherJokeBtn.addEventListener('click', () => {
  pullRandomDadsJokes(jokes);
  contentArea.style.backgroundColor = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
});
