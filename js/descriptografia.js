var botaoDescriptografar = document.querySelector(".descriptografar");
var mensagemCriptografada = document.querySelector(".entrada-mensagem");
var mensagemSaida = document.querySelector(".saida-mensagem");
var botaoCopiar = document.querySelector(".copiar-mensagem");

botaoDescriptografar.addEventListener("click", function(){
    if(validarMensagem(mensagemCriptografada.value)){
        mensagemSaida.textContent = descriptografarMensagem(mensagemCriptografada.value);
    }

    tituloMensagemSaida.textContent = "Mensagem descriptografada:";
});

botaoCopiar.addEventListener("click", copiarMensagemDeSaida);

function descriptografarMensagem(mensagem){
    
    /*return mensagem.replace(/enter/g, "e")
                .replace(/imes/g, "i")
                .replace(/ai/g, "a")
                .replace(/ober/g, "o")
                .replace(/ufat/g, "u");*/

    var descriptografandoMensagem = "";

    for(var i = 0; i < mensagem.length; i++){
        var verificaEncriptacao = false;

        if(mensagem[i] == "e"){
            if(mensagem[i+1] == "n" && mensagem[i+2] == "t" && mensagem[i+3] == "e" && mensagem[i+4] == "r"){
                descriptografandoMensagem += "e";
                i += 4;
                verificaEncriptacao = true;
            }
        }
        else if(mensagem[i] == "i"){
            if(mensagem[i+1] == "m" && mensagem[i+2] == "e" && mensagem[i+3] == "s"){
                descriptografandoMensagem += "i";
                i += 3;
                verificaEncriptacao = true;
            }
        } 
        else if(mensagem[i] == "a"){
            if(mensagem[i+1] == "i"){
                descriptografandoMensagem += "a";
                i += 1;
                verificaEncriptacao = true;
            }
        } 
        else if(mensagem[i] == "o"){
            if(mensagem[i+1] == "b" && mensagem[i+2] == "e" && mensagem[i+3] == "r"){
                descriptografandoMensagem += "o";
                i += 3;
                verificaEncriptacao = true;
            }
        } 
        else if(mensagem[i] == "u"){
            if(mensagem[i+1] == "f" && mensagem[i+2] == "a" && mensagem[i+3] == "t"){
                descriptografandoMensagem += "u";
                i += 3;
                verificaEncriptacao = true;
            }
        } 
        else{
            descriptografandoMensagem += mensagem[i];
            verificaEncriptacao = true;
        }

        if(!verificaEncriptacao){
            return "A mensagem não pode ser descriptografada";
        }
    }

    return descriptografandoMensagem;
}

function copiarMensagemDeSaida(){
    var content = mensagemSaida.innerHTML;
    navigator.clipboard.writeText(content).then(function(){
        console.log("Mensagem copiada para área de transferência")
    }, function(){
        console.log("Erro ao copiar mensagem")
    });
}