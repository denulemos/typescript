// -------------------- Funcion generica ---------------------
function mostrar(dato) {
    return dato;
}
// Puedo pasarle cualquier tipo de dato y seguira funcionando
console.log(mostrar(3));
console.log(mostrar('hola'));
// --------------------  Clase generica ---------------------
var Persona = /** @class */ (function () {
    function Persona() {
    }
    return Persona;
}());
var obj = { nombre: "Manuel" }; // A la hora de la implementacion de la clase, debemos definir si o si que es
