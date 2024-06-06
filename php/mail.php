<?php



// require_once 'HTTP/Request2.php';
// function envoyerSMS() {
   

// $request = new HTTP_Request2();
// $request->setUrl('https://w1qlj8.api.infobip.com/sms/2/text/advanced');
// $request->setMethod(HTTP_Request2::METHOD_POST);
// $request->setConfig(array(
//     'follow_redirects' => TRUE
// ));
// $request->setHeader(array(
//     'Authorization' => 'App db739f7cfa1be06f3b0f49d70a494953-4023da95-6f4f-48c6-a054-f5a686349702',
//     'Content-Type' => 'application/json',
//     'Accept' => 'application/json'
// ));
// $request->setBody('{"messages":[{"destinations":[{"to":"221781807229"}],"from":"ServiceSMS","text":"Congratulations on sending your first message.\\nGo ahead and check the delivery report in the next step."}]}');
// try {
//     $response = $request->send();
//     if ($response->getStatus() == 200) {
//         echo $response->getBody();
//     }
//     else {
//         echo 'Unexpected HTTP status: ' . $response->getStatus() . ' ' .
//         $response->getReasonPhrase();
//     }
// }
// catch(HTTP_Request2_Exception $e) {
//     echo 'Error: ' . $e->getMessage();
// }
// }
// Charger la classe PHPMailer
include '../vendor/autoload.php';
 use Twilio\Rest\Client;
// Instancier PHPMailer
function envoieMail($destination, $name,$message) {
    
$mail = new PHPMailer\PHPMailer\PHPMailer();

// Paramètres SMTP
$mail->isSMTP();
$mail->Host = 'smtp.gmail.com';  // Serveur SMTP de Gmail
$mail->SMTPAuth = true;
$mail->Username = 'syoumar505@gmail.com'; // Votre adresse e-mail Gmail
$mail->Password = 'bngc rasj ytwc xmmd'; // Votre mot de passe Gmail
$mail->SMTPSecure = 'tls';
$mail->Port = 587; // Port SMTP de Gmail

// Paramètres de l'e-mail
$mail->setFrom('syoumar505@gmail.com', 'Cargo Express');
$mail->addAddress($destination, $name);
$mail->Subject = 'Mail de Recu';
$mail->Body = $message;
// $mail ->addAttachment($recu, 'recu.pdf');

// Envoyer l'e-mail
if ($mail->send()) {
    echo 'E-mail envoyé avec succès !';
} else {
    echo 'Erreur lors de l\'envoi de l\'e-mail : ' . $mail->ErrorInfo;
}

}


//  function envoieSms($destinataire, $message) {

// //    // Remplacez ces valeurs par votre SID de compte Twilio et votre jeton d'authentification
//    $account_sid = 'AC774d7c281cc5f780f927bdc6dcb9c151';
//    $auth_token = '80a058b3b9556276338503ed68582520';
   
//    $client = new Client($account_sid, $auth_token);
   
//    // Remplacez ces valeurs par votre numéro Twilio et le numéro du destinataire
//    $from = '+14012149890'; // Votre numéro Twilio
//    $to = '+221778204522';   // Numéro du destinataire
   
//    $message = $client->messages->create(
//        $to,
//        array(
//            'from' => $from,
//            'body' => 'salut comment vas tu ?')
//    );
   
//    echo "Message envoyé avec succès ! SID du message : " . $message->sid;

// }
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
   $data = json_decode(file_get_contents('php://input'), true);
    $cargo = $data['cargo'];
    $message = $data['message'];
   $produits = $cargo['products'];
    foreach ($produits as $produit) {
//    // envoieMail('syoumar505@gmail.com','sy', $message);
  envoieMail($produit['_client']['email'], $produit['_client']['name'], $message);
 envoieMail($produit['_owner']['email'], $produit['_owner']['name'], $message);

    }


echo json_encode($data);


 }

?>