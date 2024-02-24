// começo pegando o nome do jogador 1 e 2 armazenado localmente
;

// começa com todo mundo sem ponto
pontosJogador1 = 0;
pontosJogador2 = 0;

// Define o nome dos jogadores nos elementos HTML correspondentes
document.getElementById("player1Name").innerHTML = player1Name + " : ";
document.getElementById("player2Name").innerHTML = player2Name + " : ";

// Define os pontos dos jogadores nos elementos HTML correspondentes
document.getElementById("pontosJogador1").innerHTML = pontosJogador1 ;
document.getElementById("pontosJogador2").innerHTML = pontosJogador2 ;

// Define o texto indicando o turno de pergunta para o jogador 1
document.getElementById("jogadorPergunta").innerHTML = "Turno de Pergunta - " + player1Name ;
document.getElementById("jogadorResponde").innerHTML = "Turno de Resposta - " + player2Name ;

// Função para enviar a palavra digitada
function send() {
    // Obtém a palavra digitada e a converte para letras minúsculas
    

    // Criar a representação da palavra para exibição na tela
    
}

// Define o turno de pergunta como jogador 1 e o turno de resposta como jogador 2
turnoDePergunta = "jogador1";
turnoDeResposta = "player2";

// Função para verificar a resposta fornecida pelo jogador
function check()
{
    // Obtém a resposta fornecida pelo jogador e a converte para letras minúsculas
    pegarResposta = document.getElementById("inputCheckBox").value;
    resposta = pegarResposta.toLowerCase();
    // Verifica se a resposta fornecida é igual à palavra original
    if(resposta == word)	
    {
        // Se o turno de resposta for jogador 1, incrementa os pontos do jogador 1
        if(turnoDeResposta == "jogador1")
        {
            pontosJogador1 = pontosJogador1 +1;
            document.getElementById("pontosJogador1").innerHTML = pontosJogador1;
        }
        // Caso contrário, incrementa os pontos do jogador 2
        else 
        {
            pontosJogador2 = pontosJogador2 +1;
            document.getElementById("pontosJogador2").innerHTML = pontosJogador2;
        }
    }
    // Alterna o turno de pergunta entre jogadores
    if(turnoDePergunta == "jogador1")
    {
        turnoDePergunta = "player2"
        document.getElementById("jogadorPergunta").innerHTML = "Turno de Pergunta: " + player2Name ;
    }
    else 
    {
        turnoDePergunta = "jogador1"
        document.getElementById("jogadorPergunta").innerHTML = "Turno de Pergunta: " + player1Name ;
    }

    // Alterna o turno de resposta entre jogadores
    if(turnoDeResposta == "jogador1")
    {
        turnoDeResposta = "player2"
        document.getElementById("jogadorResponde").innerHTML = "Turno de Resposta: " + player2Name ;
    }
    else 
    {
        turnoDeResposta = "jogador1"
        document.getElementById("jogadorResponde").innerHTML = "Turno de Resposta: " + player1Name ;
    }

    // Limpa o campo de saída na tela
    document.getElementById("output").innerHTML = "";
}
