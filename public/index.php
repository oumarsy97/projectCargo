<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="../src/css/output.css" rel="stylesheet">
  <link rel="preload" href="https://tile.openstreetmap.org/13/4093/2722.png" as="image">
  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" integrity="sha256-o9N1XYqF1rSA6mo25ybY2TIrrP1l5QfrH1D4Xwl7X8A="crossorigin=""/>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"/>
  <link rel="preload" href="https://tile.openstreetmap.org/13/4093/2722.png" as="image">
  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" integrity="sha256-o9N1XYqF1rSA6mo25ybY2TIrrP1l5QfrH1D4Xwl7X8A=" crossorigin=""/>
  
</head>
<body>
<header class="text-gray-600 body-font ">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center shadow-md rounded-lg">
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span class="ml-3 text-xl text-red-600 flex items-center gap-4" >
        
        <font style="vertical-align: inherit; width: 100%;">
          <font style="vertical-align: inherit;">Cargo Express</font>
        </font>
        <input type="text" name="search" id="search" placeholder="Recherche..." class="text-black bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  h-1/2 p-2.5" >
      </span>
    </a>
    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <a class="mr-5 hover:text-gray-900">
        <form action="" method="post">
          <input type="hidden" name="action" value="dashboard">
          <input type="submit" value="dashboard">
        </a>
      <a class="mr-5 hover:text-gray-900">
      <form action="" method="post">
          <input type="hidden" name="action" value="cargaison">
          <input type="submit" value="Cargaisons">
        </form>
      </a>
      <a class="mr-5 hover:text-gray-900">
      <form action="" method="post">
          <input type="hidden" name="action" value="produit">
          <input type="submit" value="Produits">
        </form>
      </form>
      </a>
      <a class="mr-5 hover:text-gray-900">
      <form action="" method="post">
          <input type="hidden" name="action" value="client">
          <input type="submit" value="Clients">
        </form>
      </a>
      
    </nav>
    
  </div>
</header>
<!-- You can open the modal using ID.showModal() method -->
<dialog id="my_modal_3" class="modal h-auto w-2/4">
  <div class="modal-box h-[500px]">
    <form method="dialog">
      <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
   
  <div class="container mx-auto p-4 form-control">
  <div>
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
    <div id="map" style="width: 100%; height: 290px;" class="mb-2"></div>
     <div class="flex items-center justify-center w-full">
     <button type="button" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">Ajouter</button>
     </div>
     </form>
   
  </div>

</dialog>
<?php

$page = 'cargaison';
if (isset($_REQUEST['action'])) {
  $page = $_REQUEST['action'];
}

if(file_exists('../php/'.$page.'.php')) {
include "../php/".$page.".php";
}
?>

</main>
<script src="../dist/script.js" type="module"></script>
<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
    integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
    crossorigin=""></script> 
     <script>
        map = L.map('map').setView([0, 0], 2);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '© OpenStreetMap'
}).addTo(map);



        var depart;
        var arrive;

        function handleClick(e) {
          const arriv = document.getElementById('to');
          const depar = document.getElementById('from');
          
            if (!depart || (depar.value == "")) {
              //effacer dabord le marqueur depart si il y en a un
              if (depart) {
                map.removeLayer(depart);
              }
                var lat = e.latlng.lat;
                var lng = e.latlng.lng;
                var url = 'https://nominatim.openstreetmap.org/reverse?format=json&lat=' + lat + '&lon=' + lng;
                fetch(url)
                .then(response => response.json())
                .then(data => {
                    var country = data.address.country;
                    const depar = document.getElementById('from');
                    depar.value = country;
                })
                .catch(error => {
                    console.error(error);
                });
                var marker = L.marker([lat, lng]).addTo(map);
                marker.bindPopup('Depart ').openPopup();
                depart = marker;
               
            } else if (!arrive || (arriv.value == "")) {
              //effacer dabord le marqueur arrive si il y en a un
              if (arrive) {
                map.removeLayer(arrive);
              }
              var lat = e.latlng.lat;
                var lng = e.latlng.lng;
                var url = 'https://nominatim.openstreetmap.org/reverse?format=json&lat=' + lat + '&lon=' + lng;
                fetch(url)
                .then(response => response.json())
                .then(data => {
                    var country = data.address.country;
                    arriv.value = country;
                })
                .catch(error => {
                    console.error(error);
                });
            var marker = L.marker([lat, lng]).addTo(map);
            marker.bindPopup('Arrivee ').openPopup();
            arrive = marker;
            }

            calculateDistance();
        }

        function calculateDistance() {
            var distance = depart.getLatLng().distanceTo(arrive.getLatLng()) / 1000;
           const distanceElement = document.getElementById('distance');
           distanceElement.value = distance.toFixed(2) ;
        }

        map.on('click', handleClick);


     
       
    
    </script>


</body>
</html>