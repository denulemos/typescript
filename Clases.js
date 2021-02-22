var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Hola = /** @class */ (function () {
    function Hola(mensaje) {
        this.mensaje = mensaje;
    }
    Hola.prototype.Saludar = function () {
        return 'Hola: ' + this.mensaje;
    };
    return Hola;
}());
var hola = new Hola("Como estas?"); // Creamos instancia de la clase
hola.mensaje; // Accedemos a sus atributos
console.log(hola.Saludar()); // Accedemos a sus metodos
// ---------------- Herencia ------------------
var Animal = /** @class */ (function () {
    function Animal(nombre, tamaño, edad) {
        this.nombre = nombre;
        this.tamaño = tamaño;
        this.edad = edad;
    }
    Animal.prototype.esGrande = function () {
        if (this.tamaño > 10) {
            return true;
        }
        else {
            return false;
        }
    };
    return Animal;
}());
var Serpiente = /** @class */ (function (_super) {
    __extends(Serpiente, _super);
    function Serpiente(nombre, tamaño, edad) {
        return _super.call(this, nombre, tamaño, edad) || this;
    }
    return Serpiente;
}(Animal));
var serpiente = new Serpiente("Snake", 20, 15);
serpiente.nombre;
//serpiente.tamaño; // No podemos, es private, solo se accede desde dentro de la clase, solo mediante un get
serpiente.edad; // Se puede leer pero NO modificar
