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

    console.log(largura, altura )

};

ajustaTamanhoPalcoJogo()


function posicaoRandomica(){

/**
 * Criando as posicoes randomicas
 */


 /*defino lib math o floor para arredondar para baixo e 
 multiplico pela largura para ficar dentro das limitacoes da 
 pagina que vai de 0 ate o valor maximo do palco e subtraimos um valor
para decrementar 90px pois assim cabera a imagem sem o estouro ja que a imagem
ja tem um tamanho normal*/

 var posicaoX = Math.floor(Math.random() * largura) - 90;  
 var posicaoY = Math.floor(Math.random() * altura) -90;

 /*porem se chegar a <0 ira sumir a imagem e para evitar isso temos que cirar essa regrinha 
 se que se a posicao x for menor que zero atribua zero a posicao x de acordo com o controle 
 abaixo com um operador ternario*/
 
 posicaoX = posicaoX < 0 ? 0 : posicaoX;
 posicaoY = posicaoY < 0 ? 0 : posicaoY;

 console.log(posicaoX,posicaoY);

 //criar o elento HTML programatico
 var mosquito = document.createElement('img'); //criacao de uma img

 //incluindo o elemento no body da pagicna
 mosquito.src = '/img/mosca.png';

 //para incluir o atributo CSS aplicado ao elemento
 mosquito.className = 'mosquito1';

 /*para jogar ele randomico na pagina, usamos o atributo style e dentro do atributo 
 concatenando com a string px de pixels*/
 mosquito.style.left = posicaoX + 'px';
 mosquito.style.top = posicaoY + 'px';
 //para que as coordenadas sejam aplicadas o elemento deve ser absoluto
 mosquito.style.position = 'absolute';

 //acessando o body da pagina, basicamente adiciona um filho para o body
 document.body.appendChild(mosquito);

};
