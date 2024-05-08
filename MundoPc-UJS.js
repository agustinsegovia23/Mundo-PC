class DispositivoEntrada {
  constructor(tipoEntrada, marca) {
    this._tipoEntrada = tipoEntrada;
    this._marca = marca;
  }

  get tipoEntrada() {
    return this._tipoEntrada;
  }

  set tipoEntrada(tipoEntrada) {
    this._tipoEntrada = tipoEntrada;
  }

  get marca() {
    return this._marca;
  }

  set marca(marca) {
    this._marca = marca;
  }
}

class Raton extends DispositivoEntrada {
  static contadorRatones = 0;

  constructor(tipoEntrada, marca) {
    super(tipoEntrada, marca);
    this._idRaton = ++Raton.contadorRatones;
  }

  toString() {
    return `ID Raton: ${this._idRaton} | Tipo de Entrada: ${this._tipoEntrada} | Marca: ${this._marca}`;
  }
}

// Prueba Clase Raton

let raton1 = new Raton("USB", "Logitech");
let raton2 = new Raton("Bluetooth", "Genius");
console.log(raton1.toString());
console.log(raton2.toString());

// Fin Prueba Clase Raton

class Teclado extends DispositivoEntrada {
  static contadorTeclados = 0;

  constructor(tipoEntrada, marca) {
    super(tipoEntrada, marca);
    this._idTeclado = ++Teclado.contadorTeclados;
  }

  toString() {
    return `ID Teclado: ${this._idTeclado} | Tipo de Entrada: ${this._tipoEntrada} | Marca: ${this._marca}`;
  }
}
//Prueba clase Teclado

let teclado1 = new Teclado("USB", "Red Dragon");
let teclado2 = new Teclado("Cable", "Sentey");
console.log(teclado1.toString());
console.log(teclado2.toString());

// Fin Prueba Clase Tecaldo
class Monitor {
  static contadorMonitores = 0;

  constructor(marca, tamanio) {
    this._idMonitor = ++Monitor.contadorMonitores;
    this._marca = marca;
    this._tamanio = tamanio;
  }

  get idMonitor() {
    return this._idMonitor;
  }
  get marca() {
    return this._marca;
  }
  set marca(marca) {
    this._marca = marca;
  }
  set tamanio(tamanio) {
    this._tamanio = tamanio;
  }
  get tamanio() {
    return this._tamanio;
  }

  toString() {
    return `ID Monitor: ${this._idMonitor} | Marca: ${this._marca} | Tamaño: ${this._tamanio}`;
  }
}

//Prueba clase Monitor

let monitor1 = new Monitor("Phillips", "15 Pulgadas");
let monitor2 = new Monitor("HP", "18 Pulgadas");
console.log(monitor1.toString());
console.log(monitor2.toString());
// FIN clase Monitor

class Computadora {
  static contadorComputadoras = 0;

  constructor(nombre, monitor, teclado, raton) {
    this._idComputadora = ++Computadora.contadorComputadoras;
    this._nombre = nombre;
    this._monitor = monitor;
    this._teclado = teclado;
    this._raton = raton;
  }
  toString() {
    return `Computadora ${this._idComputadora}: ${this._nombre}\n${this._monitor}\n ${this._raton}\n${this._teclado}`;
  }
}

let computadora1 = new Computadora("Hp", monitor1, teclado2, raton2);
let computadora2 = new Computadora("APPLE", monitor2, teclado2, raton2);

console.log(computadora2.toString());
console.log(computadora1.toString());

class Orden {
  static contadorOrdenes = 0;

  constructor() {
    this._idOrden = ++Orden.contadorOrdenes;
    this._computadoras = [];
  }

  get idOrden() {
    return this._idOrden;
  }

  agregarComputadora(computadora) {
    this._computadoras.push(computadora);
  }

  mostrarOrden() {
    let computadorasOrden = "";
    for (let computadora of this._computadoras) {
      computadorasOrden += `${computadora}`;
    }

    console.log(`Orden: ${this._idOrden}, Computadoras:\n${computadorasOrden}`);
  }
}

let orden1 = new Orden();

orden1.agregarComputadora(computadora1);
orden1.agregarComputadora(computadora2);

orden1.mostrarOrden();
