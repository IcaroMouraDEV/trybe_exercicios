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

// Exercício 5
let maior = numbers[0];

for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] > maior) {
        maior = numbers[i];
    } 
}

console.log (maior);

// Exercício 6
let result = 0;

for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 2 !== 0) {
        result += 1;
    }
}

if (result > 0) {
    console.log(result);
} else {
    console.log("nenhum valor ímpar encontrado");
}

// Exercício 7
let menor = numbers[0];

for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] < menor) {
        menor = numbers[i];
    } 
}

console.log (menor);

// Exercício 8
let maxArray = 0;
let array = {};

for (let i = 0; i < 25; i += 1) {
    maxArray = i + 1
    array[i] = maxArray;
}
console.log(array);

// Exercício 9
let div = 0;
for (let i = 0; i < 25; i += 1) {
    div = array[i] / 2;
    console.log(div);
}