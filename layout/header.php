<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="../src/css/output.css" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" />

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



