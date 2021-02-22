interface Pajaro {
  volar(): void; 
  dejarHuevos(): void;
}

interface Pez {
  nadar(): void;
  dejarHuevos(): void;
}

declare function obtenerMascotaPequeña(): Pez | Pajaro;

const mascota = obtenerMascotaPequeña();


// if ("nadar" in mascota) { // Esta funcion existe dentro de mi objeto mascota que no se si es pez o pajaro?
//   mascota.nadar();
// }

// ----------- Otra manera de validar si la mascota es un Pez -----------------

function esPez(mascota: Pez | Pajaro): mascota is Pez{
  return (mascota as Pez).nadar !== undefined; // Mascota as Pez es decirle a TS que si o si esa variable es de tipo pez
}

if (esPez(mascota)) {
  mascota.nadar();
}
else {
  mascota.volar();
}

// ----------- Diferencias interface y type -----------------

// ----------- INTERFACES -----------

interface Animal {
  nombre: string;
}

interface Animal {
  tamaño: number;
}

// Extender
interface Tigre extends Animal {
  genero: string;
}

const tigre: Tigre = {
  nombre: "Juan",
  genero: "Macho",
  tamaño: 100 // Podemos acceder a ambas propiedades de las interfaces que se llaman igual, esto NO se puede hacer en types
}

// ----------- TYPES -----------

type Animal2 = {
  nombre: string;
}

// Extender
type Tigre2 = Animal2 & {
  genero: string;
}

const tigre2: Tigre2 = {
  nombre: "José",
  genero: "Macho"
}

