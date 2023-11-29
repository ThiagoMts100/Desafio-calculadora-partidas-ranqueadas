const prompt = require('prompt-sync')();
let nameHeroi = ""



 nameHeroi = (prompt("Informe o nome do Heroi: "));
const vitorias = parseInt(prompt("Digite o número de vitórias:"));
const derrotas = parseInt(prompt("Digite o número de derrotas:"));


// Função para calcular o nível com base nas vitórias e derrotas

function calcularNivel(vitorias, derrotas) {
  const saldoVitorias = vitorias - derrotas;

  let nivel;

  

  if (saldoVitorias < 10) {
    nivel = "Ferro";
  } else if (saldoVitorias >= 10 && saldoVitorias <= 20) {
    nivel = "Bronze";
  } else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
    nivel = "Prata";
  } else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
    nivel = "Ouro";
  } else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
    nivel = "Diamante";
  } else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
    nivel = "Lendário";
  } else if (saldoVitorias >= 101 && saldoVitorias ) {
    nivel = "Imortal"
  }

 if  (nameHeroi !== " ")
  console.log(`O Heroi de nome: ${nameHeroi},tem um saldo de ${saldoVitorias} vitórias e está no nível de ${nivel}`);
  // Retorna o resultado
}   
  const resultado = calcularNivel(vitorias, derrotas);
    console.log( resultado);

  

    console.log(`Você precisa informar o nome do heroi e seu xp para verificar o nivel.`);


 
    