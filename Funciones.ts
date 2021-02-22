// ------------------- Funcion con nombre -------------------
function funcion(x, y) {
  return x + y;
}

// ------------------- Anonima -------------------
let funcion2 = function (x, y) {
  return x + y;
}

//------------------- Arrow -------------------
const funcion3 = (x, y) => {
  return x + y;
}

//------------------- Con tipo -------------------

function funcion4(x: number, y: number) : number{ // No siempre es necesario aclarar que devuelve
  return x  + y;
}

//------------------- Con params opcionales -------------------
const funcion5 = (x: number = 10, y?: number) => { // Si no llega x es 10. El parametro "y" puede no estar
  return x;
}