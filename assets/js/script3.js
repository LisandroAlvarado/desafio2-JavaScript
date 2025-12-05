const boton = document.querySelector('#boton')
let texto = document.querySelector('#texto')

boton.addEventListener('click', () => {
    const valor1 = document.querySelector('#valor1').value
    const valor2 = document.querySelector('#valor2').value
    const valor3 = document.querySelector('#valor3').value

    const clave1 = '911'
    const password1 = valor1 + valor2 + valor3
    const clave2 = '714'
    const password2 = valor1 + valor2 + valor3

    if (password1 === clave1) {
        texto.innerHTML = 'Password 1 correcto'
        texto.style.color = 'blue'
    }
    else if (password2 === clave2) {
        texto.innerHTML = 'Password 2 correcto'
        texto.style.color = 'green'
    }
    else {
        texto.innerHTML = 'Password incorrecto'
        texto.style.color = 'red'
    }
})