// Route en opdrachten voor "Proef de buurt".
// Pas hier de stops, verhalen en opdrachten aan; de app leest alles uit dit bestand.
//
// Soorten opdrachten:
//   quiz  - meerkeuzevraag, `antwoord` is de index (0 = eerste optie) van het goede antwoord
//   foto  - team maakt een foto
//   vraag - open vraag, team typt een antwoord (Muriel beoordeelt het later)
//   koop  - iets kopen in een winkel, met foto van product + bonnetje

window.ROUTE = {
  naam: "Proef de buurt",
  ondertitel: "Van tsaar tot toko – een speurtocht door Oost",
  budgetPerTeam: 10, // euro om in de toko's te besteden
  start: {
    naam: "Kunst & Kook studio",
    adres: "Blankenstraat 378A",
    lat: 52.37088, lng: 4.93192,
  },
  stops: [
    {
      id: "funen",
      naam: "Funenpark",
      thema: "geschiedenis",
      lat: 52.36856, lng: 4.93078,
      verhaal:
        "Hier lag tot in de 19e eeuw het bolwerk De Funen, een van de verdedigingswerken aan de oostkant van de stad. Bij graafwerk in de buurt zijn een paar jaar geleden nog resten van dit bolwerk gevonden. Nu is het een autovrij park tussen de woonblokken.",
      opdrachten: [
        {
          type: "quiz", punten: 10,
          vraag: "Wat was De Funen vroeger?",
          opties: ["Een bierbrouwerij", "Een bolwerk (verdedigingswerk)", "Een vismarkt", "Een scheepswerf"],
          antwoord: 1,
        },
        {
          type: "foto", punten: 10,
          vraag: "Maak een teamfoto waarop jullie samen een 'bolwerk' vormen.",
        },
      ],
    },
    {
      id: "tsaar",
      naam: "Tsaar Peter de Grote",
      thema: "geschiedenis",
      lat: 52.36842, lng: 4.92275,
      verhaal:
        "Aan de Oostenburgergracht lag de werf van de VOC. De Russische tsaar Peter de Grote werkte hier van 30 augustus 1697 tot 15 januari 1698 als scheepstimmerman, om te leren hoe de Hollanders schepen bouwden. Een gedenkplaat herinnert eraan: 'Hier werkte Tsaar Peter de Grote'.",
      opdrachten: [
        {
          type: "quiz", punten: 10,
          vraag: "Waarom kwam de tsaar naar Amsterdam?",
          opties: ["Om kaas te kopen", "Om scheepsbouw te leren", "Om te trouwen", "Om schilderles te nemen"],
          antwoord: 1,
        },
        {
          type: "quiz", punten: 15,
          vraag: "Het beroemde 'Czaar Peterhuisje', waar hij eerst verbleef, staat niet in Amsterdam. Waar wel?",
          opties: ["Haarlem", "Zaandam", "Den Helder", "Utrecht"],
          antwoord: 1,
        },
        {
          type: "foto", punten: 10,
          vraag: "Zoek de gedenkplaat en maak een foto met het hele team in 'tsarenpose'.",
        },
      ],
    },
    {
      id: "czaarpeterstraat",
      naam: "Czaar Peterstraat",
      thema: "food",
      lat: 52.36799, lng: 4.92612,
      verhaal:
        "De straat is vernoemd naar het bezoek van de tsaar. Vroeger een volkse winkelstraat, nu vol kleine zaken, koffiebars en eethuisjes.",
      opdrachten: [
        {
          type: "vraag", punten: 10,
          vraag: "Vraag in een zaak in deze straat: wat is jullie bestseller? Schrijf het antwoord en de naam van de zaak op.",
        },
      ],
    },
    {
      id: "gooyer",
      naam: "Molen De Gooyer & Brouwerij 't IJ",
      thema: "geschiedenis",
      lat: 52.36675, lng: 4.92650,
      verhaal:
        "De Gooyer is de laatste van de vele korenmolens die vroeger op de bolwerken rond de stad stonden. In 1814 is hij hier op de stenen voet van een oude watermolen gezet. Ernaast zit Brouwerij 't IJ, in een gemeentelijk badhuis uit 1911. Buurtbewoners kregen hier vroeger een tijd toegewezen om zich te wassen.",
      opdrachten: [
        {
          type: "quiz", punten: 10,
          vraag: "Wat zat er vroeger in het gebouw van Brouwerij 't IJ?",
          opties: ["Een school", "Een badhuis", "Een politiebureau", "Een bakkerij"],
          antwoord: 1,
        },
        {
          type: "quiz", punten: 10,
          vraag: "Welk dier staat op het logo van de brouwerij?",
          opties: ["Een struisvogel", "Een ooievaar", "Een leeuw", "Een kat"],
          antwoord: 0,
        },
        {
          type: "foto", punten: 10,
          vraag: "Maak een foto waarop het lijkt alsof iemand van jullie de molen laat draaien.",
        },
      ],
    },
    {
      id: "zeeburgerdijk",
      naam: "Zeeburgerdijk",
      thema: "geschiedenis",
      lat: 52.36613, lng: 4.93323,
      verhaal:
        "Deze oude dijk liep door een landelijke polder met boerderijen. Rembrandt wandelde hier rond 1650 over de dijk naar de Zuiderzee. Waar jullie nu staan was toen dus nog platteland.",
      opdrachten: [
        {
          type: "quiz", punten: 10,
          vraag: "Welke beroemde schilder wandelde hier rond 1650?",
          opties: ["Vincent van Gogh", "Johannes Vermeer", "Rembrandt", "Piet Mondriaan"],
          antwoord: 2,
        },
        {
          type: "foto", punten: 10,
          vraag: "Maak een 'schilderij': zet jullie team neer als een groepsportret uit de Gouden Eeuw.",
        },
      ],
    },
    {
      id: "ozyildiz",
      naam: "Javastraat: Özyildiz",
      thema: "food",
      lat: 52.36366, lng: 4.93204,
      verhaal:
        "De Javastraat is de belangrijkste winkelstraat van de Indische Buurt: Turkse, Marokkaanse, Surinaamse en Aziatische winkels zitten hier naast elkaar. Özyildiz (vroeger Yildiz) is een buurtsuper met verse groente en zelfgemaakte dips.",
      opdrachten: [
        {
          type: "koop", punten: 25,
          vraag: "Koop iets wat niemand in jullie team ooit heeft gegeten, maar wat we vanavond in het gerecht kunnen gebruiken. Maak een foto van het product en het bonnetje.",
        },
        {
          type: "vraag", punten: 10,
          vraag: "Vraag een medewerker hoe je het product het lekkerst klaarmaakt. Schrijf de tip op.",
        },
      ],
    },
    {
      id: "marocshop",
      naam: "Javastraat: Maroc Shop",
      thema: "food",
      lat: 52.36352, lng: 4.93326,
      verhaal:
        "Een Marokkaanse winkel met een wisselend aanbod: kruiden, olijven, thee en meer.",
      opdrachten: [
        {
          type: "vraag", punten: 15,
          vraag: "Ruik aan drie kruiden zonder op het etiket te kijken. Welke herkennen jullie? Schrijf je gok op en daarna het echte antwoord.",
        },
      ],
    },
    {
      id: "lale",
      naam: "Javastraat: Lale",
      thema: "food",
      lat: 52.36387, lng: 4.93618,
      verhaal:
        "Een Turkse winkel met slagerij. De eigenaar runt de zaak al sinds 1993: vol Arabische linzen, Marokkaanse couscous en Turkse zonnebloempitten.",
      opdrachten: [
        {
          type: "vraag", punten: 15,
          vraag: "Vraag de eigenaar welk gerecht hij of zij thuis het liefst kookt. Schrijf het op – misschien maken we het ooit in de studio!",
        },
        {
          type: "koop", punten: 15,
          vraag: "Koop het kleinste en goedkoopste ding dat jullie kunnen vinden dat toch lekker is. Foto van product + bonnetje.",
        },
      ],
    },
    {
      id: "badhuis",
      naam: "Badhuis Javaplein",
      thema: "geschiedenis",
      lat: 52.36355, lng: 4.93992,
      verhaal:
        "Veel huizen hadden vroeger geen douche. Daarom werd in 1942 dit badhuis gebouwd, dat tot 1982 in gebruik was. Daarvoor moesten bewoners naar het badhuis naast molen De Gooyer – waar jullie net al waren! Nu zit hier een restaurant.",
      opdrachten: [
        {
          type: "quiz", punten: 10,
          vraag: "Tot welk jaar konden mensen hier in bad?",
          opties: ["1952", "1965", "1982", "2001"],
          antwoord: 2,
        },
        {
          type: "quiz", punten: 15,
          vraag: "Waar gingen bewoners in bad vóórdat dit badhuis er was?",
          opties: ["In het IJ", "In het badhuis naast molen De Gooyer", "In het Oosterpark", "Bij de buren"],
          antwoord: 1,
        },
      ],
    },
  ],
};
