/**
 * =================================================================
 * APUNTES DE MÉTODOS DE ARRAYS (Los más importantes)
 * =================================================================
 * * Usaremos este array de ejemplo para todos los métodos:
 */
const peliculas = [
    { id: 1, titulo: "Avatar", anio: 2009, rating: 6.9 },
    { id: 2, titulo: "I Am Legend", anio: 2007, rating: 7.2 },
    { id: 3, titulo: "300", anio: 2006, rating: 7.7 },
    { id: 4, titulo: "The Avengers", anio: 2012, rating: 8.1 },
    { id: 5, titulo: "Interstellar", anio: 2014, rating: 8.6 }
];
const numeros = [1, 5, 10, 20];

// =================================================================
// 1. .map() - Transformar
// =================================================================
/**
 * RECORRE un array y DEVUELVE UN NUEVO ARRAY con los resultados de
 * aplicar una función a cada elemento.
 * * - NO modifica el array original.
 * - El nuevo array tiene SIEMPRE la misma longitud que el original.
 * * Uso principal: Convertir un array de datos en otra cosa (ej. HTML,
 * o un array de strings).
 */
// Ejemplo: Obtener solo los títulos de las películas
const titulos = peliculas.map(pelicula => {
    return pelicula.titulo;
});
// Resultado de 'titulos': ["Avatar", "I Am Legend", "300", "The Avengers", "Interstellar"]

// Ejemplo: Crear strings HTML (como en tu 'imprimirTarjetas')
const tarjetasHtml = peliculas.map(peli => {
    return `<div><h2>${peli.titulo}</h2><p>Rating: ${peli.rating}</p></div>`;
});


// =================================================================
// 2. .filter() - Filtrar
// =================================================================
/**
 * RECORRE un array y DEVUELVE UN NUEVO ARRAY solo con los elementos
 * que cumplan una condición (los que devuelvan 'true').
 * * - NO modifica el array original.
 * - El nuevo array puede tener una longitud MENOR o IGUAL al original.
 * * Uso principal: Búsquedas, filtros (el núcleo de tu proyecto de películas).
 */
// Ejemplo: Encontrar películas con rating mayor a 8
const mejoresPelis = peliculas.filter(pelicula => {
    // La condición (debe devolver true o false)
    return pelicula.rating > 8;
});
// Resultado 'mejoresPelis': [{ id: 4, ... }, { id: 5, ... }]

// Ejemplo: Filtrar por año
const pelisRecientes = peliculas.filter(p => p.anio > 2010);
// Resultado 'pelisRecientes': [{ id: 4, ... }, { id: 5, ... }]


// =================================================================
// 3. .find() - Encontrar uno
// =================================================================
/**
 * RECORRE un array y DEVUELVE EL PRIMER ELEMENTO que cumpla la
 * condición.
 * * - NO modifica el array original.
 * - Si no encuentra nada, devuelve 'undefined'.
 * - No devuelve un array, devuelve el OBJETO/ELEMENTO encontrado.
 * * Uso principal: Obtener un solo ítem (ej. "buscar por ID").
 */
// Ejemplo: Encontrar la película con id = 3
const peliBuscada = peliculas.find(pelicula => {
    return pelicula.id === 3;
});
// Resultado 'peliBuscada': { id: 3, titulo: "300", anio: 2006, rating: 7.7 }

// Ejemplo: Encontrar la primera película con rating bajo
const primeraPeliMala = peliculas.find(p => p.rating < 7);
// Resultado 'primeraPeliMala': { id: 1, titulo: "Avatar", anio: 2009, rating: 6.9 }


// =================================================================
// 4. .some() - "Alguno cumple?"
// =================================================================
/**
 * RECORRE el array y comprueba si AL MENOS UN elemento cumple la
 * condición.
 * * - DEVUELVE un booleano: 'true' o 'false'.
 * - Deja de recorrer en cuanto encuentra el primer 'true'.
 * * Uso principal: Comprobaciones rápidas. (Ej. "¿Hay algún admin?"
 * o "¿Esta película tiene el género 'Acción'?").
 */
// Ejemplo: ¿Hay alguna película del 2009?
const hayDe2009 = peliculas.some(pelicula => {
    return pelicula.anio === 2009;
});
// Resultado 'hayDe2009': true

// Ejemplo: ¿Hay alguna película con rating perfecto (10)?
const hayRatingPerfecto = peliculas.some(p => p.rating === 10);
// Resultado 'hayRatingPerfecto': false


// =================================================================
// 5. .every() - "Todos cumplen?"
// =================================================================
/**
 * RECORRE el array y comprueba si TODOS los elementos cumplen la
 * condición.
 * * - DEVUELVE un booleano: 'true' o 'false'.
 * - Deja de recorrer en cuanto encuentra el primer 'false'.
 * * Uso principal: Validaciones (Ej. "¿Están todos los campos rellenos?").
 */
// Ejemplo: ¿Son todas las películas posteriores al 2000?
const todasSonNuevas = peliculas.every(pelicula => {
    return pelicula.anio > 2000;
});
// Resultado 'todasSonNuevas': true


// =================================================================
// 6. .reduce() - Reducir / Acumular
// =================================================================
/**
 * RECORRE el array y lo "reduce" a UN SOLO VALOR.
 * * - Es el más complejo. Recibe 2 argumentos:
 * 1. una función "callback" (el acumulador).
 * 2. un valor inicial (muy importante, usualmente 0 o []).
 * * - El "callback" recibe 2 parámetros:
 * 1. 'acumulador': El valor que se va acumulando (lo que devolviste la última vez).
 * 2. 'elementoActual': El elemento del array que se está recorriendo.
 * * Uso principal: Sumar totales, calcular medias, agrupar datos.
 */
// Ejemplo: Sumar todos los números del array 'numeros'
const sumaTotal = numeros.reduce(
    (acumulador, numeroActual) => {
        // Lo que devuelvas aquí, será el 'acumulador' en la siguiente vuelta
        return acumulador + numeroActual;
    },
    0 // 0 es el 'valor inicial' del acumulador
);
// Resultado 'sumaTotal': 36 (1 + 5 + 10 + 20)

// Ejemplo: Calcular el rating total de todas las películas
const ratingTotal = peliculas.reduce((total, peli) => {
    return total + peli.rating;
}, 0);
// Resultado 'ratingTotal': 38.5 (6.9 + 7.2 + 7.7 + 8.1 + 8.6)
// (Para la media, dividirías esto por peliculas.length)


// =================================================================
// 7. .forEach() - Recorrer (sin devolver nada)
// =================================================================
/**
 * RECORRE el array y ejecuta una función para cada elemento.
 * * - NO devuelve nada (devuelve 'undefined').
 * - Es como un bucle 'for' simple.
 * * Uso principal: Cuando solo quieres "hacer algo" por cada elemento,
 * pero no necesitas un nuevo array (ej. imprimir en consola,
 * añadir un 'listener' a cada elemento).
 */
// Ejemplo: Imprimir cada título en la consola
peliculas.forEach(pelicula => {
    console.log(pelicula.titulo);
});
// Salida en consola:
// Avatar
// I Am Legend
// 300
// ...

// =================================================================
// 8. .includes() - ¿Contiene este valor?
// =================================================================
/**
 * Comprueba si un array CONTIENE un valor específico.
 * * - DEVUELVE 'true' o 'false'.
 * - Funciona mejor con arrays de valores simples (strings, números).
 * - Para arrays de objetos, usa .some() o .find().
 */
const generos = ["Action", "Drama", "Sci-Fi"];

const tieneAccion = generos.includes("Action"); // true
const tieneComedia = generos.includes("Comedy"); // false