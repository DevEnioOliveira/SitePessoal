//SCRIPT QUE CARREGA O SLIDER

$(function(){
    //declaração das variaveis


    var atual = 0;

    //variavel que contem o delay equvalente ao numero de imagens
    var delay = 3;

    //variavel que armazena o jquery pegando a class da div e atribuindo o tamanho dela -1
    var maxSlide = $('.banner-single').length - 1;

    iniciarSlide();
    mudarSlide();


    //função para iniciar o slide
    function iniciarSlide(){

        //jquery que pega o elemento da div e esconde
        $('.banner-single').hide();
        //jquery que pega o elemento da div , começando com zero e mostrando
        $('.banner-single').eq(0).show();

        //controlador das bolinhas do slider

        for(var i = 0; i < maxSlide-2; i++){

            //nessa linha eu estou chamando o conteudo da classe bullets(span) e chamando o html, fazendo assim ele chamara nao so a classe bullets como os filhos dela
            var content = $('.bullets').html();

            //se o controlador do loop for zero
            if(i == 0){

                //vai pegar o conteudo e ativar a classe debaixo ativando a bolinha
               content+='<span class="active-slider"></span>'; 
            }else{
                content+='<span></span>';
                $('.bullets').html(content);
            }
          
        }
    }


    //função para mudar o slide
    function mudarSlide(){

        //intervalo de passagem entre uma imagem e outra
        setInterval(function(){

            //jquery pegando o elemento da div apos atribuo a variavel atual e atribuo metodo de passagem de imagem, ou seja quanto tempo ela vai sumir
            $('.banner-single').eq(atual).fadeOut(2000);

            //a cada passagem ele incrementa 1
            atual++

            //se o numero atual for maior que o máximo de imagens
            if(atual > maxSlide){

                //ele retorna a zero
                atual = 0;
            }

            $('.banner-single').eq(atual).fadeIn(2000);
            /*
            //metodo similar ao primeiro de forma inversa, quando ela vai aparecer
            //TROCAR AS BOLINHAS DO SLIDERS
            $('.bullets span').eq(atual).addClass('active-slider');
            $('.bullets span').removeClass('.active-slider');
            */
            // no final temos a variavel de delay x 1000 que dará 3 segundos
        },delay * 1000);
    }

    
/*
    //CONTROLADOR MANUAL
    $('body').on('click','.bullets span',function(){
        var currentBullet = $(this);
        $('.banner-single').eq(atual).fadeOut(2000);
        atual = currentBullet.index();
        $('.banner-single').eq(atual).fadeIn(2000);
        $('.bullets span').removeClass('active-slider');
        currentBullet.addClass('active-slide');
    });

    */
})