const input = document.querySelector('#validation-input');

const handleBlur = evt => {
    if (input.value.length === Number(evt.currentTarget.dataset.length)) {
        input.classList.add('valid')
        input.classList.remove('invalid')
    } else {
        input.classList.add('invalid')
    }
};

input.addEventListener('blur', handleBlur)