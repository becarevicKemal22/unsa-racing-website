import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./style.css";

/*
    Ovaj event listener na svako ucitavanje stranice preuzme header.html i njegov html umece u header tag
    Zbog toga se main.js mora dodati kao skripta na svaku stranicu websajta, a zajedno sa njom i header tag u koji ce
    se ucitati html headera. U ovoj funkciji se takodjer dodaju odgovarajuce CSS klase vezane za header (za aktivni
    link i za prvobitno proziran header na Home stranici)
 */
document.addEventListener('DOMContentLoaded', function () {
    fetch('src/partials/header.html')
        .then(response => response.text())
        .then(html => {
            document.querySelector('header').innerHTML = html;

            const currentPath = window.location.pathname;
            if (currentPath === "/") {
                document.querySelector('nav').classList.add("transparent-nav");
            } else {
                document.querySelector('nav').classList.add("scrolled-nav");
            }

            const navLinks = document.querySelectorAll('.nav-link');
            navLinks.forEach(link => {
                const linkHref = link.getAttribute('href');

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

/*
    Ovaj event listener sluzi kako bi se na Home stranici dodala pozadina headeru nakon sto korisnik scrolla. Klasa
    transparent-nav se dodaje samo kada je korisnik na home ("/") URL-u, pa se zbog toga u event listeneru jedino
    razmatra ta lokacija.
 */
window.addEventListener('scroll', () => {
    if (window.location.pathname !== "/") return;
    const nav = document.querySelector('nav');
    if (window.scrollY > 10) {
        nav.classList.add('scrolled-nav');
    } else {
        nav.classList.remove('scrolled-nav');
    }
});