// Exercício 1
const newEmployees = (employeesGenerator) => {
    const employees = {
      id1: employeesGenerator('Pedro Guerra'),
      id2: employeesGenerator('Luiza Drumond'), 
      id3: employeesGenerator('Carla Paiva') 
    };
    return employees;
  };
  
  const employeesGenerator = (name) => {
    const email = name.replace(' ', '_').toLowerCase();
    return {name, email: `${email}@betrybe.com`};
  };
  
  console.log(newEmployees(employeesGenerator));
  