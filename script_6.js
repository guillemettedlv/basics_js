const tableau = [
  { part: 'UCU', acide: 'Sérine'},
  { part: 'UCC', acide: 'Sérine'},
  { part: 'UCA', acide: 'Sérine'},
  { part: 'UCG', acide: 'Sérine'},
  { part: 'AGU', acide: 'Sérine'},
  { part: 'AGC', acide: 'Sérine'},
  { part: 'CCU', acide: 'Proline'},
  { part: 'CCC', acide: 'Proline'},
  { part: 'CCA', acide: 'Proline'},
  { part: 'CCG', acide: 'Proline'},
  { part: 'UUA', acide: 'Leucine'},
  { part: 'UUG', acide: 'Leucine'},
  { part: 'UUU', acide: 'Phénylalanine'},
  { part: 'UUC', acide: 'Phénylalanine'},
  { part: 'CGU', acide: 'Arginine'},
  { part: 'CGC', acide: 'Arginine'},
  { part: 'CGA', acide: 'Arginine'},
  { part: 'CGG', acide: 'Arginine'},
  { part: 'AGA', acide: 'Arginine'},
  { part: 'AGG', acide: 'Arginine'},
  { part: 'UAU', acide: 'Tyrosine'},
  { part: 'UAC', acide: 'Tyrosine'},
];


/* code ARN */
arn = "UUACGCAGUAGA"
let keys = arn.match(/[\s\S]{1,3}/g) || [];
console.log(keys);

/* result */
let result = {}
keys.forEach((key) => {
  if (key == tableau.part) {
    result.push(tableau.acide);
  }
  console.log(result);
});

console.log(tableau.acide[0]);