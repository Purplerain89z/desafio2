let herois = [{
    name: "Garrafinha",
    age: 325,
    tipo: "mago",
},
{
    name: "Pimlops",
    age: 40,
    tipo: "guerreiro"
},
{
    name: "Hinata",
    age: 22,
    tipo :"ninja",
}]
function atacar(herois) {
    for(let i = 0; i< herois.length; i++){
    let heroi = herois[i];    
    let ataque;
    switch(heroi.tipo){
        case "mago":
            ataque = "magia";
            break;
        case "guerreiro":
            ataque = "espada";
            break;
        case "ninja":
            ataque = "shuriken" ;
            break;   
        default:
            ataque = "Usou um ataque desconhecido"
    }
    console.log(`O ${heroi.name} usou ${ataque}.`);
}
}
atacar(herois);