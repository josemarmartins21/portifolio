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
 * Inicialização e Filtro das Skills por Categoria
 */
function inicializarFiltroSkills() {
    const filterButtons = document.querySelectorAll('.skill-filter-btn')
    const categoryGroups = document.querySelectorAll('.skills-category-group')

    if (!filterButtons.length || !categoryGroups.length) return

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.getAttribute('data-filter')

            // Atualiza classe ativa dos botões
            filterButtons.forEach(b => b.classList.remove('active'))
            btn.classList.add('active')

            // Filtra os grupos com efeito suave
            categoryGroups.forEach(group => {
                const category = group.getAttribute('data-category')
                if (filter === 'all' || category === filter) {
                    group.classList.remove('hidden')
                    group.style.opacity = '0'
                    setTimeout(() => {
                        group.style.opacity = '1'
                    }, 50)
                } else {
                    group.classList.add('hidden')
                }
            })
        })
    })
}

/**
 * Alternar texto "Ver mais" / "Ver menos" na seção Sobre Mim
 */
function inicializarVerMaisSobre() {
    const btnVerMais = document.getElementById('btn-ver-mais-sobre')
    const textoExpandido = document.getElementById('sobre-texto-expandido')
    const reticencias = document.getElementById('sobre-reticencias')
    const textoBtn = document.getElementById('btn-ver-mais-texto')
    const iconeBtn = document.getElementById('btn-ver-mais-icone')

    if (!btnVerMais || !textoExpandido) return

    btnVerMais.addEventListener('click', () => {
        const estaOculto = textoExpandido.classList.contains('hidden')

        if (estaOculto) {
            textoExpandido.classList.remove('hidden')
            textoExpandido.style.opacity = '0'
            setTimeout(() => {
                textoExpandido.style.opacity = '1'
            }, 30)
            if (reticencias) reticencias.classList.add('hidden')
            if (textoBtn) textoBtn.textContent = 'Ver menos'
            if (iconeBtn) iconeBtn.classList.add('rotate-180')
        } else {
            textoExpandido.classList.add('hidden')
            if (reticencias) reticencias.classList.remove('hidden')
            if (textoBtn) textoBtn.textContent = 'Ver mais'
            if (iconeBtn) iconeBtn.classList.remove('rotate-180')
        }
    })
}

// Inicia após carregamento do DOM
document.addEventListener('DOMContentLoaded', () => {
    atualizarIdade()
    inicializarFiltroSkills()
    inicializarVerMaisSobre()
})

/**
 * Debugador
 */
function dd(v) {
    console.log(v)
}