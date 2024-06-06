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
<body>
<header class="text-gray-800 body-font sticky top-0 z-9999 bg-white">
  <div class="container mx-auto flex flex-wrap p-6 flex-col md:flex-row items-center shadow-md rounded-lg z-10 ">
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span class="ml-3 text-xl text-blue-600 flex items-center gap-4" >
        
        <font style="vertical-align: inherit; width: 100%;">
          <font style="vertical-align: inherit; ;" class="font-bold text-xl">Cargo Express</font>
        </font>
        <input type="text" name="search" id="search" placeholder="Recherche..." class="text-black bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  h-1/2 p-4" >
      </span>
    </a>
    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <a class="mr-5 hover:text-gray-900 " >
        <form action="" method="post">
          <input type="hidden" name="action" value="dashboard">
          <input type="submit" value="dashboard" class="text-blue-700  font-bold  focus:text-sky-500  text-xl rounded-lg focus:ring-blue-500   focus:bg-blue-500 hover:bg-blue-500 hover:text-white   h-1/2 p-2">
        </a>
      <a class="mr-5 hover:text-gray-900">
      <form action="" method="post">
          <input type="hidden" name="action" value="cargaison">
          <input type="submit" value="Cargaisons" class="text-blue-700  font-bold   text-xl rounded-lg focus:ring-blue-500   focus:bg-blue-500 hover:bg-blue-500 hover:text-white   h-1/2 p-2">
        </form>
      </a>
      <a class="mr-5 hover:text-gray-900">
      <form action="" method="post">
          <input type="hidden" name="action" value="produit">
          <input type="submit" value="Produits" class="text-blue-700 font-bold  text-xl rounded-lg focus:ring-blue-500   focus:bg-blue-500 hover:bg-blue-500 hover:text-white   h-1/2 p-2">
        </form>
      </form>
      </a>
      <a class="mr-5 hover:text-gray-900">
      <form action="" method="post">
          <input type="hidden" name="action" value="client">
          <input type="submit" value="Clients" class="text-blue-700  font-bold   text-xl rounded-lg focus:ring-blue-500   focus:bg-blue-500 hover:bg-blue-500 hover:text-white   h-1/2 p-2">
        </form>
      </a>
      
    </nav>
    
  </div>
</header>

<!-- You can open the modal using ID.showModal() method -->
<dialog id="my_modal_3" class="modal h-auto w-full ">
  <div class="modal-box h-full w-full">
    <form method="dialog">
      <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
   
  <div class="w-full mx-auto p-4 form-control">
  <div class="w-full">
 
   <h2 class="text-2xl font-bold mb-4 text-center">Ajout Cargaison</h2>
   </div>
  <form class="form-control" id="formCargo">
  <div class="w-full gap-4">
    <label for="from" class="block text-gray-700 text-sm font-bold mb-2" id="label">
      Type de Cargaison
    </label>
   <select name="type" id="type" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3">
     <option value="Maritime">Maritime</option>
     <option value="Terrestre">Terrestre</option>
     <option value="Aerienne">Aerienne</option>
   </select>
   
</div>

  <div class="mb-4 grid grid-cols-2 gap-4 mt-4">
    <div>
      <label for="from" class="block text-gray-700 text-sm font-bold mb-2">Depart</label>
      <input type="text" id="from" name="from" class="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
      <div class="error-from text-red-500 invisible"> depart est obligatoire</div>
    </div>
    <div>
      <label for="to" class="block text-gray-700 text-sm font-bold mb-2">Arrivée</label>
      <input type="text" id="to" name="to" class="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
      <div class="error-to text-red-500 invisible"> Arrivée est obligatoire</div>
    </div>
    
     <div>
       <label for="typeChargement" class="block text-gray-700 text-sm font-bold mb-2">Type de Chargement</label>
       <select id="typeChargement" name="typeChargement" class="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
         <option value="poids">poids</option>
         <option value="colis">Nombre de Colis</option>
       </select>
     </div>
     <div id="typepoids" class="">
       <label for="weight" class="block text-gray-700 text-sm font-bold mb-2">Poids</label>
       <input type="number" id="weight" name="weight" class="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" min="0" />
       <div class="error-weight text-red-500 invisible"> Poids est obligatoire</div>
     </div>
     <div id="typecolis" class="hidden">
       <label for="nombreColis" class="block text-gray-700 text-sm font-bold mb-2">Nombre de Colis</label>
       <input type="number" id="nombreColis" disabled name="nombreColis" class="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" min="0" />
       <div class="error-nombreColis text-red-500 invisible"> Nombre de Colis est obligatoire</div>
     </div>

    <div>
      <label for="departure" class="block text-gray-700 text-sm font-bold mb-2">Date Départ</label>
      <input type="date" id="departure" name="departure" class="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
      <div class="error-departure text-red-500 invisible"> Date est obligatoire</div>
    </div>

    <div>
      <label for="destination" class="block text-gray-700 text-sm font-bold mb-2">Date Destination</label>
      <input type="date" id="destination" name="destination" class="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
      <div class="error-destination text-red-500 invisible"> Date est obligatoire</div>
    </div>

    <div class="">
       <label for="distance" class="block text-gray-700 text-sm font-bold mb-1">Distance</label>
       <input type="number"   id="distance" name="distance" class="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
       <div class="error-distance text-red-500 invisible"> Distance est obligatoire</div>
     </div>
    </div>
    <div id="map" style="width: 90%; height: 290px;margin-left: 5%;" class="mb-1"></div>
     <div class="flex items-center justify-center w-full">
     <button type="button" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">Ajouter</button>
     </div>
     </form>
   
  </div>
  
</dialog>
<?php


if ($_SERVER['REQUEST_METHOD'] != 'POST') {
  include   '../php/connexion.php';
  die();
}else if (isset($_REQUEST['action'])) {
  $page = $_REQUEST['action'];
}




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
 $page = 'cargaison';
 if(isset($_REQUEST['action'])) {
   $page = $_REQUEST['action'];
 }
 if(file_exists('../php/'.$page.'.php')) {
 include "../php/".$page.".php";
 }
?>

</main>
<script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js"></script>
<script src="../node_modules/preline/dist/preline.js"></script>
<script src="../dist/script.js" type="module"></script>
<script type="text/javascript"
src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js">
</script>
<script type="text/javascript" src="https://cdn.emailjs.com/dist/email.min.js"></script>

<!-- <script src="../dist/Model/mail.js" type="module"></script> -->
<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
     integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
     crossorigin=""></script>
     <script>
  var map = L.map('map').setView([30, 0], 2);
  L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '©OpenStreetMap, ©CartoDB'
  }).addTo(map);

  var depart, arrive, line;

  function handleClick(e) {
    const arriv = document.getElementById('to');
    const depar = document.getElementById('from');

    var lat = e.latlng.lat;
    var lng = e.latlng.lng;
    var url = 'https://nominatim.openstreetmap.org/reverse?format=json&lat=' + lat + '&lon=' + lng;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        var country = data.address.country || "Inconnu";
        if (!depart || depar.value === "") {
          if (depart) map.removeLayer(depart);
          depar.value = country;
          depart = L.marker([lat, lng], {icon: L.divIcon({className: 'fas fa-plane-departure text-3xl text-blue-500'})}).addTo(map);
        } else if (!arrive || arriv.value === "") {
          if (arrive) map.removeLayer(arrive);
          arriv.value = country;
          arrive = L.marker([lat, lng], {icon: L.divIcon({className: 'fas fa-plane-arrival text-3xl text-green-500'})}).addTo(map);
        }
        if (depart && arrive) {
          if (line) map.removeLayer(line);
          var latlngs = [depart.getLatLng(), arrive.getLatLng()];
          line = L.polyline(latlngs, {color: 'indigo', weight: 3, opacity: 0.7, dashArray: '10, 10'}).addTo(map);
          map.fitBounds(line.getBounds(), {padding: [50, 50]});
          var distance = (depart.getLatLng().distanceTo(arrive.getLatLng()) / 1000).toFixed(2);
          document.getElementById('distance').value = distance;
        }
      })
      .catch(error => console.error(error));
  }

  map.on('click', handleClick);

  document.getElementById('typeChargement').addEventListener('change', function() {
    document.getElementById('typepoids').classList.toggle('hidden', this.value !== 'poids');
    document.getElementById('typecolis').classList.toggle('hidden', this.value !== 'colis');
    document.getElementById('nombreColis').disabled = this.value !== 'colis';
    document.getElementById('weight').disabled = this.value !== 'poids';
  });

  document.getElementById('typeproduit')?.addEventListener('change', function() {
    document.getElementById('divDegre').classList.toggle('hidden', this.value !== 'chimique');
  });
</script>
</body>
</html>