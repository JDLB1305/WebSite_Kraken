document.addEventListener("DOMContentLoaded", function () {
    const timelineItems = document.querySelectorAll(".timeline-item");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        },
        { threshold: 0.5 } // Activa la animación cuando el 50% del elemento es visible
    );

    timelineItems.forEach((item) => {
        observer.observe(item);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const timelineContents = document.querySelectorAll('.timeline-content');
    const modal = document.getElementById('myModal');
    const closeBtn = document.querySelector('.close');
    const modalText = document.getElementById('modal-text');

    function openModal(event) {
        const info = event.currentTarget.getAttribute('data-info');
        modalText.innerHTML = info;
        modal.style.display = 'block';
    }

    function closeModal() {
        modal.style.display = 'none';
    }

    timelineContents.forEach(content => {
        content.addEventListener('click', openModal);
    });

    closeBtn.addEventListener('click', () => {
        console.log('Botón de cierre clickeado'); // Depuración
        closeModal();
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            console.log('Clic fuera del modal'); // Depuración
            closeModal();
        }
    });
});