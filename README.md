# Typescript 🚀️

## ¿Qué es Typescript? 👍

* Es un lenguaje de alto nivel.
* Aplica POO (Paradigma Orientado a Objectos)
* Compila a JS Vanilla. Se puede combinar TS y JS en un mismo proyecto.
* Es un super set de JS. Gracias a las funcionalidades de TS podemos potenciar nuestro codigo JS.
* Muchos de los frameworks usan TS por defecto, como Angular, y React permite su aplicacion.
* Se busca que el help del codigo sea claro para el desarrollador.
* Es mantenido por Microsoft.
* Youtube, Facebook, Medium, Amazon, etc.. usan TS.
* Hay 2 tipos de errores: Succint y Detailed.

## Instalacion 🚀️

* Necesitamos instalar NodeJS y NPM
* Correr `npm install -g typescript`, acá instalamos el compilador de TS.
* Para verificar la instalacion, corremos `tsc` en consola.
* Para ejecutar un archivo TS corremos `tsc .\Archivo.ts` en consola, esto nos generará un archivo .js con el codigo TS compilado a JS, el cual lo ejecutamos con `node Archivo.js`

## Tipos de datos

* `boolean`
* `number `(float o int)
* `string`
* `Array <number>` o `number[]` o `[string, number]`
* `enum Color { Red, Blue} ` luego lo referencio `let c: Color = Color.Red`
* `unknown` cuando no sabemos qué tipo es, se usa mucho cuando se migra de JS a TS, pero NO es recomendable.
* `any`
* `void` la funcion no retorna ningun valor
* `undefined` y `null`, una funcion puede devolver alguno de ambos.
* `never` los valores que nunca ocurren, se usa en catch mucho.
* `object` es un objeto
* `declare function create (o: object | null) : void` esta funcion puede recibir o un objeto o un null, nada mas.
* Si quiero acceder a un metodo exclusivo de un tipo de dato, le aviso a TS con anticipacion `let func : number = (valor as string).length`


