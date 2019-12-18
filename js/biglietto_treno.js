// Calcolo prezzo del treno:
// Il programma dovrà chiedere all’utente il
// numero di chilometri che vuole
// percorrere e l’età del passeggero.
// Sulla base di queste informazioni dovrà
// calcolare il prezzo totale del viaggio.
// Il prezzo del biglietto è definito in base ai
// km (0.21 € al km), ma va applicato uno
// sconto del 20% per i minorenni e del
// 40% per gli over 65.

// Chiedere i km che vuole percorrere il passeggero

var kmPasseggero = parseInt(prompt("Quanti km devi percorrere?"));
console.log(kmPasseggero);

// Chiedere l'età del passeggero

var etaPasseggero = parseInt(prompt("Quanti anni hai?"));
console.log(etaPasseggero);

// moltiplicare i km inseriti del passeggero con la variabile costoBiglietto

var costoBiglietto = kmPasseggero * 0.21;
console.log(costoBiglietto);

// dichiarare variabile sconto minorenne

var scontoMinorenne = (costoBiglietto * 20) / 100 ;

var scontoOver65 = (costoBiglietto * 40) / 100;

// inserire la condizioni con sconto passeggero

if (isNaN(kmPasseggero) || isNaN(etaPasseggero)) {
  alert("Non hai inserito un numero valido")
}

// if (etaPasseggero < 18) {
//   console.log(costoBiglietto - scontoMinorenne);
// } else if (etaPasseggero > 65) {
//   console.log(costoBiglietto - scontoOver65);
// } else {
//   console.log(costoBiglietto);
// }


if (etaPasseggero < 18) {
  // console.log(costoBiglietto - scontoMinorenne);
  document.getElementById("km_passeggero").innerHTML = (kmPasseggero - scontoMinorenne);
} else if (etaPasseggero > 65) {
  // console.log(costoBiglietto - scontoOver65);
  document.getElementById("eta_passeggero").innerHTML = (etaPasseggero -scontoOver65);
} else {
  // console.log(costoBiglietto);
  document.getElementById("costo_biglietto").innerHTML = costoBiglietto;

}
