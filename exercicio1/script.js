/* 1. Desenvolva um algoritmo que leia a altura de 15 pessoas. Este
programa deverá calcular e mostrar:
a. A menor altura do grupo;
b. A maior altura do grupo; */
let alturaMaior = 0
let alturaMenor = 999

for(let pessoa = 0; pessoa <= 3; pessoa++){
      const altura = prompt('Digite altura')
      if(altura > alturaMaior){
            alturaMaior = altura
      }
      if(altura < alturaMenor){
            alturaMenor = altura
      }
}
document.write(`A altura maior é ${alturaMaior}`)
document.write(`A altura menor é ${alturaMenor}`)

