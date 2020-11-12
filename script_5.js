/* 2.3.2. Bibliothécaire */

const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

/* 1 */
console.log("Est-ce que tous les livres ont été au moins empruntés une fois ?")
arr = []
books.forEach((book) => {
  arr.push(book.rented);
});
if (arr.every(x => x > 0)){
console.log("tous les livres ont été emprunté une fois")
}
else {
  console.log("au moins un livre n'a jamais été emprunté")
}


/* 2 */
console.log("Quel est livre le plus emprunté ?")

const sortByMapped = (map,compareFn) => (a,b) => compareFn(map(a),map(b));
const byValue = (a,b) => a - b;
const toRented = e => e.rented;
const byRented = sortByMapped(toRented,byValue);
console.log([...books].sort(byRented).pop());

/* 3 */
console.log("Quel est le livre le moins emprunté ?")
const sortByMappeds = (map,compareFn) => (a,b) => compareFn(map(a),map(b));
const byValues = (a,b) => b - a;
const toRenteds = e => e.rented;
const byRenteds = sortByMappeds(toRenteds,byValues);
console.log([...books].sort(byRenteds).pop());


/* 4 */
console.log("Trouve le livre avec l'ID: 873495")

function findId(book) {
  return book.id == '873495';
}
console.log(books.find(findId));

/* 5 */
console.log("Supprime le livre avec l'ID: 133712")

function findIdBis(book) {
  return book.id == '133712';
}
console.log(books.find(findIdBis));


/* 6 */
console.log("Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé)")

function compareTitle( a, b ) {
  if ( a.title < b.title ){
    return -1;
  }
  if ( a.title > b.title ){
    return 1;
  }
  return 0;
}
console.log(books.sort( compareTitle));