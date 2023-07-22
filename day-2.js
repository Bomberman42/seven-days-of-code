var name = prompt('Olá, como você se chama?');
var age = prompt(`É um prazer te conhecer ${name}, quantos anos você tem?`);
var registration = prompt(`Ah com ${age} anos você já deve possuir muito conhecimento, mas é sempre bom buscar mais! Qual a linguagem que você esta aprendendo?`);
var summary = `${name}, ${registration} é uma linguagem muito legal e divertida de se aprender!`;

alert(summary);

var answer = prompt(`Você gosta de estudar ${registration}? Responda com o número 1 - SIM ou 2 - NÃO`)

if (answer == 1) {
  alert('Muito bom! continue estudando e você tera um ótimo futuro.');
} 

else if(answer == 2){
  alert('Ahh que pena... Já tentou aprender outras linguagens?')
} 

else {
  alert('A resposta só pode ser 1 ou 2!');
}