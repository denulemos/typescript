interface Todo{
  titulo: string;
  descripcion: string;
}

type PartialTodo = Partial<Todo>; // Convierte las propiedades de Todo a opcionales

type ReadOnlyTodo = Readonly<Todo>; // Convierte todo a ReadOnly

type T = NonNullable<string | number | null | undefined> // Eliminamos todo lo null o undefined, solo aceptamos String o Numerico

type RequiredTodo = Required<Todo>; // Vuelve todo requerido
