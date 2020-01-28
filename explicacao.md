# Game Mata Mosquito


Game desenvolvido na linguagem JavaScript para pratica e estudo de desenvolvimento. 

Passos Seguidos:

**1. Definindo a dimensao do palco do jogo**

Usando:

```JavaScript

window.innerHeigth

window.innerWidth

```

Fazendo com que os elementos sejam criados na area visivel do browser.

**2. Criando as Posicoes randomicas**

Com base nos valores de alutura e largura indetificados seja possivel produtuzir de ordem aleatoria valores do eixo X e eixo Y, e na sequencia cirar um elemento HTML de forma programatica e posicionar ele com recursos de estilo nessa posicao encontrada com base nos limitadores de altura e largura da pagina.

lembrando que quando criamos o radom e vamos jogar o mosquito de maneira randomica apenas como abaixo:

```JavaScript

 var posicaoX = Math.floor(Math.random() * largura);  
 var posicaoY = Math.floor(Math.random() * altura);

 console.log(posicaoX,posicaoY);


 var mosquito = document.createElement('img'); 


 mosquito.src = '/img/mosca.png';


 document.body.appendChild(mosquito);

```
 ira retornar o seguinte erro:

 > Uncaught TypeError: Cannot read property 'appendChild' of null

Como os elementos HTML eles crescem de maneira escalonada (DOM), devemos encapsular ela em uma funcao para fazer com que o codigo espere o carregamento do HTML para ai sim executar o codigo. Criamos a funcao e colocamos ela abaixo do body camando ela no HTML. 


```JavaScript

function posicaoRandomica(){



 var posicaoX = Math.floor(Math.random() * largura);  
 var posicaoY = Math.floor(Math.random() * altura);

 console.log(posicaoX,posicaoY);

 
 var mosquito = document.createElement('img'); 

 
 mosquito.src = '/img/mosca.png';


 document.body.appendChild(mosquito);

};


```

**3. Criando Tamanhos Randomicos**

**4. Lado A e Lado B**

ou seja a orientacao da imagem olhando ou pra direita ou pra esquerda. 