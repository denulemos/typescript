// -------------------- Funcion generica ---------------------
function mostrar<T>(dato: T): T{ // T es por convencion en generics, puede ser cualquier otra cosa
  return dato;
}

// Puedo pasarle cualquier tipo de dato y seguira funcionando
console.log(mostrar(3));
console.log(mostrar('hola'));

// --------------------  Clase generica ---------------------
class Persona<T>{ // la clase en si NO es generica, pero va a poder contener funciones y propiedades genericas
  nombre: string
  edad: T

   Mostrar: (dato: T)=> T // Recibe T y devuelve T

}

// --------------------  Interface generica ---------------------
interface Personita <T>{
  nombre: T
}

let obj: Personita<string> = {nombre: "Manuel"} // A la hora de la implementacion de la clase, debemos definir si o si que es