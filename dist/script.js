import { Air, Maritime, Road } from "./Model/cargo.js";
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
                type
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
        <tbody id="tableBodycargo">
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
    <div class="text-xs text-gray-700 uppercase  dark:text-gray-400 fixed bottom-0 flex justify-between w-full">
        <p></p>
         <nav aria-label="Page navigation example">
          <ul class="flex items-center -space-x-px h-8 text-sm">
            <li>
              <a href="#" id="first" class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                i<
              </a>
            </li>
            <li>
              <a href="#" id="prev" class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                <
              </a>
            </li>
            <li>
              <a href="#" id="next" class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                >
              </a>
            </li>
            <li>
              <a href="#" id="last" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                >i
              </a>
            </li>
          </ul>
          </nav>

        </div>
    </div>
    <!-- Détail Cargaison -->
    <div class="flex justify-center w-1/4 h-[200px] sm:hidden md:block bg-blue-300" bg-gray-100 id="detailcargo">
    <h2>Détail Cargaison</h2>
    </div>
    
   
`;
const displayDataCargo = (itemparpage, page) => {
    const tbody = document.querySelector('tbody');
    console.log(tbody);
    tbody.innerHTML = '';
    fetch("../php/data.php")
        .then(response => response.json())
        .then(data => {
        const slice = data.cargo.slice((page - 1) * itemparpage, page * itemparpage);
        slice.forEach((cargo) => {
            tbody.innerHTML += ModelCargo(cargo);
        });
    })
        .catch(error => {
        console.error(error);
    });
};
var itemparpage = 5;
var page = 1;
displayDataCargo(itemparpage, page);
const ModelCargo = (cargo) => {
    return `
  <tr class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
     ${cargo.code}
  </th>
  <th scope="row" class="px-6 py-4  text-gray-200 whitespace-nowrap dark:text-white">
     ${cargo._type}
  </th>
  <td class="px-6 py-4 text-gray-200">
      ${cargo._from}
  </td>
  <td class="px-6 py-4">
      ${cargo._to}
  </td>
  <td class="px-6 py-4">
      ${cargo._dateDepart}
  </td>
  <td class="px-6 py-4">
      ${cargo._dateArrive}
  </td>
  <td class="px-6 py-4">
      ${cargo._statusGlobal}
  </td>
  <td class="px-6 py-4">
      ${cargo._status}
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
const typeChargement = document.getElementById("typeChargement");
typeChargement.addEventListener("change", (event) => {
    const typepoids = document.getElementById("typepoids");
    const typecolis = document.getElementById("typecolis");
    if (typeChargement.value === "colis") {
        typepoids.classList.add("hidden");
        const weight = document.getElementById("weight");
        weight.disabled = true;
        typecolis.classList.remove("hidden");
        const nombreColis = document.getElementById("nombreColis");
        nombreColis.disabled = false;
    }
    else if (typeChargement.value === "poids") {
        typepoids.classList.remove("hidden");
        const weight = document.getElementById("weight");
        weight.disabled = false;
        typecolis.classList.add("hidden");
        const nombreColis = document.getElementById("nombreColis");
        nombreColis.disabled = true;
    }
});
const formCargo = document.getElementById("formCargo");
const submitButton = formCargo.querySelector("button[type='button']");
submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    const formData = new FormData(formCargo);
    const data = Object.fromEntries(formData);
    //parcourir data
    let errors = 0;
    console.log(data);
    for (const [key, value] of Object.entries(data)) {
        if (key != "type" && key != "typeChargement" && value === "" || value === "0") {
            errors = 1;
            let error = ".error-" + key;
            console.log(error);
            const errorElement = document.querySelector(error);
            errorElement.classList.add("visible");
            errorElement.classList.remove("invisible");
        }
        else if (key != "type" && key != "typeChargement") {
            let error = ".error-" + key;
            const errorElement = document.querySelector(error);
            errorElement.classList.add("invisible");
            errorElement.classList.remove("visible");
        }
    }
    // const d = new Date();
    // const a = new Maritime(0,"paris","dakar",d,d,0,0)
    //  console.log('maritime ', a)
    console.log("errors ", errors);
    if (errors === 0) {
        // Convertir les valeurs en chaînes de caractères
        const { type, distance, from, to, departure, weight, destination, weigth, typeChargement, nombreColis } = data;
        const distanceString = typeof distance === 'string' ? distance : String(distance);
        const fromString = typeof from === 'string' ? from : String(from);
        const toString = typeof to === 'string' ? to : String(to);
        const departureString = typeof departure === 'string' ? departure : String(departure).split("T")[0];
        const weightString = typeof weight === 'string' ? weight : String(weight);
        const destinationString = typeof destination === 'string' ? destination : String(destination).split("T")[0];
        const weigthString = typeof weigth === 'string' ? weigth : String(weigth);
        const typeChargementString = typeof typeChargement === 'string' ? typeChargement : String(typeChargement);
        const nombreColisString = typeof nombreColis === 'string' ? nombreColis : String(nombreColis);
        switch (data.type) {
            case "Maritime":
                // Créer un objet Maritime avec les valeurs converties
                const m = new Maritime(Number(distanceString), fromString, toString, departureString, destinationString, Number(weightString), Number(nombreColisString));
                //recuperer le data
                fetch("../php/data.php")
                    .then(response => response.json())
                    .then(data => {
                    console.log(data);
                    data.cargo.unshift(m);
                    save(data);
                    displayDataCargo(itemparpage, page);
                    // window.location.href = 'index.php';
                    //fermer le modal et effacer le formulaire
                    formCargo.reset();
                    //fermer le modal
                    //  const modal = document.querySelector(".modal");
                })
                    .catch(error => {
                    console.error(error);
                });
                break;
            case "Terrestre":
                const t = new Road(Number(distanceString), fromString, toString, departureString, destinationString, Number(weightString));
                fetch("../php/data.php")
                    .then(response => response.json())
                    .then(data => {
                    console.log(data);
                    data.cargo.unshift(t);
                    save(data);
                    displayDataCargo(itemparpage, page);
                    // window.location.href = 'index.php';
                    //fermer le modal et effacer le formulaire
                    formCargo.reset();
                    //fermer le modal
                })
                    .catch(error => {
                    console.error(error);
                });
                break;
            case "Aerienne":
                // Créer un objet Aérien avec les valeurs converties
                const a = new Air(Number(distanceString), fromString, toString, departureString, destinationString, Number(weightString));
                //recuperer le data
                fetch("../php/data.php")
                    .then(response => response.json())
                    .then(data => {
                    console.log(data);
                    data.cargo.unshift(a);
                    save(data);
                    displayDataCargo(itemparpage, page);
                    // window.location.href = 'index.php';
                    //fermer le modal et effacer le formulaire 
                    formCargo.reset();
                    //fermer le modal
                });
        }
    }
});
// const getDate = (D: Date) => {
//   const date = new Date(D);
//   const [day, month, year] = date.toISOString().substring(0, 10).split('-');
//   const formattedDepartureDate = `${day}-${month}-${year}`;
//   return new Date(formattedDepartureDate);
// }
//pagination
const next = document.querySelector("#next");
next.addEventListener("click", () => {
    page++;
    displayDataCargo(itemparpage, page);
});
const prev = document.querySelector("#prev");
prev.addEventListener("click", () => {
    page--;
    displayDataCargo(itemparpage, page);
});
const displayCargo = (data, itemsPerPage, page) => {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const tableData = data.slice(startIndex, endIndex);
};
const filter = document.querySelector("#search");
filter.addEventListener("input", (event) => {
    const value = event.target.value;
    const tbody = document.querySelector('tbody');
    //hidden les ligne non correspondant au filtre
    const rows = tbody.querySelectorAll('tr');
    rows.forEach((row) => {
        if (row.textContent?.toLowerCase().includes(value.toLowerCase())) {
            row.classList.remove('hidden');
        }
        else {
            row.classList.add('hidden');
        }
    });
});
const m = new Maritime(0, "paris", "dakar", "2022-01-01", "2022-01-01", 0, 0);
console.log(m);
const Idexist = (id, data) => {
    for (const [key, value] of Object.entries(data)) {
        if (value === id) {
            return true;
        }
    }
    return false;
};
