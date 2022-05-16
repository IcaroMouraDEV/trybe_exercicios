const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];
  
// Adicione o código do exercício aqui:
// Exercício 1
function authorBornIn1947(book) {
  return book.find((element) => element.author.birthYear === 1947);
}

console.log(authorBornIn1947(books));

// Exercício 2
function smallerName(book) {
  let nameBook = book[0].name.length;
  // escreva aqui o seu código
  book.forEach(element => {
    if (element.name.length < nameBook) { nameBook = element.name.length }
  });
  // Variável nameBook que receberá o valor do menor nome;
  return nameBook;
}

console.log(smallerName(books))

// Exercício 3
function getNamedBook(book) {
  return book.some(element => element.name.length === 26)
}

console.log(getNamedBook(books));

// Exercício 4
function booksOrderedByReleaseYearDesc(book) {
  return book.sort((bookA, bookB) => bookB.releaseYear - bookA.releaseYear);
}

console.log(booksOrderedByReleaseYearDesc(books));

// Exercício 5
function everyoneWasBornOnSecXX(book) {
  return book.every(element => element.author.birthYear > 1900 && element.author.birthYear < 2000);
}

console.log(everyoneWasBornOnSecXX(books));
