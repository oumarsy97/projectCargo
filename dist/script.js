"use strict";
const cargaison = document.querySelector("#cargaison");
console.log(cargaison);
cargaison.innerHTML = `
<!-- List Cargaison -->
<div class="w-full h-full flex flex-col gap-4">
<div class="w-full h-full flex flex-col gap-4">

<h2 class="text-2xl font-bold">Liste des Cargaison</h2>
</div>
    <div class="flex justify-between ">
    <select class="select select-bordered w-1/5 h-[60px] p-2 rounded-lg max-w-xs">
        <option disabled selected>Filter</option>
        <option value="maritime">Maritime</option>
        <option value="aerienne">Aerienne</option>
        <option value="terrestre">Terrestre</option>
    </select>
    <button class="font-bold text-blue-600 dark:text-blue-500 " id="btnaddCargo" onclick="my_modal_3.showModal()"><i class="fa-regular fa-square-plus"></i> Ajouter une Cargaison </button>
   </div>
    <!--les filtres-->


<table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mr-10">
        <thead class="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                code
                </th>
                <th scope="col" class="px-6 py-3">
                    From
                </th>
                <th scope="col" class="px-6 py-3">
                    to
                </th>
                <th scope="col" class="px-6 py-3">
                    Date Départ
                </th>
                <th scope="col" class="px-6 py-3">
                    Date Arrive
                </th> <th scope="col" class="px-6 py-3">
                    status
                </th>
                <th scope="col" class="px-6 py-3">
                    Etat
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody id"tableBodycargo">
            
           
            <tr class="bg-white dark:bg-gray-800">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Magic Mouse 2
                </th>
                <td class="px-6 py-4">
                    Black
                </td>
                <td class="px-6 py-4">
                    Accessories
                </td>
                <td class="px-6 py-4">
                    $99
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
        </tbody>
    </table>
    </div>
    <!-- Détail Cargaison -->
    <div class="flex justify-center w-1/4 sm:hidden md:block bg-orange-300" id="detailcargo">
    <h2>Détail Cargaison</h2>
    </div>
    
   
`;
const displayDataCargo = () => {
    const tableBodycargo = document.querySelector("#tableBodycargo");
    const tbody = document.querySelector('tbody');
    console.log(tbody);
    tbody.innerHTML = '';
    fetch("../php/data.php")
        .then(response => response.json())
        .then(data => {
        console.log(data);
        data.cargo.forEach((cargo) => {
            tbody.innerHTML += ModelCargo(cargo);
        });
    })
        .catch(error => {
        console.error(error);
    });
};
displayDataCargo();
const ModelCargo = (cargo) => {
    return `
  <tr class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
     ${cargo.code}
  </th>
  <td class="px-6 py-4">
      ${cargo.from}
  </td>
  <td class="px-6 py-4">
      ${cargo.to}
  </td>
  <td class="px-6 py-4">
      ${cargo.dateDepart}
  </td>
  <td class="px-6 py-4">
      ${cargo.dateDepart}
  </td>
  <td class="px-6 py-4">
      ${cargo.dateDepart}
  </td>
  <td class="px-6 py-4">
      ${cargo.dateDepart}
  </td>
  <td class="px-6 py-4">
      <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
  </td>
</tr>
  `;
};
const save = (data) => {
    fetch("../php/data.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(data => {
        // Traitez les données renvoyées par PHP
        console.log(data);
    })
        .catch(error => {
        console.error(error);
    });
};
const formCargo = document.getElementById("formCargo");
const submitButton = formCargo.querySelector("button[type='button']");
submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    const formData = new FormData(formCargo);
    const data = Object.fromEntries(formData);
    console.log(data);
    //parcourir data
    let errors = 0;
    for (const [key, value] of Object.entries(data)) {
        console.log(key, value);
        if (key != "type" && key != "typeChargement" && value === "" || value === "0") {
            errors = 1;
            let error = "error-" + key;
            const errorElement = document.getElementById(error);
            console.log(errorElement);
            //  errorElement.classList.add("visible")
            //  errorElement.classList.remove("invisible")
        }
        else if (key != "type" && key != "typeChargement") {
            let error = "error-" + key;
            const errorElement = document.getElementById(error);
            errorElement.classList.add("invisible");
            errorElement.classList.remove("visible");
        }
    }
    if (errors === 0) {
        let newCos;
    }
});
const typeChargement = document.getElementById("typeChargement");
typeChargement.addEventListener("change", (event) => {
    const typepoids = document.getElementById("typepoids");
    const typecolis = document.getElementById("typecolis");
    console.log(typeChargement.value);
    if (typeChargement.value === "colis") {
        typepoids.classList.add("hidden");
        typecolis.classList.remove("hidden");
    }
    else if (typeChargement.value === "poids") {
        typepoids.classList.remove("hidden");
        typecolis.classList.add("hidden");
    }
});
