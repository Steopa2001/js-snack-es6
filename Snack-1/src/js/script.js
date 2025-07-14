
// creo array di oggetti
let bici = [
    {nome: 'Canyon', peso: 6.5},
    {nome: 'Specialized', peso: 5.9},
    {nome: 'Trek', peso: 6.8}
];


//Parto assumendo che la prima sia la più leggera
let biciLeggera = bici[0];

//dichiaro una variabile che conterrà la bici con peso minore.
const pesoMinore = [];

//ciclo l'array 
for (let i = 0; i < bici.length; i++) {

    //controllo quale bici pesa di meno.
    if (bici[i].peso < biciLeggera.peso ) {
        biciLeggera = bici[i];
        bici.push(pesoMinore);
    }
}


// 3. Stampo risultato
console.log(`La bici più leggera è la ${biciLeggera.nome} con un peso di ${biciLeggera.peso} kg.`);
