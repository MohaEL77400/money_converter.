const deviseNoms = {
  "AED": "Dirham des Émirats arabes unis",
  "AFN": "Afghani (Afghanistan)",
  "ALL": "Lek (Albanie)",
  "AMD": "Dram (Arménie)",
  "ANG": "Florin des Antilles néerlandaises",
  "AOA": "Kwanza (Angola)",
  "ARS": "Peso argentin",
  "AUD": "Dollar australien",
  "AWG": "Florin arubain",
  "AZN": "Manat azerbaïdjanais",
  "BAM": "Mark convertible (Bosnie-Herzégovine)",
  "BBD": "Dollar barbadien",
  "BDT": "Taka (Bangladesh)",
  "BGN": "Lev (Bulgarie)",
  "BHD": "Dinar bahreïni",
  "BIF": "Franc burundais",
  "BMD": "Dollar des Bermudes",
  "BND": "Dollar de Brunei",
  "BOB": "Boliviano (Bolivie)",
  "BRL": "Réal brésilien",
  "BSD": "Dollar bahaméen",
  "BTC": "Bitcoin",
  "BTN": "Ngultrum (Bhoutan)",
  "BWP": "Pula (Botswana)",
  "BYN": "Rouble biélorusse",
  "BZD": "Dollar bélizien",
  "CAD": "Dollar canadien",
  "CDF": "Franc congolais",
  "CHF": "Franc suisse",
  "CLF": "Unité de compte (Chili)",
  "CLP": "Peso chilien",
  "CNH": "Yuan chinois (offshore)",
  "CNY": "Yuan renminbi (Chine)",
  "COP": "Peso colombien",
  "CRC": "Colón costaricien",
  "CUC": "Peso cubain convertible",
  "CUP": "Peso cubain",
  "CVE": "Escudo cap-verdien",
  "CZK": "Couronne tchèque",
  "DJF": "Franc djiboutien",
  "DKK": "Couronne danoise",
  "DOP": "Peso dominicain",
  "DZD": "Dinar algérien",
  "EGP": "Livre égyptienne",
  "ERN": "Nakfa (Érythrée)",
  "ETB": "Birr éthiopien",
  "EUR": "Euro",
  "FJD": "Dollar fidjien",
  "FKP": "Livre des îles Falkland",
  "GBP": "Livre sterling",
  "GEL": "Lari (Géorgie)",
  "GGP": "Livre de Guernesey",
  "GHS": "Cedi ghanéen",
  "GIP": "Livre de Gibraltar",
  "GMD": "Dalasi (Gambie)",
  "GNF": "Franc guinéen",
  "GTQ": "Quetzal (Guatemala)",
  "GYD": "Dollar du Guyana",
  "HKD": "Dollar de Hong Kong",
  "HNL": "Lempira (Honduras)",
  "HRK": "Kuna (Croatie)",
  "HTG": "Gourde (Haïti)",
  "HUF": "Forint (Hongrie)",
  "IDR": "Roupie indonésienne",
  "ILS": "Shekel (Israël)",
  "IMP": "Livre de Man",
  "INR": "Roupie indienne",
  "IQD": "Dinar irakien",
  "IRR": "Rial iranien",
  "ISK": "Couronne islandaise",
  "JEP": "Livre de Jersey",
  "JMD": "Dollar jamaïcain",
  "JOD": "Dinar jordanien",
  "JPY": "Yen japonais",
  "KES": "Shilling kényan",
  "KGS": "Som kirghize",
  "KHR": "Riel cambodgien",
  "KMF": "Franc comorien",
  "KPW": "Won nord-coréen",
  "KRW": "Won sud-coréen",
  "KWD": "Dinar koweïtien",
  "KYD": "Dollar des îles Caïmans",
  "KZT": "Tenge (Kazakhstan)",
  "LAK": "Kip (Laos)",
  "LBP": "Livre libanaise",
  "LKR": "Roupie srilankaise",
  "LRD": "Dollar libérien",
  "LSL": "Loti (Lesotho)",
  "LYD": "Dinar libyen",
  "MAD": "Dirham marocain",
  "MDL": "Leu moldave",
  "MGA": "Ariary malgache",
  "MKD": "Denar (Macédoine)",
  "MMK": "Kyat (Myanmar)",
  "MNT": "Tugrik mongol",
  "MOP": "Pataca (Macao)",
  "MRU": "Ouguiya (Mauritanie)",
  "MUR": "Roupie mauricienne",
  "MVR": "Rufiyaa (Maldives)",
  "MWK": "Kwacha (Malawi)",
  "MXN": "Peso mexicain",
  "MYR": "Ringgit malaisien",
  "MZN": "Metical (Mozambique)",
  "NAD": "Dollar namibien",
  "NGN": "Naira nigérian",
  "NIO": "Córdoba nicaraguayen",
  "NOK": "Couronne norvégienne",
  "NPR": "Roupie népalaise",
  "NZD": "Dollar néo-zélandais",
  "OMR": "Rial omanais",
  "PAB": "Balboa (Panama)",
  "PEN": "Sol péruvien",
  "PGK": "Kina (Papouasie-Nouvelle-Guinée)",
  "PHP": "Peso philippin",
  "PKR": "Roupie pakistanaise",
  "PLN": "Zloty polonais",
  "PYG": "Guaraní (Paraguay)",
  "QAR": "Rial qatari",
  "RON": "Leu roumain",
  "RSD": "Dinar serbe",
  "RUB": "Rouble russe",
  "RWF": "Franc rwandais",
  "SAR": "Riyal saoudien",
  "SBD": "Dollar des îles Salomon",
  "SCR": "Roupie des Seychelles",
  "SDG": "Livre soudanaise",
  "SEK": "Couronne suédoise",
  "SGD": "Dollar de Singapour",
  "SHP": "Livre de Sainte-Hélène",
  "SLL": "Leone (Sierra Leone)",
  "SOS": "Shilling somalien",
  "SRD": "Dollar surinamais",
  "SSP": "Livre sud-soudanaise",
  "STD": "Dobra (Sao Tomé-et-Principe)",
  "STN": "Dobra (nouveau)",
  "SVC": "Colon salvadorien",
  "SYP": "Livre syrienne",
  "SZL": "Lilangeni (Eswatini)",
  "THB": "Baht thaïlandais",
  "TJS": "Somoni (Tadjikistan)",
  "TMT": "Manat turkmène",
  "TND": "Dinar tunisien",
  "TOP": "Paʻanga (Tonga)",
  "TRY": "Livre turque",
  "TTD": "Dollar de Trinité-et-Tobago",
  "TWD": "Dollar taïwanais",
  "TZS": "Shilling tanzanien",
  "UAH": "Hryvnia (Ukraine)",
  "UGX": "Shilling ougandais",
  "USD": "Dollar américain",
  "UYU": "Peso uruguayen",
  "UZS": "Som ouzbek",
  "VES": "Bolívar (Venezuela)",
  "VND": "Dong (Vietnam)",
  "VUV": "Vatu (Vanuatu)",
  "WST": "Tala (Samoa)",
  "XAF": "Franc CFA (Afrique centrale)",
  "XAG": "Argent (once)",
  "XAU": "Or (once)",
  "XCD": "Dollar des Caraïbes orientales",
  "XDR": "Droits de tirage spéciaux",
  "XOF": "Franc CFA (Afrique de l’Ouest)",
  "XPD": "Palladium (once)",
  "XPF": "Franc CFP (Pacifique)",
  "XPT": "Platine (once)",
  "YER": "Rial yéménite",
  "ZAR": "Rand (Afrique du Sud)",
  "ZMW": "Kwacha zambien",
  "ZWL": "Dollar zimbabwéen"
};

const apiKey = "78f878ac332744e1a6b8a0e2811ce4fb";
const apiUrl = `https://openexchangerates.org/api/latest.json?app_id=${apiKey}`;

let rates = {};

window.addEventListener("DOMContentLoaded", () => {
  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error("Erreur lors du chargement des taux.");
      }
      return response.json();
    })
    .then(data => {
      rates = data.rates;
      remplirListeDevises();
    })
    .catch(error => {
      console.error("Erreur:", error);
      alert("Impossible de charger les taux de change. Vérifie ta connexion ou la clé API.");
    });
});

function remplirListeDevises() {
  const deviseDepart = document.getElementById("deviseDepart");
  const deviseArrivee = document.getElementById("deviseArrivee");

  for (let code in rates) {
    const nomComplet = deviseNoms[code] ? `${deviseNoms[code]} (${code})` : code;

    const option1 = document.createElement("option");
    option1.value = code;
    option1.textContent = nomComplet;
    deviseDepart.appendChild(option1);

    const option2 = document.createElement("option");
    option2.value = code;
    option2.textContent = nomComplet;
    deviseArrivee.appendChild(option2);
  }

  deviseDepart.value = "EUR";
  deviseArrivee.value = "USD";
}

function convertir() {
  const montant = parseFloat(document.getElementById("montant").value);
  const deviseDe = document.getElementById("deviseDepart").value;
  const deviseVers = document.getElementById("deviseArrivee").value;

  const message = document.getElementById("conversionMessage");

  if (!rates[deviseDe] || !rates[deviseVers] || isNaN(montant)) {
    alert("Montant ou devise invalide !");
    return;
  }

 
  message.style.display = "block";
  document.getElementById("resultat").value = "";

  setTimeout(() => {
    const tauxDe = rates[deviseDe];
    const tauxVers = rates[deviseVers];

    const resultat = (montant / tauxDe) * tauxVers;
    document.getElementById("resultat").value = resultat.toFixed(2);
    
    message.style.display = "none"; 
  }, 1000); 
}
function copier() {
  const resultat = document.getElementById("resultat");
  resultat.select();
  resultat.setSelectionRange(0, 99999); 
  document.execCommand("copy");
  alert("Résultat copié !");
}
