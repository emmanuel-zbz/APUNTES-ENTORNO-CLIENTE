/**
 * =================================================================
 * APUNTES DE MÉTODOS DE STRINGS
 * =================================================================
 * * Usaremos estos strings de ejemplo:
 */
const saludo = "  Hola, bienvenido al examen.  ";
const generos = "Action, Drama, Sci-Fi";
const busqueda = "avengers";


// =================================================================
// 1. .toLowerCase() y .toUpperCase()
// =================================================================
/**
 * Convierten el string a minúsculas o mayúsculas.
 * * Uso principal: NORMALIZAR texto para comparaciones o búsquedas.
 * Casi siempre que compares strings, debes pasarlos ambos a minúsculas.
 */
const busquedaNormalizada = busqueda.toUpperCase(); // "AVENGERS"
const tituloPeli = "The Avengers";

// Comparación INCORRECTA (sensible a mayúsculas)
// if (tituloPeli.includes(busqueda)) { ... } // false

// Comparación CORRECTA (insensible a mayúsculas)
if (tituloPeli.toLowerCase().includes(busqueda.toLowerCase())) {
    console.log("Encontrado"); // "the avengers" incluye "avengers"
}


// =================================================================
// 2. .trim()
// =================================================================
/**
 * Elimina espacios en blanco INÚTILES al principio y al final
 * de un string.
 * * Uso principal: Limpiar la entrada de un usuario (inputs de texto).
 */
const saludoLimpio = saludo.trim();
// Resultado 'saludoLimpio': "Hola, bienvenido al examen."


// =================================================================
// 3. .includes()
// =================================================================
/**
 * Comprueba si un string CONTIENE otro string.
 * - DEVUELVE 'true' o 'false'.
 * - Es sensible a mayúsculas (ver .toLowerCase() arriba).
 */
const tieneHola = saludoLimpio.includes("Hola"); // true
const tieneAdios = saludoLimpio.includes("Adios"); // false


// =================================================================
// 4. .split()
// =================================================================
/**
 * Divide (corta) un string en un ARRAY basado en un separador.
 * * Uso principal: Convertir listas de texto (CSV) en arrays.
 * (Ej. tu lista de "Actores" o "Géneros").
 */
const arrayGeneros = generos.split(", "); // Separador: ", "
// Resultado 'arrayGeneros': ["Action", "Drama", "Sci-Fi"]

const palabra = "Hola";
const arrayLetras = palabra.split(""); // Separador: "" (string vacío)
// Resultado 'arrayLetras': ["H", "o", "l", "a"]


// =================================================================
// 5. .slice(inicio, [fin])
// =================================================================
/**
 * Extrae una porción del string y DEVUELVE UN NUEVO STRING.
 * * - 'inicio': Índice donde empieza a cortar (incluido).
 * - 'fin' (opcional): Índice donde termina de cortar (NO incluido).
 * - Si se omite 'fin', corta hasta el final.
 */
const texto = "JavaScript";
const parte1 = texto.slice(0, 4); // Del 0 al 4 (sin incluir el 4)
// Resultado 'parte1': "Java"

const parte2 = texto.slice(4); // Del 4 hasta el final
// Resultado 'parte2': "Script"


// =================================================================
// 6. .padStart() y .padEnd()
// =================================================================
/**
 * Rellena un string hasta una longitud deseada con un carácter.
 * * - .padStart(): Rellena al PRINCIPIO.
 * - .padEnd(): Rellena al FINAL.
 * * Parámetros: (longitudFinal, caracterDeRelleno)
 * * Uso principal: Formatear fechas, horas, contadores.
 */
let minutos = "5";
let segundos = "30";

// Rellenar 'minutos' con '0' al principio hasta que tenga 2 caracteres
let minutosFormato = minutos.padStart(2, '0');
// Resultado 'minutosFormato': "05"

console.log(`${minutosFormato}:${segundos}`); // "05:30"

let id = "123";
// Rellenar 'id' con '0' al principio hasta 6 caracteres
let idFormato = id.padStart(6, '0');
// Resultado 'idFormato': "000123"