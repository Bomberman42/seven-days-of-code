var road = prompt('Você deseja seguir para área de Front-End ou seguir para a área de Back-End?');

var language = '';

if(road === 'Front-End'){
    language = prompt('Você quer aprender React ou Vue?');
} 

else if (road === "Back-End"){
    language = prompt("Você quer aprender C# ou Java?");
}

else {
    alert("Você não inseriu uma área válida!");
}

var keepTheRoadOrFullstack = prompt('Digite 1 para seguir se especializando na área escolhida ou 2 para seguir se desenvolvendo para se tornar Fullstack');

if(keepTheRoadOrFullstack == 1){
    alert(`Continue se especializando em ${language} para dominar a área de ${road}!`);
} 

else if (keepTheRoadOrFullstack == 2){
    alert(`Neste caso é necessário aprender outras linguagens além de ${language} se você deseja se tornar Fullstack!`)
} 

else {
    alert('A resposta só pode ser 1 ou 2!');
}

var question = prompt ('E teria alguma outra tecnologia que você gostaria de aprender? Digite "Sim" caso tenha.')

while (question === 'sim'){
    var newTec = prompt('Qual seria essa tecnologia?');
    alert(`${newTec} é uma tecnologia muito interessante!`)
    question = prompt ('E teria alguma outra tecnologia que você gostaria de aprender? Digite "Sim" caso tenha.')
}