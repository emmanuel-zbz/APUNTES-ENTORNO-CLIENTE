/**
 * =================================================================
 * APUNTES DE MANEJO DEL DOM Y EVENTOS
 * =================================================================
 * * * Este código asume un HTML básico como el de tu ejercicio:
 *
 * <html>
 * <body>
 * * * <input type="text" id="textoBusqueda">
 *
 * <input type="radio" name="criterio" value="titulo" id="radioTitulo">
 * <label for="radioTitulo">Título</label>
 * <input type="radio" name="criterio" value="actor" id="radioActor">
 * <label for="radioActor">Actor</label>
 *
 * <input type="checkbox" name="generos" value="Action">
 * <input type="checkbox" name="generos" value="Drama">
 *
 * * <button id="botonBuscar">Buscar</button>
 *
 * * <div id="resultado"></div>
 *
 * </body>
 * </html>
 */

// =================================================================
// 0. El Punto de Partida: DOMContentLoaded
// =================================================================
/**
 * TODO tu código JS que manipula el DOM debe ir dentro de este evento.
 * Este evento se dispara CUANDO el HTML se ha cargado por completo.
 * Si no lo usas, tu script podría intentar buscar 'getElementById'
 * en elementos que AÚN NO EXISTEN, y fallará.
 */
document.addEventListener("DOMContentLoaded", () => {

    // Todo tu código va aquí dentro...

    // =================================================================
    // 1. Seleccionar Elementos del DOM
    // =================================================================
    // Es buena práctica "cachear" (guardar) los elementos que usarás
    // mucho al principio de tu script.

    // 1a. Por ID (el más rápido y recomendado)
    // Usado para elementos ÚNICOS (el botón, el input de texto, el div de resultado)
    const botonBuscar = document.getElementById("botonBuscar");
    const inputTexto = document.getElementById("textoBusqueda");
    const containerResultado = document.getElementById("resultado");

    // 1b. Con querySelector (más potente, usa selectores CSS)
    // Devuelve el PRIMER elemento que coincide.

    // Seleccionar el PRIMER input de tipo radio (no muy útil)
    // const unRadio = document.querySelector('input[type="radio"]');

    // 1c. Con querySelectorAll (el más usado para grupos)
    // Devuelve una "NodeList" (parecido a un array) con TODOS los
    // elementos que coinciden.

    // Seleccionar TODOS los checkboxes con name="generos"
    // const todosLosGeneros = document.querySelectorAll('input[name="generos"]');


    // =================================================================
    // 2. Escuchar Eventos (addEventListener)
    // =================================================================
    // La forma moderna de "enganchar" una función a un evento (como un 'clic').

    // Al 'botonBuscar', le añadimos un "escuchador" para el evento 'click'.
    // Cuando ocurra el clic, ejecutará la función flecha.
    botonBuscar.addEventListener('click', () => {

        console.log("¡Botón pulsado!");

        // =================================================================
        // 3. Leer Valores de los Inputs (¡DENTRO del evento!)
        // =================================================================
        // Lees los valores en el momento del clic, no antes.

        // 3a. Leer un Input de Texto (.value)
        // Usa .trim() para limpiar espacios en blanco al inicio y final.
        const textoBuscado = inputTexto.value.trim();
        console.log("Texto:", textoBuscado);

        // 3b. Leer un Radio Button (el que está seleccionado)
        // Usamos querySelector con el pseudo-selector ':checked'
        const radioSeleccionado = document.querySelector('input[name="criterio"]:checked');

        let criterioBuscado = null;
        if (radioSeleccionado) {
            // Si hay uno seleccionado, obtenemos su .value
            criterioBuscado = radioSeleccionado.value;
        }

        // Forma ternaria (más corta)
        // const criterioBuscado = radioSeleccionado ? radioSeleccionado.value : null;

        console.log("Criterio:", criterioBuscado); // "titulo", "actor" o null

        // 3c. Leer Checkboxes (los que están seleccionados)
        // Usamos querySelectorAll con ':checked'
        const generosSeleccionados = document.querySelectorAll('input[name="generos"]:checked');

        // 'generosSeleccionados' NO es un array, es una NodeList.
        // La convertimos a array para poder usar .map()
        const generosBuscados = Array.from(generosSeleccionados).map(checkbox => {
            // De cada checkbox seleccionado, extraemos su .value
            return checkbox.value;
        });

        console.log("Géneros:", generosBuscados); // ["Action", "Drama"] (o el que esté marcado)

        // =================================================================
        // 4. Lógica de Filtrado (Tu código)
        // =================================================================
        // Aquí es donde llamarías a tus funciones de 'aplicarFiltros'
        // let peliculasFiltradas = aplicarFiltros(pelis, textoBuscado, criterioBuscado, generosBuscados);

        // Simulación de un resultado
        const peliculasFiltradas = [
            { titulo: "Peli 1", actores: "Actor 1" },
            { titulo: "Peli 2", actores: "Actor 2" }
        ];

        // =================================================================
        // 5. Pintar Resultados en el HTML (.innerHTML)
        // =================================================================
        // Aquí es donde llamarías a tu 'imprimirTarjetas'

        // Primero, generamos el string HTML (usando .map y .join)
        const htmlResultante = peliculasFiltradas.map(peli => {
            return `
                <div class="card">
                    <h5>${peli.titulo}</h5>
                    <p>${peli.actores}</p>
                </div>
            `;
        }).join('');

        // Finalmente, "inyectamos" ese string HTML dentro del contenedor
        containerResultado.innerHTML = htmlResultante;

        // Comprobación de "no hay resultados"
        if (peliculasFiltradas.length === 0) {
            containerResultado.innerHTML = "<p>No se encontraron resultados.</p>";
        }

    }); // <-- Fin del addEventListener del botón

    // =================================================================
    // 6. Delegación de Eventos (¡¡¡MUY IMPORTANTE!!!)
    // =================================================================
    /**
     * ¿Qué pasa si haces clic en un botón "Details" que acabas de pintar
     * con .innerHTML?
     * * NO PUEDES hacerle un addEventListener normal, porque esos botones
     * NO EXISTÍAN cuando el script cargó.
     * * SOLUCIÓN: Poner el 'listener' en el PADRE (que sí existe,
     * en este caso 'containerResultado') y preguntarle al evento (e)
     * "dónde hiciste clic exactamente?" (e.target).
     */

    // 1. Pones el listener en el CONTENEDOR PADRE
    containerResultado.addEventListener('click', (e) => {
        // e -> es el objeto Evento
        // e.target -> es el elemento EXACTO que recibió el clic (ej. un <h5>, un <p>, o el botón)

        // 2. Compruebas si el 'target' (o un ancestro cercano) es el botón que buscas
        // .closest() busca hacia arriba el selector más cercano.
        const botonDetails = e.target.closest('.btn-details'); // Asumimos que tus botones tienen la clase 'btn-details'

        // 3. Si encontramos el botón, actuamos
        if (botonDetails) {

            // Ya tenemos el botón, podemos leer sus 'data-attributes'
            const peliId = botonDetails.dataset.id; // Asumimos <button data-id="tt123">

            console.log(`Clic en Details de la peli con ID: ${peliId}`);

            // Aquí iría tu lógica de 'toggle' para mostrar la info
            // (buscar la 'card' padre, añadir/quitar clase, etc.)

            // Ejemplo:
            const card = botonDetails.closest('.card');
            card.classList.toggle('fondo-azul');
        }

    }); // <-- Fin del listener de delegación

}); // <-- Fin del DOMContentLoaded