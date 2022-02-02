var botaoCriptografar = document.querySelector(".criptografar");
var mensagemEntrada = document.querySelector(".entrada-mensagem");
var mensagemSaida = document.querySelector(".saida-mensagem");
var tituloMensagemSaida = document.querySelector(".titulo-mensagem-saida");

botaoCriptografar.addEventListener("click",function (){
    if(validarMensagem(mensagemEntrada.value)){
        mensagemSaida.textContent = criptografarMensagem(mensagemEntrada.value);
    }

    tituloMensagemSaida.textContent = "Mensagem criptografada:";
});

function criptografarMensagem(mensagem){
    return mensagem.replace(/e/g, "enter")
                    .replace(/i/g, "imes")
                    .replace(/a/g, "ai")
                    .replace(/o/g, "ober")
                    .replace(/u/g, "ufat");

    /*var criptografandoMensagem = "";

    for(var i = 0; i < mensagem.length; i++){
        if(mensagem[i] == "e"){
            criptografandoMensagem += "enter";
        }
        else if(mensagem[i] == "i"){
            criptografandoMensagem += "imes";
        }
        else if(mensagem[i] == "a"){
            criptografandoMensagem += "ai";
        }
        else if(mensagem[i] == "o"){
            criptografandoMensagem += "ober";
        }
        else if(mensagem[i] == "u"){
            criptografandoMensagem += "ufat";
        }
        else{
            criptografandoMensagem += mensagem[i];
        }
    }

    return criptografandoMensagem;*/
}

function validarMensagem(mensagem){
    if(mensagem.replace(/[^a-z\s]/g, "") != mensagem){
        console.log("Mensagem em formato inválido!");
        return false;
    }
    else{
        return true;
    }
}