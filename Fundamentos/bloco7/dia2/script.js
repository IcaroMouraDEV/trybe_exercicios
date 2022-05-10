/* const verify = (value1, value2) => {
  if (!value1 || !value2) {
    throw new Error("Informe os dois valores para a soma ser realizada");
  }
};

const verifyNan = (value) => {
  const erro = isNaN(value);

  if(erro === true) {
    throw new Error("os valores não são numéricos");
  }
}

function sum() {
  try {
    const value1 = document.getElementById("value1").value;
    const value2 = document.getElementById("value2").value;
    verify(value1, value2);
    verifyNan(value1);
    verifyNan(value2);
    const result =     + parseInt(value2);
    document.getElementById("result").innerHTML = `Resultado: ${result}`; 
  } catch (error) {
    document.getElementById("result").innerHTML = `Erro: ${error.message}`;
  }

  finally {
    document.getElementById("value1").value = "";
    document.getElementById("value2").value = "";
  }
}
window.onload = () => {
  const button = document.getElementById("button");
  button.addEventListener("click", sum);
};
 */
//Exercício 2 
const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  const address = 'address';
  const deliveryPerson = order.order.delivery.deliveryPerson;
  const customerName = order['name'];
  const customerPhone = order['phoneNumber'];
  const street = order[address].street;
  const number = order[address].number;
  const apartment = order[address].apartment;

  console.log(`Olá ${deliveryPerson}, entrega para: ${customerName}, Telefone: ${customerPhone}, R. ${street}, Nº: ${number}, AP: ${apartment}`);
}

customerInfo(order);

console.log('------------------------------------------------------------------------------------------')

const orderModifier = (order) => {
  const newBuyer = order.name = 'Luiz Silva';
  const pizzas = Object.keys(order.order.pizza);
  const drinks = order.order.drinks.coke.type;
  const newTotal = order.payment.total = '50';

  console.log(`Olá ${newBuyer}, o total do seu pedido de ${pizzas[0]}, ${pizzas[1]} e ${drinks} é R$ ${newTotal},00.`);
}

orderModifier(order);