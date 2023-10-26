
/* 3. Escreva um algoritmo que faça a tabuada de um número e
apresente o resultado de acordo com o modelo a seguir, sabendo
que o multiplicando deverá ser fornecido pelo usuário (n) e a
quantidade de iterações também (i).
1 * 2 = 2
2 * 2 = 4
3 * 2 = 6
... */

let multiplicando = parseInt(prompt("Digite o número que deseja multiplicar:"));
let interacoes = parseInt(prompt("Digite a quantidade de iterações:"));

for (let i = 1; i <= interacoes; i++) {
    console.log(`${i} * ${multiplicando} = ${i * multiplicando}`);
}