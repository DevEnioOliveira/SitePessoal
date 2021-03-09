

<?php
//ARQUIVO RESPONSAVEL PELAS CONFIGURAÇÕES DO PROJETO ONDE ESTÃO AS CONSTANTES



//variavel recebendo a funcao do load da classe email
$autoload = function($class){


    //SE A MINHA CLASSE FOR IGUAL A EMAIL
    if($class == 'Email'){

        //INCLUO A CLASSE PHP MAILER require inclui uma vez so o arquivo
        require_once('classes/phpMailer/PHPMailerAutoload.php');
    }
    //inclusão do arquivo de classe
    include('classes/'.$class.'.php');
};


//função nativa para registar o autoload usando a variavel que contem a funcao 
spl_autoload_register($autoload);

//CONSTANTE DO NOSSO DIREORIO RAIZ
define('INCLUDE_PATH', 'http://localhost/Portfolio/');


?>