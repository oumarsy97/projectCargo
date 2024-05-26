import { Air, Maritime, Road } from "./Model/cargo.js";
const cargaison = document.querySelector("#cargaison") as HTMLInputElement;
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
  const tableBodycargo = document.querySelector("#tableBodycargo") as HTMLElement;
  const tbody = document.querySelector('tbody') as unknown as HTMLTableElement;
  console.log(tbody);
  tbody.innerHTML = '';

  fetch("../php/data.php")
    .then(response => response.json())
    .then(data => {
      console.log(data)
      
      data.cargo.forEach((cargo: any) => {
        tbody.innerHTML += ModelCargo(cargo);
        
      })
    })
    .catch(error => {
      console.error(error);
    });

};
displayDataCargo();

const ModelCargo = (cargo: any) => {
  return `
  <tr class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
     ${cargo.code}
  </th>
  <td class="px-6 py-4">
      ${cargo._from}
  </td>
  <td class="px-6 py-4">
      ${cargo._to}
  </td>
  <td class="px-6 py-4">
      ${cargo._dateDepart }
  </td>
  <td class="px-6 py-4">
      ${cargo._dateArrive }
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
}




const save = (data: any) => {
  
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
}

const typeChargement = document.getElementById("typeChargement") as HTMLSelectElement;

typeChargement.addEventListener("change", (event) => {
  const typepoids = document.getElementById("typepoids") as HTMLInputElement;
  const typecolis = document.getElementById("typecolis") as HTMLInputElement;
  
 if(typeChargement.value === "colis") {
   typepoids.classList.add("hidden");
   const weight = document.getElementById("weight") as HTMLInputElement;
   weight.disabled = true;
 
   typecolis.classList.remove("hidden");
  const nombreColis = document.getElementById("nombreColis") as HTMLInputElement;
  nombreColis.disabled = false;
 }else if(typeChargement.value === "poids") {
   typepoids.classList.remove("hidden");
   const weight = document.getElementById("weight") as HTMLInputElement;
   weight.disabled = false;

   typecolis.classList.add("hidden");
  const nombreColis = document.getElementById("nombreColis") as HTMLInputElement;
  nombreColis.disabled = true;

 }

});


const formCargo = document.getElementById("formCargo") as HTMLFormElement;
const submitButton = formCargo.querySelector("button[type='button']") as HTMLButtonElement;

submitButton.addEventListener("click", (event) => {
  event.preventDefault();
 
  const formData = new FormData(formCargo);
  const data = Object.fromEntries(formData);
  //parcourir data
  let errors = 0
  console.log(data);


for(const [key, value] of Object.entries(data)) {
   if(key!="type" && key != "typeChargement" && value === "" || value === "0") {
       errors = 1
       let error = ".error-"+key 
       console.log(error)
       const errorElement =  document.querySelector(error) as HTMLElement
     errorElement.classList.add("visible")
     errorElement.classList.remove("invisible")
   }else if(key!="type" && key != "typeChargement") {
       let error = ".error-"+key 
       const errorElement =  document.querySelector(error) as HTMLElement
       errorElement.classList.add("invisible")
       errorElement.classList.remove("visible")
   }
  }
  // const d = new Date();
  // const a = new Maritime(0,"paris","dakar",d,d,0,0)
  //  console.log('maritime ', a)
console.log("errors ",errors)
  if(errors === 0) {
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

   switch(data.type) {
     case "Maritime":
     // Créer un objet Maritime avec les valeurs converties
const m = new Maritime(
  Number(distanceString),
  fromString,
  toString,
  departureString ,
  destinationString,
  Number(weightString),
  Number(nombreColisString),
  
);
       //recuperer le data
       fetch("../php/data.php")
       .then(response => response.json())
       .then(data => {
         console.log(data)
         data.cargo.push(m);
         save(data);
         displayDataCargo();
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
       const t = new Road(
         Number(distanceString),
         fromString,
         toString,
         departureString,
         destinationString,
         Number(weightString),
       );
      
       fetch("../php/data.php")
       .then(response => response.json())
       .then(data => {
         console.log(data)
         data.cargo.push(t);
         save(data);
         displayDataCargo();
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
       const a = new Air(
         Number(distanceString),
         fromString,
         toString,
         departureString,
         destinationString,
         Number(weightString),
       );
       //recuperer le data
       fetch("../php/data.php")
       .then(response => response.json())
       .then(data => {
         console.log(data)
         data.cargo.push(a);
         save(data);
         displayDataCargo();
         // window.location.href = 'index.php';
         //fermer le modal et effacer le formulaire 
         formCargo.reset();
         //fermer le modal
       })
   }
  }


});

// const instance = (cargo: Cargo) => {
  
// }
// const getDate = (D: Date) => {
//   const date = new Date(D);
//   const [day, month, year] = date.toISOString().substring(0, 10).split('-');
//   const formattedDepartureDate = `${day}-${month}-${year}`;
//   return new Date(formattedDepartureDate);
// }

