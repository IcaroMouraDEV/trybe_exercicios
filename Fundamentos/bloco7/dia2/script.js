const verify = (value1, value2) => {
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
    const result = parseInt(value1) + parseInt(value2);
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
