// Capturamos el botón de procesar donación y el mensaje de error
const btnProcesarDonacion = document.getElementById('btnProcesarDonacion');
const mensajeError = document.getElementById('mensajeError');

// Escuchamos el clic en el botón
btnProcesarDonacion.addEventListener('click', function() {
    // Capturamos el monto ingresado por el usuario
    const monto = parseFloat(document.getElementById('monto').value);

    // Validamos que el monto sea mayor que 0 y esté dentro de un rango válido
    if (isNaN(monto)) {
        mensajeError.textContent = 'Por favor, ingresa un monto válido.';
        mensajeError.style.display = 'block';
        return;
    }

    if (monto <= 0) {
        mensajeError.textContent = 'El monto debe ser mayor que 0.';
        mensajeError.style.display = 'block';
        return;
    }

    if (monto > 1000000) {
        mensajeError.textContent = 'El monto máximo permitido es 1,000,000 COP.';
        mensajeError.style.display = 'block';
        return;
    }

    // Si el monto es válido, ocultamos el mensaje de error
    mensajeError.style.display = 'none';

    // Actualizamos el atributo data-epayco-amount del botón de ePayco
    const epaycoButton = document.querySelector('.epayco-button');
    epaycoButton.setAttribute('data-epayco-amount', monto);
    epaycoButton.setAttribute('data-epayco-tax-base', monto);

    // Mostramos el botón de ePayco
    document.getElementById('epayco-button-container').style.display = 'block';

    // Ocultamos el botón de procesar donación
    btnProcesarDonacion.style.display = 'none';
});