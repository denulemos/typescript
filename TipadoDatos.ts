// En typescript no podemos darle un valor numerico a una variable inicializada como String, en JS si.

// ----------- Booleans -------------------
let si: boolean = true;
let no: boolean = false;

// ----------- Number -------------------
var numero = 5; // No se recomienda emplear var
const edad = 22; // Constante. No es modificable

// ----------- String -------------------
let nombre: string = "Hola"; // Siempre se usa let para variables. Su valor es modificable.


// ----------- Array -------------------
let numeros: number[] = [1, 2, 3, 4];
let nombres: string[] = ["1", "2", "3", "4"];

let coleccionNumeros: Array<number> = [1, 2, 3, 4, 5];

// ----------- Tupla -------------------
let tupla: [number, string, boolean];
tupla = [23, "hola", true];
