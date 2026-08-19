document.addEventListener("DOMContentLoaded", () => {
    initMenu();
    initForm();
});

function initMenu() {
    const burger = document.querySelector(".burger");
    const menu = document.getElementById("menu");
    if (!burger || !menu) return;

    const close = () => {
        menu.classList.remove("is-open");
        burger.setAttribute("aria-expanded", "false");
    };

    burger.addEventListener("click", () => {
        const open = menu.classList.toggle("is-open");
        burger.setAttribute("aria-expanded", String(open));
    });

    menu.querySelectorAll("a").forEach((link) => link.addEventListener("click", close));

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") close();
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 860) close();
    });
}

function initForm() {
    const form = document.getElementById("contactForm");
    if (!form) return;

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const data = Object.fromEntries(new FormData(form).entries());
        const subject = `Zapytanie — katalog 2026: ${data.company || data.name || "oferta"}`;
        const body = [
            `Imię i nazwisko: ${data.name || ""}`,
            `E-mail: ${data.email || ""}`,
            `Telefon: ${data.phone || ""}`,
            `Obiekt: ${data.company || ""}`,
            "",
            data.message || "",
        ].join("\n");

        form.classList.add("is-sent");
        window.location.href =
            `mailto:mariusz@pikowanie.pl?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    });
}
