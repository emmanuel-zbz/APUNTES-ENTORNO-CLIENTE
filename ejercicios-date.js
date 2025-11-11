//ESTOS SON LOS EJERCICIOS DATE RESUELTOS PRIMERO DEFINIMOS ESTO PARA LOS PRIMEROS EJERCICIOS

// Array para los nombres de los días de la semana
// getDay() devuelve 0 para Domingo, 1 para Lunes, etc.
const diasSemana = [
    "Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"
];

// Array para los nombres de los meses
// getMonth() devuelve 0 para Enero, 1 para Febrero, etc.
const meses = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
];

//EJERCICIO 1
/**
 * Función que muestra el día de la semana, el mes y el año de una fecha.
 * @param {Date} fecha - El objeto Date que queremos formatear.
 */
function mostrarFechaDesglosada(fecha) {

    // Obtenemos el número del día de la semana (0-6)
    const indiceDia = fecha.getDay();
    // Usamos el número como índice para nuestro array 'diasSemana'
    const nombreDia = diasSemana[indiceDia];

    // Obtenemos el número del mes (0-11)
    const indiceMes = fecha.getMonth();
    // Usamos el número como índice para nuestro array 'meses'
    const nombreMes = meses[indiceMes];

    // Obtenemos el año completo (ej. 2025)
    const anio = fecha.getFullYear();

    // Imprimimos el resultado en la consola
    console.log(`Día: ${nombreDia}, Mes: ${nombreMes}, Año: ${anio}`);
}

// --- Ejemplo de uso ---
// Creamos una nueva fecha (usará la fecha y hora actuales)
const hoy = new Date();
// Llamamos a la función pasándole la fecha de hoy
mostrarFechaDesglosada(hoy);

//EJERCICIO 2
/**
 * Función que muestra la hora y día actuales en un formato específico.
 */
function mostrarHoraFormato() {

    // Creamos una fecha con el momento actual
    const ahora = new Date();

    // --- Parte del Día ---
    // Obtenemos el nombre del día (ej. "Martes") usando nuestro array
    const nombreDia = diasSemana[ahora.getDay()];

    // --- Parte de la Hora (AM/PM) ---
    // Obtenemos la hora (formato 0-23)
    let horas = ahora.getHours();
    // Determinamos si es AM o PM
    const ampm = horas >= 12 ? 'PM' : 'AM';
    // Convertimos la hora de formato 24h a 12h
    // El operador % (módulo) nos da el resto de una división. 14 % 12 = 2.
    horas = horas % 12;
    // Si horas es 0 (medianoche), lo convertimos a 12
    horas = horas ? horas : 12;

    // --- Parte de Minutos y Segundos (con 'pad') ---
    // Obtenemos los minutos
    let minutos = ahora.getMinutes();
    // Convertimos el número a string (ej. 5 -> "5")
    // .padStart(2, '0') rellenará el string por el principio con '0'
    // hasta que tenga 2 caracteres. "5" -> "05". "30" -> "30".
    let minutosStr = String(minutos).padStart(2, '0');

    // Hacemos lo mismo con los segundos
    let segundos = ahora.getSeconds();
    let segundosStr = String(segundos).padStart(2, '0');

    // Componemos el string final e imprimimos
    console.log(`${nombreDia}. Now: ${horas}${ampm} ${minutosStr}:${segundosStr}`);
}

// --- Ejemplo de uso ---
mostrarHoraFormato();


//EJERCICIO 3
/**
 * Calcula los días y lunes pasados desde el 15 de Septiembre del año en curso.
 */
function calcularProgresoCurso() {

    // Obtenemos la fecha y hora de hoy
    const hoy = new Date();

    // --- Establecer la fecha de inicio del curso ---
    // Asumimos que el "curso actual" empezó el 15 de Septiembre
    // del año actual (ej. 2025) si ya hemos pasado esa fecha,
    // o del año anterior (ej. 2024) si aún estamos antes de Septiembre.

    let anioActual = hoy.getFullYear(); // ej. 2025
    let mesActual = hoy.getMonth(); // ej. 10 (Noviembre)

    // getMonth() da 8 para Septiembre.
    // Si el mes actual (10) es < 8 (Sept), el curso empezó el año pasado.
    const anioInicio = mesActual < 8 ? anioActual - 1 : anioActual;

    // Creamos la fecha de inicio: 15 de Septiembre (mes 8)
    const inicioCurso = new Date(anioInicio, 8, 15);

    // --- 1. Calcular días pasados ---
    // Al restar dos objetos Date, obtenemos la diferencia en milisegundos
    const diffMilisegundos = hoy - inicioCurso;

    // Convertimos los milisegundos a días
    // 1000 ms/seg * 60 seg/min * 60 min/hora * 24 horas/día
    const milisegundosPorDia = 1000 * 60 * 60 * 24;
    // Math.floor() redondea hacia abajo para darnos días completos
    const diffDias = Math.floor(diffMilisegundos / milisegundosPorDia);

    console.log(`--- Ejercicio 3 (Parte 1) ---`);
    console.log(`Días transcurridos desde el ${inicioCurso.toDateString()}: ${diffDias}`);

    // --- 2. Calcular lunes pasados ---
    let contadorLunes = 0;
    let fechasLunes = []; // Array para guardar las fechas de los lunes

    // Creamos una *copia* de la fecha de inicio para iterar
    // Es importante no modificar la variable 'inicioCurso' original
    let fechaActual = new Date(inicioCurso);

    // Bucle 'while': se ejecutará mientras la 'fechaActual' sea
    // anterior o igual a 'hoy'
    while (fechaActual <= hoy) {

        // Comprobamos si el día de la semana es Lunes (1)
        if (fechaActual.getDay() === 1) {
            contadorLunes++; // Incrementamos el contador
            // Añadimos la fecha (convertida a string) a nuestro array
            fechasLunes.push(fechaActual.toDateString());
        }

        // Avanzamos al siguiente día
        // setDate() es inteligente: si es 31 y sumas 1, cambia al mes siguiente
        fechaActual.setDate(fechaActual.getDate() + 1);
    }

    console.log(`--- Ejercicio 3 (Parte 2) ---`);
    console.log(`Número total de lunes: ${contadorLunes}`);
    console.log(`Fechas de los lunes:`, fechasLunes);
}

// --- Ejemplo de uso ---
calcularProgresoCurso();

//EJERCICIO 4
/**
 * Busca los años entre hoy y 2070 donde el 15 de Septiembre cae en lunes.
 */
function buscarLunesSeptiembre() {

    console.log(`--- Ejercicio 4 ---`);
    console.log("Años en los que el 15 de Septiembre será lunes (hasta 2070):");

    // Obtenemos el año actual
    const anioActual = new Date().getFullYear();

    // Bucle 'for' que itera desde el año actual hasta 2070
    for (let anio = anioActual; anio <= 2070; anio++) {

        // Creamos una fecha para el 15 de Septiembre (mes 8) de ese año
        const fecha = new Date(anio, 8, 15);

        // Comprobamos si el día de la semana es Lunes (1)
        if (fecha.getDay() === 1) {
            // Si es lunes, imprimimos ese año
            console.log(anio);
        }
    }
}

// --- Ejemplo de uso ---
buscarLunesSeptiembre();


///////PARA 5,6 y 7

// Objeto de festivos. Usamos el formato 'YYYY-MM-DD' como clave
// para búsquedas rápidas.
const festivos = {
    "2025-10-12": "Fiesta Nacional",
    "2025-11-01": "Todos los Santos",
    "2025-12-06": "Día de la Constitución",
    "2025-12-08": "Inmaculada Concepción",
    "2025-12-25": "Navidad",
    "2026-01-01": "Año Nuevo",
    "2026-01-06": "Día de Reyes",
    "2026-05-01": "Día del Trabajador"
    // ... añadir más festivos
};

// Fechas clave del curso (¡adaptar!)
const inicioCursoAcad = new Date("2025-09-15");
const finNavidad = new Date("2026-01-07"); // Vuelta de navidad
const finSemanaSanta = new Date("2026-04-13"); // Vuelta de S. Santa
const finCursoAcad = new Date("2026-06-23");

// Fechas del trimestre actual para ejercicio 6
const hoyParaE6 = new Date(); // Asumimos que hoy es 11 Nov 2025
const finTrimestre = new Date("2025-12-22"); // Último día lectivo antes de Navidad

//EJERCICIO 5
/**
 * Función principal que nos dice si una fecha es lectiva y a qué curso pertenece.
 * @param {Date} fecha - La fecha a comprobar.
 */
function analizarFechaLectiva(fecha) {

    // --- 1. Comprobar si es día lectivo ---
    const esLectivo = esDiaLectivo(fecha);

    // --- 2. Obtener el año escolar ---
    const anio = fecha.getFullYear();
    const mes = fecha.getMonth(); // 0-11

    // Si el mes es Septiembre (8) o superior, el curso empezó este año (ej. 2025/2026)
    // Si es anterior (ej. Mayo), el curso empezó el año pasado (ej. 2024/2025)
    const anioEscolar = mes >= 8
        ? `${anio}/${anio + 1}`
        : `${anio - 1}/${anio}`;

    // Imprimimos el resultado
    console.log(`Fecha: ${fecha.toDateString()}`);
    console.log(`Día lectivo: ${esLectivo ? 'Sí' : 'No'}`);
    console.log(`Año escolar: ${anioEscolar}`);
}

/**
 * Función de ayuda (helper) que comprueba si un día es lectivo.
 * @param {Date} fecha - La fecha a comprobar.
 * @returns {boolean} - True si es lectivo, false si no.
 */
function esDiaLectivo(fecha) {

    // 1. Comprobar fines de semana (0=Domingo, 6=Sábado)
    const diaSemana = fecha.getDay();
    if (diaSemana === 0 || diaSemana === 6) {
        return false; // Es fin de semana
    }

    // 2. Comprobar si está fuera del curso (vacaciones de verano)
    if (fecha < inicioCursoAcad || fecha > finCursoAcad) {
        return false; // Es verano
    }

    // 3. Comprobar vacaciones (Navidad, Semana Santa)
    // (Este es un ejemplo simple, se podría mejorar)
    if (fecha > finTrimestre && fecha < finNavidad) {
        return false; // Vacaciones de Navidad
    }
    // (Añadir lógica similar para Semana Santa)

    // 4. Comprobar festivos (usando nuestro objeto 'festivos')
    // Para buscar en el objeto, creamos una clave 'YYYY-MM-DD'
    const mes = String(fecha.getMonth() + 1).padStart(2, '0');
    const dia = String(fecha.getDate()).padStart(2, '0');
    const anio = fecha.getFullYear();
    const claveFecha = `${anio}-${mes}-${dia}`;

    if (festivos[claveFecha]) {
        return false; // Es un festivo
    }

    // Si ha pasado todos los filtros, es un día lectivo
    return true;
}

// --- Ejemplo de uso Ejercicio 5 ---
console.log(`--- Ejercicio 5 ---`);
analizarFechaLectiva(new Date("2025-11-11")); // Martes, lectivo
analizarFechaLectiva(new Date("2025-11-15")); // Sábado, no lectivo
analizarFechaLectiva(new Date("2025-12-06")); // Festivo, no lectivo
analizarFechaLectiva(new Date("2025-12-25")); // Navidad, no lectivo

//EJERCICIO 6
/**
 * Calcula los días lectivos restantes hasta fin de trimestre y muestra un timeline.
 */
function calcularDiasRestantesTrimestre() {

    let diasLectivosRestantes = 0;
    let fechasLectivas = []; // Guardamos las fechas

    // Creamos una copia de la fecha de hoy para iterar
    let fechaIter = new Date(hoyParaE6);

    // Variables para el timeline de texto [cite: 42]
    let lineaNumeros = "";
    let lineaDias = "";
    const diasSemanaCorto = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];

    console.log(`--- Ejercicio 6 ---`);
    console.log(`Calculando días lectivos desde ${hoyParaE6.toDateString()} hasta ${finTrimestre.toDateString()}:`);

    // Iteramos día a día hasta el fin del trimestre
    while (fechaIter <= finTrimestre) {

        // Usamos la función que creamos en el Ejercicio 5
        if (esDiaLectivo(fechaIter)) {
            diasLectivosRestantes++;
            fechasLectivas.push(fechaIter.toDateString());
        }

        // --- Construcción del Timeline ---
        // Añadimos el número del día (ej. "11")
        // padEnd(4) añade espacios hasta 4 caracteres: "11  "
        lineaNumeros += String(fechaIter.getDate()).padEnd(4);

        // Añadimos el nombre corto del día (ej. "Mar")
        lineaDias += diasSemanaCorto[fechaIter.getDay()].padEnd(4);

        // NOTA: Para el estilo, en HTML añadiríamos una clase aquí.
        // Ejemplo: if (esDiaLectivo(fechaIter)) { class="lectivo" } else { class="no-lectivo" }

        // Avanzamos al siguiente día
        fechaIter.setDate(fechaIter.getDate() + 1);
    }

    console.log(`Días lectivos restantes: ${diasLectivosRestantes}`);
    // console.log("Fechas lectivas:", fechasLectivas); // Descomentar si se quieren ver las fechas

    console.log("\n--- Timeline (estilo texto) ---");
    console.log(lineaNumeros);
    console.log(lineaDias);
}

// --- Ejemplo de uso Ejercicio 6 ---
calcularDiasRestantesTrimestre();

//EJERCICIO 7
/**
 * Muestra la lista de festivos con descripción y explica cómo hacer el timeline.
 */
function gestionarFestivosYTimelines() {

    console.log(`--- Ejercicio 7 ---`);
    console.log("Lista de festivos del curso (definidos en el objeto 'festivos'):");

    // Recorremos el objeto 'festivos' que definimos antes
    // Object.keys(festivos) nos da un array con todas las claves (las fechas)
    for (const fecha of Object.keys(festivos)) {
        // Obtenemos la descripción (el valor) usando la fecha (la clave)
        const descripcion = festivos[fecha];
        console.log(`- ${fecha}: ${descripcion}`);
    }

    console.log("\n--- Timeline por Mes (Explicación) ---");
    console.log(
        "Para generar un timeline por mes (ej. Septiembre, Octubre...):\n" +
        "1. Se debe hacer un bucle por cada mes del curso (de 9 a 6).\n" +
        "2. Dentro, se hace un bucle por cada día de ese mes (del 1 al 30/31).\n" +
        "3. Para cada día, se genera un <div> en HTML.\n" +
        "4. Se usa la función 'esDiaLectivo(fecha)' para determinar su estado.\n" +
        "5. Se añade una clase CSS: 'dia-lectivo', 'fin-de-semana' o 'festivo'.\n" +
        "   (Se necesita una comprobación extra para 'festivo' ANTES que 'fin-de-semana')\n" +
        "6. Los festivos [cite: 45] tendrían un estilo CSS (ej. 'background-color: red;') " +
        "   y un 'title' con la descripción."
    );

    // Ejemplo de la lógica para el día 12 de Octubre 2025 (Domingo)
    const fechaEjemplo = new Date("2025-10-12");
    const claveEjemplo = "2025-10-12";
    let estilo = "";

    if (festivos[claveEjemplo]) {
        estilo = "festivo"; // Tiene prioridad
    } else if (fechaEjemplo.getDay() === 0 || fechaEjemplo.getDay() === 6) {
        estilo = "fin-de-semana";
    } else if (esDiaLectivo(fechaEjemplo)) {
        estilo = "lectivo";
    } else {
        estilo = "no-lectivo";
    }

    console.log(`\nEjemplo de lógica CSS para el 12/10/2025: se marcaría como '${estilo}'`);
}

// --- Ejemplo de uso Ejercicio 7 ---
gestionarFestivosYTimelines();