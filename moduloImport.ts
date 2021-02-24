import { nombre, Persona, Humano, mostrar } from './modulo' // importamos todo
// import * from './modulo.ts // No se recomienda importar todo, puede que no lo necesitemos
// import * as paquete from './modulo.ts // Mas recomendable

// Implemento const
console.log(nombre);

// Implemento clase
const persona: Persona = { edad: 22 };

// Implemento funcion
mostrar();

// Implemento interface
const humano: Humano = { altura: 166 };
