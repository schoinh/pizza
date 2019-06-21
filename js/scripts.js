// Business Logic --------------------

function Order() {
  this.currentId = 0
  this.pizzas = [];
  this.total = 0;
}

function Pizza(toppings, size, cost) {
  this.id;
  this.toppings = toppings;
  this.size = size;
  this.cost;
}

// function Size()

Order.prototype.addPizza = function (pizza) {
  this.pizzas.push(pizza);
  pizza.id = this.currentId;
  this.currentId += 1;
  this.total += pizza.cost;
}

Pizza.prototype.determineCost = function (toppings, size) {
  this.cost = 1.25 * this.toppings.length;
  if (this.size === "small") {
    this.cost += 5;
  } else {
    this.cost += 8;
  }
}

// UI Logic --------------------------

$(function() {

})