let texto = document.querySelector('#texto')
let boton = document.querySelector('#boton')

boton.addEventListener('click', () => {

    let git = Number(document.querySelector('#git').value)
    let google = Number(document.querySelector('#google').value)
    let huawei = Number(document.querySelector('#huawei').value)
    let suma = git + google + huawei

    suma <= 10
        ? texto.innerHTML = `Llevas ${suma} unidades`
        : texto.innerHTML = 'Llevas demasiados'
})