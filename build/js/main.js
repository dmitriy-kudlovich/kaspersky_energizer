console.log("Hello hey");

// Выбор валюты
let currencyValue = document.querySelector(".currency-menu__value");
let currency = document.querySelectorAll(".currency-menu__button");

currency.forEach((item) => {
  item.addEventListener("click", () => {
    currencyValue.innerHTML = item.innerHTML;
  });
});
