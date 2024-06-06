let x;
export class Product {
    _libelle;
    _weight;
    _client;
    _owner;
    _status;
    code;
    constructor(_libelle, _weight, _client, _owner, _status = "en attente") {
        this._libelle = _libelle;
        this._weight = _weight;
        this._client = _client;
        this._owner = _owner;
        this._status = _status;
        this.code = ++Cargo.genrerCode;
    }
    get Code() {
        return this.code;
    }
    set Code(value) {
        this.code = value;
    }
    get status() {
        return this._status;
    }
    set status(value) {
        this._status = value;
    }
    get libelle() {
        return this._libelle;
    }
    set libelle(value) {
        this._libelle = value;
    }
    get weight() {
        return this._weight;
    }
    set weight(value) {
        this._weight = value;
    }
    set client(value) {
        this._client = value;
    }
    get client() {
        return this._client;
    }
    set owner(value) {
        this._owner = value;
    }
    get owner() {
        return this._owner;
    }
    get Type() {
        return this.type;
    }
    set Type(value) {
        this.type = value;
    }
    //
    info() {
        console.log(`Name: ${this.code}, Weight: ${this.weight}`);
    }
}
export class Food extends Product {
    type;
    constructor(libelle, weight, client, owner, _status = "en attente") {
        super(libelle, weight, client, owner);
        this.type = "food";
    }
}
export class Material extends Product {
    constructor(libelle, weight, client, owner, _status = "en attente") {
        super(libelle, weight, client, owner);
    }
}
export class Unbreakable extends Material {
    type;
    constructor(libelle, weight, client, owner, _status = "en attente") {
        super(libelle, weight, client, owner);
        this.type = "unbreakable";
    }
}
export class Fragile extends Material {
    type;
    constructor(libelle, weight, client, owner, _status = "en attente") {
        super(libelle, weight, client, owner);
        this.type = "fragile";
    }
}
export class Chemical extends Product {
    _toxicity;
    type;
    constructor(libelle, weight, client, owner, _toxicity, _status = "en attente") {
        super(libelle, weight, client, owner);
        this._toxicity = _toxicity;
        this.type = "chemical";
    }
    get toxicity() {
        return this._toxicity;
    }
    set toxicity(value) {
        this._toxicity = value;
    }
}
const Idexist = (id, data) => {
    for (const [key, value] of Object.entries(data)) {
        if (value === id) {
            return true;
        }
    }
    return false;
};
export class Cargo {
    _distance;
    _from;
    _to;
    _dateDepart;
    _dateArrive;
    _weigth;
    _nombreColis;
    _statusGlobal;
    _status;
    static genrerCode = Math.floor(Math.random() * 1000000000) + 2000000000;
    code;
    constructor(_distance, _from, _to, _dateDepart, _dateArrive, _weigth, _nombreColis, _statusGlobal = "ouvert", _status = "en attente") {
        this._distance = _distance;
        this._from = _from;
        this._to = _to;
        this._dateDepart = _dateDepart;
        this._dateArrive = _dateArrive;
        this._weigth = _weigth;
        this._nombreColis = _nombreColis;
        this._statusGlobal = _statusGlobal;
        this._status = _status;
        this.code = ++Cargo.genrerCode;
    }
    get Code() {
        return this.code;
    }
    set Code(value) {
        this.code = value;
    }
    get type() {
        return this._type;
    }
    get distance() {
        return this._distance;
    }
    set distance(distance) {
        this._distance = distance;
    }
    //
    get from() {
        return this._from;
    }
    set from(from) {
        this._from = from;
    }
    //
    get to() {
        return this._to;
    }
    set to(to) {
        this._to = to;
    }
    get dateDepart() {
        return this._dateDepart;
    }
    set dateDepart(depart) {
        this._dateDepart = depart;
    }
    get dateArrive() {
        return this.dateArrive;
    }
    set dateArrive(arrive) {
        this.dateArrive = arrive;
    }
    get weigth() {
        return this._weigth;
    }
    set weigth(weigth) {
        this._weigth = weigth;
    }
    get statusGlobal() {
        return this._statusGlobal;
    }
    set statusGlobal(statusg) {
        this._statusGlobal = statusg;
    }
    get status() {
        return this._status;
    }
    set status(status) {
        this._status = status;
    }
    get nombreColis() {
        return this._nombreColis;
    }
    set nombreColis(_nombreColis) {
        this._nombreColis = this._nombreColis;
    }
    set setProducts(products) {
        this.products = products;
    }
    get getProducts() {
        return this.products;
    }
    calculateTotal() {
        return this.products.reduce((total, product) => total + this.calculateAmount(product), 0);
    }
    removeProduit(product) {
        this.products = this.products.filter((p) => p !== product);
    }
    calculPoidsRestant() {
        if (this?._weigth) {
            let poidsrestant = 0;
            this.products.forEach((product) => {
                poidsrestant = poidsrestant + product.weight;
            });
            return this._weigth - poidsrestant;
        }
        return 0;
    }
    getNbrProduct() {
        return this.products.length;
    }
    //
    info() {
        const tr = document.createElement("tr");
        tr.className = "tr-hoverable";
        tr.innerHTML = `
        <td>
          <div class="flex items-center gap-3">
            <div class="avatar">
              <div class="mask mask-squircle w-12 h-12">
                <img
                  src="https://www.inc-conso.fr/sites/default/files/avion-800_1.png"
                  alt="Avatar Tailwind CSS Component"
                />
              </div>
            </div>
            <div>
              <div class="font-bold">101</div>
              <div class="border-2 border-white text-xs opacity-50 badge badge-xs badge-error"></div>
            </div>
          </div>
        </td>
        <td>
          ${this.from}
          <br />
          <span class="text-xs opacity-50">
            le 10/10/2004
          </span>
        </td>
        <td>
        ${this.to}
        <br />
        <span class="text-xs opacity-50">
            le 10/10/2004
          </span>
        </td>
        <td>
          ${this.distance}
        </td>
        `;
        return tr;
    }
}
export class Maritime extends Cargo {
    products;
    _type;
    constructor(distance, from, to, dateDepart, dateArrive, weigth, nombreColis, statusGlobal = "ouvert", status = "en attente") {
        super(distance, from, to, dateDepart, dateArrive, weigth, nombreColis, statusGlobal, status);
        this.products = [];
        this._type = "Maritime";
    }
    addProduct(product) {
        if (this.statusGlobal == "ferme") {
            console.log("Impossible to add");
            return;
        }
        if (product instanceof Fragile) {
            console.log("Impossible to add");
            return;
        }
        if (((typeof this.nombreColis != 'undefined') && this.products.length == this.nombreColis) || (typeof this.weigth != 'undefined' && this.calculPoidsRestant() < product.weight)) {
            console.log("Impossible d'ajouter la cargaison est pleine!");
            return;
        }
        this.products.push(product);
    }
    calculateAmount(product) {
        if (product instanceof Fragile) {
            console.log("Impossible to add");
            return 0;
        }
        let amount;
        if (product instanceof Chemical) {
            amount = 500 * product.weight * product.toxicity + 10000;
        }
        else if (product instanceof Material) {
            amount = 400 * product.weight * this.distance;
        }
        else {
            amount = 90 * product.weight * this.distance + 5000;
        }
        return amount > 10000 ? amount : 10000;
    }
}
export class Air extends Cargo {
    products;
    _type;
    constructor(distance, from, to, dateDepart, dateArrive, weigth, nombreColis, statusGlobal = "ouvert", status = "en attente") {
        super(distance, from, to, dateDepart, dateArrive, weigth, nombreColis, statusGlobal, status);
        this.products = [];
        this._type = "Aerienne";
    }
    addProduct(product) {
        if (this.statusGlobal == "ferme") {
            console.log("Impossible to add");
            return;
        }
        if (product instanceof Chemical) {
            console.log("Impossible to add");
            return;
        }
        if (((this.weigth != null) && this.calculPoidsRestant() < product.weight) || ((this.nombreColis != null) && this.products.length == this.nombreColis)) {
            console.log("Impossible d'ajouter la cargaison est pleine!");
            return;
        }
        this.products.push(product);
    }
    calculateAmount(product) {
        if (product instanceof Chemical) {
            console.log("Impossible to add");
            return 0;
        }
        let amount;
        if (product instanceof Food) {
            amount = 300 * product.weight * this.distance + 5000;
        }
        else {
            amount = 1000 * product.weight * this.distance;
        }
        return amount > 10000 ? amount : 10000;
    }
}
export class Road extends Cargo {
    products;
    _type;
    constructor(distance, from, to, dateDepart, dateArrive, weigth, nombreColis, statusGlobal = "ouvert", status = "en attente") {
        super(distance, from, to, dateDepart, dateArrive, weigth, nombreColis, statusGlobal, status);
        this.products = [];
        this._type = "Terrestre";
    }
    addProduct(product) {
        if (this.statusGlobal == "ferme") {
            console.log("Impossible to add");
            return;
        }
        if (product instanceof Chemical) {
            console.log("Impossible to add");
            return;
        }
        if ((this.products.length == this?.nombreColis) || (this.weigth != null && this.calculPoidsRestant() < product.weight)) {
            console.log("Impossible d'ajouter la cargaison est pleine!");
            return;
        }
        this.products.push(product);
    }
    calculateAmount(product) {
        let amount;
        if (product instanceof Food) {
            amount = 100 * product.weight * this.distance;
        }
        else {
            amount = 200 * product.weight * this.distance;
        }
        return amount > 10000 ? amount : 10000;
    }
}
