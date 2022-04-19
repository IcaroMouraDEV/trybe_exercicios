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
  let id = "btn-holiday";

  button.id = id;
  button.innerHTML = "holiday";

  div.appendChild(button);
}

assignDaysOfHoliday();

function colorDaysOfHoliday() {
  let button = document.querySelector("#btn-holiday");
  let holiday = document.querySelectorAll(".holiday");
  let backgroundColor = "rgb(238,238,238)";
  let setNewBackgroundColor = "white";

  button.addEventListener("click", function () {
    for (let i = 0; i < holiday.length; i += 1) {
      if (holiday[i].style.backgroundColor === setNewBackgroundColor) {
        holiday[i].style.backgroundColor = backgroundColor;
      } else {
        holiday[i].style.backgroundColor = setNewBackgroundColor;
      }
    }
  });
}

colorDaysOfHoliday();

function assignDaysOfFriday() {
  let button = document.createElement("button");
  let div = document.querySelector(".buttons-container");
  let id = "btn-friday";

  button.id = id;
  button.innerHTML = "friday";

  div.appendChild(button);
}

assignDaysOfFriday();

function colorDaysOfFriday() {
  let button = document.querySelector("#btn-friday");
  let friday = document.querySelectorAll(".friday");
  let backgroundColor = "rgb(238,238,238)";
  let setNewBackgroundColor = "white";

  button.addEventListener("click", function () {
    for (let i = 0; i < friday.length; i += 1) {
      if (friday[i].style.backgroundColor === setNewBackgroundColor) {
        friday[i].style.backgroundColor = backgroundColor;
      } else {
        friday[i].style.backgroundColor = setNewBackgroundColor;
      }
    }
  });
}

colorDaysOfFriday();

function zoomUp() {
  let days = document.querySelector("#days");

  days.addEventListener("mouseover", function (event) {
    event.target.style.fontSize = "30px";
    event.target.style.fontWeight = "600";
  });
}

function zoomDown() {
  let days = document.querySelector("#days");

  days.addEventListener("mouseout", function (event) {
    event.target.style.fontSize = "20px";
    event.target.style.fontWeight = "200";
  });
}

zoomUp();
zoomDown();

function task() {
  let tasks = document.querySelector(".my-tasks");
  let span = document.createElement("span");
  span.innerHTML = "Viajar com a Família";

  tasks.appendChild(span);
}

task();

function taskItem() {
  let divFather = document.querySelector(".my-tasks");
  let div = document.createElement("div");
  div.className = "task";
  div.style.backgroundColor = "green";

  divFather.appendChild(div);
}

taskItem();

/* function setTaskClass() {
    let selectedTask = document.getElementsByClassName('task selected');
    let myTasks = document.querySelector('.task');
  
    myTasks.addEventListener('click', function(event) {
      if (selectedTask.length === 0) {
        event.target.className = 'task selected';
      } else {
        event.target.className = 'task';
      }
    });
  };
  
  setTaskClass();

  function setDayColor() {
    let selectedTask = document.getElementsByClassName('task selected');
    let days = document.querySelector('#days');
    let taskDiv = document.querySelector('.task');
    let taskColor = taskDiv.style.backgroundColor;
    
    days.addEventListener('click', function(event){
      let eventTargetColor = event.target.style.color;
      if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
        let color = selectedTask[0].style.backgroundColor;
        event.target.style.color = color;
      } else if (eventTargetColor === taskColor && selectedTask.length !== 0) {
        event.target.style.color = 'rgb(119,119,119)';
      }
    });
  };
  
  setDayColor(); */
