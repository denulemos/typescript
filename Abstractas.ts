abstract class Padre{
  abstract caminar(): void // Solo nombra a los metodos, corresponde a quien extiende implementarlos
  abstract gatear(): void
  
  saludar(saludo:string): string{ // Tambien podemos implementarla directamente en la abstracta, los hijos pueden sobreescribirla
    return saludo;
  }
}

class Hijo extends Padre {
  caminar(): void{
    console.log("Camino")
  }
  gatear(): void{
    console.log("Gateo")
  }
}

class Primo extends Padre { //Mas de una clase puede extender de la misma abstracta
  caminar(): void{
    console.log("Camino Primo")
  }
  gatear(): void{
    console.log("Gateo Primo")
  }
}