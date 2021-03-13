// Выбор валюты
const currencyValue = document.querySelector(".currency-menu__value");
const currency = document.querySelectorAll(".currency-menu__item");

// Выбор плана подписки
const html = document.querySelector("html");
const planButton = document.querySelectorAll(".menu-plan__wrapper");
const planList = document.querySelectorAll(".menu-plan__list");
const productCard = document.querySelectorAll(".poduct-card");
const planValue = document.querySelectorAll(".menu-plan__value");
const plan = document.querySelectorAll(".menu-plan__list-item");
const planPrise = document.querySelectorAll(".menu-plan__prise");
const poductDiscountValue = document.querySelectorAll(
  ".poduct-card__discount-value"
);
const priseDisabled = document.querySelectorAll(".poduct-card__prise-disabled");

// Функция выбора значений из списка валюты
function menuList(value, listItem) {
  listItem.forEach((item) => {
    item.addEventListener("click", (event) => {
      value.innerHTML = item.innerHTML;
    });
  });
}
menuList(currencyValue, currency);

// Функция выпадающего меню плана
function planListActive() {
  planButton.forEach((item, index) => {
    item.addEventListener("click", (event) => {
      planList[index].classList.toggle("list--active");
    });

    html.addEventListener("click", (event) => {
      if (!event.target.classList.contains("menu-plan__wrapper")) {
        planList.forEach((item) => {
          item.classList.remove("list--active");
        });
      }
    });
  });
}
planListActive();

// Функция выбора плана
function menuPlan(value, listItem) {
  // Получение цены, скидки и цены без скидки плана подписки, выбранного по умолчанию:
  let price = Number(planPrise[0].getAttribute("data-prise"));
  let discount = Math.round(price * 0.5);
  let oldPrice = Number((price + discount).toFixed(2));

  // Вывод значений, выбранных по умолчанию
  // Цена элемента списка, выбранного по умолчанию
  value.forEach((item) => {
    item.innerHTML = listItem[0].innerHTML;
  });
  // Скидка для элемента списка, выбранного по умолчанию
  poductDiscountValue.forEach((item) => {
    item.innerHTML = "$" + discount + " OFF";
  });
  // Цена элемента списка, выбранного по умолчанию, без скидки
  priseDisabled.forEach((item) => {
    item.innerHTML = "$" + oldPrice + "*";
  });

  // Расчёт и вывод при выборе значений из списка
  listItem.forEach((item, index) => {
    item.addEventListener("click", () => {
      // Получение цены выбранного плана подписки
      let price = Number(planPrise[index].getAttribute("data-prise"));

      // Расчёт скидки
      let discount = Math.round(price * 0.5);

      // Расчёт старой цены
      let oldPrice = Number((price + discount).toFixed(2));

      // Вывод значений на экран
      for (let i = 0; i < productCard.length; i++) {
        value[i].innerHTML = item.innerHTML;
        poductDiscountValue[i].innerHTML = "$" + discount + " OFF";
        priseDisabled[i].innerHTML = "$" + oldPrice + "*";
      }
    });
  });
}
menuPlan(planValue, plan);
