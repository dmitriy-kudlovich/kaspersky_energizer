// Выбор валюты
const currencyValue = document.querySelector(".currency-menu__value");
const currency = document.querySelectorAll(".currency-menu__item");

// Выбор плана подписки
// Для того, чтобы убрать список с ценами при клике не на него
const html = document.querySelector("html");
// Карточка продукта
const productCard = document.querySelectorAll(".poduct-card");
// Блок, в котором находится выпадающий список
const planButton = document.querySelectorAll(".menu-plan__wrapper");
// Выбранный план подписки
const planValue = document.querySelectorAll(".menu-plan__value");
// Список с ценами
const planList = document.querySelectorAll(".menu-plan__list");
// Элемент списка
const plan = document.querySelectorAll(".menu-plan__list-item");
// Цена подписки (из элемента списка)
const planPrise = document.querySelectorAll(".menu-plan__prise");
// Скидка
const poductDiscountValue = document.querySelectorAll(
  ".poduct-card__discount-value"
);
// Цена без скидки
const priseDisabled = document.querySelectorAll(".prise--disabled");
// Выбранная цена
const priseChosen = document.querySelectorAll(".poduct-card__prise--chosen");

// Чек-боксы
const cardCheckBoxes = document.querySelectorAll(".poduct-card__checkbox");
const cardCheckBoxesLabels = document.querySelectorAll(".card__checkbox-lable");

// Функция выбора значений из списка валюты
function menuList(value, listItem) {
  listItem.forEach((item) => {
    item.addEventListener("click", () => {
      value.innerHTML = item.innerHTML;
    });
  });
}
menuList(currencyValue, currency);

// Функция выпадающего меню плана
function planListActive() {
  planButton.forEach((item, index) => {
    item.addEventListener("click", () => {
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
  let priseInt = parseInt(price); //Целая часть цены
  let priseFloat = (price - priseInt).toFixed(2) * 100; //Дробная часть числа

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
    item.innerHTML = "$" + oldPrice;
  });
  // Итоговая выбранная цена
  priseChosen.forEach((item) => {
    item.innerHTML = `<div class="row align-bottom"><sub class="card__prise--float">$</sub>${priseInt}</div><sup class="card__prise--float">,${priseFloat}*</sup>`;
  });

  // Расчёт и вывод при выборе значений из списка
  listItem.forEach((item, index) => {
    item.addEventListener("click", () => {
      // Получение цены выбранного плана подписки
      let price = Number(planPrise[index].getAttribute("data-prise"));
      let priseInt = parseInt(price); //Целая часть цены
      let priseFloat = (price - priseInt).toFixed(2) * 100; //Дробная часть числа

      // Расчёт скидки
      let discount = Math.round(price * 0.5);

      // Расчёт старой цены
      let oldPrice = Number((price + discount).toFixed(2));

      // Вывод значений на экран
      for (let i = 0; i < productCard.length; i++) {
        value[i].innerHTML = item.innerHTML;
        poductDiscountValue[i].innerHTML = "$" + discount + " OFF";
        priseDisabled[i].innerHTML = "$" + oldPrice;
        priseChosen[
          i
        ].innerHTML = `<div class="row align-bottom"><sub class="card__prise--float">$</sub>${priseInt}</div><sup class="card__prise--float">,${priseFloat}*</sup>`;
      }
    });
  });
}
menuPlan(planValue, plan);

// Чек-бокс
// Присвоение атрибутов id и for чекбоксам в карточках
for (let i = 0; i < cardCheckBoxes.length; i++) {
  let itemId = "card__checkbox--" + i;
  cardCheckBoxes[i].id = itemId;
  cardCheckBoxesLabels[i].setAttribute("for", itemId);
}

cardCheckBoxes.forEach((item, index) => {
  item.addEventListener("click", () => {
    cardCheckBoxes[index].classList.toggle("checkbox--checked");
  });
});
