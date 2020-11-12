/* 2.2.1 Calculs rapides */

let number = 0;
let f = 1;
number = prompt("De quel nombre veux-tu calculer la factorielle ?");
for(let i = 1; i <= number; i++){
  f = f * i
}
console.log(`le resultat est : ${f}`)