/**
 * =================================================================
 * APUNTES DE MANEJO DE FECHAS (Objeto Date)
 * =================================================================
 */

// =================================================================
// 1. Creación de Fechas (new Date())
// =================================================================

// 1a. Fecha y Hora Actual
// Crea un objeto 'Date' con el momento exacto de la ejecución.
const ahora = new Date();
console.log("Ahora:", ahora);

// 1b. Con un String
// Crea una fecha a partir de un string (cuidado con los formatos)
const fechaString = new Date("2025-10-12T10:30:00");
console.log("Con String:", fechaString);

const otraFechaString = new Date("October 13, 2014 11:13:00");
console.log("Otro String:", otraFechaString);

// 1c. Con Números (Año, Mes, Día, [Hora, Min, Seg])
// AÑO, MES, DÍA
const fechaNumeros = new Date(2025, 11, 25); // 25 de Diciembre de 2025
console.log("Con Números:", fechaNumeros);

// ¡¡¡CUIDADO!!! -> El MES empieza en 0
// 0 = Enero
// 1 = Febrero
// ...
// 11 = Diciembre
const navidad = new Date(2025, 11, 25); // MES 11 = DICIEMBRE
const diaUno = new Date(2025, 0, 1);   // MES 0 = ENERO


// =================================================================
// 2. "Getters" - Obtener partes de una fecha
// =================================================================
const hoy = new Date(); // Ej: Martes 11 de Noviembre de 2025

// .getFullYear() -> Devuelve el año completo (ej. 2025)
console.log("Año:", hoy.getFullYear()); // 2025

// .getMonth() -> Devuelve el MES (0-11)
// ¡Recuerda sumar 1 si quieres mostrarlo al usuario!
console.log("Mes (index):", hoy.getMonth()); // 10 (porque es Noviembre)
console.log("Mes (real):", hoy.getMonth() + 1); // 11

// .getDate() -> Devuelve el DÍA DEL MES (1-31)
console.log("Día del mes:", hoy.getDate()); // 11

// .getDay() -> Devuelve el DÍA DE LA SEMANA (0-6)
// ¡¡¡CUIDADO!!! -> 0 = Domingo
// 1 = Lunes
// 2 = Martes
// ...
// 6 = Sábado
console.log("Día de la semana (index):", hoy.getDay()); // 2 (porque es Martes)

// .getHours() -> Hora (0-23)
console.log("Horas:", hoy.getHours());

// .getMinutes() -> Minutos (0-59)
console.log("Minutos:", hoy.getMinutes());

// .getSeconds() -> Segundos (0-59)
console.log("Segundos:", hoy.getSeconds());


// =================================================================
// 3. "Setters" - Modificar partes de una fecha
// =================================================================
// Los 'setters' modifican el objeto 'Date' original.
const miFecha = new Date(2025, 0, 1); // 1 de Enero de 2025

// .setFullYear(anio) -> Cambia el año
miFecha.setFullYear(2026);
console.log("Año cambiado:", miFecha.toDateString()); // Wed Jan 01 2026

// .setMonth(mes) -> Cambia el mes (0-11)
miFecha.setMonth(5); // Pone Junio
console.log("Mes cambiado:", miFecha.toDateString()); // Sun Jun 01 2026

// .setDate(dia) -> Cambia el día (1-31)
miFecha.setDate(15);
console.log("Día cambiado:", miFecha.toDateString()); // Sun Jun 15 2026


// =================================================================
// 4. Manipulación de Fechas (¡¡¡MUY IMPORTANTE PARA EJERCICIOS!!!)
// =================================================================
// El objeto Date es "inteligente". Si sumas días y te pasas del
// fin de mes, cambia el mes automáticamente.

const fechaEjemplo = new Date(2025, 10, 11); // 11 de Noviembre de 2025
console.log("Fecha original:", fechaEjemplo.toDateString());

// Para sumar o restar tiempo, usa un 'get' y un 'set'
// Ejemplo: Sumar 7 días (una semana)
fechaEjemplo.setDate( fechaEjemplo.getDate() + 7 );
console.log("Sumar 7 días:", fechaEjemplo.toDateString()); // 18 de Noviembre

// Ejemplo: Sumar 30 días (se pasará de mes)
fechaEjemplo.setDate( fechaEjemplo.getDate() + 30 );
console.log("Sumar 30 días:", fechaEjemplo.toDateString()); // 18 de Diciembre (cambia de mes)

// Ejemplo: Restar 2 meses
fechaEjemplo.setMonth( fechaEjemplo.getMonth() - 2 );
console.log("Restar 2 meses:", fechaEjemplo.toDateString()); // 18 de Octubre

// Ejemplo: Iterar día a día (como en el ejercicio 3)
const inicio = new Date(2025, 10, 1); // 1 Nov
const fin = new Date(2025, 10, 5); // 5 Nov

// ¡Importante! Haz una copia para no modificar la fecha 'inicio'
let iterador = new Date(inicio);

while (iterador <= fin) {
    console.log("Iterando:", iterador.toDateString());

    // Avanzamos al siguiente día
    iterador.setDate( iterador.getDate() + 1 );
}


// =================================================================
// 5. Formatear Fechas (Convertir a String)
// =================================================================

const fechaFormato = new Date(2025, 9, 12, 13, 30, 0); // 12 Oct 2025, 1:30 PM

// .toDateString() -> Formato legible (solo fecha)
console.log(fechaFormato.toDateString()); // Sun Oct 12 2025

// .toLocaleString() -> Formato local (fecha y hora)
console.log(fechaFormato.toLocaleString()); // 12/10/2025 13:30:00 (depende de tu sistema)

// .toISOString() -> Formato estándar ISO (para BBDD)
console.log(fechaFormato.toISOString()); // 2025-10-12T12:30:00.000Z (Ojo, usa UTC)

// Formato Manual (usando 'padStart' de los apuntes de String)
const dia = String(fechaFormato.getDate()).padStart(2, '0'); // "12"
const mes = String(fechaFormato.getMonth() + 1).padStart(2, '0'); // "10" (09 + 1)
const anio = fechaFormato.getFullYear(); // 2025

const formatoDDMMYYYY = `${dia}/${mes}/${anio}`;
console.log("Formato Manual:", formatoDDMMYYYY); // 12/10/2025