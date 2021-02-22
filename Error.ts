type algoComplejo = {
  foo: number,
  bar: string
}

function tomarComplejo(arg: algoComplejo) {
  console.log(arg.foo, arg.bar);
}

function getBar(): string{
  return 'algo';
}

const falla = {
  foo: 123,
  bar: getBar() // Es una funcion, no un String
};

tomarComplejo(falla); // Acá falla el codigo