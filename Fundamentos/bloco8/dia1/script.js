// Exercício 1
const newEmployees = (employeesGenerator) => {
  const employees = {
    id1: employeesGenerator("Pedro Guerra"),
    id2: employeesGenerator("Luiza Drumond"),
    id3: employeesGenerator("Carla Paiva"),
  };
  return employees;
};

const employeesGenerator = (name) => {
  const email = name.replace(" ", "_").toLowerCase();
  return { name, email: `${email}@betrybe.com` };
};

console.log(newEmployees(employeesGenerator));

// Exercício 2
const sorteio = (playerNumber, verify) => {
  const numSorteado = Math.floor((Math.random() * 5) + 1);

  return verify(playerNumber, numSorteado) ? 'Lucky day, you won!' : 'Try Again!';
};

const verifyNumber = (playerNumber, sorteadoNumber) => playerNumber === sorteadoNumber;

console.log(sorteio(3, verifyNumber));

// Exercício 3
const gabarito = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const estudante = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
const corrigir = (student, correctAnswer) => {
  let nota = 0;

  for (let index = 0; index < correctAnswer.length; index += 1) {
    if (student[index] === 'N.A') { 
      nota += 0; 
    } else if (student[index] === correctAnswer[index]) { 
      nota += 1; 
    } else { 
      nota -= 0.5; 
    }
  }

  return nota;
}

console.log(corrigir(estudante, gabarito));
