<?php include('config.php');?>
<!DOCTYPE html>
    <html lang="pt-br">
        <!--META TAGS PARA SEO-->
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0"> <!--LAYOUT RESPONSIVEL-->
            <meta name="description" content="Descrição do meu site">
            <meta name="keywords" content="palavras-chave,do,meu,site">
            <link href="<?php echo INCLUDE_PATH;?>favicon.ico" rel="shortcut icon"> 
            <link href="<?php echo INCLUDE_PATH;?>estilo/all.css" rel="stylesheet">
            <link href="<?php echo INCLUDE_PATH;?>estilo/all.min.css" rel="stylesheet">
            <link href="<?php echo INCLUDE_PATH;?>estilo/fontawesome.min.css" rel="stylesheet">
            <link href="<?php echo INCLUDE_PATH;?>estilo/fontawesome.css" rel="stylesheet">
            <link href="<?php echo INCLUDE_PATH;?>estilo/style.css" rel="stylesheet">         
            <title>Portfolio</title>
        </head>
        <body>
        <base base="<?php echo INCLUDE_PATH; ?>">
        <?php
            
            //CASO TENHA UMA URL
            $url = isset($_GET['url']) ? $_GET['url'] : 'home';
            
            switch ($url) {
                case 'especialidades':
                    echo '<target target="especialidades" />';
                    break;
                
            
                case 'servicos':
                    echo '<target target="servicos" />';
                break;
            }
            
        ?>
        <div class="sucesso">Formulário Enviado com Sucesso!</div>
        <div class="falha">Não foi Possível Enviar o formulário! Tente Mais Tarde</div>
        <div class="overlay-loading">
            <img src="<?php echo INCLUDE_PATH?>images/ajax-loader.gif">
        </div>


            <header>
                <div class="center">
                    <div class="logo left"><a href="/"><img id="logo"src="images/logo.png"></a></div>
                    <!--MENU NO DESKTOP-->
                    <nav class="desktop right">
                        <ul>
                            <li><a href="<?php echo INCLUDE_PATH;?>">Home</a></li>
                            <li><a href="<?php echo INCLUDE_PATH;?>especialidades">Especialidades</a></li>
                            <li><a href="<?php echo INCLUDE_PATH;?>servicos">Serviços</a></li>
                            <li><a realtime="contato" href="<?php echo INCLUDE_PATH;?>contato">Contato</a></li>
                        </ul>
                    </nav>
                    <!--MENU NO MOBILE-->
                    <nav class="mobile right">
                        <div class="botao-menu-mobile">
                            <i class="fas fa-bars"></i>
                        </div>
                        <ul>
                            <li><a href="<?php echo INCLUDE_PATH;?>">Home</a></li>
                            <li><a href="<?php echo INCLUDE_PATH;?>especialidades">Especialidades</a></li>
                            <li><a href="<?php echo INCLUDE_PATH;?>servicos">Serviços</a></li>
                            <li><a realtime="contato" href="<?php echo INCLUDE_PATH;?>contato">Contato</a></li>
                        </ul>
                    </nav>
                    <div class="clear"></div>
                </div>
            </header>
            <div class="container-principal">
                <?php
                    //VERIFICAÇÃO DE QUE SE EXISTIR UMA URL essa url sera home


                    //FAREMOS UMA VERIFICAÇÃO SE EXISTIR ARQUIVO O PARAMETRO SERÁ O CAMINHO CONCATENADO COM A VARIÁVEL
                    if (file_exists('pages/'.$url.'.php.')){
                        //SE A CONDIÇÃO FOR VERDADEIRA ELA VAI DAR UM INCLUDE REFERENCIANDO O CAMINHO DE ONDE FICARÁ AS PÁGINAS
                        include('pages/'.$url.'.php');
                    }else{
                        if ($url!= 'especialidades' && $url != 'servicos') {
                            $pagina404 = true;
                            //SE NÃO TIVER UMA PÁGINA ELA CAIRA NA PAGINA DE ARQUIVO NÃO ENCONTRADO
                            include('pages/404.php');
                        }else{
                            include('pages/home.php');
                        }
                    }
                ?>
            </div>
            <footer <?php 
            
            if(isset($pagina404) && $pagina404 == true) echo 'class="fixed"'; ?>>

                <div class="center">
                    <p>|Enio Sistemas| @ Todos os direitos reservados</p>
                </div>
            </footer>
            <!--INSERÇÃO DE SCRIPT JS E JQUERY-->
            <script src="<?php echo INCLUDE_PATH; ?>js/jquery.js"></script>
            <script src="<?php echo INCLUDE_PATH; ?>js/scripts.js"></script>
            <?php
            //SE A URL FOR VAZIA OU ESTIVER NA HOME
                if ($url == 'home' || $url == '') {
            ?>   
              
            <!--CARREGUE ESSE ARQUIVO-->
            <script src="<?php echo INCLUDE_PATH; ?>js/slider.js"></script>
            <?php }
                if ($url === 'contato') {
            ?>        
                
            <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAFmWEAtMBCiLyLiP1HxvMXqnzfMC8eS3c&libraries=geometry"></script>
            <script src="<?php echo INCLUDE_PATH; ?>js/map.js"></script>             
            <?php } ?>
            <script src="<?php echo INCLUDE_PATH; ?>js/exemplo.js"></script>
            <script src="<?php echo INCLUDE_PATH; ?>js/formularios.js"></script> 
        </body>
    </html>