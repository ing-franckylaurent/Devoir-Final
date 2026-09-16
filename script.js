// ========================================
// 1. MODE NUIT
// ========================================
document.addEventListener('DOMContentLoaded', function() {

    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;

    // Vérifier le thème enregistré
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');

        if (themeToggle) {
            themeToggle.textContent = '☀️ Mode Jour';
        }
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', function() {

            body.classList.toggle('dark-mode');

            if (body.classList.contains('dark-mode')) {
                themeToggle.textContent = '☀️ Mode Jour';
                localStorage.setItem('theme', 'dark');
            } else {
                themeToggle.textContent = '🌙 Mode Nuit';
                localStorage.setItem('theme', 'light');
            }

        });
    }


    // ========================================
    // 2. MENU HAMBURGER
    // ========================================
    const hamburger = document.getElementById('hamburger');
    const navUl = document.querySelector('nav > ul');

    if (hamburger && navUl) {

        hamburger.addEventListener('click', function() {
            navUl.classList.toggle('show');
        });

        // Fermer le menu quand on clique sur un lien
        const navLinks = navUl.querySelectorAll('a');

        navLinks.forEach(function(link) {

            link.addEventListener('click', function() {

                if (window.innerWidth <= 768) {
                    navUl.classList.remove('show');
                }

            });

        });
    }


    // ========================================
    // 3. BOUTON RETOUR EN HAUT
    // ========================================
    const backToTop = document.getElementById('backToTop');

    if (backToTop) {

        window.addEventListener('scroll', function() {

            if (window.scrollY > 300) {
                backToTop.style.display = 'block';
            } else {
                backToTop.style.display = 'none';
            }

        });

        backToTop.addEventListener('click', function() {

            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });

        });
    }


    // ========================================
    // 4. DATE ET HEURE
    // ========================================
    const datetimeElement = document.getElementById('datetime');

    function updateDateTime() {

        if (!datetimeElement) return;

        const now = new Date();

        const options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        };

        datetimeElement.textContent =
            now.toLocaleDateString('fr-FR', options);
    }

    updateDateTime();

    setInterval(updateDateTime, 1000);


    // ========================================
    // 5. FERMER LE MENU AU REDIMENSIONNEMENT
    // ========================================
    window.addEventListener('resize', function() {

        if (window.innerWidth > 768 && navUl) {
            navUl.classList.remove('show');
        }

    });


    // ========================================
    // 6. FORMULAIRE DE CONTACT
    // ========================================
    const contactForm = document.getElementById('contactForm');
    const confirmation = document.getElementById('confirmation');

    if (contactForm && confirmation) {

        contactForm.addEventListener('submit', function(event) {

            // Empêcher le rechargement de la page
            event.preventDefault();

            // Cacher le formulaire
            contactForm.style.display = 'none';

            // Afficher le message de confirmation
            confirmation.style.display = 'block';

        });

    }

});
// ========================================
// TOUCH EVENTS POU MOBIL
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    const dropdownLinks = document.querySelectorAll('.dropdown > a');
    
    dropdownLinks.forEach(function(link) {
        // Pou touch (mobil)
        link.addEventListener('touchstart', function(e) {
            e.preventDefault();
            const dropdown = this.parentElement;
            
            // Fèmen tout lòt
            document.querySelectorAll('.dropdown').forEach(function(other) {
                if (other !== dropdown) {
                    other.classList.remove('open');
                }
            });
            
            // Altène
            dropdown.classList.toggle('open');
        }, { passive: false });
    });
});