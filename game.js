var altura = 0
var largura = 0


// Recupera o tamanho da janela
function ajustaTamanhoPalcoJogo(){
    altura = window.innerHeight
    largura = window.innerWidth
}

ajustaTamanhoPalcoJogo()

// Cria uma posição randômica para o mosquito
function posicaoRandomica (){

    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    console.log(posicaoX, posicaoY)

    // Criar o elemento html

    var mosquito = document.createElement('img')

    mosquito.src = 'imagens/mosca.png'
    mosquito.className = 'mosquito1'

    // Define a posição

    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'

    document.body.appendChild(mosquito)

}

