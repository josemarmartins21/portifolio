var menu = document.getElementById('menu')
var menuContainer = document.getElementById('menu-container')

menu.addEventListener('click', mostrarMenu)


function mostrarMenu() {
    if (menuContainer.classList.contains('hidden')) {
        menuContainer.classList.remove('hidden')
        return
    } 
    menuContainer.classList.add('hidden')
}

function atualizarAno() {
    let anoActual = new Date().getFullYear()   

    let ano = document.getElementById('ano')
    
    ano.innerText = `${anoActual}`
}