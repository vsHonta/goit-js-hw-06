const refs = {
    input: document.querySelector("#font-size-control"),
    span: document.querySelector("#text"),
}

const handleInput = evt => {
    return refs.span.style.fontSize = `${evt.currentTarget.value}px`
}

refs.input.addEventListener('input', handleInput)