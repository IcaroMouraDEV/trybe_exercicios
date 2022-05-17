// Conteúdo a ser trabalhado
const books = [
  {
    id: 1,
    name: "As Crônicas de Gelo e Fogo",
    genre: "Fantasia",
    author: {
      name: "George R. R. Martin",
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: "O Senhor dos Anéis",
    genre: "Fantasia",
    author: {
      name: "J. R. R. Tolkien",
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: "Fundação",
    genre: "Ficção Científica",
    author: {
      name: "Isaac Asimov",
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: "Duna",
    genre: "Ficção Científica",
    author: {
      name: "Frank Herbert",
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: "A Coisa",
    genre: "Terror",
    author: {
      name: "Stephen King",
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: "O Chamado de Cthulhu",
    genre: "Terror",
    author: {
      name: "H. P. Lovecraft",
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:
// Exercício 1
function formatBookNames(book) {
  return book.map( (element) => `${element.name} - ${element.genre} - ${element.author.name}` );
}

// Exercício 2
function nameAndAge(book) {
  return book.map( (element) => { 
    return { age: element.releaseYear - element.author.birthYear, author: element.author.name} 
  }).sort();
};

// Exercício 3
function fantasyOrScienceFiction(book) {
  return book.filter( (element) => element.genre === 'Ficção Científica' || element.genre === 'Fantasia')
}

// Exercício 4
function oldBooksOrdered(book) {
  return book.filter( (element) => 2022 - element.releaseYear > 60).sort((bookA,bookB) => bookA.releaseYear - bookB.releaseYear);
}

// Exercício 5
