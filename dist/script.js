import { Air, Maritime, Road, Food, Unbreakable, Chemical, Fragile } from "./Model/cargo.js";
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
const GetData = async () => {
    const response = await fetch("../php/data.php");
    const data = await response.json();
    return data.cargo;
};
const dt = await GetData();
var Cargos = [];
dt.forEach((cargo) => {
    switch (cargo._type) {
        case "Maritime":
            let m = new Maritime(cargo._distance, cargo._from, cargo._to, cargo._dateDepart, cargo._dateArrive, cargo._weigth, cargo._nombreColis, cargo._statusGlobal, cargo._status);
            m.Code = parseInt(cargo.code);
            m.products = cargo.products.map((product) => {
                switch (product.type) {
                    case "food":
                        const f = new Food(product._libelle, product._weight, product._client, product._owner);
                        f.status = product._status;
                        return f;
                        break;
                    case "unbreakable":
                        const u = new Unbreakable(product._libelle, product._weight, product._client, product._owner);
                        u.status = product._status;
                        return u;
                        break;
                    case "chemical":
                        const c = new Chemical(product._libelle, product._weight, product._client, product._owner, product._toxicity);
                        c.status = product._status;
                        return c;
                        break;
                    case "fragile":
                        const s = new Fragile(product._libelle, product._weight, product._client, product._owner);
                        s.status = product._status;
                        return s;
                        break;
                }
            });
            Cargos.push(m);
            break;
        case "Terrestre":
            let t = new Road(cargo._distance, cargo._from, cargo._to, cargo._dateDepart, cargo._dateArrive, cargo._weigth, cargo._nombreColis, cargo._statusGlobal, cargo._status);
            t.Code = parseInt(cargo.code);
            t.products = cargo.products.map((product) => {
                switch (product.type) {
                    case "food":
                        const f = new Food(product._libelle, product._weight, product._client, product._owner);
                        f.status = product._status;
                        return f;
                        break;
                    case "unbreakable":
                        const u = new Unbreakable(product._libelle, product._weight, product._client, product._owner);
                        u.status = product._status;
                        return u;
                        break;
                    case "chemical":
                        const c = new Chemical(product._libelle, product._weight, product._client, product._owner, product._toxicity);
                        c.status = product._status;
                        return c;
                        break;
                    case "fragile":
                        const s = new Fragile(product._libelle, product._weight, product._client, product._owner);
                        s.status = product._status;
                        return s;
                        break;
                }
            });
            Cargos.push(t);
            break;
        case "Aerienne":
            let a = new Road(cargo._distance, cargo._from, cargo._to, cargo._dateDepart, cargo._dateArrive, cargo._weigth, cargo._nombreColis, cargo._statusGlobal, cargo._status);
            a.Code = parseInt(cargo.code);
            a.products = cargo.products.map((product) => {
                switch (product.type) {
                    case "food":
                        const f = new Food(product._libelle, product._weight, product._client, product._owner);
                        f.status = product._status;
                        return f;
                        break;
                    case "unbreakable":
                        const u = new Unbreakable(product._libelle, product._weight, product._client, product._owner);
                        u.status = product._status;
                        return u;
                        break;
                    case "chemical":
                        const c = new Chemical(product._libelle, product._weight, product._client, product._owner, product._toxicity);
                        c.status = product._status;
                        return c;
                        break;
                    case "fragile":
                        const s = new Fragile(product._libelle, product._weight, product._client, product._owner);
                        s.status = product._status;
                        return s;
                        break;
                }
            });
            Cargos.push(a);
            break;
    }
});
// function generateRecipePDF(product: Product,cargo: Cargo): Promise<string> {
//   return new Promise((resolve, reject) => {
//     const { jsPDF } = window.jspdf;
//     const doc = new jsPDF();
//     // Title
//     doc.setFontSize(22);
//     doc.text("Recu de livraison", 105, 20, { align: "center" });
//     // Product details
//     doc.setFontSize(16);
//     doc.text("Détails du produit:", 20, 40);
//     doc.setFontSize(12);
//     doc.text(`Identifiant: ${product.Code}`, 20, 50);
//     doc.text(`Nom du produit: ${product.libelle}`, 20, 60);
//     doc.text(`Poids: ${product.weight} kg`, 20, 70);
//     doc.text(`Type de produit: ${product.Type}`, 20, 80);
//     doc.text(`Statut du produit: ${product.status}`, 20, 90);
//     doc.text(`Prix: $${cargo.calculateAmount(product)}`, 20, 100);
//     doc.line(20, 35, 190, 35);
//     // Client details
//     doc.setFontSize(16);
//     doc.text("Détails du client:", 20, 110);
//     doc.setFontSize(12);
//     doc.text(
//       `Nom du client: ${product.client.username} ${product.client.name}`,
//       20,
//       120
//     );
//     doc.text(`Téléphone: ${product.client.phone}`, 20, 130);
//     doc.text(`Adresse: ${product.client.address}`, 20, 140);
//     doc.line(20, 35, 190, 35);
//     // Receiver details
//     // doc.setFontSize(16);
//     // doc.text("Détails du destinataire:", 20, 150);
//     // doc.setFontSize(12);
//     // doc.text(
//     //   `Nom du destinataire: ${product.productReceiver.surname} ${product.productReceiver.name}`,
//     //   20,
//     //   160
//     // );
//     // doc.text(`Téléphone: ${product.productReceiver.phone}`, 20, 170);
//     // doc.text(`Adresse: ${product.productReceiver.address}`, 20, 180);
//     doc.setFontSize(12);
//     doc.text("Cargo du monde", 190, 190, { align: "right" });
//     // Convert to base64 string
//     const pdfBase64 = doc.output("datauristring").split(",")[1];
//     resolve(pdfBase64);
//   });
// }
const envoiSMS = (numero, message) => {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", "App db739f7cfa1be06f3b0f49d70a494953-4023da95-6f4f-48c6-a054-f5a686349702");
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Accept", "application/json");
    const raw = JSON.stringify({
        "messages": [
            {
                "destinations": [{ "to": "+221" + numero }],
                "from": "Cargo Express",
                "text": message
            }
        ]
    });
    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
    };
    fetch("https://w1qlj8.api.infobip.com/sms/2/text/advanced", requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.error(error));
};
const Send = async (data) => {
    console.log(data);
    data.cargo.getProducts.forEach((product) => {
        envoiSMS(product.client.phone, data.message);
    });
    // generateRecipePDF(data.cargo.getProducts[0],data.cargo)
    await fetch("../php/mail.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(data => {
        // Traitez les données renvoyées par PHP
        //  console.log(data);
        // return data;
    })
        .catch(error => {
        console.error(error);
    });
};
//  air.addProduct(pro)
// console.log(air)
// console.log(air.calculateTotal());  
// import Swal from '../src/sweetalert2.js'
// Swal.fire('Hello world!')
const cargaison = document.querySelector("#cargaison");
const modelProduits = (produit) => {
    return `
  
   
    <tr class="tr-hoverable">
      <td>
        <p class="font-medium">${produit.Code}</p>
      </td>
      
      <td>
        <p class="font-medium">${produit.libelle}</p>
      </td>
      <td>
        <p class="font-medium">${produit.Type}</p>
      </td>
      <td>
        <p class="font-medium">${produit.client.name} ${produit.client.username}</p>
      </td>
      <td>
        <p class="font-medium">${produit.weight} kg</p>
      </td>
      <td>
        <p class="font-medium">${produit.owner.name} ${produit.owner.username}</p>
      </td>
      <td>
        <span class="px-3 py-1 ${produit.status === 'en cours' ? 'bg-green-200 text-green-800' : produit.status === 'en attente' ? 'bg-yellow-200 text-yellow-800' : produit.status === 'arrivee' ? 'bg-blue-200 text-blue-800' : 'bg-red-200 text-red-800'} ${produit.status === 'perdu'} text-white rounded-full text-sm font-medium">${produit.status}</span>
      </td>
      <td>
        <select  name="etat" id="EtatColis-${produit.Code}" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2 bg-gray-100 text-gray-700">
          <option value="en attente" ${produit.status === 'en attente' ? 'selected' : ''}>En Attente</option>
          <option value="en cours"  ${produit.status === 'en cours' ? 'selected' : ''}>En Cours</option>
          <option value="arrivee"  ${produit.status === 'arrivee' ? 'selected' : ''}>Arrivée</option>
          <option value="perdu"  ${produit.status === 'perdu' ? 'selected' : ''}>Perdu</option>
          <option value="recuperer"  ${produit.status === 'recuperer' ? 'selected' : ''}>Recuperer</option>
          <option value="archiver"  ${produit.status === 'archiver' ? 'selected' : ''}>Archiver</option>
        </select> 
      </td>
    </tr>
      `;
};
const modelDetail = (cargo) => {
    return `<div class="w-full">
    <form action="" method="post" id="changeEtat-${cargo.Code}" class="">
    <div class="lg:col-span-2">
      <div class="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div class="flex items-center justify-between px-8 py-6 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
          <div>
            <h2 class="text-2xl font-bold">#${cargo.Code}</h2>
          </div>
          <select id="statusGlobal" class="bg-gradient-to-r from-blue-500 to-indigo-600 bg-opacity-20 text-blue-500 px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-white">
            <option value="ouvert" ${cargo.statusGlobal === 'ouvert' ? 'selected' : ''}>Ouvert</option>
            <option value="ferme" ${cargo.statusGlobal !== 'ouvert' ? 'selected' : ''} >Fermé</option>
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
              <span id="statusglobalvieuw" class="px-3 py-1 bg-green-500 text-white rounded-full text-sm font-medium ${cargo.statusGlobal === 'ouvert' ? 'bg-green-500' : 'bg-red-500'}">${cargo.statusGlobal}</span>
            </div>
            <div class="flex-1">
              <p class="text-sm uppercase tracking-wide text-gray-500">Etat</p>
              <p class="mt-1 font-semibold ${cargo.status === 'perdu' ? 'text-red-500' : 'text-green-500'}" id="statusvieuw">${cargo.status}</p>
            </div>
            <div class="flex-1">
              <p class="text-sm uppercase tracking-wide text-gray-500">Action</p>
              <select name="status" id="status" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5">
              <option value="en attente" ${cargo.status === 'en attente' ? 'selected' : ''}>En Attente</option>  
                <option value="en cours" ${cargo.status === 'en cours' ? 'selected' : ''}>En cours</option>
                <option value="arrive" ${cargo.status === 'arrivee' ? 'selected' : ''}>Arrivé</option>
                <option value="perdu" ${cargo.status === 'perdu' ? 'selected' : ''}>Perdu</option>
  
              </select>
            </div>
          </div>
  
          <hr class="my-8 border-gray-200 ">
  
          <h3 class="text-2xl font-bold text-gray-800 mb-6">Produits</h3>
          <div class="flex justify-end mt-6 space-x-3 text-gray-700 font-bold text-lg w-full">
          Montant de la Cargaison: <span id="total">${cargo.calculateTotal()} fr cfa</span>
          </div>
          <div class="space-y-6" id="listeproduits">
            
              </div>
              </div>
            </div>
           
            <!-- Répétez ce bloc pour d'autres produits -->
            <button class="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" id="misaJour">mise à jour</button>
          </div>
        </div>
      </div>
    </div>
    </form>
    </div>
  `;
};
const modelListeProduit = (produit, cargo) => {
    return `
  
    <div class="bg-gray-50 rounded-xl p-6 shadow-md">
  
    <div class="flex items-center justify-between gap-4 text-gray-600">
      <div>
        <p class="text-sm text-gray-500 font-bold">Code</p>
        <p class="font-medium">${produit.Code}</p>
      </div>
      <div>
        <p class="text-sm text-gray-500 font-bold">libele</p>
        <p class="font-medium">${produit.libelle}</p>
      </div>
      <div>
        <p class="text-sm text-gray-500 font-bold">Type</p>
        <p class="font-medium">${produit.Type}</p>
      </div>
      <div>
        <p class="text-sm text-gray-500 font-bold">Client</p>
        <p class="font-medium">${produit.client.name} ${produit.client.username}</p>
      </div>
      <div>
        <p class="text-sm text-gray-500 font-bold">Poids</p>
        <p class="font-medium">${produit.weight} kg</p>
      </div>
      <div>
        <p class="text-sm text-gray-500 font-bold">Propriétaire</p>
        <p class="font-medium">${produit.owner.name} ${produit.owner.username}</p>
      </div>
      <div>
        <p class="text-sm text-gray-500 font-bold">Montant</p>
        <p class="font-bold" id="MontantColis-${produit.Code}">${cargo.calculateAmount(produit)}</p>
      </div>
      <div>
        <p class="text-sm text-gray-500 font-bold">etat</p>
        <span class="px-3 py-1 bg-green-500 text-white rounded-full text-sm font-medium">${produit.status}</span>
      </div>
      <div>
        <p class="text-sm text-gray-500">Action</p>
        <select  name="etat" id="EtatColis-${produit.Code}" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2 bg-gray-100 text-gray-700">
          <option value="en attente" ${produit.status === 'en attente' ? 'selected' : ''}>En Attente</option>
          <option value="en cours"  ${produit.status === 'en cours' ? 'selected' : ''}>En Cours</option>
          <option value="arrivee"  ${produit.status === 'arrivee' ? 'selected' : ''}>Arrivée</option>
          <option value="perdu"  ${produit.status === 'perdu' ? 'selected' : ''}>Perdu</option>
          <option value="recuperer"  ${produit.status === 'recuperer' ? 'selected' : ''}>Recuperer</option>
          <option value="archiver"  ${produit.status === 'archiver' ? 'selected' : ''}>Archiver</option>
        </select>
      </div>
      <div>
        <button class="px-3 py-1  text-red-500 rounded-full text-sm font-medium" id="retirer-${produit.Code}" type="button"><i class="fas fa-trash"></i></button>
      </div>
      `;
};
const detailerCargo = (cargo) => {
    const cargaison = document.querySelector("#cargaison");
    cargaison.classList.add("hidden");
    const sectiondetails = document.getElementById("sectiondetails");
    sectiondetails.classList.remove("hidden");
    sectiondetails.classList.add("flex");
    sectiondetails.innerHTML = '';
    sectiondetails.innerHTML = modelDetail(cargo);
    const listeproduits = document.getElementById("listeproduits");
    listeproduits.innerHTML = "";
    cargo.getProducts.forEach((produit) => {
        listeproduits.innerHTML += modelListeProduit(produit, cargo);
    });
};
const EtatColis = (carg) => {
    const EtatColiss = document.querySelectorAll('[id^="EtatColis-"]');
    const idEtatColiss = Array.from(EtatColiss).map(element => element.id);
    idEtatColiss.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.addEventListener("change", (event) => {
                event.preventDefault();
                const codeProduit = id.replace("EtatColis-", "");
                const changevalue = element.value;
                switch (changevalue) {
                    case 'arrivee':
                        if (carg.status == 'perdu') {
                            afficherNotification("la cargaison est perdu", "red-500", 4000);
                            element.value = 'perdu';
                            return;
                        }
                        if (carg.status == 'en cours') {
                            Cargos.forEach((cargo) => {
                                if (cargo.Code == carg.Code) {
                                    cargo.getProducts.forEach((produit) => {
                                        if (produit.Code == codeProduit) {
                                            produit.status = 'arrive';
                                        }
                                    });
                                }
                            });
                            afficherNotification("la cargaison est arrivee", "green-500", 4000);
                            misajJson(Cargos);
                            return;
                        }
                        if (carg.status == 'en attente') {
                            afficherNotification("la cargaison est en attente", "red-500", 4000);
                            element.value = 'en attente';
                            return;
                        }
                    case 'perdu':
                        if (carg.status == 'arrive') {
                            Cargos.forEach((cargo) => {
                                if (cargo.Code == carg.Code) {
                                    cargo.getProducts.forEach((produit) => {
                                        if (produit.Code == codeProduit) {
                                            produit.status = 'perdu';
                                            // Send({cargo,'message':'Votre Colis  à été perdu ,Nous sommes désoler pour le moment'});
                                        }
                                    });
                                }
                            });
                            afficherNotification("le colis est perdu", "red-500", 4000);
                        }
                        if (carg.status != 'perdu') {
                            afficherNotification("la cargaison est " + carg.status, "red-500", 4000);
                            element.value = carg.status;
                            return;
                        }
                    case 'en cours':
                        if (carg.status != 'en cours') {
                            afficherNotification("la cargaison est " + carg.status, "red-500", 4000);
                            element.value = carg.status;
                            return;
                        }
                    case 'en attente':
                        if (carg.status != 'en attente') {
                            afficherNotification("la cargaison est " + carg.status, "red-500", 4000);
                            element.value = carg.status;
                            return;
                        }
                }
                misajJson(Cargos);
            });
        }
    });
};
const chagerEtats = () => {
    const changeEtats = document.querySelectorAll('[id^="changeEtat-"]');
    const idchangeEtats = Array.from(changeEtats).map(element => element.id);
    idchangeEtats.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            const statusGlobal = document.getElementById("statusGlobal");
            const status = document.getElementById("status");
            const statusglobalvieuw = document.getElementById("statusglobalvieuw");
            const statusvieuw = document.getElementById("statusvieuw");
            const code = id.replace("changeEtat-", "");
            const carg = monCargo(code);
            const misaJour = document.getElementById("misaJour");
            misaJour.addEventListener("click", (event) => {
                event.preventDefault();
                //quiter ferme pour ouvert en cours
                if (statusGlobal.value == 'ouvert' && carg.statusGlobal == 'ferme' && carg.status == 'en cours' && status.value == 'en cours') {
                    afficherNotification("la cargaison est en cours", "red-500", 4000);
                    return;
                }
                //quiter ferme pour ouvert en attente
                if (statusGlobal.value == 'ouvert' && carg.statusGlobal == 'ferme' && carg.status == 'en attente') {
                    carg.statusGlobal = 'ouvert';
                    Cargos.forEach((cargo) => {
                        if (cargo.Code == carg.Code) {
                            cargo.statusGlobal = 'ouvert';
                        }
                    });
                    misajJson(Cargos);
                    statusglobalvieuw.innerHTML = 'ouvert';
                    statusvieuw.innerHTML = 'en attente';
                }
                //quiter en attente pour en cours 
                if (statusGlobal.value == 'ferme' && carg.statusGlobal == 'ferme' && carg.status == 'en attente' && status.value == 'en cours') {
                    carg.status = 'en cours';
                    Cargos.forEach((cargo) => {
                        if (cargo.Code == carg.Code) {
                            cargo.status = 'en cours';
                            cargo.getProducts.forEach((produit) => {
                                produit.status = 'en cours';
                            });
                        }
                    });
                    misajJson(Cargos);
                    statusvieuw.innerHTML = 'en cours';
                }
                //quiter en cours pour perdu 
                if (statusGlobal.value == 'ferme' && carg.statusGlobal == 'ferme' && carg.status == 'en cours' && status.value == 'perdu') {
                    carg.status = 'perdu';
                    Cargos.forEach((cargo) => {
                        if (cargo.Code == carg.Code) {
                            cargo.status = 'perdu';
                            cargo.getProducts.forEach((produit) => {
                                produit.status = 'perdu';
                                // Send({cargo,'message':'Votre Colis  à été perdu ,Nous sommes désoler pour le moment'});
                            });
                        }
                        afficherNotification("la cargaison est perdu ", "red-500", 4000);
                    });
                    misajJson(Cargos);
                    statusvieuw.innerHTML = 'perdu';
                }
                //quiter en attente pour arrive
                if (carg.status == 'en attente' && status.value == 'arrive') {
                    afficherNotification("la cargaison est en attente ", "green-500", 4000);
                    status.value = 'en attente';
                    return;
                }
                //etat arrivee vers en attente
                if (carg.status == 'arrive' && status.value == 'en attente') {
                    afficherNotification("la cargaison est arrivee ", "green-500", 4000);
                    status.value = 'en attente';
                    return;
                }
                //  //quiter en attente pour en cours 
                //  if(statusGlobal.value == 'ferme' && carg.statusGlobal == 'ferme' && carg.status == 'en cours' && status.value == 'arrive'){
                //   carg.status = 'en cours';
                //   Cargos.forEach((cargo) => {
                //     if(cargo.Code == carg.Code){
                //       cargo.status = 'en cours';
                //       cargo.getProducts.forEach((produit) => {
                //         produit.status = 'en cours';
                //         afficherNotification("la cargaison est mise en cours ", "green-500", 4000);
                //       })
                //     }
                //   })
                //   misajJson(Cargos);
                //   statusvieuw.innerHTML = 'en cours';
                // }
                //quiter en attente pour en cours  avec ouvert
                if (statusGlobal.value == 'ouvert' && carg.statusGlobal == 'ouvert' && carg.status == 'en attente' && status.value == 'en cours') {
                    afficherNotification("la cargaison est ouvert", "red-500", 4000);
                    return;
                }
                //quiter en attente pour ferme
                if (statusGlobal.value == 'ferme' && carg.statusGlobal == 'ouvert' && carg.status == 'en attente') {
                    carg.statusGlobal = 'ferme';
                    Cargos.forEach((cargo) => {
                        if (cargo.Code == carg.Code) {
                            cargo.statusGlobal = 'ferme';
                            afficherNotification("la cargaison est ferme avec succes", "green-500", 4000);
                        }
                    });
                    misajJson(Cargos);
                    statusglobalvieuw.innerHTML = 'ferme';
                }
                //quitter en cours pour en attente
                if (statusGlobal.value == 'ferme' && carg.statusGlobal == 'ferme' && carg.status == 'en cours' && status.value == 'en attente') {
                    afficherNotification("la cargaison est en cours", "red-500", 4000);
                    return;
                }
                //quitter en cours pour ouvert
                if (carg.statusGlobal == 'ferme' && carg.status == 'en cours' && status.value == 'ouvert') {
                    afficherNotification("la cargaison est déja en cours", "red-500", 4000);
                    return;
                }
                //quitter en cours pour arrive
                if (carg.statusGlobal == 'ferme' && carg.status == 'en cours' && status.value == 'arrive') {
                    carg.status = 'arrive';
                    Cargos.forEach((cargo) => {
                        if (cargo.Code == carg.Code) {
                            cargo.status = 'arrive';
                            cargo.getProducts.forEach((produit) => {
                                produit.status = 'arrive';
                                // Send({cargo,'message':'Votre Colis  à été bien enregisté votre code est : ' +produit.Code+' est la date de départ est : '+carg.dateDepart+' Merci pour votre confiance <br> Vous pouvez suivre votre colis via ce lien : www.oumar.sy:8888/CargoProject/public/index.php' });
                            });
                        }
                        afficherNotification("la cargaison est arrivée", "green-500", 4000);
                    });
                    misajJson(Cargos);
                    statusvieuw.innerHTML = 'arrive';
                }
                //cargo vide ne peut pas etre perdu ni arriver ni en cours
                if (carg.getProducts.length == 0 && status.value != 'en attente') {
                    afficherNotification("la cargaison est vide", "red-500", 4000);
                    status.value = 'en attente';
                    return;
                }
                //quiter perdu pour en cours
                if (statusGlobal.value == 'ferme' && carg.statusGlobal == 'ferme' && carg.status == 'perdu' && status.value == 'en cours') {
                    afficherNotification("la cargaison est perdu", "red-500", 4000);
                    return;
                }
                //quiter arriver ferme en arrive ouvert
                if (statusGlobal.value == 'ouvert' && carg.statusGlobal == 'ferme' && carg.status == 'arrive') {
                    carg.statusGlobal = 'ouvert';
                    Cargos.forEach((cargo) => {
                        if (cargo.Code == carg.Code) {
                            cargo.statusGlobal = 'ouvert';
                        }
                    });
                    misajJson(Cargos);
                    statusglobalvieuw.innerHTML = 'ouvert';
                    statusglobalvieuw.classList.add("text-green-500");
                    statusglobalvieuw.classList.remove("text-red-500");
                }
                //arriver  et retour en cours
                if (carg.status == 'arrive' && (status.value == 'en cours' || status.value == 'en attente')) {
                    afficherNotification("la cargaison est arrivee", "green-500", 4000);
                    return;
                }
            });
            //changer etat colis
            EtatColis(carg);
            //retirer produit 
            //retirer produit 
            const retirers = document.querySelectorAll('[id^="retirer-"]');
            const idretirers = Array.from(retirers).map(element => element.id);
            idretirers.forEach(id => {
                const element = document.getElementById(id);
                if (element) {
                    element.addEventListener("click", (event) => {
                        event.preventDefault();
                        const codeProduit = id.replace("retirer-", "");
                        const produit = carg.getProducts.find((produit) => produit.Code == codeProduit);
                        if (carg.status == 'en attente' && carg.statusGlobal == 'ouvert') {
                            Cargos.forEach((cargo) => {
                                if (cargo.Code == carg.Code) {
                                    cargo.removeProduit(produit);
                                    misajJson(Cargos);
                                    //recuperer son parent 
                                    const parent = element.parentElement?.parentElement?.parentElement;
                                    afficherNotification('Produit retiré avec succes', 'green-500', 4000);
                                    if (parent) {
                                        parent.remove();
                                    }
                                }
                                console.log(carg.getProducts);
                            });
                        }
                        else if (carg.status == 'en attente' && carg.statusGlobal == 'ferme') {
                            afficherNotification('la cargaison est en attente', 'red-500', 4000);
                            return;
                        }
                        else if (carg.status == 'en cours' && carg.statusGlobal == 'ferme') {
                            afficherNotification('la cargaison est en cours', 'red-500', 4000);
                        }
                    });
                }
            });
            //rechercher produit
            const rechercher = document.getElementById('search');
            rechercher.addEventListener("input", (event) => {
                event.preventDefault();
                console.log(rechercher.value);
            });
        }
    });
};
const misajJson = (c) => {
    // const response = await fetch("../php/data.php");
    // const data = await response.json();
    fetch("../php/data.php", {
        method: "POST",
        body: JSON.stringify(c),
    })
        .then((response) => response.json())
        .then((data) => {
        data.cargo = c;
        save(data);
    })
        .catch((error) => {
        console.error(error);
    });
};
const displayDataCargo = (itemparpage, page) => {
    const tbody = document.querySelector('tbody');
    tbody.innerHTML = '';
    fetch("../php/data.php")
        .then(response => response.json())
        .then(data => {
        const pagination = document.getElementById("pagination");
        const tp = Math.ceil(data.cargo.length / itemparpage);
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
                    displayDataCargo(itemparpage, page);
                });
            }
        });
        const slice = data.cargo.slice((page - 1) * itemparpage, page * itemparpage);
        slice.forEach((cargo) => {
            tbody.innerHTML += ModelCargo(cargo);
        });
        const detailss = document.querySelectorAll('[id^="detail-"]');
        const iddetailss = Array.from(detailss).map(element => element.id);
        iddetailss.forEach(id => {
            const element = document.getElementById(id);
            if (element) {
                element.addEventListener("click", () => {
                    const code = id.replace("detail-", "");
                    console.log(code);
                    const cargo = monCargo(code);
                    console.log(cargo);
                    detailerCargo(cargo);
                    chagerEtats();
                });
            }
        });
    })
        .catch(error => {
        console.error(error);
    });
};
var itemparpage = 3;
var page = 1;
// displayDataCargo(itemparpage,page);
const ModelCargo = (cargo) => {
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
      ${cargo._dateDepart}
  </td>
  <td class="px-6 py-4">
      ${cargo._dateArrive}
  </td>
  <td class="px-6 py-4 flex items-center justify-center">
      <img src=${cargo._statusGlobal == 'ouvert' ? 'https://cdn-icons-png.flaticon.com/128/9069/9069952.png' : 'https://cdn-icons-png.flaticon.com/128/4503/4503969.png'} alt="" class="w-5 h-5">
  </td>
  <td class="px-6 py-4 ${cargo._status == 'en attente' ? 'text-green-500' : cargo._status == 'en attente' ? 'text-yellow-500' : 'text-red-500'}">
      ${cargo._status}
  </td>
  <td class="px-6 py-4 flex items-center justify-center" id="detail-${cargo.code}">
      <a href="#" class=""><i class="fa-solid fa-circle-info"></i></a>
  </td>
</tr>
  `;
};
const elements = document.querySelectorAll('[id^="page-"]');
const ids = Array.from(elements).map(element => element.id);
ids.forEach(id => {
    const element = document.getElementById(id);
    if (element) {
        element.addEventListener("click", () => {
            var page = parseInt(id.replace("page-", ""));
            displayDataCargo(itemparpage, page);
        });
    }
});
const details = document.querySelectorAll('[id^="detail-"]');
const iddetails = Array.from(details).map(element => element.id);
iddetails.forEach(id => {
    const element = document.getElementById(id);
    if (element) {
        element.addEventListener("click", () => {
            const code = id.replace("detail-", "");
            console.log(code);
            const cargo = monCargo(code);
            console.log(cargo);
            detailerCargo(cargo);
            chagerEtats();
        });
    }
});
function afficherNotification(message, couleur, temps) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.classList.add('fixed', 'top-0', 'right-0', 'z-10', 'text-white', 'py-4', 'px-4', 'bg-' + couleur, 'border-l-4', 'border-solid', 'animate-in-from-right', 'w-1/3', 'rounded-lg');
    document.body.appendChild(notification);
    setTimeout(() => {
        notification.remove();
    }, temps);
}
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
const removeHidden = function (id) {
    const element = document.getElementById(id);
    if (element) {
        element.classList.remove("hidden");
    }
};
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
        if (key === "departure" && typeof value === "string" && value !== "" && !compareDate(new Date(value))) {
            errors = 1;
            const errorElement = document.querySelector(".error-departure");
            errorElement.classList.add("visible");
            errorElement.classList.remove("invisible");
            errorElement.innerHTML = "Date invalide , veuillez choisir une date future";
        }
        else {
            errors = 0;
            const errorElement = document.querySelector(".error-departure");
            errorElement.classList.remove("visible");
            errorElement.classList.add("invisible");
        }
        if (key === "destination" && typeof value === "string" && value !== "" && !compareDate(new Date(value))) {
            errors = 1;
            const errorElement = document.querySelector(".error-destination");
            errorElement.classList.add("visible");
            errorElement.classList.remove("invisible");
            errorElement.innerHTML = "Date invalide , veuillez choisir une date future";
        }
        else {
            errors = 0;
            const errorElement = document.querySelector(".error-destination");
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
    console.log(errors);
    if (errors === 0) {
        switch (type) {
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
                    afficherNotification("Cargo enregistre avec succes", "green-500", 4000);
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
                    data.cargo.unshift(t);
                    save(data);
                    displayDataCargo(itemparpage, page);
                    // window.location.href = 'index.php';
                    //fermer le modal et effacer le formulaire
                    afficherNotification("Enregistrement avec succes", "green-500", 5000);
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
                    afficherNotification("Enregistrement avec succes", "green-500", 5000);
                    formCargo.reset();
                    //fermer le modal
                });
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
const typecargo = document.getElementById("typecargo");
typecargo?.addEventListener("change", (event) => {
    fetch("../php/data.php")
        .then(response => response.json())
        .then(data => {
        const slice = data.cargo.filter((cargo) => cargo._type === typecargo.value);
        const pagination = document.getElementById("pagination");
        const tp = Math.ceil(slice.length / itemparpage);
        pagination.innerHTML = '';
        for (let i = 1; i <= tp; i++) {
            pagination.innerHTML += `
        <li>
        <a href="#" id="pagetype-${i}" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${i == page ? 'bg-blue-500 text-white' : ''}">
          ${i}
        </a>
      </li>`;
        }
        const tbody = document.querySelector('tbody');
        tbody.innerHTML = '';
        const elements = document.querySelectorAll('[id^="pagetype-"]');
        const ids = Array.from(elements).map(element => element.id);
        ids.forEach(id => {
            const element = document.getElementById(id);
            if (element) {
                element.addEventListener("click", () => {
                    page = parseInt(id.replace("pagetype-", ""));
                    const slice3 = slice.slice((page - 1) * itemparpage, page * itemparpage);
                    tbody.innerHTML = '';
                    slice3.forEach((cargo) => {
                        tbody.innerHTML += ModelCargo(cargo);
                    });
                });
            }
        });
        const slice2 = slice.slice((page - 1) * itemparpage, page * itemparpage);
        slice2.forEach((cargo) => {
            tbody.innerHTML += ModelCargo(cargo);
        });
    })
        .catch(error => {
        console.error(error);
    });
});
function compareDate(date) {
    const today = new Date();
    return date.getFullYear() >= today.getFullYear() &&
        date.getMonth() >= today.getMonth() &&
        date.getDate() >= today.getDate();
}
const validerDateentre = (dateDepart, dateArrive) => {
    return dateArrive.getFullYear() >= dateDepart.getFullYear() &&
        dateArrive.getMonth() >= dateDepart.getMonth() &&
        dateArrive.getDate() >= dateDepart.getDate();
};
const etat = document.getElementById("etat");
etat?.addEventListener("change", (event) => {
    const tbody = document.querySelector('tbody');
    tbody.innerHTML = '';
    fetch("../php/data.php")
        .then(response => response.json())
        .then(data => {
        const slice = data.cargo.filter((cargo) => cargo._statusGlobal === etat.value);
        const pagination = document.getElementById("pagination");
        const slice2 = slice.slice((page - 1) * itemparpage, page * itemparpage);
        slice2.forEach((cargo) => {
            tbody.innerHTML += ModelCargo(cargo);
        });
        const tp = Math.ceil(slice.length / itemparpage);
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
                    const slice2 = slice.slice((page - 1) * itemparpage, page * itemparpage);
                    tbody.innerHTML = '';
                    slice2.forEach((cargo) => {
                        tbody.innerHTML += ModelCargo(cargo);
                    });
                });
            }
        });
    });
});
const searchMultipleInput = document.querySelector("#searchmultipleinput");
const filtersContainer = document.querySelector("#filtersContainer");
const filters = [];
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
        var filteredData = [];
        if (filters.length > 0) {
            filteredData = data.cargo.filter((cargo) => cargo._from === filters[0] || cargo._to === filters[0]);
        }
        else {
            filteredData = data.cargo;
        }
        const tbody = document.querySelector('tbody');
        tbody.innerHTML = '';
        const slice2 = filteredData.slice((page - 1) * itemparpage, page * itemparpage);
        slice2.forEach((cargo) => {
            tbody.innerHTML += ModelCargo(cargo);
        });
        const pagination = document.getElementById("pagination");
        const tp = Math.ceil(filteredData.length / itemparpage);
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
                    const slice2 = filteredData.slice((page - 1) * itemparpage, page * itemparpage);
                    tbody.innerHTML = '';
                    slice2.forEach((cargo) => {
                        tbody.innerHTML += ModelCargo(cargo);
                    });
                });
            }
        });
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
const infoClient = document.getElementById("infoClient");
infoClient?.addEventListener("submit", (event) => {
    event.preventDefault();
});
const monCargo = (code) => {
    return Cargos.filter(cargo => cargo.Code == code)[0];
};
const ajoterproduit = document.getElementById("ajoterproduit");
ajoterproduit?.addEventListener("click", (event) => {
    const sectionlesproduits = document.getElementById("sectionlesproduits");
    sectionlesproduits.classList.add("hidden");
    const sectionproduit = document.getElementById("sectionproduit");
    sectionproduit.classList.remove("hidden");
    sectionproduit.classList.add("flex");
});
//function pour recuperer tous les produits
const produits = () => {
    const prods = [];
    Cargos.forEach(cargo => {
        cargo.getProducts.forEach(product => {
            prods.push(product);
        });
    });
    return prods;
};
const cargoduProduit = (code) => {
    Cargos.forEach(cargo => {
        cargo.getProducts.forEach(product => {
            if (product.Code == code) {
                console.log("sama colissssssss");
                return cargo;
            }
        });
    });
    return Cargos[0];
};
const listeProduit = () => {
    const listproduits = document.getElementById("listproduits");
    console.log(listproduits);
    produits().forEach(product => {
        listproduits.innerHTML += modelProduits(product);
        EtatColis(cargoduProduit(product.Code));
    });
};
listeProduit();
const typeproduit = document.getElementById("typeproduit");
typeproduit?.addEventListener("change", (event) => {
    if (typeproduit.value === "chimique") {
        const divDegre = document.getElementById("divDegre");
        const deges = document.getElementById("deges");
        divDegre.classList.remove("hidden");
        deges.disabled = false;
    }
    else {
        const divDegre = document.getElementById("divDegre");
        divDegre.classList.add("hidden");
        const deges = document.getElementById("deges");
        deges.disabled = true;
    }
});
const inuputNumClient = document.getElementById("telephone");
inuputNumClient?.addEventListener("keyup", (event) => {
    if (inuputNumClient.value.length === 9) {
        Cargos.forEach((cargo) => {
            cargo.getProducts.forEach(product => {
                if (product.client.phone == inuputNumClient.value) {
                    const nom = document.getElementById("nom");
                    const prenom = document.getElementById("prenom");
                    const email = document.getElementById("email");
                    nom.value = product.client.name;
                    prenom.value = product.client.username;
                    email.value = product.client.email;
                }
            });
        });
    }
});
const inputNumDestinataire = document.getElementById("telephoneDestinataire");
inputNumDestinataire?.addEventListener("keyup", (event) => {
    if (inputNumDestinataire.value.length === 9) {
        let prd;
        Cargos.forEach((cargo) => {
            cargo.getProducts.forEach(product => {
                if (product.client.phone == inputNumDestinataire.value) {
                    prd = product;
                }
                else if (product.owner.phone == inputNumDestinataire.value) {
                    prd = product;
                }
                const nom = document.getElementById("nomDestinataire");
                const prenom = document.getElementById("prenomDestinataire");
                const email = document.getElementById("emailDestinataire");
                nom.value = prd.client.name;
                prenom.value = prd.client.username;
                email.value = prd.client.email;
            });
        });
    }
});
const plusproduit = document.getElementById("plusproduit");
var p = 1;
const valideEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};
const valideTelephone = (telephone) => {
    const regex = /^(76|77|70|78|75)\d{7}$/;
    return regex.test(telephone);
};
const formProduit = document.getElementById("formProduit");
const addproduit = document.getElementById("addproduit");
addproduit?.addEventListener("click", (event) => {
    event.preventDefault();
    const data = new FormData(formProduit);
    const formData = new FormData(formProduit);
    const datas = Object.fromEntries(formData);
    //parcourir data
    let isvalid = true;
    for (const [key, value] of Object.entries(datas)) {
        if (key !== "typeproduit" && value === "") {
            isvalid = false;
            const err = key + "Error";
            console.log(err);
            const errorElement = document.querySelector(`#${err}`);
            errorElement.classList.add("visible");
            errorElement.classList.remove("invisible");
        }
        else if (key !== "typeproduit" && value !== "") {
            let err = key + "Error";
            const errorElement = document.querySelector(`#${err}`);
            errorElement.classList.remove("visible");
            errorElement.classList.add("invisible");
        }
        if (key == "telephone" && value !== "" && !valideTelephone(value)) {
            isvalid = false;
            const err = key + "Error";
            console.log(err);
            const errorElement = document.querySelector(`#${err}`);
            errorElement.innerHTML = "Telephone invalide";
            errorElement.classList.add("visible");
            errorElement.classList.remove("invisible");
        }
        else if (key == "telephone" && value !== "" && valideTelephone(value)) {
            let err = key + "Error";
            const errorElement = document.querySelector(`#${err}`);
            errorElement.classList.remove("visible");
            errorElement.classList.add("invisible");
        }
        if (key == "telephoneDestinataire" && value !== "" && !valideTelephone(value)) {
            isvalid = false;
            const err = key + "Error";
            console.log(err);
            const errorElement = document.querySelector(`#${err}`);
            errorElement.classList.add("visible");
            errorElement.classList.remove("invisible");
        }
        else if (key == "telephoneDestinataire" && value !== "" && valideTelephone(value)) {
            let err = key + "Error";
            const errorElement = document.querySelector(`#${err}`);
            errorElement.innerHTML = "Telephone invalide";
            errorElement.classList.remove("visible");
            errorElement.classList.add("invisible");
        }
        if (key == "email" && value !== "" && !valideEmail(value.toString())) {
            isvalid = false;
            const err = key + "Error";
            console.log(err);
            const errorElement = document.querySelector(`#${err}`);
            errorElement.innerHTML = "Email invalide";
            errorElement.classList.add("visible");
            errorElement.classList.remove("invisible");
        }
        else if (key == "email" && value !== "" && valideEmail(value)) {
            let err = key + "Error";
            const errorElement = document.querySelector(`#${err}`);
            errorElement.classList.remove("visible");
            errorElement.classList.add("invisible");
        }
        if (key == "emailDestinataire" && value !== "" && !valideEmail(value)) {
            isvalid = false;
            const err = key + "Error";
            console.log(err);
            const errorElement = document.querySelector(`#${err}`);
            errorElement.innerHTML = "Email invalide";
            errorElement.classList.add("visible");
            errorElement.classList.remove("invisible");
        }
        else if (key == "emailDestinataire" && value !== "" && valideEmail(value)) {
            let err = key + "Error";
            const errorElement = document.querySelector(`#${err}`);
            errorElement.classList.remove("visible");
            errorElement.classList.add("invisible");
        }
    }
    if (isvalid) {
        const donnees = Object.fromEntries(data.entries());
        const client = { name: donnees.nom, username: donnees.prenom, email: donnees.email, address: donnees.addressClient, phone: donnees.telephone };
        // console.log('client',client);
        const destinataire = { name: donnees.nomDestinataire, username: donnees.prenomDestinataire, email: donnees.emailDestinataire, address: donnees.addressDestinataire, phone: donnees.telephoneDestinataire };
        // console.log('destinataire',destinataire);
        let prod;
        switch (typeproduit.value) {
            case "food":
                prod = new Food(donnees.libelle, parseInt(donnees.poids), client, destinataire);
                break;
            case "chimique":
                prod = new Chemical(donnees.libelle, parseInt(donnees.poids), client, destinataire, donnees.deges);
                break;
            case "incassable":
                prod = new Unbreakable(donnees.libelle, parseInt(donnees.poids), client, destinataire);
                break;
            case "fragile":
                prod = new Fragile(donnees.libelle, parseInt(donnees.poids), client, destinataire);
                break;
        }
        //choisir la cargo
        const choiceCargo = document.getElementById("choiceCargo");
        choiceCargo.classList.remove("hidden");
        const selectcargaison = document.getElementById("selectcargaison");
        selectcargaison.innerHTML = "";
        // Créer un élément li pour la nouvelle cargaison
        Cargos.forEach((cargo) => {
            let modeL = modelCargo(cargo);
            selectcargaison.innerHTML += modeL;
        });
        const codecherch = document.getElementById("codecherch");
        codecherch.addEventListener("input", (event) => {
            let code = codecherch.value;
            const selectcargaison = document.getElementById("selectcargaison");
            if (code == "") {
                Cargos.filter((cargo) => cargo.statusGlobal == "ouvert").forEach((cargo) => {
                    let modeL = modelCargo(cargo);
                    selectcargaison.innerHTML += modeL;
                });
            }
            else {
                selectcargaison.innerHTML = "";
                Cargos.forEach((cargo) => {
                    if (cargo.Code.toString().includes(code.toLowerCase())) {
                        let modeL = modelCargo(cargo);
                        selectcargaison.innerHTML += modeL;
                    }
                });
            }
        });
        //formProduit.reset();
        formProduit.classList.add("hidden");
        const ccargo = document.getElementById("ccargo");
        ccargo.classList.remove("hidden");
        const adcargo = document.getElementById("adcargo");
        var cargochoisi;
        adcargo.addEventListener("click", (event) => {
            event.preventDefault();
            const cargo = document.querySelector("input[type='radio']:checked");
            const mycode = parseInt(cargo.value);
            if (mycode !== null) {
                let add = true;
                console.log('mycode', mycode);
                const nexCargo = [];
                Cargos.forEach((cargo) => {
                    if (cargo.Code == mycode) {
                        if (cargo.statusGlobal == "ferme") {
                            afficherNotification("la cargaison est ferme", "red-500", 4000);
                            add = false;
                            return;
                        }
                        else {
                            add = true;
                        }
                        if ((cargo instanceof Road || cargo instanceof Air) && prod instanceof Chemical) {
                            afficherNotification("Impossible d'ajouter dans la cargaison", "red-500", 4000);
                            add = false;
                            return;
                        }
                        else {
                            add = true;
                        }
                        if (cargo instanceof Maritime && prod instanceof Fragile) {
                            add = false;
                            afficherNotification("Impossible d'ajouter dans la cargaison", "red-500", 4000);
                            return;
                        }
                        else {
                            add = true;
                        }
                        cargo.addProduct(prod);
                        console.log('cargo', cargo);
                        cargochoisi = cargo;
                        // Send({cargo,'message':'Votre Colis  à été bien enregisté votre code est : ' +prod.Code+' est la date de départ est : '+cargo.dateDepart+' Merci pour votre confiance Vous pouvez suivre votre colis via ce lien : www.oumar.sy:8888/CargoProject/public/index.php' });
                    }
                    nexCargo.push(cargo);
                });
                if (add) {
                    afficherNotification("Enregistrement avec succes", "green-500", 5000);
                    //copier la liste des cargaison
                    Cargos = nexCargo;
                    fetch("../php/data.php")
                        .then(response => response.json())
                        .then(data => {
                        data.cargo = nexCargo;
                        save(data);
                    })
                        .catch(error => console.error(error));
                    //detailler la cargaison
                    console.log('produit', cargochoisi);
                    ccargo.classList.add("hidden");
                    codecherch.value = "";
                    const sectiondetails = document.getElementById("sectiondetails");
                    const sectionproduit = document.getElementById("sectionproduit");
                    sectionproduit.classList.add("hidden");
                    sectiondetails.classList.remove("hidden");
                    sectiondetails.classList.add("flex");
                    sectiondetails.innerHTML = '';
                    sectiondetails.innerHTML = modelDetail(cargochoisi);
                    const listeproduits = document.getElementById("listeproduits");
                    listeproduits.innerHTML = "";
                    cargochoisi.getProducts.forEach((produit) => {
                        listeproduits.innerHTML += modelListeProduit(produit, cargochoisi);
                    });
                    //  sectiondetails.innerHTML += modelRecu(prod,cargochoisi);
                    //listeproduits.innerHTML += modelAlert();
                    chagerEtats();
                }
            }
            else {
                afficherNotification("Veuillez choisir une cargaison", "red-500", 4000);
            }
        });
    }
});
const modelCargo = (cargo) => {
    return `
    <tr class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600 ">
      <td class="px-4 py-2 text-gray-800">${cargo.Code}</td>
      <td class="px-4 py-2 text-gray-800">${cargo.type}</td>
      <td class="px-4 py-2 text-gray-800">${cargo.weigth === null || typeof cargo.weigth === 'undefined' ? '' : (cargo.calculPoidsRestant()) + '/' + cargo.weigth}</td>
      <td class="px-4 py-2 text-gray-800">${cargo.nombreColis === null || typeof cargo.nombreColis === 'undefined' ? '' : (cargo.nombreColis - cargo.getNbrProduct()) + '/' + cargo.nombreColis}</td>
      <td class="px-4 py-2 text-gray-800">${cargo.statusGlobal}</td>
      <td class="px-4 py-2 text-gray-800">${cargo.status}</td>
      <td class="px-4 py-2 text-gray-800">${cargo.from}</td>
      <td class="px-4 py-2 text-gray-800">${cargo.to}</td>
      <td class="px-4 py-2 text-right">
        <input type="radio" name="cargaison" value="${cargo.Code}" id="cargaison-${cargo.Code}" class="form-radio text-blue-500">
        <label for="cargaison${cargo.Code}" class="ml-2 text-gray-700"></label>
      </td>
    </tr>
  `;
};
const modelprod = (id) => {
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
  `;
};
const modelAlert = () => {
    return `
  <div role="alert" class="alert alert-success static top-0 right-0 z-10">
  <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  <span>Your purchase has been confirmed!</span>
</div>
  `;
};
const close = document.getElementById('close');
close?.addEventListener('click', () => {
    const parent = close?.parentElement;
    parent?.remove();
});
const modelRecu = (produit, cargo) => {
    return `<div class=" w-[300px] h-[300px] border border-gray-200  rounded-xl p-6 shadow-md max-w-md mx-auto">
  <div class="font-semibold text-lg mb-4 text-white">Facture</div>
  <div class="mb-4">
    <div class="flex justify-between mb-2">
      <div class="text-white">Code:</div>
      <div class="text-white">${produit.Code}</div>
    </div>
    <div class="flex justify-between mb-2">
      <div class="text-white">Libellé:</div>
      <div class="text-white">${produit.libelle}</div>
    </div>
    <div class="flex justify-between mb-2">
      <div class="text-white">Type:</div>
      <div class="text-white">${produit.Type}</div>
    </div>
    <div class="flex justify-between mb-2">
      <div class="text-white">Client:</div>
      <div class="text-white">${produit.client.name} ${produit.client.username}</div>
    </div>
    <div class="flex justify-between mb-2">
      <div class="text-white">Poids:</div>
      <div class="text-white">${produit.weight}</div>
    </div>
    <div class="flex justify-between mb-2">
      <div class="text-white">Propriétaire:</div>
      <div class="text-white">${produit.owner.name} ${produit.owner.username}</div>
    </div>
    <div class="flex justify-between mb-2">
      <div class="text-white">Montant:</div>
      <div class="text-white">${cargo.calculateAmount(produit).toFixed(2)}</div>
    </div>
    <div class="flex justify-between">
      <div class="text-white">État:</div>
      <div class="text-white">${produit.status}</div>
    </div>
  </div>
  < button class="px-3 py-1  text-red-500 rounded-full text-sm font-medium" id="retirer-${produit.Code}" type="button"><i class="fas fa-trash"></i></button>
</div>

  `;
};
//detail cargo 
const detailss = document.querySelectorAll('[id^="detail-"]');
const iddetailss = Array.from(detailss).map(element => element.id);
iddetailss.forEach(id => {
    const element = document.getElementById(id);
    if (element) {
        element.addEventListener("click", () => {
            const code = id.replace("detail-", "");
            const cargo = monCargo(code);
            detailerCargo(cargo);
            chagerEtats();
        });
    }
});
