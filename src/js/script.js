let money = prompt("Ваш Бюджет?");
let name = prompt("Название вашего магазина?");

let mainList = {
  budget: money,
  shopName: name,
  shopGoods: [],
  employers: {},
  open: false
};

// for (i = 0; i < 5; i++) {
//   let a = prompt("Какой тип товаров будем продавать?");
//   mainList.shopGoods[i] = a;
  
// }

mainList.shopGoods[0] = prompt("Какой тип товаров будем продавать?");
mainList.shopGoods[1] = prompt("Какой тип товаров будем продавать?");
mainList.shopGoods[2] = prompt("Какой тип товаров будем продавать?");

alert(mainList.budget / 30);

console.log(mainList);
