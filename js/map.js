//SCRIPT RESPONSÁVEL PELA MAPS DO GOOGLE NA PÁGINA DE CONTATO


$(function(){
    var map;


    //criei uma função ára armazenar um objeto com as informações da latitude e longitude instanciando o google maps
    function initialize(){
        var mapProp = {
            center: new google.maps.minhaLatitudeLongitude(-30.1173124,-51.108982),
            zoom:14,
            scrollwhell: false,

            //usei o style para colocar saturação no maps
            styles:[{
            stylers:[{
                saturation: -100
            }]
             }],

            //variavel responsavel pelo mapeamento de ruas do maps
            mapTypeId: google.maps.mapTypeId.ROADMAP
        };

        //instânciei um objeto da classe google maps e setei para pegar o elemento pelo id da div map e como segundo parâmetro coloquei o objeto da função anterior
        map = new google.maps.Map(document.getElementById("map"),mapProp);

        }


        //CRIADA UMA FUNÇÃO QUE VAI ADICIONAR UM MARCADOR NO MAPA COM OS PARAMETROS DE LATITUDE , LONGITUDE , ICONE, CONTEUDO, ABRIR JANELA DE INFORMAÇÃO E MOSTRAR 
        //JANELA DE INFORMAÇÃO
        function addMaker(lat,long,icon,content,showInfoWindow,openInfoWindow){

            //VARIAVEL QUE ARMAZENA UM OBJETO COM AS PROPRIEDADES LATITUDE E LONGITUDE
            var minhaLatitudeLongitude = {lat:lat,lng:long};

            //CASO O ICON FOR VAZIO
            if(icon === ' '){

                //VAI INSTANCIAR UM OBJETO DO TIPO GOOGLE MAPS ESEUS ATRIBUTOS ABAIXO
                var marcador = new google.maps.Marker({
                    position: minhaLatitudeLongitude,
                    map: map,
                    icon: icon
                });
                
                //SENÃO
                //VAI FAZER O MESMO  DO QUE ACIMA
            }else {
                var marcador = new google.maps.Marker({
                    position: minhaLatitudeLongitude,
                    map: map,
                    icon: icon
                });
            }

            var infoWindow = new google.maps.InfoWindow({
                content: content,
                maxWidth: 200
            });

            google.maps.event.addListener(infoWindow, 'domready', function(){
                var iwOuter = $('.gm-style-w');
                var iwBackground = iwOuter.prev();
                iwBackground.children(':nth-child(2)').css({'background' : 'rgb(255,255,255)'}).css({'border-radius': '0px'});
                iwBackground.children(':nth-child(4)').css({'background' : 'rgb(255,255,255)'}).css({'border-radius': '0px'});
                iwBackground.children(':nth-child(1)').attr('style', function(i,s){return s + 'display:none;'});
                iwBackground.children(':nth-child(3)').attr('style', function(i,s){return s + 'display:none;'});
            });

            if (showInfoWindow == undefined) {
                google.maps.event.addListener(marcador, 'click', function(){
                    infoWindow.open(map,marcador);
                });
            } else if (openInfoWindow == true) {
                    infoWindow.open(map, marcador);
            }
        }

        initialize();
        addMaker(-30.1173124.lat,-51.108982.long,'','Minha Casa',undefined,false);
        
})
