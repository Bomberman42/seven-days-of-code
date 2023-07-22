var firstNumber = 5;
var secondNumber = 5;
var result = 0;
var question = '';
var wellCome = 'ok';

function sum(a, b){
    return Number(a) + Number(b)
}

function subtraction(a, b){
    return a - b
}

function multiply(a, b){
    return a * b
}

function division(a, b){
    return a / b;
}

while(wellCome != 'Sair' && wellCome != 'sair'){

    wellCome = prompt('Você gostaria de realizar alguma operação matemática? Confirme com "Ok" ou "Sair".');

    while (wellCome != 'Ok' && wellCome != 'ok' && wellCome != 'Sair' && wellCome != 'sair'){
        alert('Sinto muito, não compreendi sua resposta.')
        wellCome = prompt('Você gostaria de realizar alguma operação matemática? Confirme com "Ok" ou "Sair".');
    }

    if(wellCome == 'Sair' || wellCome == 'sair'){
        break;
    }

    question = prompt('Òtimo, qual operação você deseja realizar: "Soma", "Subtração", "Multiplicação" ou "Divisão"?')

    while (question != "Soma" && question != "soma" && question != "Subtração" && question != "subtração" && question != "Multiplicação" && question != "multiplicação" && question != "Divisão" && question != "divisão") {
        alert(`Operação não encontrada!`);
        question = prompt(`As opções são apenas: 'Soma', 'Subtração', 'Multiplicação' ou 'Divisão'.`);
    }

    if(question == 'Soma' || question == 'soma'){
        firstNumber = prompt('Qual o primeiro número que você deseja somar?');
        secondNumber = prompt('E qual o segundo número?')
    
        result = sum(firstNumber, secondNumber);
    
        alert(`A soma de ${firstNumber} mais ${secondNumber} é:  ${result}`)
    }
    
    if(question == 'Subtração' || question == 'subtração'){
        firstNumber = prompt('Qual o primeiro número que você deseja subtrair?');
        secondNumber = prompt('E qual o segundo número?')
    
        result = subtraction(firstNumber, secondNumber);
    
        alert(`A subtração de ${firstNumber} menos ${secondNumber} é: ${result}`)
    }
    
    if(question == 'Multiplicação' || question == 'multiplicação'){
        firstNumber = prompt('Qual o primeiro número que você deseja multiplicar?');
        secondNumber = prompt('E qual o segundo número?')
    
        result = multiply(firstNumber, secondNumber);
    
        alert(`A multiplicação de ${firstNumber} multiplicado por ${secondNumber} é: ${result}`)
    }
    
    if(question == 'Divisão' || question == 'divisão'){
        firstNumber = prompt('Qual o primeiro número que você deseja dividir?');
        secondNumber = prompt('E qual o segundo número?')
    
        result = division(firstNumber, secondNumber);
    
        alert(`A divisão de ${firstNumber} dividido por ${secondNumber} é: ${result}`)
    }

}