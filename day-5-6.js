var category = '';
var food = '';
var candy = [];
var fruits = [];
var frozen = [];
var dairyProducts = [];
var drinks = [];
var grains = [];
var addItem = 'sim';
var removeIten = '';

while (addItem != 'não'){

    if(candy.length === -1 && fruits.length === -1 && frozen.length === -1 && dairyProducts.length === -1 && drinks.length === -1 && grains.length === -1){

        addItem = prompt('Olá, gostaria de adicionar algum alimento em sua lista? Responda somente com "Sim" para positivo e "Não" para negativo.');
    }

    else{
        addItem = prompt('Olá, gostaria de adicionar algum alimento em sua lista? Responda somente com "Sim" para positivo e "Não" para negativo ou "Remover" caso queira retirar algo da lista.');
    }

    while(addItem != 'Sim' && addItem != 'Não' && addItem != 'sim' && addItem != 'não' && addItem != 'Remover' && addItem != 'remover'){
        alert('Opção indisponivel, apenas responda com "Sim" para positivo e "Não" para negativo ou "Remover" para remover algum item.')
        addItem = prompt('Gostaria de adicionar algum alimento em sua lista? Responda somente com "Sim" para positivo e "Não" para negativo ou "Remover" caso queira retirar algo da lista.');     
    }

    if(addItem === 'Não' || addItem === 'não'){
        break;
    }

    food = prompt('Qual comida você gostaria de adicionar em sua lista?');

    category = prompt('E em qual categoria ela se encaixa: "Doces", "Frutas", "Congelados", "Laticínios", "Bebidas" ou "Grãos"?');

    if(category == 'Doce' || category == 'Doces' || category == 'doce' || category == 'doces'){
        candy.push(food);
    }

    else if(category == 'Fruta' || category == 'Frutas' || category == 'fruta' || category == 'frutas'){
        fruits.push(food);
    }

    else if(category == 'Congelados' || category == 'congelados'){
        frozen.push(food);
    }

    else if(category == 'Laticínios' || category == 'Laticínio' || category == 'laticínios' || category == 'laticínio'){
        dairyProducts.push(food);
    }

    else if(category == 'Bebidas' || category == 'Bebida' || category == 'bebidas' || category == 'bebida'){
        drinks.push(food)
    }

    else if(category == 'Grãos' || category == 'Grão' || category == 'grãos' || category == 'grão'){
        grains.push(food);
    }

    else{
        alert('Sinto muito, mas não temos essa categoria na lista.')
    }

    if(addItem === 'Remover' || addItem === 'remover'){

        if(candy.length === -1 && fruits.length === -1 && frozen.length === -1 && dairyProducts.length === -1 && drinks.length === -1 && grains.length ===-1){

            alert('Sua lista esta vazia');
        }

        removeIten = prompt(`Sua lista de compras:\n  Frutas: ${candy}\n  Laticínios: ${fruits}\n  Doces: ${frozen}\n  Congelados: ${dairyProducts} \n Bebidas: ${drinks} \n Grãos: ${grains}\n Qual item você gostaria de remover?`)
            
        if(candy.indexOf(removeIten) != -1){
            candy.splice(candy.indexOf(removeIten), 1);
            alert(`O item ${removeIten} foi removido de sua lista`)
        }
    
        if(fruits.indexOf(removeIten) != -1){
            fruits.splice(fruits.indexOf(removeIten), 1);
            alert(`O item ${removeIten} foi removido de sua lista`)
        }
        
        
        if(frozen.indexOf(removeIten) != -1){
            frozen.splice(frozen.indexOf(removeIten), 1);
            alert(`O item ${removeIten} foi removido de sua lista`)
        }

        if(dairyProducts.indexOf(removeIten) != -1){
            dairyProducts.splice(dairyProducts.indexOf(removeIten), 1);
            alert(`O item ${removeIten} foi removido de sua lista`)
        }

        if(drinks.indexOf(removeIten) != -1){
            drinks.splice(drinks.indexOf(removeIten), 1);
            alert(`O item ${removeIten} foi removido de sua lista`)
        }

        if(grains.indexOf(removeIten) != -1){
            grains.splice(grains.indexOf(removeIten), 1);
            alert(`O item ${removeIten} foi removido de sua lista`)
        }

        else{
            alert(`Não foi possível encontrar o item em sua lista!`)
        }
    }
}

alert(`Lista de compras:\n  Frutas: ${candy}\n  Laticínios: ${fruits}\n  Doces: ${frozen}\n  Congelados: ${dairyProducts} \n Bebidas: ${drinks} \n Grãos: ${grains}`);