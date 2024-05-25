let x;
export class Product {
    constructor(_code, _weight, _client, _owner, _status = "en attente") {
        this._code = _code;
        this._weight = _weight;
        this._client = _client;
        this._owner = _owner;
        this._status = _status;
    }
    get name() {
        return this._code;
    }
    set name(value) {
        this._code = value;
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
    //
    info() {
        console.log(`Name: ${this.name}, Weight: ${this.weight}`);
    }
}
export class Food extends Product {
    constructor(code, weight, client, owner) {
        super(code, weight, client, owner);
    }
}
export class Material extends Product {
    constructor(code, weight, client, owner) {
        super(code, weight, client, owner);
    }
}
export class Unbreakable extends Material {
    constructor(code, weight, client, owner) {
        super(code, weight, client, owner);
    }
}
export class Fragile extends Material {
    constructor(code, weight, client, owner) {
        super(code, weight, client, owner);
    }
}
export class Chemical extends Product {
    constructor(code, weight, client, owner, _toxicity) {
        super(code, weight, client, owner);
        this._toxicity = _toxicity;
    }
    get toxicity() {
        return this._toxicity;
    }
    set toxicity(value) {
        this._toxicity = value;
    }
}
export class Cargo {
    constructor(_code, _distance, _from, _to, _departure, _destination, _weigth, _statusGlobal = "ouvert", _status = "en attente") {
        this._code = _code;
        this._distance = _distance;
        this._from = _from;
        this._to = _to;
        this._departure = _departure;
        this._destination = _destination;
        this._weigth = _weigth;
        this._statusGlobal = _statusGlobal;
        this._status = _status;
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
    set from(distance) {
        this._from = distance;
    }
    //
    get to() {
        return this._to;
    }
    set to(distance) {
        this._to = distance;
    }
    get departure() {
        return this._departure;
    }
    set departure(distance) {
        this._departure = distance;
    }
    get destination() {
        return this._destination;
    }
    set destination(distance) {
        this._destination = distance;
    }
    get weigth() {
        return this._weigth;
    }
    set weigth(distance) {
        this._weigth = distance;
    }
    get statusGlobal() {
        return this._statusGlobal;
    }
    set statusGlobal(distance) {
        this._statusGlobal = distance;
    }
    get status() {
        return this._status;
    }
    set status(distance) {
        this._status = distance;
    }
    calculateTotal() {
        // let total: number = 0;
        // this.products.forEach(product => {
        //     total += this.calculateAmount(product);
        // });
        // return total;
        return this.products.reduce((total, product) => total + this.calculateAmount(product), 0);
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
Cargo.max = 10;
export class Maritime extends Cargo {
    constructor(code, distance, from, to, departure, destination, weigth, statusGlobal = "ouvert", status = "en attente") {
        super(code, distance, from, to, departure, destination, weigth, statusGlobal, status);
        this.products = [];
    }
    addProduct(product) {
        if (product instanceof Fragile) {
            console.log("Impossible to add");
            return;
        }
        if (this.products.length === Maritime.max) {
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
        return amount;
    }
}
export class Air extends Cargo {
    constructor(code, distance, from, to, departure, destination, weigth, statusGlobal = "ouvert", status = "en attente") {
        super(code, distance, from, to, departure, destination, weigth, statusGlobal, status);
        this.products = [];
    }
    addProduct(product) {
        if (product instanceof Chemical) {
            console.log("Impossible to add");
            return;
        }
        if (this.products.length === Air.max) {
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
        return amount;
    }
}
export class Road extends Cargo {
    constructor(code, distance, from, to, departure, destination, weigth, statusGlobal = "ouvert", status = "en attente") {
        super(code, distance, from, to, departure, destination, weigth, statusGlobal, status);
        this.products = [];
    }
    addProduct(product) {
        if (product instanceof Chemical) {
            console.log("Impossible to add");
            return;
        }
        if (this.products.length === Road.max) {
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
        return amount;
    }
}
