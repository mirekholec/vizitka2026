Vytvoř novou stránku index.html která bude sloužit jako kontakt po tom, co někdo nascanuje v mém mobilu QR kód. Obsahově tam chci

1) fotku - někde ji tu najdeš
2) Miroslav Holec
3) GitHub Copilot & Dev AI Evangelist
4) telefon +420 773 272 767
5) web: holec.ai
5) email: mirek@miroslavholec.cz
6) youtube ikona s proklikem na kanál
X) nějaký oddělovač
7) ADNP asociace, z.s.
8) předseda
9) adnpasociace.cz
10) email: info@adnpasociace.cz

S tím, že to designuj hlavně pro mobilní zařízení a udělej to clean, všechno light barvy (nepoužívej žádné skills na barvy).. spíše světlé odstíny barev, minimal, oddělení nezisku a hlavního businessu... (nezisk dole) 

Udělej to tak, aby celý design byl uložení v tom souboru index.html

Nejdůležitější je krásný design minimalistický.

## Skrytá QR karta

- První návštěva zobrazuje stávající kontaktní vizitku bez viditelného přepínače.
- Neviditelná klávesnicově dostupná plocha u spodního okraje při prvním otevření zobrazí přepínač a zvolí QR kartu. Další aktivace přepínač skryje nebo znovu zobrazí.
- Přepínač nabízí kartu Vizitka a QR kód. Poslední vybraná karta se ukládá v `localStorage` a při další návštěvě se obnoví, zatímco přepínač zůstane skrytý.
- QR karta obsahuje lokální zástupný prostor pro QR kód a odkaz, který má kód obsahovat: `https://holec.ai/me`. Zástupný prostor lze nahradit vloženým SVG bez externí služby nebo běhové závislosti.
- Ovládání podporuje klávesnici, mobilní bezpečné okraje a zachovává původní kontakty, stažení vCard i sekci ADNP.