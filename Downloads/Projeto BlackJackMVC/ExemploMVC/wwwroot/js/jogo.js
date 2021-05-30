var pontos1 = 0;
var pontos2 = 0;

function iniciar() {
    jogador1 = window.prompt("QUAL É O NOME DO JOGADOR NÚMERO 1:");
    jogador2 = window.prompt("QUAL É O NOME DO JOGADOR NÚMERO 2:");

    if (jogador1 != "" && jogador1 != null && jogador2 != "" && jogador2 != null) {
        document.getElementById("btn_jogador_1").removeAttribute('disabled');
        document.getElementById("btn_parar_1").removeAttribute('disabled');
        document.getElementById("btn_iniciar").setAttribute('disabled', true);
        document.getElementById("nomeJogador1").innerHTML = jogador1;
        document.getElementById("nomeJogador2").innerHTML = jogador2;
    }
    else {
        window.alert("É PRECISO DIZER O NOME DOS JOGADORES");
    }

}

function valorAleatorio() {
    min = Math.ceil(1);
    max = Math.floor(13);

    var aleatorio = Math.floor(Math.random() * (max - min) + min);
    return aleatorio;
}

function jogadas(jogador) {
    var valor = valorAleatorio();

    if (jogador == 1) {
        var cartas1 = document.getElementById("cartas1");
        $(cartas1).attr("src", "/images/" + valor + ".png");

        pontuação(1, valor);
    }
    else {
        var cartas2 = document.getElementById("cartas2");
        $(cartas2).attr("src", "/images/" + valor + ".png");

        pontuação(2, valor);
    }
    document.getElementById("btn_reiniciar").removeAttribute('disabled');
}

function pontuação(jogador, valor) {
    
    if (jogador == 1) {
        pontos1 += valor;
        if (pontos1 <= 21) {
            document.getElementById('jogador1').innerHTML = pontos1;
            // Jogando
            if (pontos1 == 21) {
                document.getElementById("btn_jogador_1").setAttribute('disabled', true);
            }

        }
        else {
            // Partida perdida
            document.getElementById('jogador1').innerHTML = pontos1;
            document.getElementById("btn_jogador_1").setAttribute('disabled', true);
            document.getElementById("btn_parar_1").setAttribute('disabled', true);

            document.getElementById("btn_jogador_2").removeAttribute('disabled');
            document.getElementById("btn_parar_2").removeAttribute('disabled');
        }
    }
    else if (jogador == 2) {
        pontos2 += valor;

        if (pontos2 <= 21) {
            // Jogando
            document.getElementById('jogador2').innerHTML = pontos2;
            if (pontos2 == 21) {
                document.getElementById("btn_jogador_2").setAttribute('disabled', true);
                document.getElementById("btn_parar_2").setAttribute('disabled', true);
                resultado();
            }
        }
        else {
            //Partida perdida
            document.getElementById('jogador2').innerHTML = pontos2;
            document.getElementById("btn_jogador_2").setAttribute('disabled', true);
            document.getElementById("btn_parar_2").setAttribute('disabled', true);
            resultado();
        }
        
    }      
}

function resultado() {
    var resultado = document.getElementById('resultado');
    var nomeJogador1 = document.getElementById("nomeJogador1");
    var nomeJogador2 = document.getElementById("nomeJogador2");

    if (pontos1 <= 21 && pontos2 <= 21) {
        if (pontos1 == pontos2) {
            resultado.innerHTML = "Empate!";
        }
        else if (pontos1 > pontos2) {
            resultado.innerHTML = nomeJogador1.innerHTML +" ganhou!";
        }
        else {
            resultado.innerHTML = nomeJogador2.innerHTML + " ganhou!";
        }
    }
    else {
        if (pontos1 > 21 && pontos2 <= 21) {
            resultado.innerHTML = nomeJogador2.innerHTML + " ganhou!";
        }
        else if (pontos1 <= 21 && pontos2 > 21) {
            resultado.innerHTML = nomeJogador1.innerHTML + " ganhou!";
        }
        else {
            resultado.innerHTML = "Sem vencedor";
        }
    }
}

function parar1() {
    var btn_jogador1 = document.getElementById("btn_jogador_1");
    var btn_jogador2 = document.getElementById("btn_jogador_2");
    var btn_parar1 = document.getElementById("btn_parar_1");
    var btn_parar2 = document.getElementById("btn_parar_2");

    $(btn_jogador1).attr('disabled', 'disabled');
    $(btn_parar1).attr('disabled', 'disabled');

    $(btn_jogador2).removeAttr('disabled');
    $(btn_parar2).removeAttr('disabled');
}

function parar2() {
    var btn_jogador2 = document.getElementById("btn_jogador_2");
    var btn_parar2 = document.getElementById("btn_parar_2");

    $(btn_jogador2).attr('disabled', 'disabled');
    $(btn_parar2).attr('disabled', 'disabled');

    resultado();
}

function reiniciar() {
    var cartas1 = document.getElementById("cartas1");
    $(cartas1).attr("src/images/BlackJack.png");

    var cartas2 = document.getElementById("cartas2");
    $(cartas2).attr("src/images/BlackJack.png");

    document.getElementById("btn_iniciar").removeAttribute('disabled');
    document.getElementById("resultado").innerHTML = "";

    pontos1 = 0;
    pontos2 = 0;
    document.getElementById('jogador1').innerHTML = pontos1;
    document.getElementById('jogador2').innerHTML = pontos2;

    document.getElementById('nomeJogador1').innerHTML = "Jogador 1";
    document.getElementById('nomeJogador2').innerHTML = "Jogador 2";

    document.getElementById('btn_jogador_2').setAttribute("disabled", true);
    document.getElementById('btn_parar_2').setAttribute("disabled", true);
    document.getElementById('btn_reiniciar').setAttribute("disabled", true);
}