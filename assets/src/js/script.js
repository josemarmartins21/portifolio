function atualizarAno() {
    let anoActual = new Date().getFullYear()    
    let ano = document.getElementById('ano')
    
    ano.innerText = `${anoActual}`
    
}