//Parte1
const currentHour = 23;
let message;

if (currentHour >= 22) {
    message = "Não deveríamos comer nada, é hora de dormir";
} else if (currentHour >= 18 && currentHour < 22) {
    message = "Rango da noite, vamos jantar :D";
} else if (currentHour >= 14 && currentHour < 18) {
    message = "Vamos fazer um bolo pro café da tarde?";
} else if (currentHour > 11 && currentHour < 14) {
    message = "Hora do almoço!!!"; 
} else if (currentHour > 4 && currentHour < 11){
    message = "Hmmm, cheiro de café recém passado";
} else {
    message = "vai dormir";
}

console.log(message);

//Parte2
let weekDay = "sábado";

switch (weekDay){
    case "segunda-feira":  
    case "terça-feira":
    case "quarta-feira":
    case "quinta-feira":
    case "sexta-feira":
        console.log("Oba, mais um dia de aprendizado na Trybe >:D");
        break;
    case "sábado":
    case "domingo":
        console.log("FINALMENTE, descanso merecido UwU");
        break;
}