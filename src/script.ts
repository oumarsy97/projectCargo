import { Air, Maritime, Road,Cargo, Product, Food, Material, Unbreakable, Chemical, Fragile,owner,ToxicityRange, EtatGlobal } from "./Model/cargo.js";
// const air = new Air(
//   10,
//   "Tunis",
//   "Sousse",
//   "10/10/2022",
//   "10/10/2022",undefined,
//  100,


// )
// const client:owner = {name:"SY",username:"SY",email:"SY",address:"SY",phone:"tunis"};
// //instancier un nouveau objet
// const pro = new Food(
//   "Pomme",
//   10,
//   client,
//   client
// )

const GetData = async (): Promise<Icargo[]> => {
  const response = await fetch("../php/data.php");
  const data = await response.json();
  return data.cargo;
}

  const dt = await GetData();
  console.log(dt);
  var Cargos:Cargo[] = [];
dt.forEach((cargo: any) => {
 switch(cargo._type) {
   case "Maritime":
     let m = new Maritime(
       cargo._distance,
       cargo._from,
       cargo._to,
       cargo._dateDepart,
       cargo._dateArrive,
       cargo._weigth,
       cargo._nombreColis,
       cargo._statusGlobal,
       cargo._status
     )
     m.Code = parseInt(cargo.code);
     m.products =<Food[]|Unbreakable[]|Chemical[]> cargo.products;
     Cargos.push(m);
     break;
   case "Terrestre":
     let t = new Road(
       cargo._distance,
       cargo._from,
       cargo._to,
       cargo._dateDepart,
       cargo._dateArrive,
       cargo._weigth,
       cargo._nombreColis,
       cargo._statusGlobal,
       cargo._status
     )
     t.Code = parseInt(cargo.code);
     t.products =<Food[]|Unbreakable[]> cargo.products;
     Cargos.push(t);
     break;
    case "Aerienne":
      let a = new Road(
        cargo._distance,
        cargo._from,
        cargo._to,
        cargo._dateDepart,
        cargo._dateArrive,
        cargo._weigth,
        cargo._nombreColis,
        cargo._statusGlobal,
        cargo._status
      )
      a.Code = parseInt(cargo.code);
      a.products =<Food[]|Unbreakable[]> cargo.products;
      Cargos.push(a);
      break;

 }
})
console.log(Cargos);

//  air.addProduct(pro)
// console.log(air)
// console.log(air.calculateTotal());  
// // import Swal from 'sweetalert2'
// Swal.fire('Hello world!')
const cargaison = document.querySelector("#cargaison") as HTMLInputElement;
interface Cargptype {
  _departure: string;
  _destination: string;
  _weight: number;
  _type: string;
  _distance: number;
  _nombreColis?: number;
  _status: string;
  _statusGlobal: string;
  _from: string;
  _to: string;
}
const displayDataCargo  = (itemparpage:number,page:number):void => {
  const tbody = document.querySelector('tbody') as unknown as HTMLTableElement;

  tbody.innerHTML = '';

  fetch("../php/data.php")
    .then(response => response.json())
    .then(data => {
      const pagination: HTMLButtonElement = document.getElementById("pagination") as HTMLButtonElement;
      const tp = Math.ceil(data.cargo.length/itemparpage);
      pagination.innerHTML = '';
      for (let i = 1; i <= tp; i++) {
        pagination.innerHTML += `
        <li>
        <a href="#" id="page-${i}" class="flex -mt-4 items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${i == page ? 'bg-blue-500 text-black' : ''}">
          ${i}
        </a>
      </li>`;
      }
      const elements = document.querySelectorAll('[id^="page-"]');
const ids = Array.from(elements).map(element => element.id);
ids.forEach(id => {
  const element = document.getElementById(id);
  if (element) {
    element.addEventListener("click", () => {
      var page = parseInt(id.replace("page-", ""));
      displayDataCargo(itemparpage,page);
    });
  }
})

     const slice = data.cargo.slice((page-1)*itemparpage,page*itemparpage);
      slice.forEach((cargo: any) => {
        tbody.innerHTML += ModelCargo(cargo);
        
      })
    })
    .catch(error => {
      console.error(error);
    });

};
var itemparpage = 3;
var page = 1;
// displayDataCargo(itemparpage,page);

const ModelCargo = (cargo: any) => {
  return `
  <tr class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
     ${cargo.code}
  </th>
  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
     ${cargo._type}
  </th>
  <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
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
  <td class="px-6 py-4 flex items-center justify-center">
      <img src=${  cargo._statusGlobal == 'ouvert' ? 'https://cdn-icons-png.flaticon.com/128/9069/9069952.png' : 'https://cdn-icons-png.flaticon.com/128/4503/4503969.png' } alt="" class="w-5 h-5">
  </td>
  <td class="px-6 py-4 ${cargo._status == 'en attente' ? 'text-green-500' :cargo._status == 'en attente'  ? 'text-yellow-500' : 'text-red-500'}">
      ${cargo._status}
  </td>
  <td class="px-6 py-4 flex items-center justify-center">
      <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline"><i class="fa-solid fa-circle-info"></i></a>
  </td>
</tr>
  `;
}


const elements = document.querySelectorAll('[id^="page-"]');
const ids = Array.from(elements).map(element => element.id);
ids.forEach(id => {
  const element = document.getElementById(id);
  if (element) {
    element.addEventListener("click", () => {
      var page = parseInt(id.replace("page-", ""));
      displayDataCargo(itemparpage,page);
    });
  }
})

const save = (data: Cargo[]) => {
  
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
  let errors: number = 0
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


if(key === "departure" && typeof value === "string" && value !== "" && !compareDate(new Date(value))) {
 
  errors = 1;
  const errorElement = document.querySelector(".error-departure") as HTMLElement;
  errorElement.classList.add("visible");
  errorElement.classList.remove("invisible");
  errorElement.innerHTML = "Date invalide , veuillez choisir une date future";
}else {
  errors = 0
  const errorElement = document.querySelector(".error-departure") as HTMLElement;
  errorElement.classList.remove("visible");
  errorElement.classList.add("invisible");

}

if(key === "destination" && typeof value === "string" && value !== "" && !compareDate(new Date(value))) {
  errors = 1;
  const errorElement = document.querySelector(".error-destination") as HTMLElement;
  errorElement.classList.add("visible");
  errorElement.classList.remove("invisible");
  errorElement.innerHTML = "Date invalide , veuillez choisir une date future";
}else {
  errors = 0
  const errorElement = document.querySelector(".error-destination") as HTMLElement;
  errorElement.classList.remove("visible");
  errorElement.classList.add("invisible");
}

  }
 

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

// if (!(departureString !== "" && destinationString !== "" && validerDateentre(new Date(departureString), new Date(destinationString)))) {
//   errors = 1;
//   alert("la date de depart doit etre inferieur a la date de destination");
// }else{
//   errors = 0
// }
console.log(errors)
  if(errors === 0) {
   switch(type) {
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
         data.cargo.unshift(m);
         save(data);
         displayDataCargo(itemparpage,page);
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
         
         data.cargo.unshift(t);
         save(data);
         displayDataCargo(itemparpage,page);
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
         data.cargo.unshift(a);
         save(data);
         displayDataCargo(itemparpage,page);
         // window.location.href = 'index.php';
         //fermer le modal et effacer le formulaire 
         formCargo.reset();
         //fermer le modal
       })
   }
  }


});


// const next = document.querySelector("#next") as HTMLButtonElement;
// next.addEventListener("click", () => {
//   page++;
//   displayDataCargo(itemparpage,page);
// });

// const prev = document.querySelector("#prev") as HTMLButtonElement;
// prev.addEventListener("click", () => {
//   page--;
//   displayDataCargo(itemparpage,page);
// });



const filter = document.querySelector("#search") as HTMLInputElement;
filter.addEventListener("input", (event) => {
  const value = (event.target as HTMLInputElement).value;
  const tbody = document.querySelector('tbody') as unknown as HTMLTableElement;
  //hidden les ligne non correspondant au filtre
  const rows = tbody.querySelectorAll('tr');
  rows.forEach((row) => {
   
      if (row.textContent?.toLowerCase().includes(value.toLowerCase())) {
        row.classList.remove('hidden');
      } else {
        row.classList.add('hidden');
      }
    });

  // fetch("../php/data.php")
  // .then(response => response.json())
  // .then(data => {
  //   tbody.innerHTML = '';
  //   data.cargo.forEach((cargo: any) => {
  //     if (cargo._departure.toLowerCase().includes(value.toLowerCase()) || cargo._destination.toLowerCase().includes(value.toLowerCase())|| cargo._type.toLowerCase().includes(value.toLowerCase()) || cargo._status.toLowerCase().includes(value.toLowerCase()) || cargo._statusGlobal.toLowerCase().includes(value.toLowerCase())|| cargo._date.toLowerCase().includes(value.toLowerCase())) {
  //       tbody.innerHTML += `
  //       <tr>
  //         <td>${cargo._departure}</td>
  //         <td>${cargo._destination}</td>
  //         <td>${cargo._weight}</td>
  //         <td>${cargo._type}</td>
  //         <td>${cargo._distance}</td>
  //         <td>${cargo._date}</td>
  //         <td>${cargo._status}</td>
  //         <td>${cargo._statusGlobal}</td>
  //       </tr>
  //       `;
  //     }
  //   })
    
  // });

});

  // const m = new Maritime(0,"paris","dakar","2022-01-01","2022-01-01",0,0)
  // console.log(m)



  const typecargo: HTMLSelectElement = document.getElementById("typecargo") as HTMLSelectElement;
  typecargo?.addEventListener("change", (event) => {
    fetch("../php/data.php")
    .then(response => response.json())
    .then(data => {
    const slice =  data.cargo.filter((cargo: any) => cargo._type === typecargo.value);
    const pagination: HTMLButtonElement = document.getElementById("pagination") as HTMLButtonElement;
    const tp = Math.ceil(slice.length/itemparpage);
      pagination.innerHTML = '';
      for (let i = 1; i <= tp; i++) {
        pagination.innerHTML += `
        <li>
        <a href="#" id="pagetype-${i}" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${i == page ? 'bg-red-500 text-white' : ''}">
          ${i}
        </a>
      </li>`;
      }
      const tbody = document.querySelector('tbody') as unknown as HTMLTableElement;
      tbody.innerHTML = '';

      const elements = document.querySelectorAll('[id^="pagetype-"]');
      const ids = Array.from(elements).map(element => element.id);
      ids.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
          element.addEventListener("click", () => {
             page = parseInt(id.replace("pagetype-", ""));
            const slice3 =  slice.slice((page-1)*itemparpage,page*itemparpage);
      tbody.innerHTML = '';
        slice3.forEach((cargo: any) => {
          tbody.innerHTML += ModelCargo(cargo);
        })

          });
        }
      })
           const slice2 = slice.slice((page-1)*itemparpage,page*itemparpage);
            slice2.forEach((cargo: any) => {
              tbody.innerHTML += ModelCargo(cargo);
              
            })
          })
          .catch(error => {
            console.error(error);
          });

  });

  function compareDate(date: Date): boolean {
    const today = new Date();
    return date.getFullYear() >= today.getFullYear() &&
           date.getMonth() >= today.getMonth() &&
           date.getDate() >= today.getDate();
  }
 

  const validerDateentre = (dateDepart : Date, dateArrive: Date) => {
    return dateArrive.getFullYear() >= dateDepart.getFullYear() && 
           dateArrive.getMonth() >= dateDepart.getMonth() &&
           dateArrive.getDate() >= dateDepart.getDate();
  }

  const etat: HTMLSelectElement = document.getElementById("etat") as HTMLSelectElement;
  etat?.addEventListener("change", (event) => {

      const tbody = document.querySelector('tbody') as unknown as HTMLTableElement;
      tbody.innerHTML = '';
      fetch("../php/data.php")
      .then(response => response.json())
      .then(data => {
        const slice =  data.cargo.filter((cargo: any) => cargo._statusGlobal === etat.value);
        const pagination: HTMLButtonElement = document.getElementById("pagination") as HTMLButtonElement;
        const slice2 = slice.slice((page-1)*itemparpage,page*itemparpage);
        slice2.forEach((cargo: any) => {
          tbody.innerHTML += ModelCargo(cargo);

        })

        const tp = Math.ceil(slice.length/itemparpage);
        pagination.innerHTML = '';
        for (let i = 1; i <= tp; i++) {
          pagination.innerHTML += `
          <li>
          <a href="#" id="pagetype-${i}" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${i == page ? 'bg-red-500 text-white' : ''}">
          ${i}
        </a>
      </li>`;
        }
        const elements = document.querySelectorAll('[id^="pagetype-"]');
        const ids = Array.from(elements).map(element => element.id);
        ids.forEach(id => {
          const element = document.getElementById(id);
          if (element) {
            element.addEventListener("click", () => {
              page = parseInt(id.replace("pagetype-", ""));
              const slice2 =  slice.slice((page-1)*itemparpage,page*itemparpage);
              tbody.innerHTML = '';
              slice2.forEach((cargo: any) => {
                tbody.innerHTML += ModelCargo(cargo);
              })
            });
          }
        })
           
      })
    

          
     
  })

  const searchMultipleInput: HTMLInputElement = document.querySelector("#searchmultipleinput") as HTMLInputElement;
  const filtersContainer: HTMLElement = document.querySelector("#filtersContainer") as HTMLElement;
  const filters: string[] = [];
  
  searchMultipleInput?.addEventListener("keyup", (event) => {
    const value = searchMultipleInput.value.trim();
  
    if (event.key === "Enter" && value !== "") {
      const filterElement = document.createElement("span");
      filterElement.classList.add("px-4", "py-2", "bg-white", "text-gray-700", "rounded", "border", "flex", "items-center", "gap-2");
      filterElement.textContent = value;
  
      const removeBtn = document.createElement("button");
      removeBtn.innerHTML = "&times;";
      removeBtn.classList.add("ml-2", "text-red-500", "font-bold");
      removeBtn?.addEventListener("click", () => {
        filterElement.remove();
        filters.splice(filters.indexOf(value), 1);
        filterData();
      });
  
      filterElement.appendChild(removeBtn);
      filtersContainer.appendChild(filterElement);
      filters.push(value);
      filterData();
      searchMultipleInput.value = "";
    }

    console.log(filters);
  });
  function filterData() {
    fetch("../php/data.php")
      .then(response => response.json())
      .then(data => {
        var filteredData: Cargptype[] = [];
        if(filters.length > 0) {
           filteredData = data.cargo.filter((cargo: Cargptype) =>
            cargo._from === filters[0] || cargo._to === filters[0]
           
          );
          
        }else {
           filteredData = data.cargo;
        }
  
        const tbody = document.querySelector('tbody') as unknown as HTMLTableElement;
        tbody.innerHTML = '';
  
        const slice2 = filteredData.slice((page - 1) * itemparpage, page * itemparpage);
        slice2.forEach((cargo: Cargptype) => {
          tbody.innerHTML += ModelCargo(cargo);
        });
        const pagination: HTMLButtonElement = document.getElementById("pagination") as HTMLButtonElement;
        const tp = Math.ceil(filteredData.length/itemparpage);
        pagination.innerHTML = '';
        for (let i = 1; i <= tp; i++) {
          pagination.innerHTML += `
          <li>
          <a href="#" id="pagetype-${i}" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${i == page ? 'bg-red-500 text-white' : ''}">
          ${i}
        </a>
      </li>`;
        }
        const elements = document.querySelectorAll('[id^="pagetype-"]');
        const ids = Array.from(elements).map(element => element.id);
        ids.forEach(id => {
          const element = document.getElementById(id);
          if (element) {
            element.addEventListener("click", () => {
              page = parseInt(id.replace("pagetype-", ""));
              const slice2 =  filteredData.slice((page-1)*itemparpage,page*itemparpage);
              tbody.innerHTML = '';
              slice2.forEach((cargo: Cargptype) => {
                tbody.innerHTML += ModelCargo(cargo);
              })
            });
          }
        })
           
      });
  }


  // function updateActiveFilters() {
  //   activeFiltersContainer.innerHTML = "";

  //   Object.keys(searchInputsmores).forEach(key => {
  //     const input = searchInputsmores[key as keyof typeof searchInputsmores];
  //     if (input.value) {
  //       const filterElement = document.createElement("span");
  //       filterElement.classList.add("px-4", "py-2", "bg-white", "text-gray-700",  "rounded", "flex", "items-center", "gap-2");
  //       filterElement.textContent = ${input.placeholder}: ${input.value};
  //       const removeBtn = document.createElement("button");
  //       removeBtn.innerHTML = "&times;";
  //       removeBtn.classList.add("ml-2", "text-red-500", "font-bold");
  //       removeBtn.addEventListener("click", () => {
  //         input.value = "";
  //         updateActiveFilters();
  //         afficherCargaisons();
  //       });
  //       filterElement.appendChild(removeBtn);
  //       activeFiltersContainer.appendChild(filterElement);
  //     }
  //   });
  // }

//******************  produit**************************** */
const infoClient: HTMLFormElement = document.getElementById("infoClient") as HTMLFormElement;
infoClient?.addEventListener("submit", (event) => {
  event.preventDefault();
  
});

const typeproduit: HTMLSelectElement = document.getElementById("typeproduit") as HTMLSelectElement;
typeproduit?.addEventListener("change", (event) => {
  if(typeproduit.value === "chimique") {
    const divDegre = document.getElementById("divDegre") as HTMLInputElement;
    const deges = document.getElementById("deges") as HTMLInputElement;
    divDegre.classList.remove("hidden");
    deges.disabled = false;
  
  }else {
    const divDegre = document.getElementById("divDegre") as HTMLInputElement;
    divDegre.classList.add("hidden");
    const deges = document.getElementById("deges") as HTMLInputElement;
    deges.disabled = true;
  }
})


const plusproduit: HTMLElement = document.getElementById("plusproduit") as HTMLButtonElement;
var p = 1;
// plusproduit?.addEventListener("click", (event) => { 
//   const frm: HTMLElement = document.createElement("div");
  
  //const listformproduit: HTMLElement = document.getElementById("listformproduit") as HTMLFormElement;
  //frm.innerHTML = modelprod(p);
  //p++;
  //listformproduit.appendChild(frm);

// });  

interface Icargo {
  code: string;
  _type: string;
  _distance: number;
  _from: string;
  _to: string;
  _dateDepart: string;
  _dateArrive: string;
  _weigth?: number;
  _nombreColis?: number;
  _statusGlobal: string;
  _status: string;
  products: (Food[]|Unbreakable[]|Chemical[]);
}
// const data:Icargo[] = await GetData();
// console.log(data);
// const mesCargos =   (donnes:Cargo[]) : Icargo[] => {
//   const donn:Icargo[] = [];
//   donnes.forEach((cargo: any) => {
//   switch(cargo._type) {
//     case "Maritime":
//       console.log('maritime',cargo)
//       let m = new Maritime(
//         cargo._distance,
//         cargo._from,
//         cargo._to,
//         cargo._dateDepart,
//         cargo._dateArrive,
//         cargo._weigth,
//         cargo._nombreColis,
//         cargo._statusGlobal,
//         cargo._status
//       )
//       m.Code = parseInt(cargo.code);
//       m.products =<Food[]|Unbreakable[]|Chemical[]> cargo.products;
//       donn.push(m);
    
//       break;
//     case "Terrestre":
//       let t = new Road(
//         cargo._distance,
//         cargo._from,
//         cargo._to,
//         cargo._dateDepart,
//         cargo._dateArrive,
//         cargo._weigth,
//         cargo._nombreColis,
//         cargo._statusGlobal,
//         cargo._status
//       )
//       t.Code = parseInt(cargo.code);
//       t.products = <Food[]|Material[]> cargo.products;
//       donn.push(t);
//       break;
//     case "Aerienne":
//       let a = new Air(
//         cargo._distance,
//         cargo._from,
//         cargo._to,
//         cargo._dateDepart,
//         cargo._dateArrive,
//         cargo._weigth,
//         cargo._nombreColis,
//         cargo._statusGlobal,
//         cargo._status
//       )
//       a.Code = parseInt(cargo.code);
//       a.products = <Food[]|Material[]> cargo.products;
//       donn.push(a);
//       break;
//     default:
//       return
//   }
  
// })
// return donn;
// }
// const selectCargos = mesCargos(data).filter((cargo) => cargo.statusGlobal === "ouvert");
// console.log(selectCargos.length);

const formProduit = document.getElementById("formProduit") as HTMLFormElement;
const addproduit: HTMLElement = document.getElementById("addproduit") as HTMLButtonElement;
addproduit?.addEventListener("click", (event) => {
  event.preventDefault();
  const data: FormData = new FormData(formProduit);
  const donnees = Object.fromEntries(data.entries());
  console.log(donnees);
  const client:owner = {name:(donnees.nom as string),username:(donnees.prenom as string),email:(donnees.email as string),address:(donnees.adressClient as string),phone:(donnees.telephone as string)};
  const destinataire:owner = {name:(donnees.nomDestinataire as string),username:(donnees.prenomDestinataire as string),email:(donnees.emailDestinataire as string),address:(donnees.addressDestinataire as string),phone:(donnees.telephoneDestinataire as string)};
  let prod:Product
  switch(typeproduit.value) {
    case "food":
      prod  = new Food((donnees.libelle as string),parseInt(donnees.poids as string),client,destinataire);
      break;
    case "chimique":
      prod = new Chemical((donnees.libelle as string),parseInt(donnees.poids as string),client,destinataire,(donnees.deges as unknown as ToxicityRange ));
      break;
    case "incassable":
      prod = new Unbreakable((donnees.libelle as string),parseInt(donnees.poids as string),client,destinataire);
      break;
    case "fragile":
      prod = new Fragile((donnees.libelle as string),parseInt(donnees.poids as string),client,destinataire);
      break;
  }
  //choisir la cargo
  const choiceCargo = document.getElementById("choiceCargo") as HTMLSelectElement;
  choiceCargo.classList.remove("hidden");
  const selectcargaison: HTMLSelectElement = document.getElementById("selectcargaison") as HTMLSelectElement;
  selectcargaison.innerHTML = "";
  // Créer un élément li pour la nouvelle cargaison
  Cargos.forEach((cargo) => {
let modeL = modelCargo(cargo);
  selectcargaison.innerHTML += modeL;

});

const codecherch = document.getElementById("codecherch") as HTMLInputElement;
codecherch.addEventListener("input", (event) => {
  let code = codecherch.value;
  const selectcargaison: HTMLSelectElement = document.getElementById("selectcargaison") as HTMLSelectElement;
  if(code==""){
    Cargos.filter((cargo) => cargo.statusGlobal == "ouvert").forEach((cargo) => {
      let modeL = modelCargo(cargo);
        selectcargaison.innerHTML += modeL;
      });
    
  }else{
  selectcargaison.innerHTML = "";
  Cargos.forEach((cargo) => {
    if (cargo.Code.toString().includes(code.toLowerCase())) {
      let modeL = modelCargo(cargo);
        selectcargaison.innerHTML += modeL;
    }
        
  })
}



  
})
formProduit.reset();
formProduit.classList.add("hidden");
const ccargo = document.getElementById("ccargo") as HTMLFormElement;
ccargo.classList.remove("hidden");
const adcargo = document.getElementById("adcargo") as HTMLButtonElement;
var cargochoisi :Cargo;
adcargo.addEventListener("click", (event) => {
  event.preventDefault();
  const cargo:HTMLInputElement = document.querySelector("input[type='radio']:checked") as HTMLInputElement;
  const mycode:number = parseInt(cargo.value);

  if(mycode !== null){
  console.log('mycode',mycode);
  const nexCargo :Cargo[]=[];
 
  Cargos.forEach((cargo) => {
    if(cargo.Code == mycode){
      cargo.addProduct(prod);
      console.log(cargo);
      cargochoisi = cargo;
      
    }
    nexCargo.push(cargo);

  })
  //copier la liste des cargaison
  Cargos = nexCargo;
  fetch("../php/data.php")
  .then(response => response.json())
  .then(data => {
    data.cargo = nexCargo;
    save(data);
  })
  .catch(error => console.error(error));
  }else{
    alert("Veuillez choisir une cargaison");
  }
//detailler la cargaison
console.log('produit',cargochoisi)
  ccargo.classList.add("hidden");
  codecherch.value = "";
  const sectiondetails = document.getElementById("sectiondetails") as HTMLFormElement;
  const sectionproduit = document.getElementById("sectionproduit") as HTMLFormElement;
  sectionproduit.classList.add("hidden");
  sectiondetails.classList.remove("hidden");
  sectiondetails.classList.add("flex");
  sectiondetails.innerHTML ='';
  sectiondetails.innerHTML =modelDetail(Cargos[0]);
  const listeproduits = document.getElementById("listeproduits") as HTMLFormElement;
  listeproduits.innerHTML = "";
  cargochoisi.getProducts.forEach((produit) => {
    listeproduits.innerHTML += modelListeProduit(produit);
  })
  
}

);
});






const modelCargo = (cargo: Cargo) => {
  return `
    <tr>
      <td class="px-4 py-2 text-gray-800">${cargo.Code}</td>
      <td class="px-4 py-2 text-gray-800">${cargo.type}</td>
      <td class="px-4 py-2 text-gray-800">${cargo.weigth === null || typeof cargo.weigth === 'undefined' ? '_' : (cargo.weigth - cargo.claculPoids()) + '/' + cargo.weigth}</td>
      <td class="px-4 py-2 text-gray-800">${cargo.nombreColis === null || typeof cargo.nombreColis === 'undefined' ? '_' : (cargo.nombreColis - cargo.getNbrProduct()) + '/' + cargo.nombreColis}</td>
      <td class="px-4 py-2 text-gray-800">${cargo.from}</td>
      <td class="px-4 py-2 text-gray-800">${cargo.to}</td>
      <td class="px-4 py-2 text-right">
        <input type="radio" name="cargaison" value="${cargo.Code}" id="cargaison-${cargo.Code}" class="form-radio text-blue-500">
        <label for="cargaison${cargo.Code}" class="ml-2 text-gray-700">Sélectionner</label>
      </td>
    </tr>
  `;
};


const modelprod = (id: number) => {
  return `first
  <form action="" method="post" id="infoProduit${id}" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h2 class="text-xl font-bold mb-4 flex items-center">
                <i class="fa-solid fa-circle-info text-blue-500 mr-2"></i> Information du produit ${id + 1}
            </h2>
            <div class="flex gap-4">
                <div>
                    <label for="typeproduit" class="block text-gray-700 text-sm font-bold mb-2">Type de produit</label>
                    <select name="typeproduit" id="typeproduit" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                        <option value="food">Alimentaire</option>
                        <option value="chimique">Chimique</option>
                        <option value="incassable">Incassable</option>
                        <option value="fragile">Fragile</option>
                    </select>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label for="poids" class="block text-gray-700 text-sm font-bold mb-2">Poids en Kg</label>
                        <input type="number" min="1" name="poids" id="poids" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                    </div>
                    <div id="divDegre" class="hidden">
                        <label for="deges" class="block text-gray-700 text-sm font-bold mb-2">Degré de toxicité</label>
                        <input type="number" min="1" max="10" name="deges" id="deges" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                    </div>
                </div>
                <div>
                    <label for="selectcargaison" class="block text-gray-700 text-sm font-bold mb-2">Cargaison</label>
                    <select name="selectcargaison" id="selectcargaison" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                        <option value="ferme">Fermé</option>
                        <option value="ouvert">Ouvert</option>
                    </select>
                </div>
            </div>
            
        </form>
  `
}
const modelDetail = (cargo: Cargo) => {
  return `<div class="w-full">
  <div class="lg:col-span-2">
    <div class="bg-white rounded-2xl shadow-xl overflow-hidden">
      <div class="flex items-center justify-between px-8 py-6 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
        <div>
          <h2 class="text-2xl font-bold">#${cargo.Code}</h2>
        </div>
        <select id="statusSelect" class="bg-gradient-to-r from-blue-500 to-indigo-600 bg-opacity-20 text-blue-500 px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-white">
          <option value="ouvert" ${cargo.statusGlobal === 'ouvert' ? 'selected' : ''}>Ouvert</option>
          <option value="ferme" ${cargo.statusGlobal === 'ferme' ? 'selected' : ''} >Fermé</option>
        </select>
      </div>
      <div class="p-8">
        <div class="flex items-center space-x-6 text-gray-700">
          <div class="flex-1">
            <p class="text-sm uppercase tracking-wide text-gray-500">Départ</p>
            <p class="mt-1 font-semibold"><i class="fas fa-map-marker-alt mr-2"></i>${cargo.from}</p>
            <p class="mt-1 font-semibold"><i class="fas fa-clock mr-2"></i>${cargo.dateDepart}</p>
          </div>
          <div class="flex-1">
            <p class="text-sm uppercase tracking-wide text-gray-500">Arrivée</p>
            <p class="mt-1 font-semibold"><i class="fas fa-map-marker-alt mr-2"></i>${cargo.to}</p>
            <p class="mt-1 font-semibold"><i class="fas fa-clock mr-2"></i>31/03/2022</p>
          </div>
          <div class="flex-1">
            <p class="text-sm uppercase tracking-wide text-gray-500">Distance</p>
            <p class="mt-1 font-semibold">${cargo.distance} km</p>
          </div>
          <div class="flex-1">
            <p class="text-sm uppercase tracking-wide text-gray-500">statut</p>
            <span class="px-3 py-1 bg-green-500 text-white rounded-full text-sm font-medium ${cargo.statusGlobal === 'ouvert' ? 'bg-green-500' : 'bg-red-500'}">${cargo.statusGlobal}</span>
          </div>
          <div class="flex-1">
            <p class="text-sm uppercase tracking-wide text-gray-500">Etat</p>
            <p class="mt-1 font-semibold">${cargo.status}</p>
          </div>
          <div class="flex-1">
            <p class="text-sm uppercase tracking-wide text-gray-500">Action</p>
            <select name="statut" id="statut" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5">
            <option value="en_attente" ${cargo.statusGlobal === ('en attente' as EtatGlobal) ? 'selected' : ''}>En Attente</option>  
              <option value="en_cours" ${cargo.statusGlobal === ('en cours' as EtatGlobal) ? 'selected' : ''}>En cours</option>
              <option value="arrive" ${cargo.statusGlobal === ('arrive' as EtatGlobal) ? 'selected' : ''}>Arrivé</option>
              <option value="perdu" ${cargo.statusGlobal === ('perdu' as EtatGlobal) ? 'selected' : ''}>Perdu</option>

            </select>
          </div>
        </div>

        <hr class="my-8 border-gray-200">

        <h3 class="text-2xl font-bold text-gray-800 mb-6">Produits</h3>
        
        <div class="space-y-6" id="listeproduits">
          
            </div>
            </div>
          </div>
          <!-- Répétez ce bloc pour d'autres produits -->
          <button class="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" id="btnResult">mise à jour</button>
        </div>
      </div>
    </div>
  </div>
  </div>
`;
}
const modelListeProduit   = (produit:Product) => {
return  `

  <div class="bg-gray-50 rounded-xl p-6 shadow-md">

  <div class="flex items-center justify-between gap-4 text-gray-600">
    <div>
      <p class="text-sm text-gray-500">libele</p>
      <p class="font-medium"></p>
    </div>
    <div>
      <p class="text-sm text-gray-500">Type</p>
      <p class="font-medium">Alimentaire</p>
    </div>
    <div>
      <p class="text-sm text-gray-500">Client</p>
      <p class="font-medium">Sy Oumar</p>
    </div>
    <div>
      <p class="text-sm text-gray-500">Poids</p>
      <p class="font-medium">45 kg</p>
    </div>
    <div>
      <p class="text-sm text-gray-500">Propriétaire</p>
      <p class="font-medium">Diop Fallou</p>
    </div>
    <div>
      <p class="text-sm text-gray-500">etat</p>
      <span class="px-3 py-1 bg-green-500 text-white rounded-full text-sm font-medium">En Attente</span>
    </div>
    <div>
      <p class="text-sm text-gray-500">Action</p>
      <select  name="etat" id="" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2 bg-gray-100 text-gray-700">
        <option value="en_attente" selected>En Attente</option>
        <option value="en_cours" >En Cours</option>
        <option value="arrivee">Arrivée</option>
        <option value="perdu">Perdu</option>
      </select>
    </div>`



}
  
