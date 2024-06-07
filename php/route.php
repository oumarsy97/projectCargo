
<?php

if ($_SERVER['REQUEST_METHOD'] != 'POST' && !isset($_REQUEST['action']) ) {
    include   '../php/connexion.php';
}else{

    include_once '../layout/header.php';
if(isset($_POST['email']) && $_POST['email'] !='' ){
//validation à faire
$page = 'cargaison';

if(file_exists('../php/'.$page.'.php')) {
include "../php/".$page.".php";
}


}else if(isset($_REQUEST['action'])) {
    $page = $_REQUEST['action'];
    include "../php/".$page.".php";
}
include_once '../layout/footer.php';


    



// include '../php/connexion.php';

}


