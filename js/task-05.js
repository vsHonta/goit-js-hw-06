const input = document.querySelector('#name-input');
const span = document.querySelector('#name-output');

const handleInput = evt => {
    if (!input.value) {
        return span.innerHTML = 'Anonymous'
    }
   span.innerHTML = input.value;
}


input.addEventListener('input', handleInput);

