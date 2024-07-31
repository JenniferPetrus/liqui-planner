"use strict";

let einnahmen = 0;
let ausgaben = 0;
let bilanz = 0; 

// Eingabedaten holen (deklarieren und initialisieren)
let titel_1 = prompt("Titel:");
let typ_1 = prompt("Typ (Einnahme oder Ausgabe):");
let betrag_1 = parseInt(prompt("Betrag (in Cent):"));
let datum_1 = prompt("Datum (jjjj-mm-tt):");

console.log(`Titel: ${titel_1}
    Typ: ${typ_1}
    Betrag: ${betrag_1} ct
    Datum: ${datum_1}`
);

if(typ_1 === "Einnahme"){
    einnahmen = einnahmen + betrag_1;
    bilanz = bilanz + betrag_1;
} else if(typ_1 === "Ausgaben"){
    ausgaben = ausgaben + betrag_1;
    bilanz = bilanz - betrag_1;
} else {
    console.log(`Der Typ "${typ_1}" ist nicht bekannt.`);
}

let titel_2 = prompt("Titel:");
let typ_2 = parseInt(prompt("Typ (Einnahme oder Ausgabe):"));
let betrag_2 = prompt("Betrag (in Cent):");
let datum_2 = prompt("Datum (jjjj-mm-tt):");

if(typ_2 === "Einnahme"){
    einnahmen = einnahmen + betrag_2;
    bilanz = bilanz + betrag_2;
} else if(typ_2 === "Ausgaben"){
    ausgaben = ausgaben + betrag_2;
    bilanz = bilanz - betrag_2;
} else {
    console.log(`Der Typ "${typ_1}" ist nicht bekannt.`);
}

console.log(`Titel: ${titel_2}
    Typ: ${typ_2}
    Betrag: ${betrag_2} ct
    Datum: ${datum_2}`
);

// Gesamtbilanz
let positiv = bilanz >= 0;
console.log(`Einnahmen: ${einnahmen} ct
    Ausgaben: ${ausgaben} ct
    Bilanz: ${bilanz} ct
    Bilanz ist positiv: ${positiv}`
);

