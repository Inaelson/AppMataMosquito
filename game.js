var altura = 0
var largura = 0
var vidas = 1
var tempo = 15

// Recupera o tamanho da janela
function ajustaTamanhoPalcoJogo(){
    altura = window.innerHeight
    largura = window.innerWidth
}

ajustaTamanhoPalcoJogo()

var cronometro = setInterval(function() {
    tempo -= 1

    if(tempo < 0){
        clearInterval(cronometro)
        clearInterval(criaMosca)
    } else {
        document.getElementById('cronometro').innerHTML = tempo
        }
}, 1000)

// Cria uma posição randômica para o mosquito
function posicaoRandomica (){

    // Removendo o mosquito (caso exista)
    var verificaMosquito = document.getElementById('mosquito')

    if(verificaMosquito){
        verificaMosquito.remove()

        if(vidas > 3){

            window.location.href = 'fim_de_jogo.html'
        } else {
            document.getElementById('v' + vidas).src = 'imagens/coracao_vazio.png'
            vidas++
        }
    }


    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    console.log(posicaoX, posicaoY)

    // Criar o elemento html 'mosquito'

    var mosquito = document.createElement('img')

    mosquito.src = 'imagens/mosca.png'
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    mosquito.id = 'mosquito'

    // Define a posição

    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'


    // Interação com o usuario

    document.body.appendChild(mosquito)

    mosquito.onclick = function() {
        this.remove()
    }
}

//Define um número entre 0 e 2 para definir a classe do elemento.
function tamanhoAleatorio() {
    var classe = Math.floor(Math.random() * 3)

    switch(classe) {
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }
}

// Lado A e B

function ladoAleatorio() {
    var classe = Math.floor(Math.random() * 2)

    switch(classe) {
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }

}

