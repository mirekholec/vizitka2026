# Implementace: Skrytá QR karta

- Kontaktní stránka má dvě přístupné karty: stávající vizitku a samostatný prostor pro QR kód.
- První skryté ovládání u spodního okraje otevře přepínač a zobrazí QR kartu. Přepínač lze klávesnicí ovládat, mezi kartami se přechází šipkami, Home a End.
- Zvolená karta se ukládá do `localStorage`; při další návštěvě se obnoví, ale přepínač zůstane skrytý.
- Na žádost uživatele je místo skutečného QR kódu vložený vizuální placeholder. Cílový odkaz je `https://holec.ai/me` a placeholder lze nahradit vloženým SVG.
- Původní telefon, web, e-mail, YouTube odkaz, stažení vCard i sekce ADNP zůstávají zachované.
- `docs/PRD.md` popisuje nové chování a očekávaný obsah QR karty.
