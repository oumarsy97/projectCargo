<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="../src/css/output.css" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
     integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
     crossorigin=""/>
     <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.css"  rel="stylesheet" />
      <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script> 
      <link href="https://cdn.jsdelivr.net/npm/daisyui@4.11.1/dist/full.min.css" rel="stylesheet" type="text/css" />
<script src="https://cdn.tailwindcss.com"></script>
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
   <title>Cargo Express</title>
   <style>
    @keyframes slideInFromRight {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
}

.animate-in-from-right {
  animation: slideInFromRight 3s ease-in-out;
}
   </style>
</head>
<?php
include_once '../php/route.php';





// if(isset($_POST['email']) && $_POST['email'] !='' && isset($_POST['password']) ){
//   //dd($_POST);
//   $error = 0;
//   unset($_SESSION['Errmes']);
//   if(!validateEmail($_POST['email'])){
//       $_SESSION['Erremail'] = 'Email formats invalides';
//       $error = 1;
//   }else{
//       $_SESSION['email'] = $_POST['email'];
//       unset($_SESSION['Erremail']);
//   }
//   if($_POST['password'] == ''){
//       $_SESSION['Errpassword'] = 'Mot de passe requis';
//       $error = 1;
//   }
//   $login = $_POST['email'];
//   $password = $_POST['password'];
//   $user = getUser($login, $password);
//   if($user){
//     $_SESSION['user'] = $user;
//     header('Location: ../php/connexion.php');
//   }

// }
 // dd($user);
//  $page = 'cargaison';
//  if(isset($_REQUEST['action'])) {
//    $page = $_REQUEST['action'];
//  }
//  if(file_exists('../php/'.$page.'.php')) {
//  include "../php/".$page.".php";
//  }
?>
