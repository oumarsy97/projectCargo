
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