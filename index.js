// 1️⃣ Desafio Classificador de nível de Herói

//Declaração das variaveis
let nomeHeroi = "Paulo"
let quantidadeXP = 10500
let nivelHeroi = ""

/*Classificação do nível com base na quantidade de XPs
    Se XP for menor do que 1.000 = Ferro
    Se XP for entre 1.001 e 2.000 = Bronze
    Se XP for entre 2.001 e 5.000 = Prata
    Se XP for entre 6.001 e 7.000 = Ouro
    Se XP for entre 7.001 e 8.000 = Platina
    Se XP for entre 8.001 e 9.000 = Ascendente
    Se XP for entre 9.001 e 10.000= Imortal
    Se XP for maior ou igual a 10.001 = Radiante
*/
switch(true){
    case quantidadeXP < 1001:
        nivelHeroi = "Ferro"
        break
    case quantidadeXP > 1000 && quantidadeXP < 2001:
        nivelHeroi = "Bronze"
        break
    case quantidadeXP >2000 && quantidadeXP < 6001: // extendido o range de Xps para o nivel Prata
        nivelHeroi = "Prata"
        break
    case quantidadeXP > 6000 && quantidadeXP < 7001:
        nivelHeroi = "Ouro"
        break
    case quantidadeXP > 7000 && quantidadeXP < 8001:
        nivelHeroi = "Platina"
        break
    case quantidadeXP > 8000 && quantidadeXP < 9001:
        nivelHeroi = "Ascendente"
        break
    case quantidadeXP > 9000 && quantidadeXP < 10001:
        nivelHeroi = "Imortal"
        break
    default:
        nivelHeroi = "Radiante"
}

//Saída esperada: "O Herói de nome **{nome}** está no nível de **{nivel}**"
console.log("O Herói de nome " + nomeHeroi + " está no nível de " + nivelHeroi)

