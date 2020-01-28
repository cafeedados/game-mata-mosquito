/**
 * @devpedrolourenco
 * E-mail: dev.peddrolourenco@gmail.com
 * Game Mata Mosquito
 */

//definindo as variaveis no escopo global
var altura = 0;
var largura = 0;

/*Essa funcao ira detectar se ha uma alteracao no tamanho da tela 
para tornar o game resposivo* integrando com o on recize no body
da aplicacao */

function ajustaTamanhoPalcoJogo() {
    //encontrar a altura e a largura da pagina:
    altura = window.innerHeight;
    largura = window.innerWidth;

    console.log(altura, largura)

};

