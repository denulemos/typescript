// Sirve para definir un conjunto de constantes basadas en un nombre, podemos crear sets de distintos casos, 
// podemos tener enums numericos y de Strings


// Basado en numeros
enum Direccion {
  // Si no los inicializamos, se le asignara un numero a cada valor, por ejemplo, Arriba es Cero, izquierda es 3. 
  // Si a Arriba le asigno un 3, ira de forma incremental, es decir, Abajo seria 4 sin necesidad de inicializarlo
  Arriba = 3,
  Abajo, // 4
  Derecha, // 5
  Izquierda // 6
}

// Basado en String
enum DireccionTexto {
  Arriba = "UP",
  Abajo = "DOWN", 
  Derecha = "RIGHT", 
  Izquierda = "LEFT" 
}

interface Bola {
  tamaño: number
  posicionInicial: DireccionTexto
}

const bola: Bola = {
  tamaño: 10,
  posicionInicial: DireccionTexto.Abajo
  
}