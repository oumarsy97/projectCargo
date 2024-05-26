type ToxicityRange = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
let x: (number | string)[];

interface owner {
  name: string;
  username: string;
  email?: string;
  address: string;
  phone: string;

}

type EtatColis = "en attente" | "en cours" | "arrive" | "recuperer"|"perdu"|"archive"|"annule";
export abstract class Product {
  constructor(protected _code: number, protected _weight: number,protected _client : owner,protected _owner: owner,protected _status:EtatColis="en attente") {}
  get name(): number {
    return this._code;
  }
  set name(value: number) {
    this._code = value;
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
    console.log(`Name: ${this.name}, Weight: ${this.weight}`);
  }
}

export class Food extends Product {
  constructor(code: number, weight: number,client : owner, owner: owner) {
    super(code, weight, client,owner);
   
  }
}

export abstract class Material extends Product {
  constructor(code: number, weight: number,client : owner, owner: owner) {
    super(code, weight, client,owner);

  }
}

export class Unbreakable extends Material {
  constructor(code: number, weight: number,client : owner, owner: owner) {
    super(code, weight, client,owner);
  }
}

export class Fragile extends Material {
  constructor(code: number, weight: number,client : owner, owner: owner) {
    super(code, weight, client,owner);
  
  }
}

export class Chemical extends Product {
  constructor(code: number, weight: number,client : owner, owner: owner, private _toxicity: ToxicityRange) {
    super(code, weight ,client,owner);
  }
  get toxicity(): ToxicityRange {
    return this._toxicity;
  }
  set toxicity(value: ToxicityRange) {
    this._toxicity = value;
  }
}

//================================================================
type EtatCargo = "en attente" | "en cours" | "arrive" | "recuperer"|"perdu";
type EtatGlobal = "ferme"|"ouvert";
export abstract class Cargo {
  static genrerCode =  Math.floor(Math.random() * 1000000000);
  private code : number;
  static readonly max: number = 10;
  protected abstract products: Product[];
  constructor(private _distance: number, private _from:string, private _to:string,private _dateDepart:string,private _dateArrive:string,private _weigth?:number,private _nombreColis?:number,private _statusGlobal:EtatGlobal="ouvert",private _status:EtatCargo="en attente") {
     this.code = ++Cargo.genrerCode;
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
  set from(distance: string) {
    this._from = distance;
  }
  //
  get to(): string {
    return this._to;
  }
  set to(distance: string) {
    this._to = distance;
  }

  get dateDepart(): string {
    return this._dateDepart;
  }
  set dateDepart(distance: string) {
    this._dateDepart = distance;
  }

  get dateArrive(): string {
    return this.dateArrive;
  }
  set dateArrive(distance: string) {
    this.dateArrive = distance;
  }
  get weigth(): number|undefined {
    return this._weigth;
  }
  
  set weigth(distance: number) {
    this._weigth = distance;
  }

  get statusGlobal(): EtatGlobal {
    return this._statusGlobal;
  }
  set statusGlobal(distance: EtatGlobal) {
    this._statusGlobal = distance;
  }
  get status(): EtatCargo {
    return this._status;
  }
  set status(distance: EtatCargo) {
    this._status = distance;
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
  constructor(distance: number, from:string, to:string,dateDepart:string,dateArrive:string,weigth:number,nombreColis?:number,statusGlobal:EtatGlobal="ouvert",status:EtatCargo="en attente") {
    super(distance,from,to,dateDepart,dateArrive,weigth,nombreColis,statusGlobal,status);
    this.products = [];
  }
  addProduct(product: Food | Unbreakable | Chemical): void {
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

    return amount;
  }
}

export class Air extends Cargo {
  products: (Food | Material)[];
  constructor(distance: number, from:string, to:string,dateDepart:string,dateArrive:string,weigth:number,nombreColis?:number,statusGlobal:EtatGlobal="ouvert",status:EtatCargo="en attente") {
    super(distance,from,to,dateDepart,dateArrive,weigth,nombreColis,statusGlobal,status);
       
    this.products = [];
  }
  addProduct(product: Food | Material): void {
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

    return amount;
  }
}

export class Road extends Cargo {
  products: (Food | Material)[];
  constructor(distance: number, from:string, to:string,dateDepart:string,dateArrive:string,weigth:number,nombreColis?:number,statusGlobal:EtatGlobal="ouvert",status:EtatCargo="en attente") {
    super(distance,from,to,dateDepart,dateArrive,weigth,nombreColis,statusGlobal,status);
       this.products = [];
  }
  addProduct(product: Food | Material): void {
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
  calculateAmount(product: Food | Material): number {
    let amount: number;
    if (product instanceof Food) {
      amount = 100 * product.weight * this.distance;
    } else {
      amount = 200 * product.weight * this.distance;
    }

    return amount;
  }
}
