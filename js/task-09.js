function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  body: document.querySelector('body'),
  span: document.querySelector('.color'),
  button: document.querySelector('.change-color'),
}

const handleClick = evt => {
  const color = getRandomHexColor();
  refs.body.style.backgroundColor = `${color}`;
  refs.span.innerHTML = color
}

refs.button.addEventListener('click', handleClick)