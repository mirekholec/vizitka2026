# Kontaktní vizitka

Statická PWA kontaktní vizitka Miroslava Holce je dostupná na
[https://holec.ai/me/](https://holec.ai/me/).

## Instalace na iPhone

1. Otevřete stránku v Safari.
2. Zvolte **Sdílet** → **Přidat na plochu**.
3. Potvrďte přidání. Vizitka se poté spouští samostatně z plochy.

## Nasazení

Obsah adresáře `src/` publikujte pod cestou `/me/`. Hosting musí přesměrovat
`/me` na `/me/` a pro tuto cestu vracet `index.html`; tím zůstane hlavní web
na ostatních cestách nedotčen. PWA soubory používají relativní cesty, proto
se manifest i service worker automaticky omezí na publikovanou podcestu.