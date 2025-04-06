import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./style.css";

/*
    Ovaj event listener na svako ucitavanje stranice preuzme header.html i njegov html umece u header tag
    Zbog toga se main.js mora dodati kao skripta na svaku stranicu websajta, a zajedno sa njom i header tag u koji ce
    se ucitati html headera.
 */
document.addEventListener('DOMContentLoaded', function() {
    fetch('src/partials/header.html')
        .then(response => response.text())
        .then(html => {
            document.querySelector('header').innerHTML = html;

            // Nakon ucitavanja headera se odavdje dodaje 'active' klasa na link na kojem se korisnik trenutno nalazi
            const navLinks = document.querySelectorAll('.nav-link');
            navLinks.forEach(link => {
                const linkHref = link.getAttribute('href');
                const currentPath = window.location.pathname;

                if (currentPath === linkHref)
                    link.classList.add('active');
                 else
                    link.classList.remove('active');

            });
        })
        .catch(error => {
            console.error('Greska pri ucitavanju headera:', error);
        });
});

