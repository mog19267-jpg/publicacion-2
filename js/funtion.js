const formulario = document.getElementById("formContacto");
if (formulario) {
    const nombre = document.getElementById("nombre");
    const correo = document.getElementById("correo");
    const asunto = document.getElementById("asunto");
    const mensaje = document.getElementById("mensaje");
    const acepto = document.getElementById("acepto");
    const errorNombre = document.getElementById("errorNombre");
    const errorCorreo = document.getElementById("errorCorreo");
    const errorAsunto = document.getElementById("errorAsunto");
    const errorMensaje = document.getElementById("errorMensaje");
    const errorAcepto = document.getElementById("errorAcepto");
    const respuesta = document.getElementById("respuestaFormulario");
    formulario.addEventListener("submit", function(evento) {
        evento.preventDefault();
        let valido = true;
        document.querySelectorAll(".error").forEach(error => {
            error.textContent = "";
        });
        formulario.querySelectorAll(".invalido, .valido").forEach(campo => {
            campo.classList.remove("invalido", "valido");
        });
        respuesta.textContent = "";
        respuesta.className = "";
        const nombreValor = nombre.value.trim();
        if (nombreValor.length < 2) {
            errorNombre.textContent =
                "Escribe tu nombre con al menos 2 caracteres.";

            nombre.classList.add("invalido");
            valido = false;
        } else {
            nombre.classList.add("valido");
        }
        const correoValor = correo.value.trim();

        const expresionCorreo =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!expresionCorreo.test(correoValor)) {
            errorCorreo.textContent =
                "Escribe un correo electrónico válido.";

            correo.classList.add("invalido");
            valido = false;
        } else {
            correo.classList.add("valido");
        }
        if (asunto.value === "") {
            errorAsunto.textContent =
                "Selecciona un asunto.";

            asunto.classList.add("invalido");
            valido = false;
        } else {
            asunto.classList.add("valido");
        }
        const mensajeValor = mensaje.value.trim();

        if (mensajeValor.length < 10) {
            errorMensaje.textContent =
                "El mensaje debe tener al menos 10 caracteres.";

            mensaje.classList.add("invalido");
            valido = false;
        } else {
            mensaje.classList.add("valido");
        }
        if (!acepto.checked) {
            errorAcepto.textContent =
                "Debes confirmar que tus datos son correctos.";

            valido = false;
        }
        if (valido) {

            respuesta.textContent =
                "¡Gracias, " + nombreValor +
                "! Tu formulario se ha validado correctamente.";

            respuesta.classList.add("exito");
            formulario.reset();

            formulario.querySelectorAll(".valido").forEach(campo => {
                campo.classList.remove("valido");
            });

        } else {

            respuesta.textContent =
                "Revisa los campos marcados y corrige los errores.";

            respuesta.classList.add("fallo");
            const primerError = formulario.querySelector(".invalido");

            if (primerError) {
                primerError.focus();
            } else if (!acepto.checked) {
                acepto.focus();
            }
        }

    });
    [nombre, correo, asunto, mensaje].forEach(campo => {

        campo.addEventListener("input", function() {

            campo.classList.remove("invalido", "valido");

            const error = document.getElementById(
                "error" +
                campo.id.charAt(0).toUpperCase() +
                campo.id.slice(1)
            );

            if (error) {
                error.textContent = "";
            }

        });

    });

    acepto.addEventListener("change", function() {
        errorAcepto.textContent = "";
    });

}