/* 2.2.2 Pyramide de Mario */
let sign = "#";
floor = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
let space = " "

for(let i = 1; i <= floor; i++){
  s = space.repeat(2*(floor-i));
  a = s + sign;
  sign += "#";
  console.log(a)
}

