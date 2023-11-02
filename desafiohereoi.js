
// arrumei a tinha de xp para que a xp acima de 5000 se torene ouro ja que não estava definida
let rank;
let heroi = "Garrafinha";
let exp = 5879;

if (exp <= 1000) {
    rank = "Ferro";
} else if (exp > 1000 && exp <= 2000) {
    rank = "Bronze";
} else if (exp > 2000 && exp <=5000){
    rank = "Prata";
} else if (exp > 5000 && exp <= 7000){
    rank = "Ouro";
} else if (exp > 7000 && exp <= 8000){
    rank = "Platina";
} else if (exp > 8000 && exp <= 9000){
    rank = "Ascendente";
} else if (exp > 9000 && exp <= 10000){
    rank = "Imortal";
} else if (exp >= 10000){
    rank = "Radiante";
}  
else {
    rank = "você não deveria esta aqui"
}

console.log("O Herói se chama " + heroi + " está no nivel de expêriencia"+ exp + ", rank "+ rank + ".")