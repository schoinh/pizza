// Business Logic --------------------

function Pizza(toppings, size, cost) {
  this.toppings = toppings;
  this.size = size;
  this.cost;
}

// function Size()

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