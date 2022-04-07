let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Exercício 1
console.log(numbers);

// Exercício 2
let somaArray = 0;

for (let i = 0; i < numbers.length; i += 1) {
    somaArray += numbers[i];
}

console.log(somaArray);

// Exercício 3
console.log(somaArray / numbers.length);

// Exercício 4
if ((somaArray / numbers.length) > 20) {
    console.log("valor maior que 20");
} else {
    console.log("valor menor ou igual a 20");
}