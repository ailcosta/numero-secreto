function exibirTextoNaTela(tag, msg) {
    let campo = document.querySelector(tag);
    campo.innerHTML = msg;
    responsiveVoice.speak(msg, 'Brazilian Portuguese Female', {rate:1.2} );
}
function iniciar() {
    console.log("Iniciar");
    exibirTextoNaTela('h1','Jogo dos milhões');
    exibirTextoNaTela('p', 'escolha um # de 1 a '+dezenas);
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    vezes = 1;
    console.log("Iniciar: "+numeroSecreto);
}

function verificarChute() {
    console.log("verificarChute");
    let aposta = document.querySelector('input').value;
    if (aposta == numeroSecreto) {
        let palavraTentativa = vezes > 1 ? ' tentativas': ' tentativa';        
        exibirTextoNaTela('h1','PARABÉNS');
        exibirTextoNaTela('p', 'Acertou em '+vezes+palavraTentativa);
    } else {
        ++vezes;
        limparCampo();
        if (aposta > numeroSecreto) {
                exibirTextoNaTela('p', 'O número secreto é menor');
        } else {
                exibirTextoNaTela('p', 'O número secreto é maior');
        }
    }
    console.log(numeroSecreto);
}

function gerarNumeroAleatorio() {
    console.log("gerarNumeroAleatorio");
    if (listaDeNumerosSorteados.length == dezenas) {
        console.log("Zera lista");        
        listaDeNumerosSorteados = [];
    }
    let currentNum = parseInt(Math.random() * dezenas + 1);
    console.log(currentNum);
    if (listaDeNumerosSorteados.includes(currentNum)) {
        console.log('já tinha');
        return gerarNumeroAleatorio();
        console.log('VOLTEI: ');
    } else {
        console.log('inclui');
        listaDeNumerosSorteados.push(currentNum);
        console.log(listaDeNumerosSorteados);
        console.log('novo: '+currentNum);
        return currentNum;
    }
}
function limparCampo() {
    document.querySelector('input').value = ''
}

let numeroSecreto;
let vezes;
let dezenas = 3;
let listaDeNumerosSorteados = [];
iniciar();
