/*Una interfaz es como una clase abstracta, la diferencia es que quien la implementa 
debe implementarla en su totalidad, es un contrato.  */

//---------------------- Manera basica ---------------------
function printLabel(obj: { label: string }) { // Declaramos aca mismo una interface
  console.log(obj.label);
}

const testObj = { size: 20, label: 'test' }

printLabel(testObj); // No da error ya que existe label dentro del objeto


//---------------------- Otra manera ----------------------

interface Persona {
  nombre: string;
  edad?: number; // Parametro opcional
}

function caminar(persona: Persona): void{
  console.log("La persona camina y se llama " + persona.nombre);
}

let nueva_persona = { nombre: "Indio Solari" , apellido: "Perez"}; // Creamos objetos del tipo de la interfaz y podemos agregar mas atributos que los que posee la interfaz
caminar(nueva_persona);

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

//---------------------- De funcion ----------------------

interface General {
  (nombre: string, apellido: string, edad: number):void // Una funcion que debe tener los mismo parametros y el mismo return
}

let funcionGeneral: General;
funcionGeneral = function (nombre: string, apellido: string, edad: number): void {
  console.log("Implemente una interface de funcion");
}

funcionGeneral("Juan", "Pedro", 33);

export default {}