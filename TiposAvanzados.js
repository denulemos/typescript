var mascota = obtenerMascotaPequeña();
// if ("nadar" in mascota) { // Esta funcion existe dentro de mi objeto mascota que no se si es pez o pajaro?
//   mascota.nadar();
// }
// ----------- Otra manera de validar si la mascota es un Pez -----------------
function esPez(mascota) {
    return mascota.nadar !== undefined; // Mascota as Pez es decirle a TS que si o si esa variable es de tipo pez
}
if (esPez(mascota)) {
    mascota.nadar();
}
else {
    mascota.volar();
}
var tigre = {
    nombre: "Juan",
    genero: "Macho",
    tamaño: 100 // Podemos acceder a ambas propiedades de las interfaces que se llaman igual, esto NO se puede hacer en types
};
var tigre2 = {
    nombre: "José",
    genero: "Macho"
};
