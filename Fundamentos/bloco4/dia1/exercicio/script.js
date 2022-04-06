//Primeiro Exercício
const a = 10;
const b = 5;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

//Segunda Exercício
const num1 = 120;
const num2 = 30;

if (num1 > num2) {
    console.log(num1 +" é maior");
} else {
    console.log(num2 +" é maior")
}

//Terceiro Exercício
const num3 = 20;

if (num1 > num2 && num1 > num3) {
    console.log(num1 + " é o maior");
} else if (num2 > num1 && num2 > num3) {
    console.log(num2 + " é o maior");
} else if (num3 > num1 && num3 > num2) {
    console.log(num3 + " é o maior");
} else {
    console.log("algum número é igual");
}

//Quarto Exercício
const valor = 0;

if (valor >= 0) {
    console.log("positive");
} else {
    console.log("negative");
}

//Quinto Exercício
const angulo1 = 90;
const angulo2 = 50;
const angulo3 = 40;

if (angulo1 > 0 && angulo2 > 0 && angulo3 > 0) {
    if( (angulo1 + angulo2 + angulo3) == 180 ) {
        console.log("true");
    } else {
        console.log("false");
    }
} else {
    console.log("os ângulos tem que ser maior que 0");
}

//Sexto Exercício
const piece = "QUEEN".toLowerCase();

switch (piece) {
    case "king":
        console.log("King -> all direction, one square");
        break;
    case "queen":
        console.log("Queen -> all direction, unlimited squares");
        break;
    case "bishop":
        console.log("Bishop -> all diagonals, unlimited squares");
        break;
    case "knight":
        console.log("Knight -> nearest square relative to which it occupies, but not in the same column, row, or diagonal.");
        break;
    case "rook":
        console.log("Rook -> column or row, unlimited squares");
        break;
    case "pawn":
        console.log("Pawn -> column or square occupied by an opposing piece, which is diagonally in front of it, on an adjacent file, capturing that piece, one square");
        break;
}