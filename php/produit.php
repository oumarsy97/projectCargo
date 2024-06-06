<?php
 $data = file_get_contents('../data/data.json');

 $data = json_decode($data, true);
 $page = 1;
 $itempage = 3;
 $totalpage = ceil(count($data['cargo'])/$itempage);
 $donnee = array_slice($data['cargo'],($page-1)*$itempage, $itempage);
 

include_once '../src/views/produit.php.html';

?>