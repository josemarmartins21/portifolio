var menu = document.getElementById('menu')
var menuContainer = document.getElementById('menu-container')
var idade = document.getElementById('idade')    
var janela = window

janela.addEventListener('scroll', esconderMenuNoScroll)
menu.addEventListener('click', mostrarMenu)

function setIdade() {
    alert('ok')
    /* let dataNascimento = 2005
    let anoActual = new Date().getFullYear() */

    //console.log(/* anoActual - dataNascimento */ 'ok')
}

/**
 * Mostrar e fechar Menu ao clicar.
 * @returns Mostra
 */
function mostrarMenu() {
    if (menuContainer.classList.contains('hidden')) {
        menuContainer.classList.remove('hidden')
        return
    } 
    menuContainer.classList.add('hidden')
}

/*
* Esconder o menu ao scrolar 
*/
function esconderMenuNoScroll() {
    if (! menuContainer.classList.contains('hidden')) {
        menuContainer.classList.add('hidden')
    }
}

/**
 * Atualizar o Ano do Footer
 */
function atualizarAno() {
    let anoActual = new Date().getFullYear()   
    let ano = document.getElementById('ano')
    
    ano.innerText = `${anoActual}`

}

/**
 * Debugador
 */
function dd(v) {
    console.log(v)
    
}