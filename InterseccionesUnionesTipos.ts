interface Pajaro {
  volar(): void; // Funciones que no devuelven nada
  dejarHuevos(): void;
}

interface Pez {
  nadar(): void;
  dejarHuevos(): void;
}

declare function obtenerMascotaPequeña(): Pez | Pajaro // Puede devolver o un pez o un pajaro

const mascota = obtenerMascotaPequeña();
mascota.dejarHuevos(); // Metodo que comparten ambas mascotas, menos el nadar y el volar.

// --------- Con instersecciones ----------

type Persona = {
  nombre: string;
  apellido: string;
}

type Cliente = {
  numeroCliente: number;
}

type NuevoCliente = Persona & Cliente;
const x: NuevoCliente;

x.apellido;
x.nombre;
x.numeroCliente; // puedo acceder a las propiedades de ambas interfaces