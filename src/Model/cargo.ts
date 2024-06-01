export type ToxicityRange = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
let x: (number | string)[];

export interface owner {
  name: string;
  username: string;
  email?: string;
  address: string;
  phone: string;

}

type EtatColis = "en attente" | "en cours" | "arrive" | "recuperer"|"perdu"|"archive"|"annule";
export abstract class Product {
  protected code: number;
  protected abstract type: string;
  constructor(protected _libelle: string, protected _weight: number,protected _client : owner,protected _owner: owner,protected _status:EtatColis="en attente") {
    this.code = ++Cargo.genrerCode;
  }
  get Code(): number {
    return this.code;
  }
  set Code(value: number) {
    this.code = value;
  }

  get status(): EtatColis {
    return this._status;
  }
  set status(value: EtatColis) {
    this._status = value;
  }
  

  get libelle(): string {
    return this._libelle;
  }
  set libelle(value: string) {
    this._libelle = value;
  }

  get weight(): number {
    return this._weight;
  }
  set weight(value: number) {
    this._weight = value;
  }

  set client(value: owner) {
    this._client = value;
  }

  get client(): owner {
    return this._client;
  }

  set owner(value: owner) {
    this._owner = value;
  }

  get owner(): owner {
    return this._owner;
  }

  
  //
  info(): void {
    console.log(`Name: ${this.code}, Weight: ${this.weight}`);
  }
}

export class Food extends Product {
  protected type: string;
  constructor( libelle: string, weight: number,client : owner, owner: owner, _status = "en attente") {
    super(libelle, weight, client,owner);
    this.type = "food";
   
  }
}

export abstract class Material extends Product {
  constructor(libelle : string, weight: number,client : owner, owner: owner, _status = "en attente") {
    super(libelle, weight, client,owner);

  }
}

export class Unbreakable extends Material {
  protected type: string;
  constructor(libelle : string, weight: number,client : owner, owner: owner, _status = "en attente") {
    super( libelle, weight, client,owner);
    this.type = "unbreakable";
  }
}

export class Fragile extends Material {
  protected type: string;
  constructor(libelle : string, weight: number,client : owner, owner: owner, _status = "en attente") {
    super( libelle, weight, client,owner);
    this.type = "fragile";
  
  }
}

export class Chemical extends Product {
  protected type: string;
  constructor(libelle : string, weight: number,client : owner, owner: owner, private _toxicity: ToxicityRange, _status = "en attente") {
    super(libelle, weight, client,owner);
    this.type = "chemical";

  }
  get toxicity(): ToxicityRange {
    return this._toxicity;
  }
  set toxicity(value: ToxicityRange) {
    this._toxicity = value;
  }
}
const Idexist = (id: number, data: { [key: string]: number }) => {
  for (const [key, value] of Object.entries(data)) {
    if (value === id) {
      return true;
    }
  }
  return false;
}
//================================================================
export type EtatCargo = "en attente" | "en cours" | "arrive" |"perdu";
export type EtatGlobal = "ferme"|"ouvert";
export abstract class Cargo {
  static genrerCode =  Math.floor(Math.random() * 1000000000) + 2000000000;
  private code : number;
  protected abstract _type : string;
  protected abstract products: Product[];
  constructor(protected _distance: number, protected _from:string, protected _to:string,protected _dateDepart:string,protected _dateArrive:string,protected _weigth?:number,protected _nombreColis?:number,protected _statusGlobal:EtatGlobal="ouvert",protected _status:EtatCargo="en attente") {
     this.code = ++Cargo.genrerCode;

  }
  get Code(): number {
    return this.code;
  }
  set Code(value: number) {
    this.code = value;
  }

get type(): string {
  return this._type;
}

  get distance(): number {
    return this._distance;

  }
 
  set distance(distance: number) {
    this._distance = distance;
  }
  //
  get from(): string {
    return this._from;
  }
  set from(from: string) {
    this._from = from;
  }
  //
  get to(): string {
    return this._to;
  }
  set to(to: string) {
    this._to = to;
  }

  get dateDepart(): string {
    return this._dateDepart;
  }
  set dateDepart(depart: string) {
    this._dateDepart = depart;
  }

  get dateArrive(): string {
    return this.dateArrive;
  }
  set dateArrive(arrive: string) {
    this.dateArrive = arrive;
  }
  get weigth(): number|undefined {
    return this._weigth;
  }
  
  set weigth(weigth: number) {
    this._weigth = weigth;
  }

  get statusGlobal(): EtatGlobal {
    return this._statusGlobal;
  }
  set statusGlobal(statusg: EtatGlobal) {
    this._statusGlobal = statusg;
  }
  get status(): EtatCargo {
    return this._status;
  }
  set status(status: EtatCargo) {
    this._status = status;
  }
  get nombreColis(): number|undefined {
    return this._nombreColis;
  }

  set nombreColis(_nombreColis: number) {
    this._nombreColis = this._nombreColis;
  }
  set setProducts(products: Product[]) {
    this.products = products;
  }
  get getProducts(): Product[] {
    return this.products;
  }

  //
  abstract addProduct(product: Product): void;
  abstract calculateAmount(product: Product): number;
  calculateTotal(): number {
    // let total: number = 0;
    // this.products.forEach(product => {
    //     total += this.calculateAmount(product);
    // });
    // return total;
    return this.products.reduce(
      (total, product) => total + this.calculateAmount(product),
      0
    );
  }
  claculPoids(): number {
    return this.products.reduce(
      (total, product) => total + product.weight,
      0
    );
  }
  getNbrProduct(): number {
    return this.products.length;
  }
  //
  info(): HTMLTableRowElement {
    const tr: HTMLTableRowElement = document.createElement("tr");
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
  products: (Food | Unbreakable | Chemical)[];
  protected _type: string;
  constructor(distance: number, from:string, to:string,dateDepart:string,dateArrive:string,weigth?:number,nombreColis?:number,statusGlobal:EtatGlobal="ouvert",status:EtatCargo="en attente") {
    super(distance,from,to,dateDepart,dateArrive,weigth,nombreColis,statusGlobal,status);
    this.products = [];
    this._type = "Maritime";
  }
  addProduct(product: Food | Unbreakable | Chemical): void {
    if (product instanceof Fragile) {
      console.log("Impossible to add");
      return;
    }
    if ((( this.nombreColis != null) && this.products.length == this.nombreColis) || (this.weigth != null && this.weigth - this.claculPoids()<product.weight)) {
      console.log("Impossible d'ajouter la cargaison est pleine!");
      return;
    }
    this.products.push(product);
  }
  calculateAmount(product: Food | Unbreakable | Chemical): number {
    if (product instanceof Fragile) {
      console.log("Impossible to add");
      return 0;
    }
    let amount: number;
    if (product instanceof Chemical) {
      amount = 500 * product.weight * product.toxicity + 10000;
    } else if (product instanceof Material) {
      amount = 400 * product.weight * this.distance;
    } else {
      amount = 90 * product.weight * this.distance + 5000;
    }

    return amount>10000?amount:10000;
  }
}

export class Air extends Cargo {
  products: (Food | Material)[];
  protected _type: string;
  constructor(distance: number, from:string, to:string,dateDepart:string,dateArrive:string,weigth?:number,nombreColis?:number,statusGlobal:EtatGlobal="ouvert",status:EtatCargo="en attente") {
    super(distance,from,to,dateDepart,dateArrive,weigth,nombreColis,statusGlobal,status);
       
    this.products = [];
    this._type = "Aerienne";
  }
  addProduct(product: Food | Material): void {
    if (product instanceof Chemical) {
      console.log("Impossible to add");
      return;
    }
    if ((( this.weigth !=null) && product.weight > this.weigth - this.claculPoids()) || ((this.weigth != null && this.weigth - this.claculPoids()<product.weight))) {
      console.log("Impossible d'ajouter la cargaison est pleine!");
      return;
    }
    this.products.push(product);
  }
  calculateAmount(product: Food | Material): number {
    if (product instanceof Chemical) {
      console.log("Impossible to add");
      return 0;
    }
    let amount: number;
    if (product instanceof Food) {
      amount = 300 * product.weight * this.distance + 5000;
    } else {
      amount = 1000 * product.weight * this.distance;
    }

    return amount>10000?amount:10000;
  }
}

export class Road extends Cargo {
  products: (Food | Material)[];
  protected _type: string;
  constructor(distance: number, from:string, to:string,dateDepart:string,dateArrive:string,weigth?:number,nombreColis?:number,statusGlobal:EtatGlobal="ouvert",status:EtatCargo="en attente") {
    super(distance,from,to,dateDepart,dateArrive,weigth,nombreColis,statusGlobal,status);
       this.products = [];
    this._type = "Terrestre";
  }
  addProduct(product: Food | Material): void {
    if (product instanceof Chemical) {
      console.log("Impossible to add");
      return;
    }
    if (( this.products.length == this?.nombreColis )|| (this.weigth != null && this.weigth - this.claculPoids()<product.weight)) {
      console.log("Impossible d'ajouter la cargaison est pleine!");
      return;
    }
    this.products.push(product);
  }
  calculateAmount(product: Food | Material): number {
    let amount: number;
    if (product instanceof Food) {
      amount = 100 * product.weight * this.distance;
    } else {
      amount = 200 * product.weight * this.distance;
    }

    return amount>10000?amount:10000;
  }
}
