let counterValue = 0;

const decrement = document.querySelector('[data-action="decrement"]');
const increment = document.querySelector('[data-action="increment"]');
const counter = document.querySelector('#value') 


const handleClickRemove = event => {
    counterValue -= 1
    counter.innerHTML = counterValue;
}

const handleClickAdd = event => {
    counterValue += 1
    counter.innerHTML = counterValue;
}


decrement.addEventListener('click', handleClickRemove)
increment.addEventListener('click', handleClickAdd)


