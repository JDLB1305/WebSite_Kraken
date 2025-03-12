function abrirModal(entrenador) {
    document.getElementById(`modal-${entrenador}`).style.display = "block";
}

function cerrarModal(entrenador) {
    document.getElementById(`modal-${entrenador}`).style.display = "none";
}

// Cerrar modal al hacer clic fuera del contenido
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
    }
};