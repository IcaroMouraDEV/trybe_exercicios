function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Escreva seu código abaixo.

function assignDaysOfTheMonth() {
  const dezDaysList = [
    29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];
  const daysList = document.querySelector("#days");

  for (let index = 0; index < dezDaysList.length; index += 1) {
    const days = dezDaysList[index];
    const dayListItem = document.createElement("li");
    dayListItem.className = "day";
    dayListItem.innerHTML = days;

    switch (days) {
      case 4:
      case 11:
      case 18:
        dayListItem.className = "friday";
        break;
      case 24:
        dayListItem.className = "holiday";
        break;
      case 25:
        dayListItem.className = "holiday friday";
        break;
      case 31:
        dayListItem.className = "holiday";
        break;
      default:
        break;
    }

    daysList.appendChild(dayListItem);
  }
}

assignDaysOfTheMonth();

function assignDaysOfHoliday() {
  let button = document.createElement("button");
  let div = document.querySelector(".buttons-container");
  let id = 'btn-holiday';

  button.id = id;
  button.innerHTML = 'holiday';

  div.appendChild(button);
}

assignDaysOfHoliday();

function colorDaysOfHoliday() {
 let button = document.querySelector('#btn-holiday');
 let holiday = document.querySelectorAll('.holiday');
 let backgroundColor = 'rgb(238,238,238)';
 let setNewBackgroundColor = 'white';

 button.addEventListener('click', function() {
     for (let i = 0; i < holiday.length; i += 1) {
         if (holiday[i].style.backgroundColor === setNewBackgroundColor) {
            holiday[i].style.backgroundColor = backgroundColor;
         } else {
            holiday[i].style.backgroundColor = setNewBackgroundColor;
         }
     }
 })
};

colorDaysOfHoliday();

function assignDaysOfFriday() {
    let button = document.createElement("button");
    let div = document.querySelector(".buttons-container");
    let id = 'btn-friday';
  
    button.id = id;
    button.innerHTML = 'friday';
  
    div.appendChild(button);
  }
  
  assignDaysOfFriday()