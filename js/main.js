document.addEventListener("DOMContentLoaded", () => {
    const nav = document.getElementById("nav");
    const toggle = document.querySelector(".nav-toggle");
    const links = document.querySelector(".nav-links");
    const form = document.getElementById("contactForm");

    const onScroll = () => {
        nav.classList.toggle("scrolled", window.scrollY > 40);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    toggle.addEventListener("click", () => {
        const open = links.classList.toggle("open");
        toggle.setAttribute("aria-expanded", String(open));
        document.body.style.overflow = open ? "hidden" : "";
    });

    links.querySelectorAll("a").forEach((a) => {
        a.addEventListener("click", () => {
            links.classList.remove("open");
            toggle.setAttribute("aria-expanded", "false");
            document.body.style.overflow = "";
        });
    });

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", (event) => {
            const id = anchor.getAttribute("href");
            if (!id || id === "#") return;
            const target = document.querySelector(id);
            if (!target) return;
            event.preventDefault();
            const offset = nav.offsetHeight + 8;
            const top = target.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top, behavior: "smooth" });
        });
    });

    const reveal = document.querySelectorAll(
        ".about-copy, .about-photo, .catalog-intro, .product, .partner-copy, .contact-intro, .inquiry"
    );
    reveal.forEach((el) => el.classList.add("reveal"));
    const io = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("in");
                    io.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.12 }
    );
    reveal.forEach((el) => io.observe(el));

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const data = Object.fromEntries(new FormData(form).entries());
        const subject = encodeURIComponent(`Zapytanie: ${data.company || data.name || "oferta hotelowa"}`);
        const body = encodeURIComponent(
            `Imię: ${data.name || ""}\nEmail: ${data.email || ""}\nTelefon: ${data.phone || ""}\nObiekt: ${data.company || ""}\n\n${data.message || ""}`
        );
        form.classList.add("sent");
        const button = form.querySelector("button");
        button.textContent = "Otwieram pocztę…";
        window.location.href = `mailto:mariusz@pikowanie.pl?subject=${subject}&body=${body}`;
        setTimeout(() => {
            button.textContent = "Wyślij zapytanie";
            form.classList.remove("sent");
            form.reset();
        }, 2500);
    });
});
