// Exercício 1
let body = document.querySelector('body');
let title = document.createElement('h1');
title.innerHTML = 'Exercício 5.2 - JavaScript DOM';

body.appendChild(title);

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

// Exercício 5
let sectionL = document.createElement('section');
sectionL.className = 'left-content';

main.appendChild(sectionL);

// Exercício 6
let sectionR = document.createElement('section');
sectionR.className = 'right-content';

main.appendChild(sectionR);

// Exercício 7
let image = document.createElement('img');
image.src = 'https://picsum.photos/200';
image.className = 'small-image';

sectionL.appendChild(image);

// Exercício 8
let ul = document.createElement('ul');
let liValues = ['um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez'];

sectionR.appendChild(ul);

for (let i = 0; i < liValues.length; i += 1) {
    let value = liValues[i];
    let li = document.createElement('li');
    li.innerHTML = value;

    ul.appendChild(li);
}

// Exercício 9
for (let i = 0; i < 3; i+= 1) {
    let title3 = document.createElement('h3');

    // Exercício 11
    title3.className = 'description';

    main.appendChild(title3);
}

// Exercício 10
title.className = 'title';

// Exercício 12
main.removeChild(sectionL);

// Exercício 13
sectionR.style.marginRight = 'auto';

main.appendChild(sectionR);

// Exercício 14
section.parentElement.style.backgroundColor = 'green';

// Exercício 15
ul.lastChild.remove();
ul.lastChild.remove();