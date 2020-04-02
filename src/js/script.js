let money, name, time, price;

function start() {
  let money = prompt("Ваш Бюджет?", "");

  while (isNaN(money) || money == "" || money == null) {
    let money = prompt("Ваш Бюджет?", "");
  }

  let name = prompt("Название вашего магазина?", "").toUpperCase();
  let time = 21;
}

// start();

let mainList = {
  budget: money,
  shopName: name,
  shopGoods: [],
  employers: {},
  open: false,
  discount: false,
  shopItems: [],
  chooseGoods: function chooseGoods() {
    for (i = 0; i < 5; i++) {
      let question = prompt("Какой тип товаров будем продавать?", "");

      if (
        typeof question === "string" &&
        typeof question != null &&
        question != "" &&
        question.length < 50
      ) {
        console.log("Все верно!!!");
        mainList.shopGoods[i] = question;
      } else {
        i = i - 1; //HW 2
      }
    }
  },
  workTime: function workTime(time) {
    if (time < 0) {
      console.log("Такого просто не может быть!!!");
    } else if (time > 8 && time < 20) {
      console.log("Время работать!!!");
      mainList.open = true;
    } else if (time < 24) {
      console.log("Уже слишком поздно!!!");
    } else {
      console.log("В сутках только 24 часа!!!");
    }
  },
  dayBudget: function dayBudget() {
    alert("Ежедневный бюджет: " + mainList.budget / 30);
  },
  makeDiscount: function makeDiscount() {
    if (mainList.discount == true) {
      price = (price / 100) * 80;
    }
  },
  hireEmployers: function hireEmployers() {
    for (let i = 1; i < 4; i++) {
      let name = prompt("Имя сотрудника?", "");
      mainList.employers[i] = name;
    }
  },
  chooseShopItems: function chooseShopItems() {
    let items = prompt("Перечислите через запятую товары", "");

    mainList.shopItems = items.split(",");
    mainList.shopItems.push(prompt("Подождите, еще", ""));
    mainList.shopItems.sort();
  }
};

console.log(mainList);
