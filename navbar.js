// 1. Cargar el HTML del navbar de forma asíncrona
fetch('navbar.html')
    .then(response => {
        if (!response.ok) throw new Error('Error al cargar navbar.html');
        return response.text();
    })
    .then(htmlContent => {
        // Inyectar dentro del <header id="main-header">
        const header = document.getElementById('main-header');
        if (header) {
            header.innerHTML = htmlContent;
            
            // 2. Activar la lógica del botón hamburguesa DESPUÉS de inyectar el HTML
            initNavbarEvents();
        }
    })
    .catch(error => console.error('Error al inyectar el navbar:', error));

// Función con tu código original de apertura/cierre del menú
function initNavbarEvents() {
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.getElementById('nav-links');
    const menuIcon = mobileMenu ? mobileMenu.querySelector('i') : null;

    if (mobileMenu && navLinks) {
        mobileMenu.addEventListener('click', function () {
            navLinks.classList.toggle('show');

            if (menuIcon) {
                if (navLinks.classList.contains('show')) {
                    menuIcon.className = 'fa-solid fa-xmark';
                } else {
                    menuIcon.className = 'fa-solid fa-bars';
                }
            }
        });
    }
}