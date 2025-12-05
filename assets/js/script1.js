let imagen = document.querySelector('#logo')

imagen.addEventListener('click', () => {

    if (imagen.style.border === '') {
        imagen.style.border = '2px solid red'
        imagen.style.cursor = 'pointer'
    }
    else {
        imagen.style.border = ''
    }
})