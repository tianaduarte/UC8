//se a peça possuir um peso superior a 100 gramas, pode cadastrar
var listaDePecas =["Amortecedor", "Motor", "Filtro de Ar", "Termostato", "Bomba de Água", "Pastilha de Freio", "Bobina", "Bateria", "Vela", "Cilindro Mestre do Freio"]

let peso = 50;
if (peso < 100) {
    console.log("A peça deve pesar, no mínimo, 100g!");
} else {
    console.log("A peça possui peso adequado.");
}


//dada a capacidade de cada caixa, caso a lista de peças seja superiror a 10, imprima uma mensagem informando não ter capacidade suficiente
if(listaDePecas.length < 10) {
    console.log("É possível cadastrar novos itens.")
} else {
    console.log("Não é possível cadastrar novos itens. Esta lista está completa.");
}



//caso a peça tenha um nome com quantidade inferior a 3 caracteres, informe uma mensagem de erro. 
let nomePeca = "Di";
if(nomePeca.length > 3){
    console.log("O nome da peça está adequado para o cadastro!");
    // = atribuição == igualdade === igualdade restrita
} else if (nomePeca == 0) {
    console.log("O nome da peça não pode estar vazio!");
} else {
    console.log("O nome da peça deve ter mais de 3 caracteres. Digite um nome adequado!")
}