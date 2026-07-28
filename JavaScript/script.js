/* =========================================
   WOODCRAFT FURNITURE
   JAVASCRIPT
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       CURRENT YEAR
    ========================= */

    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }


    /* =========================
       MOBILE MENU
    ========================= */

    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");

    if (menuToggle && navMenu) {

        menuToggle.addEventListener("click", () => {
            navMenu.classList.toggle("open");

            menuToggle.textContent =
                navMenu.classList.contains("open")
                    ? "✕"
                    : "☰";
        });


        const navLinks = navMenu.querySelectorAll("a");

        navLinks.forEach(link => {

            link.addEventListener("click", () => {

                navMenu.classList.remove("open");
                menuToggle.textContent = "☰";

            });

        });

    }


    /* =========================
       FURNITURE FILTER
    ========================= */

    const filterButtons = document.querySelectorAll("[data-filter]");
    const filterItems = document.querySelectorAll(".filter-item");

    if (filterButtons.length && filterItems.length) {

        filterButtons.forEach(button => {

            button.addEventListener("click", () => {

                const filter = button.dataset.filter;

                filterButtons.forEach(btn => {
                    btn.classList.remove("active");
                });

                button.classList.add("active");

                filterItems.forEach(item => {

                    const category = item.dataset.category;

                    if (filter === "all" || category === filter) {
                        item.style.display = "";
                    } else {
                        item.style.display = "none";
                    }

                });

            });

        });

    }


    /* =========================
       GALLERY FILTER
    ========================= */

    const galleryButtons =
        document.querySelectorAll("[data-gallery-filter]");

    const galleryItems =
        document.querySelectorAll("[data-gallery-category]");

    if (galleryButtons.length && galleryItems.length) {

        galleryButtons.forEach(button => {

            button.addEventListener("click", () => {

                const filter =
                    button.dataset.galleryFilter;

                galleryButtons.forEach(btn => {
                    btn.classList.remove("active");
                });

                button.classList.add("active");

                galleryItems.forEach(item => {

                    const category =
                        item.dataset.galleryCategory;

                    if (
                        filter === "all" ||
                        category === filter
                    ) {

                        item.style.display = "";

                    } else {

                        item.style.display = "none";

                    }

                });

            });

        });

    }


    /* =========================
       CONTACT FORM
    ========================= */

    const contactForm =
        document.getElementById("contactForm");

    const formMessage =
        document.getElementById("formMessage");

    if (contactForm) {

        contactForm.addEventListener("submit", (event) => {

            event.preventDefault();

            const name =
                document.getElementById("name").value.trim();

            const phone =
                document.getElementById("phone").value.trim();

            const service =
                document.getElementById("service").value;

            const message =
                document.getElementById("message").value.trim();


            if (!name || !phone || !message) {

                formMessage.textContent =
                    "Please fill in all required fields.";

                return;
            }


            /*
                Replace this number with your
                actual WhatsApp number.

                Format:
                country code + number
                without + or spaces.
            */

            const whatsappNumber = "919876543210";


            const text =
                `Hello WoodCraft Furniture,%0A%0A` +
                `Name: ${encodeURIComponent(name)}%0A` +
                `Phone: ${encodeURIComponent(phone)}%0A` +
                `Service: ${encodeURIComponent(service || "Not specified")}%0A%0A` +
                `Project Details:%0A${encodeURIComponent(message)}`;


            const whatsappURL =
                `https://wa.me/${whatsappNumber}?text=${text}`;


            formMessage.textContent =
                "Opening WhatsApp...";


            window.open(
                whatsappURL,
                "_blank"
            );

        });

    }


    /* =========================
       SCROLL REVEAL
    ========================= */

    const revealElements =
        document.querySelectorAll(
            ".product-card, .service-card, .value-card, .process-step"
        );

    const revealObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("reveal", "visible");

                        revealObserver.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.12
            }
        );


    revealElements.forEach(element => {
        revealObserver.observe(element);
    });


    /* =========================
       ESCAPE MENU
    ========================= */

    document.addEventListener("keydown", event => {

        if (event.key === "Escape" && navMenu) {

            navMenu.classList.remove("open");

            if (menuToggle) {
                menuToggle.textContent = "☰";
            }

        }

    });

});
