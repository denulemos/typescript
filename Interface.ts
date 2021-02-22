//---------------------- Manera basica ---------------------
function printLabel(obj: { label: string }) { // Declaramos aca mismo una interface
  console.log(obj.label);
}

const testObj = { size: 20, label: 'test' }

printLabel(testObj); // No da error ya que existe label dentro del objeto


//---------------------- Otra manera ----------------------

// Declaramos interfaz
interface Objeto {
  label: string;
}

function printLabel2(obj: Objeto) {
  console.log(obj.label);
}

const testObj2 = { size: 20, label: 'test' }

printLabel2(testObj2); // No da error ya que existe label dentro del objeto

//---------------------- Con props opcionales ----------------------


// Declaramos interfaz
interface Objeto2 {
  label: string;
  name?: string; // name NO es requerido
  readonly secret: number; // No se puede redefinir, solo leer
}

function printLabel3(obj: Objeto2) {
  console.log(obj.label);
}

let testObj3 : Objeto2 = { secret: 1, label: 'test' }

printLabel3(testObj3); 

export default {}