function iniciarJogo() {
    nivel = document.getElementById('nivel').value; 
    if (nivel === ''){
        alert('Selecione um nivel para iniciar o jogo')
        return false;

    }
    
    //usamos a interrogacao para separar a pagina que queremos forcar com o paramentro 
    window.location.href = 'app.html?' + nivel;
    

};