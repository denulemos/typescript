// ------------------- Funcion con nombre -------------------
function funcion(x, y) {
    return x + y;
}
// ------------------- Anonima -------------------
var funcion2 = function (x, y) {
    return x + y;
};
//------------------- Arrow -------------------
var funcion3 = function (x, y) {
    return x + y;
};
//------------------- Con tipo -------------------
function funcion4(x, y) {
    return x + y;
}
//------------------- Con params opcionales -------------------
var funcion5 = function (x, y) {
    if (x === void 0) { x = 10; }
    return x;
};
