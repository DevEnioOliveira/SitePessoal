//JS RESPONSAVEL PELO FORMULARIO
//AJAX É UMA AÇÃO ASSÍNCRONA , PODEMOS EXECUTAR OUTROS CÓDIGOS ENQUANTO NÃO OBTIVERMOS A RESPOSTA DO SERVIDOR

$(function(){
    //no elemento formulario , apos dar submit ele vai chamar uma função
    $('body').on('submit','form',function(){
        var include_path = $('base').attr('base');
        //criei uma variavel form que recebe um jquery dela mesma
        var form = $(this);
        //criei uma função chamando o ajar e dentro dele recebe um objeto
        $.ajax({
            //metodo do ajax antes de enfiar 
            beforeSend: function(){
              $('.overlay-loading').fadeIn();
            },
            url: include_path+'ajax/formularios.php',
            method: 'post',
            dataType: 'json', 
            data:form.serialize()
            //devemos por parametros aqui para o ajaz interpretar de forma correta
            //primeiro é a url que devemos pegar
            //segundo é o metodo que usaremos
            //terceiro é o tipo de dados que usaremos
            //abaixo usaremos a variavel de cima e logo apos uma função do js que carrega todas informações do post
        }).done(function(data){
            if(data.sucesso){
                $('.overlay-loading').fadeOut();
                $('.sucesso').fadeIn();
                setTimeout(function(){
                    $('.sucesso').fadeOut();
                },3000)
            }else{
                $('.overlay-loading').fadeOut();
                $('.falha').fadeIn();
                setTimeout(function(){                  
                    $('.falha').fadeOut();
                },3000)
            }
        });
        //retorna falso para prevenir comportamento padrão do form
        return false;
    })

})