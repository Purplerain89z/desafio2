let resultado
let elo

function rank() {
    let vitoria = 100
    let derrotas = 40
    let subtracao = vitoria - derrotas
    resultado = subtracao
    return resultado
}

rank()
if (resultado <=10){
    elo = "Ferro"
} 
else if (resultado >= 11 &&  resultado <= 20){
    elo = "Bronze"
}
else if (resultado >= 21 && resultado <= 50){
    elo = "Prata"
}
else if (resultado >= 51 && resultado <= 80){
    elo = "Ouro"
}
else if (resultado >= 81 && resultado <= 90){
    elo = "Diamante"
} 
else if (resultado >= 91 && resultado <= 100){
    elo = "Lendário"
}
else if (resultado >= 101) {
    elo = "imortal"
}
console.log(`O Herói tem de saldo de ${resultado} e esta no nivel ${elo}`)