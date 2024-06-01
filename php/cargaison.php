<?php
// Récupérer les données JSON à partir du fichier
$data = file_get_contents('../data/data.json');
// Décodez les données JSON en tableau PHP
$data = json_decode($data, true);
$page = 1;
$itempage = 3;
$totalpage = ceil(count($data['cargo'])/$itempage);
$donnee = array_slice($data['cargo'],($page-1)*$itempage, $itempage);
include_once '../src/views/cargo.php.html';