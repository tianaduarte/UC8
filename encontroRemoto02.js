// encontro remoto 2
// Considere a quadtidade de alunos presentes na sala, percorra do zero até o número total e retorne os seguintes resultados:

// Se o número for par, escreva 'par' e o número correspondente
//Se o número for ímpar, escreva 'impar' e o número correspondente
//Se o número for zerto, escreva 'zero'

let numeroDeAlunos = 10;
for(let contador = 0; contador <= numeroDeAlunos; contador++) {
    console.log(contador);
    
    if(contador == 0) {
        console.log("O número atual é ZERO!");
    } else if (contador % 2 == 0) {
        console.log("O número atual - " + contador + " - é PAR!");
    } else {
        console.log(`O número atual - ${contador} - é ÍMPAR!`)
    }
}