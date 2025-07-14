//creo un array di oggetti di squadre di calcio
const squadreCalcio = [
    {nome: 'Bologna', puntiFatti: 0, falliSubiti: 0},
    {nome: 'Inter', puntiFatti: 0, falliSubiti: 0},
    {nome: 'Juventus', puntiFatti: 0, falliSubiti: 0},
    {nome: 'Milan', puntiFatti: 0, falliSubiti: 0},
];

//assegno numeri random a puntiFatti e falliSubiti
for (let i = 0; i < squadreCalcio.length; i++) {
    squadreCalcio[i].puntiFatti = Math.floor(Math.random() * 81);       // da 0 a 80
    squadreCalcio[i].falliSubiti = Math.floor(Math.random() * 81);     // da 0 a 80
}

