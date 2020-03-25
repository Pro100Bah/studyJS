let money = prompt("Ваш Бюджет?", "");
let name = prompt("Название вашего магазина?", "");
let time = 19;

let mainList = {
  budget: money,
  shopName: name,
  shopGoods: [],
  employers: {},
  open: false
};

for (i = 0; i < 5; i++) {
  let question = prompt("Какой тип товаров будем продавать?");

  if (
    typeof question === "string" &&
    typeof question === null &&
    question != "" &&
    question.length < 50
  ) {
    console.log("Все верно!!!");
    mainList.shopGoods[i] = question;
  } else {
  }
}

if (time < 0) {
  console.log("Такого просто не может быть!!!");
} else if (time > 8 && time < 20) {
  console.log("Время работать!!!");
} else if (time < 24) {
  console.log("Уже слишком поздно!!!");
} else {
  console.log("В сутках только 24 часа!!!");
}

alert(mainList.budget / 30);

console.log(mainList);
