/**
 * =================================================================
 * APUNTES DE MÉTODOS DE OBJETOS
 * =================================================================
 * * Usaremos este objeto de ejemplo:
 */
const pelicula = {
    titulo: "Interstellar",
    anio: 2014,
    director: "Christopher Nolan",
    // Propiedad anidada (Objeto dentro de objeto)
    ratings: {
        imdb: 8.6,
        rottenTomatoes: "72%"
    },
    // Propiedad anidada (Array dentro de objeto)
    actores: [
        { nombre: "Matthew McConaughey", personaje: "Cooper" },
        { nombre: "Anne Hathaway", personaje: "Brand" }
    ]
};

// =================================================================
// 1. Acceso a Propiedades (Notación de punto vs. Corchetes)
// =================================================================

// 1a. Notación de Punto (la más común)
// Se usa cuando sabes el nombre de la propiedad.
console.log(pelicula.titulo); // "Interstellar"

// Para acceder a objetos ANIDADOS, sigues encadenando puntos:
console.log(pelicula.ratings.imdb); // 8.6

// Para acceder a arrays ANIDADOS, encadenas punto y corchetes:
console.log(pelicula.actores[0].nombre); // "Matthew McConaughey"


// 1b. Notación de Corchetes
// Se usa cuando el nombre de la propiedad es DINÁMICO (viene de una variable).
const propiedadABuscar = "titulo";
console.log(pelicula[propiedadABuscar]); // "Interstellar"
// (Esto es lo mismo que pelicula.titulo)

// Ejemplo práctico:
function getPropiedad(prop) {
    // No podemos usar pelicula.prop (buscaría una propiedad llamada "prop")
    // Usamos corchetes para que use el VALOR de la variable 'prop'
    return pelicula[prop];
}
console.log(getPropiedad("anio")); // 2014


// =================================================================
// 2. Object.keys(objeto)
// =================================================================
/**
 * Devuelve un ARRAY con los NOMBRES (claves) de las propiedades
 * de un objeto.
 * * Uso principal: Iterar sobre las propiedades de un objeto.
 */
const claves = Object.keys(pelicula);
// Resultado 'claves': ["titulo", "anio", "director", "ratings", "actores"]

// Ejemplo: Imprimir todas las claves y sus valores
claves.forEach(clave => {
    // Usamos notación de corchetes porque 'clave' es una variable
    console.log(`Propiedad: ${clave}, Valor: ${pelicula[clave]}`);
});


// =================================================================
// 3. Object.values(objeto)
// =================================================================
/**
 * Devuelve un ARRAY con los VALORES de las propiedades
 * de un objeto.
 */
const valores = Object.values(pelicula);
// Resultado 'valores': ["Interstellar", 2014, "Christopher Nolan", {imdb: ...}, [{...}]]


// =================================================================
// 4. Object.entries(objeto)
// =================================================================
/**
 * Devuelve un ARRAY de arrays, donde cada subarray es un par [clave, valor].
 * Es la forma moderna y más útil de iterar un objeto.
 * * Uso principal: Recorrer un objeto con .forEach() o .map()
 * usando "desestructuración".
 */
const entradas = Object.entries(pelicula);
/*
Resultado 'entradas':
[
  [ "titulo", "Interstellar" ],
  [ "anio", 2014 ],
  [ "director", "Christopher Nolan" ],
  [ "ratings", {imdb: ...} ],
  [ "actores", [{...}] ]
]
*/

// Ejemplo: Iterar con .forEach y desestructuración
Object.entries(pelicula).forEach( ([clave, valor]) => {
    // [clave, valor] se asigna automáticamente (ej. clave="titulo", valor="Interstellar")
    console.log(`Clave: ${clave}, Valor: ${valor}`);
});
// (Esto es muy útil para tu ejercicio de festivos:
// Object.entries(festivos).forEach( ([fecha, descripcion]) => ... )