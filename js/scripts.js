//JQUERY ONDE ABRE O MENU NO MOBILE
$(function(){
    $('nav.mobile').click(function(){

        //CRIADO A VARIAVEL QUE ARMAZENA OS ELEMENTOS DE MENU MOBILE
        var listaMenu = $('nav.mobile ul');
        
        //LÓGICA PARA APARECER O MENU ESCONDIDO E DE ACORDO COM O CLICK MOSTRAR
        //O ICONE CORRESPONDENTE
        if (listaMenu.is(':hidden') == true){
            var icone = $('.botao-menu-mobile').find('i');
            icone.removeClass('fa-bars');
            icone.addClass('fa-times');
            listaMenu.slideToggle();
        }else{
            var icone = $('.botao-menu-mobile').find('i');
            icone.removeClass('fa-times');
            icone.addClass('fa-bars');
            listaMenu.slideToggle();
        }
    });

    //SCRIPT DO SCROLL DA PÁGINA

    if ($('target').length > 0) {
        //elemento existe, dar o scroll no elemento

        //ATTR ELE PEGA O ELEMENTO DO HTML
        var elemento = '#'+$('target').attr('target');

        //VARIAVEL QUE GUARDA O ELEMENTO DE CIMA E ATRIBUI UMA FUNÇÃO DE SCROLL
        var scroll = $(elemento).offset().top;

        //JQUERY  COM OS PARAMETROS DE HTML E BODY  USANDO ANIMATE PARA ANIMAR A TELA COM SCROLL VIA LINK usando a variavel , tempo de animação
        $('html,body').animate({scrollTop:scroll},2000);

    }


    //carregar dinamicamente sem precisar atualizar a página
    carregarDinamico();
    function carregarDinamico(){

        //jquery pega  o parametro real time do link de menu  e atribui um evento de click 
        $('[realtime]').click(function(){


            //cria a variavel recebendo  jaquery  com parametro dela mesma . usando a função load
            //apois isso usa o attrr dando parametro realtime 
            var pagina = $(this).attr('realtime');

            //chamo a div container principal e mando ela esconder com o hide
            $('.container-principal').hide();
            //chamd jquery a div container e mando carregar o arquivo responsavel pelo contato
            $('.container-principal').load(include_path +'pages/'+pagina+'.php');

            //
            $('.container-principal').fadeIn(2000);
            return false;
        })
    }


})




