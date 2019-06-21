// Business Logic --------------------

var sizeCosts = {
  small: 5,
  medium: 8,
  large: 11,
  xLarge: 14
}

function Order() {
  this.currentId = 0
  this.pizzas = [];
  this.total = 0;
}

Order.prototype.addPizza = function (pizza) {
  pizza.id = this.currentId;
  pizza.determineCost();
  this.total += pizza.cost;
  this.pizzas.push(pizza);
  this.currentId += 1;
}

function Pizza(basicToppings, premiumToppings, size, cost) {
  this.id;
  this.basicToppings = basicToppings;
  this.premiumToppings = premiumToppings;
  this.size = size;
  this.cost;
}

Pizza.prototype.determineCost = function () {
  this.cost = 1 * this.basicToppings.length + 2 * this.premiumToppings.length;
  this.cost += sizeCosts[this.size];
}

// UI Logic --------------------------

$(function() {

})