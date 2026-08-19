# Dobry Sen — Wszystko dla Hoteli

Statyczna strona katalogu **sezon 2026**: cały tekst, ceny i grafiki z katalogu PDF.

## Struktura strony

| Sekcja | Zawartość |
|---|---|
| Hero | Nazwa, hasło, telefon, skrót oferty |
| Pasek | Kategorie (materace, ręczniki, pościel, szlafroki) i cztery atuty |
| O nas | Pełny tekst ze strony 2 katalogu |
| Materace | Opis produkcji, pokrowiec i wkład |
| Katalog | Sześć kart produktowych z cenami i pełnymi opisami |
| Cennik | Wszystkie pozycje i ceny w jednym miejscu |
| Dlaczego my | Trzy akapity ze strony 6 |
| HoReCa | Grafika wsparcia dla branży ze strony 8 |
| Katalog PDF | Podglądy wszystkich ośmiu stron + pobranie PDF |
| Kontakt | Dane firmy i formularz (otwiera wiadomość e-mail) |

## Cennik

| Pozycja | Cena od |
|---|---|
| Materac | 310 PLN |
| Poduszka | 15 PLN |
| Kołdra | 29 PLN |
| Komplety pościelowe | 100 PLN |
| Pokrowce | 50 PLN |
| Szlafroki, dywaniki i ręczniki | 30 PLN |

## Uruchomienie

Otwórz `public/index.html` albo pobierz [katalog-2026.pdf](public/katalog-2026.pdf).

Cała treść jest widoczna od razu — nic nie zależy od JavaScriptu.
JavaScript obsługuje wyłącznie menu mobilne i wysyłkę formularza.

## Hosting

Strona stoi na Cloudflare Workers (static assets) pod adresem
[wszystkodlahoteli.pl](https://wszystkodlahoteli.pl); `www` przekierowuje na adres główny.

| Element | Wartość |
|---|---|
| Worker | `wszystkodlahoteli` |
| Katalog plików | `public/` (cała strona; nic poza nim nie jest publikowane) |
| Konfiguracja | `wrangler.jsonc` |
| Strona błędu | `public/404.html` (`not_found_handling: 404-page`) |

Każdy push na `main` uruchamia Workers Builds i wdraża zmiany
(build command pusty, deploy command `npx wrangler deploy`).

Wdrożenie z komputera:

```bash
npm install
npx wrangler deploy
```

Podgląd lokalny na Workerze: `npx wrangler dev`.

## Kontakt

Wszystko dla Hoteli (część firmy POLCRUX)
Tel. 795-086-007 · mariusz@pikowanie.pl
Ul. Towarowa 12, 11-700 Mrągowo
[wszystkodlahoteli.pl](https://wszystkodlahoteli.pl)
