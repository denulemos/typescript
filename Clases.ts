class Hola {
  mensaje: string;

  constructor(mensaje: string) {
    this.mensaje = mensaje;
  }

  Saludar() {
    return 'Hola: ' +  this.mensaje;
  }
}

let hola = new Hola("Como estas?"); // Creamos instancia de la clase
hola.mensaje; // Accedemos a sus atributos
console.log(hola.Saludar()); // Accedemos a sus metodos

// ---------------- Herencia ------------------

class Animal{
  public nombre: string; // Acceder desde donde queramos
  private tamaño: number;
  readonly edad: number;
  constructor(nombre: string, tamaño: number, edad: number) {
    this.nombre = nombre;
    this.tamaño = tamaño;
    this.edad= edad;
  }

  // GETTER
  get getNombre(): string {
    return this.nombre;
  }

  // SETTER
  set setNombre(nombre: string): void {
    this.nombre = nombre;
  }

  public esGrande() {
    if (this.tamaño > 10) {
      return true;
    }
    else {
      return false;
    }
  }

}

class Serpiente extends Animal { // Hereda de animal, como Java
  constructor(nombre: string, tamaño: number, edad: number) {
    super(nombre, tamaño, edad); // inicializamos propiedad heredada de la clase padre
  }
}

let serpiente = new Serpiente("Snake", 20, 15);
serpiente.nombre;
//serpiente.tamaño; // No podemos, es private, solo se accede desde dentro de la clase, solo mediante un get
serpiente.edad; // Se puede leer pero NO modificar
