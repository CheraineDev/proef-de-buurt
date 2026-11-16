# Proef de buurt

Klikbaar voorbeeld van een speurtocht-app voor de workshop **Koken & Stadswandeling** van Kunst & Kook.
Teams lopen vanaf de studio (Blankenstraat 378A) een rondje langs geschiedenis en toko's, doen opdrachten,
kopen ingrediënten van een budget en koken daar daarna mee in de studio.

## Bestanden
- `index.html` – de app (werkt op de telefoon in de browser, geen installatie nodig)
- `route.js` – **alle stops, verhalen en opdrachten**. Hier pas je de inhoud aan.

## Bekijken
Open `index.html` in een browser, of start een lokale server in deze map:

```bash
python3 -m http.server 8080
```

en ga naar http://localhost:8080. Gebruik in de browser de telefoonweergave om het goed te zien.

## Route (ca. 3,5 km lopen, ± 1,5 uur met opdrachten)
| # | Stop | Thema |
|---|------|-------|
| start | Studio Kunst & Kook, Blankenstraat 378A | – |
| 1 | Funenpark – voormalig bolwerk De Funen | geschiedenis |
| 2 | Oostenburgergracht – gedenkplaat Tsaar Peter de Grote (VOC-werf) | geschiedenis |
| 3 | Czaar Peterstraat | food |
| 4 | Molen De Gooyer & Brouwerij 't IJ (oud badhuis, 1911) | geschiedenis |
| 5 | Zeeburgerdijk – Rembrandt liep hier rond 1650 | geschiedenis |
| 6 | Javastraat: Özyildiz (nr. 11–15) – koop-opdracht | food |
| 7 | Javastraat: Maroc Shop (nr. 38) | food |
| 8 | Javastraat: Lale (nr. 101) – koop-opdracht | food |
| 9 | Badhuis Javaplein (1942–1982) | geschiedenis |
| finish | Terug naar de studio – koken met de gekochte ingrediënten | – |

## Wat dit voorbeeld nog niet doet
- Scores van andere teams zijn nep (voorbeeldteams). Een echte versie heeft een server nodig zodat alle telefoons en
  het scherm in de studio live dezelfde scores zien.
- Foto's blijven alleen op de telefoon zelf en verdwijnen bij herladen.
- "We zijn er" is een knop; later kan dit automatisch via de locatie (de afstand tot de stop wordt al getoond).
- Er is nog geen beheerpagina; aanpassen gaat nu via `route.js`.

## Bronnen
- Gedenkplaat Peter de Grote: https://www.hmdb.org/m.asp?m=135207
- Molen De Gooyer: https://wikiwand.com/nl/articles/De_Gooyer_(Amsterdam)
- Brouwerij 't IJ: https://en.wikipedia.org/wiki/Brouwerij_%27t_IJ
- Indische Buurt & Badhuis Javaplein: https://en.wikipedia.org/wiki/Indische_Buurt, https://www.hmdb.org/m.asp?m=301866
- Geschiedenis Indische Buurt / Zeeburgerdijk: https://amsterdamse-school.nl/images/media/1825457/DE-GESCHIEDENIS-VAN-DE-INDISCHE-BUURTdefinitief.pdf
- Bolwerk De Funen: https://broersma.nl/app/uploads/sure/media/AM105125/AM105125-1846427-Czaar-Peterstraat-92A-Amsterdam-174673305.pdf
- Winkels Javastraat: https://geheugenvanoost.amsterdam/page/12198/yildiz-wordt-%C3%B6zyildiz, https://hart.amsterdam/nl/page/232775/lale-kasabi-in-de-javastraat, https://www.youtube.com/watch?v=dQEFe4OEouQ
