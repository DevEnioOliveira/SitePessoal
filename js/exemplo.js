$(function(){

    //variavel de controle 
    var atual = -1;

    //variavel com o jquery responsavel pela div box e o tamanho dela
    var maximo = $('.box-especialidade').length - 1;

    //variavel responsavel pelo delay da animação
    var animacaoDelay = 2;

    //variavel responsavel de controle de tempo
    var timer;

    executarAnimacao();
    function executarAnimacao(){

        //jquery responsavel por esconder a div
        $('.box-especialidade').hide();
        //atribuicao do timer usando set interval usando parametros a funçao + a animacao de delay x 1000 totalizando 3 segundos
        timer = setInterval(logicaAnimacao,animacaoDelay*1000);

        //funcao da logica de animacao
        function logicaAnimacao(){

            //incrementa a variavel atual
            atual++;

            //ser a variavel for maior que o maximo que é a quantidade de boxes
            if(atual > maximo){

                //finaliza o timer 
                clearInterval(timer);

                //retorna false interrrompendo o timer
                return false;
            }

            //senao ele pega a div box especialidade, pega o indexda variavel atual e faz aparecer
            $('.box-especialidade').eq(atual).fadeIn();

        }
    }
})
