var menu = document.getElementById('menu')
var menuContainer = document.getElementById('menu-container')
var idade = document.getElementById('idade')    
var janela = window

janela.addEventListener('scroll', esconderMenuNoScroll)
menu.addEventListener('click', mostrarMenu)

for (const link of document.querySelectorAll('a[href^="#"]')) {
    link.addEventListener('click', function (event) {
        const alvo = this.getAttribute('href')

        if (!alvo || alvo === '#') {
            return
        }

        const secao = document.querySelector(alvo)

        if (!secao) {
            return
        }

        event.preventDefault()

        const offset = window.innerWidth < 640 ? 80 : 110
        const topo = secao.getBoundingClientRect().top + janela.scrollY - offset

        janela.scrollTo({
            top: topo,
            behavior: 'smooth'
        })

        history.pushState(null, '', alvo)

        if (!menuContainer.classList.contains('hidden')) {
            menuContainer.classList.add('hidden')
        }
    })
}

/**
 * Mostrar e fechar Menu ao clicar.
 * @returns void
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
 * Atualizar a idade com base na data de nascimento 12/06/2006.
 */
function atualizarIdade() {
    const dataNascimento = new Date(2006, 5, 12)
    const hoje = new Date()

    let idadeActual = hoje.getFullYear() - dataNascimento.getFullYear()
    const jaPassouAniversario = hoje.getMonth() > dataNascimento.getMonth() ||
        (hoje.getMonth() === dataNascimento.getMonth() && hoje.getDate() >= dataNascimento.getDate())

    if (!jaPassouAniversario) {
        idadeActual--
    }

    const pessoa = {
        idade: idadeActual,
    }

    if (idade) {
        idade.innerText = `${pessoa.idade}`
    }

    return pessoa
}

/**
 * Debugador
 */
function dd(v) {
    console.log(v)
    
}