// ==========================================
// SISTEMA DE PEDIDOS - RESTAURANTE
// ESPAÑOL / ENGLISH
// ==========================================


// ==========================================
// DETECTAR NÚMERO DE MESA
// ==========================================

const parametros =
    new URLSearchParams(window.location.search);


const mesa =
    parametros.get("mesa") || "1";


const numeroMesa =
    document.getElementById("numeroMesa");


if (numeroMesa) {

    numeroMesa.textContent = mesa;

}


// ==========================================
// IDIOMA ACTUAL
// ==========================================

let idiomaActual = "es";


// ==========================================
// PEDIDO
// ==========================================

let pedido = [];

let total = 0;


// ==========================================
// NOMBRES DE PRODUCTOS
// ==========================================

const productos = {

    hamburguesa: {

        es: "Hamburguesa clásica",

        en: "Classic hamburger"

    },

    pizza: {

        es: "Pizza de queso",

        en: "Cheese pizza"

    },

    coca: {

        es: "Coca-Cola",

        en: "Coca-Cola"

    },

    agua: {

        es: "Agua embotellada",

        en: "Bottled water"

    },

    pastel: {

        es: "Pastel de chocolate",

        en: "Chocolate cake"

    }

};


// ==========================================
// CAMBIAR IDIOMA
// ==========================================

function cambiarIdioma(idioma) {


    idiomaActual = idioma;


    // ==========================================
    // ESPAÑOL
    // ==========================================

    if (idioma === "es") {


        document.documentElement.lang = "es";


        document.getElementById(
            "tituloRestaurante"
        ).textContent =
            "🍽️ Restaurante";


        document.getElementById(
            "subtituloRestaurante"
        ).textContent =
            "Servicio de restaurante del hotel";


        document.getElementById(
            "textoIdioma"
        ).textContent =
            "Selecciona tu idioma";


        document.getElementById(
            "textoMesa"
        ).textContent =
            "Mesa";


        document.getElementById(
            "textoRealizaPedido"
        ).textContent =
            "Realiza tu pedido desde tu teléfono";


        document.getElementById(
            "tituloAlimentos"
        ).textContent =
            "🍔 Alimentos";


        document.getElementById(
            "tituloBebidas"
        ).textContent =
            "🥤 Bebidas";


        document.getElementById(
            "tituloPostres"
        ).textContent =
            "🍰 Postres";


        document.getElementById(
            "nombreHamburguesa"
        ).textContent =
            "Hamburguesa clásica";


        document.getElementById(
            "descripcionHamburguesa"
        ).textContent =
            "Hamburguesa con queso y papas";


        document.getElementById(
            "nombrePizza"
        ).textContent =
            "Pizza de queso";


        document.getElementById(
            "descripcionPizza"
        ).textContent =
            "Pizza de queso";


        document.getElementById(
            "nombreCoca"
        ).textContent =
            "Coca-Cola";


        document.getElementById(
            "descripcionCoca"
        ).textContent =
            "Refresco de 600 ml";


        document.getElementById(
            "nombreAgua"
        ).textContent =
            "Agua embotellada";


        document.getElementById(
            "descripcionAgua"
        ).textContent =
            "Agua natural";


        document.getElementById(
            "nombrePastel"
        ).textContent =
            "Pastel de chocolate";


        document.getElementById(
            "descripcionPastel"
        ).textContent =
            "Rebanada de pastel de chocolate";


        document.getElementById(
            "tituloPedido"
        ).textContent =
            "🛒 Tu pedido";


        document.getElementById(
            "textoTotal"
        ).textContent =
            "Total";


        document.getElementById(
            "labelObservaciones"
        ).textContent =
            "Observaciones del pedido";


        document.getElementById(
            "observaciones"
        ).placeholder =
            "Ejemplo: sin cebolla, poco hielo, etc.";


        document.getElementById(
            "botonWhatsApp"
        ).textContent =
            "📲 Enviar pedido por WhatsApp";


        // Botones de idioma

        document.getElementById(
            "btnEspañol"
        ).classList.add(
            "idioma-activo"
        );


        document.getElementById(
            "btnEnglish"
        ).classList.remove(
            "idioma-activo"
        );

    }


    // ==========================================
    // INGLÉS
    // ==========================================

    else {


        document.documentElement.lang = "en";


        document.getElementById(
            "tituloRestaurante"
        ).textContent =
            "🍽️ Restaurant";


        document.getElementById(
            "subtituloRestaurante"
        ).textContent =
            "Hotel restaurant service";


        document.getElementById(
            "textoIdioma"
        ).textContent =
            "Select your language";


        document.getElementById(
            "textoMesa"
        ).textContent =
            "Table";


        document.getElementById(
            "textoRealizaPedido"
        ).textContent =
            "Place your order from your phone";


        document.getElementById(
            "tituloAlimentos"
        ).textContent =
            "🍔 Food";


        document.getElementById(
            "tituloBebidas"
        ).textContent =
            "🥤 Drinks";


        document.getElementById(
            "tituloPostres"
        ).textContent =
            "🍰 Desserts";


        document.getElementById(
            "nombreHamburguesa"
        ).textContent =
            "Classic hamburger";


        document.getElementById(
            "descripcionHamburguesa"
        ).textContent =
            "Hamburger with cheese and fries";


        document.getElementById(
            "nombrePizza"
        ).textContent =
            "Cheese pizza";


        document.getElementById(
            "descripcionPizza"
        ).textContent =
            "Cheese pizza";


        document.getElementById(
            "nombreCoca"
        ).textContent =
            "Coca-Cola";


        document.getElementById(
            "descripcionCoca"
        ).textContent =
            "600 ml soft drink";


        document.getElementById(
            "nombreAgua"
        ).textContent =
            "Bottled water";


        document.getElementById(
            "descripcionAgua"
        ).textContent =
            "Natural water";


        document.getElementById(
            "nombrePastel"
        ).textContent =
            "Chocolate cake";


        document.getElementById(
            "descripcionPastel"
        ).textContent =
            "Slice of chocolate cake";


        document.getElementById(
            "tituloPedido"
        ).textContent =
            "🛒 Your order";


        document.getElementById(
            "textoTotal"
        ).textContent =
            "Total";


        document.getElementById(
            "labelObservaciones"
        ).textContent =
            "Order notes";


        document.getElementById(
            "observaciones"
        ).placeholder =
            "Example: no onions, less ice, etc.";


        document.getElementById(
            "botonWhatsApp"
        ).textContent =
            "📲 Send order via WhatsApp";


        // Botones de idioma

        document.getElementById(
            "btnEnglish"
        ).classList.add(
            "idioma-activo"
        );


        document.getElementById(
            "btnEspañol"
        ).classList.remove(
            "idioma-activo"
        );

    }


    // ==========================================
    // ACTUALIZAR CARRITO
    // ==========================================

    mostrarPedido();

}


// ==========================================
// CAMBIAR CANTIDAD CON + Y -
// ==========================================

function cambiarCantidad(nombre, precio, cambio) {


    // Buscar producto

    const indice =
        pedido.findIndex(
            producto => producto.nombre === nombre
        );


    // ==========================================
    // AGREGAR
    // ==========================================

    if (cambio === 1) {

        pedido.push({

            nombre: nombre,

            precio: precio

        });

    }


    // ==========================================
    // QUITAR
    // ==========================================

    if (cambio === -1 && indice !== -1) {

        pedido.splice(indice, 1);

    }


    // Actualizar total

    calcularTotal();


    // Actualizar pantalla

    mostrarPedido();


    // Actualizar contador

    actualizarContador(nombre);

}


// ==========================================
// CAMBIAR CANTIDAD MANUALMENTE
// ==========================================

function cantidadManual(nombre, precio, elemento) {


    let cantidad =
        parseInt(elemento.value);


    // ==========================================
    // VALIDAR
    // ==========================================

    if (isNaN(cantidad) || cantidad < 0) {

        cantidad = 0;

    }


    // Evitar decimales

    cantidad =
        Math.floor(cantidad);


    // ==========================================
    // ACTUALIZAR INPUT
    // ==========================================

    elemento.value = cantidad;


    // ==========================================
    // ELIMINAR PRODUCTOS ACTUALES
    // ==========================================

    pedido =
        pedido.filter(
            producto => producto.nombre !== nombre
        );


    // ==========================================
    // AGREGAR NUEVA CANTIDAD
    // ==========================================

    for (
        let i = 0;
        i < cantidad;
        i++
    ) {

        pedido.push({

            nombre: nombre,

            precio: precio

        });

    }


    // ==========================================
    // ACTUALIZAR
    // ==========================================

    calcularTotal();

    mostrarPedido();

}


// ==========================================
// CALCULAR TOTAL
// ==========================================

function calcularTotal() {

    total = 0;


    pedido.forEach(producto => {

        total += producto.precio;

    });

}


// ==========================================
// ACTUALIZAR CONTADOR
// ==========================================

function actualizarContador(nombre) {


    const cantidad =
        pedido.filter(
            producto => producto.nombre === nombre
        ).length;


    const elemento =
        document.getElementById(
            "cantidad-" + nombre
        );


    if (elemento) {

        elemento.value = cantidad;

    }

}


// ==========================================
// MOSTRAR PEDIDO
// ==========================================

function mostrarPedido() {


    const lista =
        document.getElementById("listaPedido");


    const totalElemento =
        document.getElementById("total");


    lista.innerHTML = "";


    // ==========================================
    // PEDIDO VACÍO
    // ==========================================

    if (pedido.length === 0) {


        const mensajeVacio =
            idiomaActual === "es"
                ? "No has agregado productos."
                : "You have not added any products.";


        lista.innerHTML =
            `<p>${mensajeVacio}</p>`;

    }


    // ==========================================
    // PEDIDO CON PRODUCTOS
    // ==========================================

    else {


        const productosAgrupados = {};


        pedido.forEach(producto => {


            if (!productosAgrupados[producto.nombre]) {

                productosAgrupados[producto.nombre] = {

                    cantidad: 0,

                    precio: producto.precio

                };

            }


            productosAgrupados[producto.nombre].cantidad++;

        });


        // ==========================================
        // MOSTRAR PRODUCTOS
        // ==========================================

        Object.keys(productosAgrupados).forEach(nombre => {


            const producto =
                productosAgrupados[nombre];


            const subtotal =
                producto.cantidad *
                producto.precio;


            const elemento =
                document.createElement("div");


            elemento.className =
                "item-carrito";


            const nombreTraducido =
                productos[nombre][idiomaActual];


            elemento.innerHTML = `

                ${producto.cantidad}
                ×
                ${nombreTraducido}
                —
                $${subtotal}

            `;


            lista.appendChild(elemento);

        });

    }


    // ==========================================
    // ACTUALIZAR TOTAL
    // ==========================================

    totalElemento.textContent =
        total;

}


// ==========================================
// ENVIAR PEDIDO POR WHATSAPP
// ==========================================

function enviarWhatsApp() {


    // ==========================================
    // VERIFICAR PEDIDO
    // ==========================================

    if (pedido.length === 0) {


        const mensajeError =
            idiomaActual === "es"
                ? "Agrega al menos un producto."
                : "Please add at least one product.";


        alert(mensajeError);


        return;

    }


    // ==========================================
    // AGRUPAR PRODUCTOS
    // ==========================================

    const productosAgrupados = {};


    pedido.forEach(producto => {


        if (!productosAgrupados[producto.nombre]) {

            productosAgrupados[producto.nombre] = {

                cantidad: 0,

                precio: producto.precio

            };

        }


        productosAgrupados[producto.nombre].cantidad++;

    });


    // ==========================================
    // CREAR MENSAJE
    // ==========================================

    let mensaje = "";


    if (idiomaActual === "es") {


        mensaje +=
            "*NUEVO PEDIDO*\n";


        mensaje +=
            "━━━━━━━━━━━━━━━━\n\n";


        mensaje +=
            `*MESA:* ${mesa}\n\n`;


        mensaje +=
            "*PEDIDO:*\n\n";


    }


    else {


        mensaje +=
            "*NEW ORDER*\n";


        mensaje +=
            "━━━━━━━━━━━━━━━━\n\n";


        mensaje +=
            `*TABLE:* ${mesa}\n\n`;


        mensaje +=
            "*ORDER:*\n\n";

    }


    // ==========================================
    // PRODUCTOS
    // ==========================================

    Object.keys(productosAgrupados).forEach(nombre => {


        const producto =
            productosAgrupados[nombre];


        const subtotal =
            producto.cantidad *
            producto.precio;


        const nombreTraducido =
            productos[nombre][idiomaActual];


        mensaje +=
            `${producto.cantidad} × ${nombreTraducido} — $${subtotal}\n`;

    });


    // ==========================================
    // OBSERVACIONES
    // ==========================================

    const observaciones =
        document.getElementById(
            "observaciones"
        ).value.trim();


    if (observaciones !== "") {


        if (idiomaActual === "es") {

            mensaje +=
                `\n*OBSERVACIONES:*\n${observaciones}\n`;

        }


        else {

            mensaje +=
                `\n*ORDER NOTES:*\n${observaciones}\n`;

        }

    }


    // ==========================================
    // TOTAL
    // ==========================================

    mensaje +=
        "\n━━━━━━━━━━━━━━━━\n\n";


    mensaje +=
        idiomaActual === "es"
            ? `*TOTAL: $${total}*\n\n`
            : `*TOTAL: $${total}*\n\n`;


    mensaje +=
        idiomaActual === "es"
            ? "Pedido enviado desde el sistema QR"
            : "Order sent from the QR system";


    // ==========================================
    // NÚMERO DE WHATSAPP
    // ==========================================

    // IMPORTANTE:
    // Coloca aquí el número que recibirá
    // los pedidos.

    const telefono =
        "5217714047997";


    // ==========================================
    // CODIFICAR MENSAJE
    // ==========================================

    const mensajeCodificado =
        encodeURIComponent(mensaje);


    // ==========================================
    // CREAR ENLACE
    // ==========================================

    const url =
        `https://wa.me/${telefono}?text=${mensajeCodificado}`;


    // ==========================================
    // ABRIR WHATSAPP
    // ==========================================

    window.open(
        url,
        "_blank"
    );

}


// ==========================================
// INICIAR EN ESPAÑOL
// ==========================================

cambiarIdioma("es");
