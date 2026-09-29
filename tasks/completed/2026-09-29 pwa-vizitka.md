# 2026-09-29 PWA kontaktní vizitka

## Popis

Připravit stávající statickou kontaktní vizitku na instalovatelnou PWA dostupnou na `https://holec.ai/me`. Zachovat její současný design i obsah a nepřidávat framework, backend ani buildovací systém.

## Požadavky

- Vizitka se načte při přímém otevření `https://holec.ai/me` i po obnovení stránky.
- Na iPhonu ji lze v Safari přidat na plochu a spustit jako samostatnou aplikaci s vlastní ikonou a názvem.
- Vizuální podoba, responzivní chování a stávající funkce zůstanou zachovány, zejména kontaktní odkazy, stažení vCard a sekce ADNP.
- Stránka zůstane statická: `index.html` s vloženými styly a samostatnými statickými soubory PWA; bez serverového běhu aplikace.
- Po prvním načtení online se stránka včetně fotografie zobrazí i bez připojení k internetu. Externí kontaktní odkazy budou nadále vyžadovat připojení.

## Technické poznámky

- Výchozí stránka a fotografie jsou v [src/index.html](../src/index.html) a [src/miroslav-holec.png](../src/miroslav-holec.png). Stránka již obsahuje ikonu favicon v SVG, barvu motivu a podporu bezpečných okrajů displeje; při doplnění PWA metadat tyto prvky zachovat.
- V evidovaných souborech repozitáře není konfigurace hostingu ani nasazení. Před změnou je proto potřeba zjistit, jak se stránka aktuálně publikuje a jak konkrétní hosting obsluhuje cestu `/me`.
- Manifest, ikony, service worker i odkazy na ně musí odpovídat nasazení do podcesty `/me/`, nikoliv předpokládat kořen webu. Pokud hosting vyžaduje koncové lomítko, zajistit funkční přesměrování z `/me` na `/me/`.
- Instalace na iPhone je uživatelská akce v Safari přes nabídku Sdílet → Přidat na plochu; nepočítat s automatickou instalační výzvou. Kvůli zachování vzhledu nepřidávat instalační banner ani nové tlačítko do vizitky.
- Service worker omezit na podcestu aplikace, aby neovlivnil ostatní části `holec.ai`.

## Implementační plán

1. **Ověřit nasazovací prostředí a routování.** Zjistit, odkud se stránka publikuje, jak se aktualizují statické soubory a zda hosting umožňuje namapovat `/me` na vlastní statický adresář. Navrhnout konfiguraci tak, aby zůstala zachována stávající domovská stránka webu.
2. **Zpřístupnit stávající stránku pod `/me`.** Namapovat současný `index.html` a fotografii pod `/me/`; zajistit přímé načtení i obnovení URL bez 404. Pokud hosting používá adresáře s koncovým lomítkem, nastavit `/me` jako alias nebo přesměrování na `/me/`. Zachovat relativní cesty k souborům a stávající HTML, styly i obsah.
3. **Připravit manifest a ikony.** Doplnit statický `manifest.webmanifest` se jménem aplikace, krátkým názvem, `start_url` a `scope` omezenými na `/me/`, režimem `standalone` a barvami odpovídajícími stávající bílé ploše. Připravit ikonu `apple-touch-icon` 180 × 180 px a ikony manifestu 192 × 192 a 512 × 512 px; grafiku odvodit od současného faviconu a vzhled samotné stránky neměnit.
4. **Propojit PWA metadata se stránkou.** Do `<head>` v [src/index.html](../src/index.html) přidat odkaz na manifest, Apple metadata pro název aplikace a samostatné zobrazení a odkaz na `apple-touch-icon`. Zachovat současné `viewport`, `theme-color` i podporu `safe-area-inset`.
5. **Doplnit základní offline režim.** Přidat statický service worker a jeho registraci. Při prvním online načtení uložit do cache stránku, manifest, ikony a fotografii; při aktivaci odstranit zastaralou verzi cache. Zajistit offline zobrazení vizitky a omezit cache i rozsah service workeru na `/me/`. Necachovat externí weby ani nepřidávat síťové/API závislosti.
6. **Dokumentovat instalaci a nasazení.** Do [README.md](../README.md) doplnit výslednou veřejnou URL a krátký postup pro iPhone: otevřít stránku v Safari, zvolit Sdílet → Přidat na plochu a potvrdit přidání. Popsat také případné pravidlo hostingu pro cestu `/me`.
7. **Ověřit nasazení a zachování chování.** Ověřit dostupnost stránky i všech PWA souborů přes HTTPS, funkčnost manifestu, správný rozsah service workeru, instalaci a spuštění na skutečném iPhonu a offline načtení po předchozí návštěvě. Porovnat vzhled na mobilu i desktopu a zkontrolovat, že nadále fungují všechny původní odkazy a stažení vCard.

## Akceptační kritéria

- `https://holec.ai/me` se otevře přímo i po obnovení stránky; případné přesměrování na `/me/` funguje a stávající obsah webu mimo tuto cestu zůstane nedotčen.
- Safari na iPhonu nabídne přidání stránky na plochu; přidaná aplikace má správný název a ikonu a otevírá se v samostatném režimu.
- Vzhled, texty, fotografie, mobilní rozvržení a desktopové zobrazení zůstávají vizuálně stejné jako před změnou.
- Telefonní, webové, e-mailové a YouTube odkazy i stažení vCard fungují jako dosud.
- Po úspěšném načtení online se stránka včetně fotografie zobrazí offline.
- Manifest, ikony a service worker se načítají ze správné cesty pod `/me/`; service worker neřídí jiné části webu.
- Aplikace zůstává statická a k jejímu běhu není potřeba backend ani nový framework.

## Stav

Implementováno 2026-09-29.
