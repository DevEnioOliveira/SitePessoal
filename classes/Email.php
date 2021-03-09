<?php


    class Email

    
    {

        private $mailer;

        public function __construct($host,$username,$senha,$name)
        {
            
             

            //declaracao da variavel local mailer
            $this->mailer = new PHPMailer;
            
            // $this->mailer->SMTPDebug = 3;                               // Enable verbose debug output

            $this->mailer->isSMTP();                                      // Set mailer to use SMTP
            $this->mailer->Host = $host;                       // Specify main and backup SMTP servers
            $this->mailer->SMTPAuth = true;                               // Enable SMTP authentication
            $this->mailer->Username = $username;       // SMTP username
            $this->mailer->Password = $senha;                         // SMTP password
            $this->mailer->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
            $this->mailer->Port = 587;                                    // TCP port to connect to
            $this->mailer->Debugoutput = 'html';

            $this->mailer->setFrom($username, $name);
            $this->mailer->isHTML(true);  // Set email format to HTML
            $this->mailer->CharSet = 'UTF-8';

            //EMAIL PARA ENVIAR
         
            //$mail->addReplyTo('info@example.com', 'Information');
           // $mail->addCC('cc@example.com');
           // $mail->addBCC('bcc@example.com');

           //PARA ADICIONAR ANEXOS
           // $mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
           // $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name                            

           
                    
        }

        //FORMATAR EMAIL

        public function formatarEmail($info){
            $this->mailer->Subject = $info['assunto'];
            $this->mailer->Body    = $info['corpo'];
            $this->mailer->AltBody = strip_tags($info['corpo']);
        }
        //FUNÇÃO PARA ARMAZENAR OS ENDEREÇOS DE ENVIO DE EMAIL
        public function addAdress($email,$nome){
            $this->mailer->addAddress($email, $nome);
        }

        //FUNÇÃO PARA ARMAZENAR O COMANDO PARA ENVIAR
        public function enviarEmail(){

            // SE O MAILER ENVIOU O EMAIL 
            if ($this->mailer->send()){

                //RETORNA VERDADEIRO
                return true;
            }else{
                return false;
            }
        }
    }
    

?>