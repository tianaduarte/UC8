//Se a data do evento for posterior à data atual, permitir o evento; senão, alertar que o cadastro não será permitido por data inválida.
var data1 = new Date ('2022-10-16');
var data2 = new Date ('2022-10-22');

if (data1 > data2) {
    console.log("Cadastro permitido!");
} else {
    console.log("Cadastro não permitido! O evento já aconteceu!");
}

//Se o participante for maior de 18 anos, permitir o cadastro; senão, alertar que o cadastro não é permitido pela idade.
let idadeParticipante = 20;

if (idadeParticipante >= 18) {
    console.log ("Cadastro Permitido!");
} else {
    console.log("Cadastro não permitido! A idade mínima para participar é de 18 anos.");
}

//Listar participantes e palestrantes por evento.
let listaDePalestrantes = ["Henrique", "João", "Camila", "Luana", "Lucas", "Bruna"]

for (let lista1 of listaDePalestrantes){
    console.log(`Esse palestrante se chama ${lista1}`);
}

let listaDeParticipantes = ["Alana", "Joana", "Carlos", "Fábio", "Tânia", "Tiago", "Clara", "Júlia"]

for (let lista2 of listaDeParticipantes) {
    console.log(`Este participante se chama ${lista2}`);
}

//Enquanto a quantidade de participantes for inferior a 100, permitir cadastro; senão, alertar que o cadastro não será permitido por ter excedido o limite.
let numeroDeInscritos = 102;

if (numeroDeInscritos > 100) {
    console.log("Cadastro permitido!")
} else {
    console.log("Cadastro não permitido. O número de inscrições disponíveis foi preenchido!")
}

