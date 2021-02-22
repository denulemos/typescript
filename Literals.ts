type Color = "Rojo" | "Verde" | "Azul" // Literals

//const color: Color = "amarillo"; // no podemos asignarle otro color que no sea lo que aclaramos arriba
const color: Color = "Rojo";


// ------- Con interfaces -------

interface ValidacionExitosa {
  esValido: true; // Siempre será true
  reason: null;
}

interface ValidacionNoExitosa {
  esValido: false; 
  reason: string;
}

type ResultadoValidacion = ValidacionExitosa | ValidacionNoExitosa; // Este type puede contener cualquiera de ambas interfaces

const result: ResultadoValidacion = {
  // Es validacionExitosa 
  esValido: true,
  reason: null
}