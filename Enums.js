// Sirve para definir un conjunto de constantes basadas en un nombre, podemos crear sets de distintos casos, 
// podemos tener enums numericos y de Strings
// Basado en numeros
var Direccion;
(function (Direccion) {
    // Si no los inicializamos, se le asignara un numero a cada valor, por ejemplo, Arriba es Cero, izquierda es 3. 
    // Si a Arriba le asigno un 3, ira de forma incremental, es decir, Abajo seria 4 sin necesidad de inicializarlo
    Direccion[Direccion["Arriba"] = 3] = "Arriba";
    Direccion[Direccion["Abajo"] = 4] = "Abajo";
    Direccion[Direccion["Derecha"] = 5] = "Derecha";
    Direccion[Direccion["Izquierda"] = 6] = "Izquierda"; // 6
})(Direccion || (Direccion = {}));
// Basado en String
var DireccionTexto;
(function (DireccionTexto) {
    DireccionTexto["Arriba"] = "UP";
    DireccionTexto["Abajo"] = "DOWN";
    DireccionTexto["Derecha"] = "RIGHT";
    DireccionTexto["Izquierda"] = "LEFT";
})(DireccionTexto || (DireccionTexto = {}));
var bola = {
    tamaño: 10,
    posicionInicial: DireccionTexto.Abajo
};
