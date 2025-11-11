/**
 * =================================================================
 * APUNTES DE MÉTODOS DE MATH (y números)
 * =================================================================
 * * Son métodos estáticos, se llaman siempre usando "Math."
 */

const numero = 83.782;
const ratingString = "8.6"; // O "N/A"

// =================================================================
// 1. Redondeo: .round(), .floor(), .ceil() y .trunc()
// =================================================================

// 1a. Math.round(numero)
// Redondea al entero MÁS CERCANO (reglas matemáticas normales).
// .5 o más, sube. Menos de .5, baja.
console.log(Math.round(83.7)); // 84
console.log(Math.round(83.4)); // 83
console.log(Math.round(83.5)); // 84

// 1b. Math.floor(numero)
// Redondea SIEMPRE HACIA ABAJO (al "piso").
console.log(Math.floor(83.7)); // 83
console.log(Math.floor(83.999)); // 83

// 1c. Math.ceil(numero)
// Redondea SIEMPRE HACIA ARRIBA (al "techo").
console.log(Math.ceil(83.1)); // 84
console.log(Math.ceil(83.001)); // 84

// 1d. Math.trunc(numero)
// TRUNCA. Elimina la parte decimal. No redondea, solo CORTA.
console.log(Math.trunc(83.7)); // 83
console.log(Math.trunc(83.999)); // 83
// (Para números positivos, .trunc() y .floor() hacen lo mismo)


// =================================================================
// 2. parseFloat() y parseInt()
// =================================================================
/**
 * NO son de Math, pero son esenciales para números.
 * Convierten un STRING en un NÚMERO.
 * * - parseFloat: Convierte a número con decimales.
 * - parseInt: Convierte a número entero (ignora decimales).
 * * Uso principal: Convertir datos que vienen de la BBDD (JSON)
 * o del usuario (inputs) a números para poder operar con ellos.
 */

// Si intentas sumar un string, CONCATENA:
console.log(ratingString + 1); // "8.61" (INCORRECTO)

// Debes convertirlo primero:
const ratingNumero = parseFloat(ratingString);
console.log(ratingNumero + 1); // 9.6 (CORRECTO)

// Si el string no es un número válido, devuelve NaN (Not a Number)
const ratingMalo = parseFloat("N/A"); // NaN

// parseInt (ignora decimales)
console.log(parseInt("8.6")); // 8
console.log(parseInt("8")); // 8


// =================================================================
// 3. Math.random()
// =================================================================
/**
 * Devuelve un número decimal aleatorio entre 0 (incluido) y 1 (excluido).
 * * Uso principal: Generar números aleatorios, obtener un índice
 * aleatorio de un array.
 */
console.log(Math.random()); // ej. 0.45678...

// Patrón para obtener un NÚMERO ENTERO ALEATORIO entre 0 y MAX (sin incluir MAX)
// (Ej. para un array de 5 elementos, quieres un índice de 0 a 4)
const max = 5;
const indiceAleatorio = Math.floor(Math.random() * max);
// 'indiceAleatorio' será 0, 1, 2, 3 ó 4

// Ejemplo: Obtener una película aleatoria
const pelis = ["Avatar", "300", "Interstellar"];
const peliAleatoria = pelis[Math.floor(Math.random() * pelis.length)];
console.log(peliAleatoria); // "Avatar", "300" o "Interstellar"


// =================================================================
// 4. Math.max() y Math.min()
// =================================================================
/**
 * Devuelven el número más grande o más pequeño de una lista.
 */
console.log(Math.max(10, 20, 5)); // 20
console.log(Math.min(10, 20, 5)); // 5

// Para un array de números, usa el "spread operator" (...)
const numeros = [10, 20, 5];
console.log(Math.max(...numeros)); // 20