// try catch para revisar erros
try {
    //variaveis de todos os feedbacks
    var review = document.getElementById('txtFeed').value;

    var nome = document.getElementById('nomeFeed').value;

    var serie = document.getElementById('serieFeed').value;

    var classe = document.getElementById('classeFeed').value;

    //funcao do botao enviar na pagina

    function Enviar(){
        
    }
} catch (error) {
    //ao encontrar um erro, irá dar um alert falando qual e onde é o erro
    alert(error);
}