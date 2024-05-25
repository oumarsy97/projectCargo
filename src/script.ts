

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
    <!-- You can open the modal using ID.showModal() method -->
<dialog id="my_modal_3" class="modal h-auto w-2/4">
  <div class="modal-box h-[500px]">
    <form method="dialog">
      <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    ${formulaire()}
  </div>
</dialog>
   
`;


const displayDataCargo = () => {
  const tableBodycargo = document.querySelector("#tableBodycargo") as HTMLElement;
  const tbody = document.querySelector('tbody') as unknown as HTMLTableElement;
  console.log(tbody);
  tbody.innerHTML = '';

  fetch("../php/data.php")
    .then(response => response.json())
    .then(data => {
      
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



function formulaire() {
  return `
  <div class="container mx-auto p-4 form-control">
  <div>
   <h2 class="text-2xl font-bold mb-4 text-center">Ajout Cargaison</h2>
   </div>
  <form class="form-control" id="formCargo">
  <div class="mb-4 grid grid-cols-2 gap-4">
    <div>
      <label for="from" class="block text-gray-700 text-sm font-bold mb-2">Depart</label>
      <input type="text" id="from" name="from" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
    </div>
    <div>
      <label for="to" class="block text-gray-700 text-sm font-bold mb-2">Arrivée</label>
      <input type="text" id="to" name="to" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
    </div>
    
     <div>
       <label for="statusGlobal" class="block text-gray-700 text-sm font-bold mb-2">Type de Chargement</label>
       <select id="statusGlobal" name="statusGlobal" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
         <option value="ferme">poids</option>
         <option value="ouvert">Nombre de Colis</option>
       </select>
     </div>
     <div>
       <label for="weight" class="block text-gray-700 text-sm font-bold mb-2">Poids</label>
       <input type="number" id="weight" name="weight" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
     </div>
    <div>
      <label for="departure" class="block text-gray-700 text-sm font-bold mb-2">Date Départ</label>
      <input type="date" id="departure" name="departure" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
    </div>
    <div>
      <label for="destination" class="block text-gray-700 text-sm font-bold mb-2">Date Destination</label>
      <input type="date" id="destination" name="destination" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
    </div>
    <div>
       <label for="distance" class="block text-gray-700 text-sm font-bold mb-2">Distance</label>
       <input type="number" disabled desable id="distance" name="distance" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
     </div>
     </div>
     <div class="flex items-center justify-center w-full">
     <button type="button" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">Ajouter</button>
     </div>
     </form>
   
 `;

}

const formCargo = document.getElementById("formCargo") as HTMLFormElement;
const submitButton = formCargo.querySelector("button[type='button']") as HTMLButtonElement;

submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  const formData = new FormData(formCargo);
  const data = Object.fromEntries(formData);
console.log(data);
  // Your code to handle the form submission goes here
  let errors = 0
  for(const [key, value] of Object.entries(formData)) {
   if(key!="type" && value === "" || value === "0") {
       errors = 1
       let error = key + "-error"
     const errorElement =  document.getElementById(error) as HTMLFormElement
     errorElement.classList.add("visible")
     errorElement.classList.remove("invisible")
   }else if(key!="type") {
       let error = key + "-error"
       const errorElement =  document.getElementById(error) as HTMLFormElement
       errorElement.classList.add("invisible")
       errorElement.classList.remove("visible")
   }
  }

  if(errors === 0) {
   let newCos;
  }

});




