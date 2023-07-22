var guessTheNumber = Math.floor(Math.random() * 10);
var answer = '';
var rightNumber = false;

for(var index = 0; index < 3; index++){

    answer = prompt('Olá, hoje iremos brincar um pouco. Tente adivinhar qual número eu estou pensando, de 0 a 10. Lembrando que você só possui 3 tentativas, boa sorte!')

    if(answer == guessTheNumber){

        alert(`Parabéns, você acertou! O número era ${guessTheNumber}.`);
        rightNumber = true;
        break;
    }

    alert('Você errou!')
}

if(!rightNumber){
    alert(`Sinto muito, você não conseguiu acertar nas três tentativas. O numero certo era ${guessTheNumber}.`);
}