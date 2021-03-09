<?php
    include('../config.php');

    //criação de um array
    $data = array();

     //VARIAVEL DE CONTROLE DO ASSUNTO
     $assunto = 'Nova Mensagem No Site!';
     //VARIAVEL DO CORPO INICIANDO COM VAZIO
     $corpo = '';

     //REPETIÇÃO PARA PERCORRER O POST E RECUPERAR TUDO QUE TIVER DENTRO
     foreach ($_POST as $key => $value) {
         //VARIVALE CORPO , USANDO A FUNÇÃO  UCFIRST QUE COLOCA LETRA MAIUSCULA NAS PALAVRAS 
         $corpo.=ucfirst($key).": ".$value;
         $corpo.="<hr>";
     }

     //VARIAVEL INFO ARMAZENA UM ARRAY QUE CARREGA O ASSUNTO E O CORPO QUE O USUARIO DIGITAR
     $info = array('assunto'=>$assunto, 'corpo'=>$corpo);
     //INFORMAÇÕES DE CONEXÃO COM O SERVIDOR
     $mail = new Email('smtp.live.com', 'eniobackup.ti@hotmail.com','neoo2010','Enio Oliveira');
     $mail->addAdress('enio.souzaoliveira87@gmail.com','Enio Oliveira');

     //FORMATAÇÃO DO EMAIL DANDO PARAMETRO AS INFOS QUE O USUARIO COLCOAR
     $mail->formatarEmail($info);
     //se ao enviar email der certo
    if($mail->enviarEmail()){

        //o array vai retornar true
        $data['sucesso'] = true;
    }else{

        //senão vai retornar que deu erro
     $data['erro'] =  true;
   }

   //  $data['retorno'] = 'Sucesso';
   
     //quando o script morrer ele vai retornar em json o array
     die(json_encode($data));
?>