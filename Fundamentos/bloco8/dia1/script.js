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