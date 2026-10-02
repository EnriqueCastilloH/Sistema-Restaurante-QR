// ==========================================
// K'OOBEN - THE GOURMET RESTAURANT
// SISTEMA DE PEDIDOS QR
// ==========================================


// ==========================================
// WHATSAPP
// ==========================================

// Número utilizado para las pruebas.
// Después puede sustituirse por el número
// autorizado del restaurante.

const numeroWhatsApp = "5217714047997";


// ==========================================
// OBTENER NÚMERO DE MESA DESDE LA URL
// ==========================================

const parametros =
    new URLSearchParams(window.location.search);

const parametroMesa =
    parametros.get("mesa");

const mesa =
    parametroMesa &&
    /^[1-9]\d{0,2}$/.test(parametroMesa)
        ? parametroMesa
        : "1";


// ==========================================
// VARIABLES PRINCIPALES
// ==========================================

let idiomaActual = "es";

let personas = 1;

let pedido = {};


// ==========================================
// CATEGORÍAS
// ==========================================

const categorias = [
    "entradas",
    "sopas",
    "principales",
    "postres"
];


const nombresCategorias = {

    es: {

        entradas:
            "Entradas",

        sopas:
            "Sopas y Cremas",

        principales:
            "Platos Principales",

        postres:
            "Postres"

    },

    en: {

        entradas:
            "Appetizers",

        sopas:
            "Soups & Creams",

        principales:
            "Main Course",

        postres:
            "Desserts"

    }

};


// ==========================================
// MENÚ COMPLETO
// ==========================================

const menu = [

    // ======================================
    // ENTRADAS
    // ======================================

    {
        id: "kale",

        categoria: "entradas",

        es: {

            nombre:
                "ENSALADA DE KALÉ",

            descripcion:
                "Manzana asada, queso de cabra y vinagreta de mostaza con miel."

        },

        en: {

            nombre:
                "KALE SALAD",

            descripcion:
                "Baked apple, goat cheese and honey mustard vinaigrette."

        },

        tags: [
            "vegetariano",
            "sin-gluten"
        ]
    },


    {
        id: "encurtidos",

        categoria: "entradas",

        es: {

            nombre:
                "ENSALADA DE ENCURTIDOS",

            descripcion:
                "Con espinacas tiernas y queso tofu."

        },

        en: {

            nombre:
                "PICKLE SALAD",

            descripcion:
                "With baby spinach and tofu cheese."

        },

        tags: [
            "vegetariano",
            "sin-gluten"
        ]
    },


    {
        id: "sashimi",

        categoria: "entradas",

        es: {

            nombre:
                "SASHIMI DE SALMÓN",

            descripcion:
                "Cortes finos de salmón, jengibre y cebolla china bañados con salsa ponzu y ajonjolí tostado."

        },

        en: {

            nombre:
                "SALMON SASHIMI",

            descripcion:
                "Thin cuts of salmon, ginger and Chinese onion bathed in ponzu sauce and toasted sesame seeds."

        },

        tags: []
    },


    {
        id: "escabeche",

        categoria: "entradas",

        es: {

            nombre:
                "PESCADO EN ESCABECHE",

            descripcion:
                "Con escabeche de mandarina, tomate y almendras."

        },

        en: {

            nombre:
                "PICKLED FISH",

            descripcion:
                "Mandarin, with tomatoes and almonds."

        },

        tags: []
    },


    {
        id: "bunuelos",

        categoria: "entradas",

        es: {

            nombre:
                "BUÑUELOS DE BRANDADA DE PESCADO",

            descripcion:
                "Con tinta de calamar, alioli de ajo asado."

        },

        en: {

            nombre:
                "FISH BRANDADE FRITTERS",

            descripcion:
                "With squid ink and roasted garlic aioli."

        },

        tags: []
    },


    {
        id: "raviolis",

        categoria: "entradas",

        es: {

            nombre:
                "RAVIOLIS DE HONGOS PORTOBELLO",

            descripcion:
                "En salsa de almejas y vermouth blanco."

        },

        en: {

            nombre:
                "PORTOBELLO MUSHROOM RAVIOLI",

            descripcion:
                "In clam sauce and white vermouth."

        },

        tags: []
    },


    // ======================================
    // SOPAS Y CREMAS
    // ======================================

    {
        id: "hinojo",

        categoria: "sopas",

        es: {

            nombre:
                "SOPA FRÍA DE HINOJO",

            descripcion:
                "Pepino, mejillones y eneldo."

        },

        en: {

            nombre:
                "COLD FENNEL SOUP",

            descripcion:
                "Cucumber, mussels and dill."

        },

        tags: [
            "sin-gluten"
        ]
    },


    {
        id: "vichyssoise",

        categoria: "sopas",

        es: {

            nombre:
                "VICHYSSOISE DE SETAS",

            descripcion:
                "Pan de parmesano y tomates asados."

        },

        en: {

            nombre:
                "MUSHROOM VICHYSSOISE",

            descripcion:
                "Parmesan bread and roasted tomatoes."

        },

        tags: [
            "vegetariano"
        ]
    },


    // ======================================
    // PLATOS PRINCIPALES
    // ======================================

    {
        id: "cerdo",

        categoria: "principales",

        es: {

            nombre:
                "FILETE DE CERDO RELLENO",

            descripcion:
                "De verduras con jugo de asado especiado y cremoso de camote."

        },

        en: {

            nombre:
                "STUFFED PORK STEAK",

            descripcion:
                "Of vegetables with spiced roast juice and creamy sweet potato."

        },

        tags: [
            "sin-gluten"
        ]
    },


    {
        id: "pularda",

        categoria: "principales",

        es: {

            nombre:
                "CANELONES DE PULARDA",

            descripcion:
                "Chalotas caramelizadas, alcachofas y reducción de naranja agria."

        },

        en: {

            nombre:
                "PULARDA CANNELLONI",

            descripcion:
                "Caramelized shallots, artichokes and sour orange reduction."

        },

        tags: []
    },


    {
        id: "res",

        categoria: "principales",

        es: {

            nombre:
                "SOLOMILLO DE RES",

            descripcion:
                "Gratín de papa y camote morado con salsa española."

        },

        en: {

            nombre:
                "BEEF TENDERLOIN",

            descripcion:
                "Purple sweet potato and potato gratin with Spanish sauce."

        },

        tags: []
    },


    {
        id: "popietas",

        categoria: "principales",

        es: {

            nombre:
                "POPIETAS DE PESCADO",

            descripcion:
                "Limón, gnocchis y espuma de hinojo."

        },

        en: {

            nombre:
                "FISH PAUPIETTES",

            descripcion:
                "Lemon, gnocchi and fennel foam."

        },

        tags: []
    },


    {
        id: "filete",

        categoria: "principales",

        es: {

            nombre:
                "FILETE DE PESCADO",

            descripcion:
                "Con espuma de papa y salsa romesco de curry rojo."

        },

        en: {

            nombre:
                "FISH FILLET",

            descripcion:
                "With potato foam and red curry romesco sauce."

        },

        tags: [
            "sin-gluten"
        ]
    },


    {
        id: "arroz",

        categoria: "principales",

        es: {

            nombre:
                "ARROZ CREMOSO DE CALABAZA",

            descripcion:
                "Con azafrán y coco."

        },

        en: {

            nombre:
                "CREAMY PUMPKIN RICE",

            descripcion:
                "With saffron and coconut."

        },

        tags: [
            "vegetariano",
            "sin-gluten"
        ]
    },


    {
        id: "vegetales",

        categoria: "principales",

        es: {

            nombre:
                "VEGETALES SALTEADOS",

            descripcion:
                "Con aceite de trufa y puré de malanga con betabel."

        },

        en: {

            nombre:
                "SAUTEED VEGETABLES",

            descripcion:
                "With truffle oil and puree malanga with beetroot."

        },

        tags: [
            "vegetariano",
            "sin-gluten"
        ]
    },


    // ======================================
    // POSTRES
    // ======================================

    {
        id: "fraisier",

        categoria: "postres",

        es: {

            nombre:
                "FRAISIER DE FRESAS",

            descripcion:
                "Con merengue, yogurt y maracuyá."

        },

        en: {

            nombre:
                "STRAWBERRY FRAISIER",

            descripcion:
                "With meringue, yogurt and passion fruit."

        },

        tags: []
    },


    {
        id: "chocolate",

        categoria: "postres",

        es: {

            nombre:
                "SORPRESA DE CHOCOLATE",

            descripcion:
                "Con crema tibia de pimienta Tabasco."

        },

        en: {

            nombre:
                "CHOCOLATE SURPRISE",

            descripcion:
                "With Tabasco pepper warm cream."

        },

        tags: []
    },


    {
        id: "tarta",

        categoria: "postres",

        es: {

            nombre:
                "TARTA HELADA DE COCO Y NARANJA",

            descripcion:
                "Con pepino y limón."

        },

        en: {

            nombre:
                "ICED COCONUT AND ORANGE TART",

            descripcion:
                "With cucumber and lemon."

        },

        tags: []
    },


    {
        id: "frutas",

        categoria: "postres",

        es: {

            nombre:
                "PLATO DE FRUTAS",

            descripcion:
                "Frutas finas de temporada."

        },

        en: {

            nombre:
                "FRUIT DISH",

            descripcion:
                "Seasonal fine fruit."

        },

        tags: [
            "vegetariano",
            "sin-gluten"
        ]
    }

];


// ==========================================
// TEXTO SEGÚN IDIOMA
// ==========================================

function obtenerTexto(espanol, ingles) {

    if (idiomaActual === "es") {
        return espanol;
    }

    return ingles;

}


// ==========================================
// SELECCIONAR PERSONAS
// ==========================================

function cambiarPersonas(cambio) {

    const cambioNumerico =
        Number(cambio);

    personas =
        Number(personas);

    personas =
        personas + cambioNumerico;

    if (personas < 1) {
        personas = 1;
    }

    if (personas > 20) {
        personas = 20;
    }

    actualizarSelectorPersonas();

}


// ==========================================
// ACTUALIZAR SELECTOR
// ==========================================

function actualizarSelectorPersonas() {

    document.getElementById(
        "cantidadPersonas"
    ).textContent = personas;


    if (idiomaActual === "es") {

        document.getElementById(
            "textoPersonas"
        ).textContent =
            personas === 1
                ? "persona"
                : "personas";

    } else {

        document.getElementById(
            "textoPersonas"
        ).textContent =
            personas === 1
                ? "person"
                : "people";

    }


    // Desactivar solamente al llegar
    // a los límites.

    document.getElementById(
        "botonMenosPersonas"
    ).disabled =
        personas <= 1;


    document.getElementById(
        "botonMasPersonas"
    ).disabled =
        personas >= 20;

}


// ==========================================
// INICIAR PEDIDO
// ==========================================

function iniciarPedido() {

    pedido = {};

    document.getElementById(
        "pantallaInicio"
    ).hidden = true;


    document.getElementById(
        "pantallaMenu"
    ).hidden = false;


    document.getElementById(
        "totalComensales"
    ).textContent = personas;


    document.getElementById(
        "observaciones"
    ).value = "";


    mostrarMenu();

    mostrarPedido();


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


// ==========================================
// CAMBIAR NÚMERO DE PERSONAS
// ==========================================

function volverInicio() {

    let mensaje;

    if (idiomaActual === "es") {

        mensaje =
            "¿Deseas cambiar el número de personas? " +
            "Se borrará el pedido actual.";

    } else {

        mensaje =
            "Do you want to change the number of people? " +
            "Your current order will be cleared.";

    }


    const confirmar =
        window.confirm(mensaje);


    if (!confirmar) {
        return;
    }


    pedido = {};


    document.getElementById(
        "pantallaMenu"
    ).hidden = true;


    document.getElementById(
        "pantallaInicio"
    ).hidden = false;


    actualizarSelectorPersonas();


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


// ==========================================
// TOTAL SELECCIONADO DE UNA CATEGORÍA
// ==========================================

function totalCategoria(categoria) {

    let total = 0;


    menu.forEach(producto => {

        if (
            producto.categoria === categoria
        ) {

            total +=
                pedido[producto.id] || 0;

        }

    });


    return total;

}


// ==========================================
// ETIQUETAS
// ==========================================

function crearEtiquetas(tags) {

    if (!tags || tags.length === 0) {
        return "";
    }


    const etiquetas = {

        es: {

            vegetariano:
                "✦ Plato vegetariano",

            "sin-gluten":
                "ⓖ Sin gluten"

        },

        en: {

            vegetariano:
                "✦ Vegetarian dish",

            "sin-gluten":
                "ⓖ Gluten free"

        }

    };


    let html =
        '<div class="etiquetas">';


    tags.forEach(tag => {

        html +=
            '<span class="etiqueta">' +
            etiquetas[idiomaActual][tag] +
            "</span>";

    });


    html += "</div>";


    return html;

}


// ==========================================
// MOSTRAR MENÚ
// ==========================================

function mostrarMenu() {

    const contenedores = {

        entradas:
            document.getElementById(
                "listaEntradas"
            ),

        sopas:
            document.getElementById(
                "listaSopas"
            ),

        principales:
            document.getElementById(
                "listaPrincipales"
            ),

        postres:
            document.getElementById(
                "listaPostres"
            )

    };


    categorias.forEach(categoria => {

        contenedores[categoria].innerHTML =
            "";

    });


    menu.forEach(producto => {

        const informacion =
            producto[idiomaActual];


        const cantidad =
            pedido[producto.id] || 0;


        const totalActual =
            totalCategoria(
                producto.categoria
            );


        const limiteAlcanzado =
            totalActual >= personas;


        const tarjeta =
            document.createElement(
                "article"
            );


        tarjeta.className =
            "producto";


        tarjeta.dataset.id =
            producto.id;


        tarjeta.innerHTML = `

            <span class="producto-categoria">
                ${
                    nombresCategorias[
                        idiomaActual
                    ][producto.categoria]
                    .toUpperCase()
                }
            </span>

            <h3>
                ${informacion.nombre}
            </h3>

            <p class="producto-descripcion">
                ${informacion.descripcion}
            </p>

            ${crearEtiquetas(producto.tags)}

            <div class="control">

                <button
                    type="button"
                    class="boton-menos"
                    ${
                        cantidad <= 0
                            ? "disabled"
                            : ""
                    }>
                    −
                </button>

                <span class="cantidad-producto">
                    ${cantidad}
                </span>

                <button
                    type="button"
                    class="boton-mas"
                    ${
                        limiteAlcanzado
                            ? "disabled"
                            : ""
                    }>
                    +
                </button>

            </div>

        `;


        const botonMenos =
            tarjeta.querySelector(
                ".boton-menos"
            );


        const botonMas =
            tarjeta.querySelector(
                ".boton-mas"
            );


        botonMenos.addEventListener(
            "click",
            function () {

                cambiarCantidad(
                    producto.id,
                    -1
                );

            }
        );


        botonMas.addEventListener(
            "click",
            function () {

                cambiarCantidad(
                    producto.id,
                    1
                );

            }
        );


        contenedores[
            producto.categoria
        ].appendChild(tarjeta);

    });


    actualizarContadores();

}


// ==========================================
// CAMBIAR CANTIDAD DE UN PLATILLO
// ==========================================

function cambiarCantidad(id, cambio) {

    const producto =
        menu.find(
            elemento =>
                elemento.id === id
        );


    if (!producto) {
        return;
    }


    const cantidadActual =
        pedido[id] || 0;


    // Si está agregando un platillo,
    // revisar primero el máximo permitido.

    if (cambio > 0) {

        const totalActual =
            totalCategoria(
                producto.categoria
            );


        if (totalActual >= personas) {

            const mensaje =
                obtenerTexto(

                    "Has alcanzado el máximo de " +
                    personas +
                    " platillo(s) en esta categoría.",

                    "You have reached the maximum of " +
                    personas +
                    " dish(es) in this category."

                );

            alert(mensaje);

            return;
        }

    }


    const nuevaCantidad =
        cantidadActual + cambio;


    if (nuevaCantidad <= 0) {

        delete pedido[id];

    } else {

        pedido[id] =
            nuevaCantidad;

    }


    mostrarMenu();

    mostrarPedido();

}


// ==========================================
// ACTUALIZAR CONTADORES
// ==========================================

function actualizarContadores() {

    const elementos = {

        entradas:
            "contadorEntradas",

        sopas:
            "contadorSopas",

        principales:
            "contadorPrincipales",

        postres:
            "contadorPostres"

    };


    categorias.forEach(categoria => {

        const total =
            totalCategoria(categoria);


        const elemento =
            document.getElementById(
                elementos[categoria]
            );


        if (idiomaActual === "es") {

            elemento.textContent =
                total +
                " / " +
                personas +
                " máximo";

        } else {

            elemento.textContent =
                total +
                " / " +
                personas +
                " maximum";

        }


        elemento.classList.toggle(
            "categoria-completa",
            total >= personas
        );

    });

}


// ==========================================
// MOSTRAR RESUMEN
// ==========================================

function mostrarPedido() {

    const contenedor =
        document.getElementById(
            "listaPedido"
        );


    if (idiomaActual === "es") {

        document.getElementById(
            "personasResumen"
        ).textContent =
            "Pedido para " +
            personas +
            (
                personas === 1
                    ? " persona"
                    : " personas"
            );

    } else {

        document.getElementById(
            "personasResumen"
        ).textContent =
            "Order for " +
            personas +
            (
                personas === 1
                    ? " person"
                    : " people"
            );

    }


    const seleccionados =
        menu.filter(
            producto =>
                (pedido[producto.id] || 0)
                > 0
        );


    if (seleccionados.length === 0) {

        contenedor.innerHTML = `

            <p class="pedido-vacio">

                ${
                    obtenerTexto(
                        "Todavía no has seleccionado platillos.",
                        "You haven't selected any dishes yet."
                    )
                }

            </p>

        `;

        return;
    }


    contenedor.innerHTML = "";


    categorias.forEach(categoria => {

        const productosCategoria =
            seleccionados.filter(
                producto =>
                    producto.categoria ===
                    categoria
            );


        // No mostrar categorías vacías
        // en el resumen.

        if (
            productosCategoria.length === 0
        ) {
            return;
        }


        const grupo =
            document.createElement(
                "div"
            );


        grupo.className =
            "grupo-resumen";


        const titulo =
            document.createElement(
                "h3"
            );


        titulo.textContent =
            nombresCategorias[
                idiomaActual
            ][categoria];


        grupo.appendChild(titulo);


        productosCategoria.forEach(
            producto => {

                const item =
                    document.createElement(
                        "div"
                    );


                item.className =
                    "item-carrito";


                const nombre =
                    document.createElement(
                        "span"
                    );


                nombre.textContent =
                    producto[
                        idiomaActual
                    ].nombre;


                const cantidad =
                    document.createElement(
                        "strong"
                    );


                cantidad.textContent =
                    "× " +
                    pedido[producto.id];


                item.appendChild(nombre);

                item.appendChild(cantidad);

                grupo.appendChild(item);

            }
        );


        contenedor.appendChild(grupo);

    });

}


// ==========================================
// CAMBIAR IDIOMA
// ==========================================

function cambiarIdioma(idioma) {

    idiomaActual = idioma;


    const espanol =
        idioma === "es";


    document.getElementById(
        "btnEspanol"
    ).classList.toggle(
        "idioma-activo",
        espanol
    );


    document.getElementById(
        "btnEnglish"
    ).classList.toggle(
        "idioma-activo",
        !espanol
    );


    const textos = {

        textoIdioma: [
            "Selecciona tu idioma",
            "Select your language"
        ],

        textoMesa: [
            "MESA",
            "TABLE"
        ],

        textoRealizaPedido: [
            "Realiza tu pedido",
            "Place your order"
        ],

        tituloBienvenida: [
            "Bienvenidos a K'ooben",
            "Welcome to K'ooben"
        ],

        preguntaPersonas: [
            "¿Para cuántas personas realizarás el pedido?",
            "How many people are you ordering for?"
        ],

        explicacionInicio: [
            "El número de personas establece el máximo de platillos que puedes seleccionar en cada categoría.",
            "The number of people sets the maximum number of dishes you can select in each category."
        ],

        botonContinuar: [
            "Continuar al menú",
            "Continue to menu"
        ],

        etiquetaComensales: [
            "COMENSALES",
            "GUESTS"
        ],

        botonCambiarPersonas: [
            "Cambiar personas",
            "Change party size"
        ],

        navEntradas: [
            "Entradas",
            "Appetizers"
        ],

        navSopas: [
            "Sopas y Cremas",
            "Soups & Creams"
        ],

        navPrincipales: [
            "Platos principales",
            "Main Course"
        ],

        navPostres: [
            "Postres",
            "Desserts"
        ],

        navResumen: [
            "Mi pedido",
            "My order"
        ],

        tituloEntradas: [
            "Entradas",
            "Appetizers"
        ],

        tituloSopas: [
            "Sopas y Cremas",
            "Soups & Creams"
        ],

        tituloPrincipales: [
            "Platos principales",
            "Main Course"
        ],

        tituloPostres: [
            "Postres",
            "Desserts"
        ],

        seleccionPostres: [
            "Pregunte por nuestra selección de postres.",
            "Ask about our desserts selection."
        ],

        avisoCrudos: [
            "Estimado huésped, el consumo de alimentos crudos es bajo su propio riesgo.",
            "Dear guest, the consumption of raw ingredients is done at your own risk."
        ],

        textoResumen: [
            "RESUMEN",
            "SUMMARY"
        ],

        tituloPedido: [
            "Tu pedido",
            "Your order"
        ],

        textoMesaPedido: [
            "Mesa",
            "Table"
        ],

        labelObservaciones: [
            "Observaciones del pedido",
            "Order notes"
        ],

        textoPrototipo: [
            "Sistema digital de pedidos mediante código QR",
            "Digital ordering system using QR codes"
        ]

    };


    Object.keys(textos).forEach(id => {

        const elemento =
            document.getElementById(id);


        if (!elemento) {
            return;
        }


        elemento.textContent =
            textos[id][
                espanol ? 0 : 1
            ];

    });


    // Texto de langosta

    document.getElementById(
        "textoLangosta"
    ).innerHTML =
        espanol

            ? "Incremente su experiencia gastronómica.<br>Con nuestra cena de langosta. Reserve con RRPP."

            : "Enhance your dining experience.<br>With our lobster dinner. Book with PR.";


    // Placeholder

    document.getElementById(
        "observaciones"
    ).placeholder =
        espanol

            ? "Alergias o indicaciones especiales."

            : "Allergies or special instructions.";


    // Botón WhatsApp

    document.getElementById(
        "botonWhatsApp"
    ).querySelector(
        "span"
    ).textContent =
        espanol
            ? "Enviar pedido"
            : "Send order";


    actualizarSelectorPersonas();


    if (
        !document.getElementById(
            "pantallaMenu"
        ).hidden
    ) {

        mostrarMenu();

        mostrarPedido();

    }

}


// ==========================================
// ENVIAR POR WHATSAPP
// ==========================================

function enviarWhatsApp() {

    const seleccionados =
        menu.filter(
            producto =>
                (pedido[producto.id] || 0)
                > 0
        );


    // ÚNICA OBLIGACIÓN:
    // debe existir por lo menos
    // un platillo seleccionado.

    if (seleccionados.length === 0) {

        alert(

            obtenerTexto(

                "Selecciona al menos un platillo antes de enviar el pedido.",

                "Please select at least one dish before sending your order."

            )

        );

        return;
    }


    const observaciones =
        document.getElementById(
            "observaciones"
        ).value.trim();


    const lineas = [];


    lineas.push(

        obtenerTexto(
            "NUEVO PEDIDO - K'OOBEN",
            "NEW ORDER - K'OOBEN"
        )

    );


    lineas.push(
        "━━━━━━━━━━━━━━━━"
    );


    lineas.push(

        obtenerTexto(
            "MESA: ",
            "TABLE: "
        ) + mesa

    );


    lineas.push(

        obtenerTexto(
            "PERSONAS: ",
            "PEOPLE: "
        ) + personas

    );


    // ======================================
    // AGREGAR SOLO CATEGORÍAS
    // QUE TENGAN ALGO SELECCIONADO
    // ======================================

    categorias.forEach(categoria => {

        const productosCategoria =
            seleccionados.filter(
                producto =>
                    producto.categoria ===
                    categoria
            );


        if (
            productosCategoria.length === 0
        ) {
            return;
        }


        lineas.push("");


        lineas.push(

            nombresCategorias[
                idiomaActual
            ][categoria]
            .toUpperCase() + ":"

        );


        productosCategoria.forEach(
            producto => {

                lineas.push(

                    pedido[producto.id] +
                    " × " +
                    producto[
                        idiomaActual
                    ].nombre

                );

            }
        );

    });


    // ======================================
    // OBSERVACIONES
    // ======================================

    lineas.push("");


    lineas.push(

        obtenerTexto(
            "OBSERVACIONES:",
            "NOTES:"
        )

    );


    lineas.push(

        observaciones ||

        obtenerTexto(
            "Sin observaciones",
            "No notes"
        )

    );


    lineas.push(
        "━━━━━━━━━━━━━━━━"
    );


    const mensaje =
        lineas.join("\n");


    const url =
        "https://wa.me/" +
        numeroWhatsApp +
        "?text=" +
        encodeURIComponent(mensaje);


    window.open(
        url,
        "_blank",
        "noopener,noreferrer"
    );

}


// ==========================================
// EVENTOS
// ==========================================

document.getElementById(
    "botonMenosPersonas"
).addEventListener(
    "click",
    function () {

        cambiarPersonas(-1);

    }
);


document.getElementById(
    "botonMasPersonas"
).addEventListener(
    "click",
    function () {

        cambiarPersonas(1);

    }
);


document.getElementById(
    "botonContinuar"
).addEventListener(
    "click",
    iniciarPedido
);


document.getElementById(
    "botonCambiarPersonas"
).addEventListener(
    "click",
    volverInicio
);


document.getElementById(
    "botonWhatsApp"
).addEventListener(
    "click",
    enviarWhatsApp
);


// ==========================================
// INICIALIZAR MESA
// ==========================================

document.getElementById(
    "numeroMesa"
).textContent = mesa;


document.getElementById(
    "numeroMesaPedido"
).textContent = mesa;


// ==========================================
// INICIAR SISTEMA
// ==========================================

actualizarSelectorPersonas();

cambiarIdioma("es");