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

// Exercício bónus
const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonDmg = (dragon) => {
  const minDmg = 15;
  const dragonDamage = Math.floor(Math.random() * (dragon.strength - minDmg + 1) + minDmg);
  return dragonDamage;
}

const warriorDmg = (warrior) => {
  const minDmg = warrior.strength;
  const maxDmg = minDmg * warrior.weaponDmg;
  const warriorAttack = Math.floor(Math.random() * (maxDmg - minDmg + 1) + minDmg);
  return warriorAttack;
}

const mageDmg = (mage) => {
  const minDmg = mage.intelligence;
  const maxDmg = minDmg * 2;
  let mana = mage.mana;

  if (mana < 15) { 
    return {dano: 'Não possui mana suficiente', manaGasta: 0}; 
  } else {
    mana -= 15;
    const damage =  Math.floor(Math.random() * (maxDmg - minDmg + 1) + minDmg);
    return {dano: damage, manaGasta: 15};
  }
}

const gameActions = {
  turnWarrior: (warriorDmg) => {
    const damage = warriorDmg(warrior);
    warrior.damage = damage;
    dragon.healthPoints -= damage;
  },
  turnMage: (mageDmg) => {
    const result = Object.values(mageDmg(mage));
    mage.damage = result[0];
    mage.mana = result[1];
    dragon.healthPoints -= mage.damage;
  },
  turnDragon: (dragonDmg) => {
    const damage = dragonDmg(dragon);
    dragon.damage = damage;
    warrior.healthPoints -= dragon.damage;
    mage.healthPoints -= dragon.damage;
  },
  turnResult: () => battleMembers
};

gameActions.turnWarrior(warriorDmg);
gameActions.turnMage(mageDmg);
gameActions.turnDragon(dragonDmg);

console.log(gameActions.turnResult())