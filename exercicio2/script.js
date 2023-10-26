
/* 2. Pedro tem 1,50m de altura e cresce 2 centímetros por ano, enquanto
Lucas tem 1,10m de altura e cresce 3 centímetros por ano.
Construa um algoritmo que calcule e imprima quantos anos serão
necessários para que:
a. Lucas e Pedro tenham o mesmo tamanho;
b. Lucas seja maior que Pedro. */

let alturaPedro = 150;
let alturaLucas = 110;
let anos = 0;

while (alturaLucas <= alturaPedro) {
    alturaPedro += 2
    alturaLucas += 3
    anos++;
}

console.log(`Serão necessários ${anos} anos para que Lucas e Pedro tenham a mesma altura.`);

while (alturaLucas < alturaPedro) {
    alturaPedro += 2;
    alturaLucas += 3;
    anos++;
}

console.log(`Serão necessários ${anos} anos para que Lucas seja mais alto que Pedro.`);