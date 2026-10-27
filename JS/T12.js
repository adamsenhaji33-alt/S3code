1
 // summary-sales.js
let sales = [110, 75, 150, 180, 90, 130, 100, 160];

// 1. Initialisation
let totalSales = sales.length;
let totalTurnover = 0;
let maxSale = sales[0];
let minSale = sales[0];
let exceptionalCount = 0;
let exceptionalTurnover = 0;

// 2. Traitement : une seule boucle
for (let i = 0; i < sales.length; i++) {
    let sale = sales[i];

    // Calculer le chiffre d'affaires total
    totalTurnover = totalTurnover + sale;

    // Chercher la vente maximale
    if (sale > maxSale) {
        maxSale = sale;
    }

    // Chercher la vente minimale
    if (sale < minSale) {
        minSale = sale;
    }

    // Vérifier si la vente est exceptionnelle
    if (sale >= 130) {
        exceptionalCount++;
        exceptionalTurnover += sale;
    }
}

// 3. Synthèse : afficher les résultats
console.log("Nombre total de ventes :", totalSales);
console.log("Chiffre d'affaires total :", totalTurnover);
console.log("Vente maximale :", maxSale);
console.log("Vente minimale :", minSale);
console.log("Nombre de ventes exceptionnelles :", exceptionalCount);
console.log("Chiffre d'affaires exceptionnel :", exceptionalTurnover);
