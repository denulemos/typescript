"use strict";
/*Una interfaz es como una clase abstracta, la diferencia es que quien la implementa
debe implementarla en su totalidad, es un contrato.  */
exports.__esModule = true;
//---------------------- Manera basica ---------------------
function printLabel(obj) {
    console.log(obj.label);
}
var testObj = { size: 20, label: 'test' };
printLabel(testObj); // No da error ya que existe label dentro del objeto
function caminar(persona) {
    console.log("La persona camina y se llama " + persona.nombre);
}
var nueva_persona = { nombre: "Indio Solari", apellido: "Perez" }; // Creamos objetos del tipo de la interfaz y podemos agregar mas atributos que los que posee la interfaz
caminar(nueva_persona);
function printLabel2(obj) {
    console.log(obj.label);
}
var testObj2 = { size: 20, label: 'test' };
printLabel2(testObj2); // No da error ya que existe label dentro del objeto
function printLabel3(obj) {
    console.log(obj.label);
}
var testObj3 = { secret: 1, label: 'test' };
printLabel3(testObj3);
var funcionGeneral;
funcionGeneral = function (nombre, apellido, edad) {
    console.log("Implemente una interface de funcion");
};
funcionGeneral("Juan", "Pedro", 33);
exports["default"] = {};
