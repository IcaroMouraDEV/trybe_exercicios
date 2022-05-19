// Exercício 1
const rectangleArea = (width, height) => width * height;

const rectangle1 = [1, 2];
const rectangle2 = [3, 5];
const rectangle3 = [6, 9];
const rectangles = [rectangle1, rectangle2, rectangle3];

rectangles.forEach((rectangle) => {
  rectangleArea(...rectangle);
  /* console.log(rectangle[0] * rectangle[1]); */
});

// Exercício 2
const sum = (...numbers) => numbers.reduce((accumulator, element) => accumulator + element, 0);

console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9))

// Exercício 3
const alex = {
  name: 'Alex',
  age: 26,
  likes: ['fly fishing'],
  nationality: 'Australian',
};

const gunnar = {
  name: 'Gunnar',
  age: 30,
  likes: ['hiking', 'scuba diving', 'taking pictures'],
  nationality: 'Icelandic',
};

// complete a assinatura da função abaixo
const personLikes = ({ name, age, likes } = person) => `${name} is ${age} years old and likes ${likes.join(', ')}.`;

/* console.log(personLikes(alex));
console.log(personLikes(gunnar)); */
