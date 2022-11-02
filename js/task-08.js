const refs = {
    form: document.querySelector('.login-form'), 
}

const userData = {}

const handleSubmit = evt => {
    evt.preventDefault()
    const { email, password } = evt.currentTarget.elements;

    if (email.value === '' || password.value === '') {
        return alert('Усі поля повинні бути заповненими')
    } else { 
        userData.email = email.value;
        userData.password = password.value
    }
    
    console.log(userData);
    evt.currentTarget.reset()
}

refs.form.addEventListener('submit', handleSubmit)

