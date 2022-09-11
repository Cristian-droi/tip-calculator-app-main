let bill = document.querySelector(".inputs-section__bill-input");
let billNumber = parseInt(bill.value);

let people = document.querySelector(".inputs-selection__people-input");
let peopleNumber = parseInt(people.value);

let tipResult = document.querySelector(".results__tip-value");

let totalResult = document.querySelector(".results_total-value");

let butons = document.querySelectorAll(".btns__button");

let alert = document.querySelector("#alert");

let tipValue = 5;

calculateTip();

butons.forEach((element) => {
  element.addEventListener("click", (event) => {
    //cambiar estilos
    removeActive();
    element.classList.add("btns__button--selected");

    tipValue = parseInt(event.target.innerText.slice(0, -1));
    calculateTip();
  });
});

function removeActive() {
  butons.forEach((element) => {
    element.classList.remove("btns__button--selected");
  });
}

//actualizando el bill
bill.addEventListener("input", () => {
  billNumber = parseFloat(bill.value);
  console.log(billNumber);
  if (billNumber == 0 || isNaN(billNumber)) {
    tipResult.innerText = 0;
    totalResult.innerText = 0;
  } else {
    calculateTip();
  }
});

//Actualizando Custom
let custom = document.querySelector(".btns__custom");
custom.addEventListener("click", () => {
  removeActive();
});
custom.addEventListener("input", () => {
  tipValue = parseInt(custom.value);
  if (isNaN(tipValue)) {
  } else {
    calculateTip();
  }
});

// Actualizando personas
people.addEventListener("input", () => {
  peopleNumber = parseFloat(people.value);
  if (peopleNumber == 0 || isNaN(peopleNumber)) {
    people.style.borderColor = "rgb(192, 36, 36)";
    alert.classList.add("error");
    tipResult.innerText = 0;
    totalResult.innerText = 0;
  } else {
    alert.classList.remove("error");
    people.style.borderColor = "hsl(189, 41%, 97%)";
    calculateTip();
  }
});

//RESET
let reset = document.querySelector(".result-section__reset");
reset.addEventListener("click", () => {
  bill.value = 0;
  billNumber = 0;
  people.value = 5;
  peopleNumber = 5;
  custom.value = "Custom";
  calculateTip();
});

function calculateTip() {
  // Calculo del Tip Amount
  tipResult.innerText = ((billNumber * tipValue) / 100 / peopleNumber).toFixed(
    2
  );

  //calculo del total
  totalResult.innerText = (
    ((billNumber * tipValue) / 100 + billNumber) /
    peopleNumber
  ).toFixed(2);
}
