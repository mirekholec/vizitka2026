# Implementace: PWA kontaktní vizitka

## Dokončené změny

- Doplněna metadata pro PWA a instalaci na iPhone.
- Přidán manifest, ikony 180 × 180, 192 × 192 a 512 × 512 px a service worker.
- Service worker je relativní k umístění souboru, a je tak omezen na nasazení pod `/me/`; při instalaci uloží stránku, fotografii a PWA aktiva pro offline použití.
- README popisuje veřejnou URL, instalaci v Safari a požadavek hostingu na přesměrování `/me` na `/me/`.

## Ověření

- Statické odkazy a JSON manifest byly ověřeny lokálně.
- Publikační konfigurace v repozitáři není k dispozici; přesměrování `/me` na `/me/` je nutné nastavit na hostingu.
