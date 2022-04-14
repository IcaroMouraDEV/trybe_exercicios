// Exercício 1
let body = document.querySelector('body');
let finalTitle = document.createElement('h1');
finalTitle.innerHTML = 'Exercício 5.2 - JavaScript DOM';

body.appendChild(finalTitle);

// Exercício 2
let main = document.createElement('main');
main.className = 'main-content';

body.appendChild(main);

// Exercício 3
let section = document.createElement('section');
section.className = 'center-content';

main.appendChild(section);

// Exercício 4
let p = document.createElement('p');
p.innerHTML = 'Dinheiro é bom d+';

section.appendChild(p);