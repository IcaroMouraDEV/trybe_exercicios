// Exercício 1
let fat = 1;

for (let i = 10; i > 0; i-= 1) {
    fat *= i;
}

console.log(fat);

// Exercício 2
//Dei uma travada nesse, consultei o Gabarito
let word = "tryber";
let reverseWord = '';

for (let index = 0; index < word.length; index += 1) {
  reverseWord += word[word.length - 1 - index];
}

console.log(reverseWord);

// Exercício 3
let array = ['java', 'javascript', 'python', 'html', 'css'];
let maior = array[0];
let menor = array[0];

for (let i = 0; i < array.length; i+= 1) {
    if (array[i].length > maior.length) {
        maior = array[i];
    }
}

for (let i = 0; i < array.length; i+= 1) {
    if (array[i].length < menor.length) {
        menor = array[i];
    }
}

console.log(maior);
console.log(menor);

//Exercício 4
let maiorPrimo = 0;
for (let i = 0; i <= 50; i+= 1) {
    let primo = true;
    for (let i2 = 2; i2 < i; i2+= 1){
        if( (i % i2) === 0) {
            primo = false;
        }
    }
    
    if (primo) {
        maiorPrimo = i;
    }
}

console.log(maiorPrimo);