// Business Logic --------------------

var sizeCosts = {   // Base cost for a pizza depending on its size
  small: 6,
  medium: 9,
  large: 12,
  xLarge: 15
}

function Order() {
  this.currentId = 0
  this.pizzas = [];
  this.total = 0;
}

Order.prototype.addPizza = function (pizza) {
  pizza.id = this.currentId;    // Assigns unique ID and calculates cost upon adding a pizza to the order
  pizza.determineCost();
  this.pizzas.push(pizza);
  this.total += pizza.cost;   // Updates total cost for the order
  this.currentId += 1;
}

function Pizza(crust, basicToppings, premiumToppings, size, cost) {
  this.id;
  this.crust = crust;
  this.basicToppings = basicToppings;
  this.premiumToppings = premiumToppings;
  this.size = size;
  this.cost = 0;
}

Pizza.prototype.determineCost = function () {
  if (this.crust === "glutenFree") {    // Gluten-free crust costs $1.50 extra
    this.cost += 1.5;
  }
  this.cost += (1 * this.basicToppings.length + 2 * this.premiumToppings.length);    // Charges $1 for each basic and $2 for each premium topping
  this.cost += sizeCosts[this.size];
}

// UI Logic --------------------------
var inputBasicTpgs = []
var inputPremiumTpgs = []

var getBasicTpgs = function () {
  $("input:checkbox[name=basic-toppings]:checked").each(function () {
    var basicTpg = $(this).val();
    inputBasicTpgs.push(basicTpg);
  })
}

var getPremiumTpgs = function () {
  $("input:checkbox[name=premium-toppings]:checked").each(function () {
    var premiumTpg = $(this).val();
    inputPremiumTpgs.push(premiumTpg);
  })
}

$(function() {
  $("#order-start").click(function() {
    $("#order-start").hide();
    $(".card").slideDown();
  })

  $("form.build-pizza").submit(function(event) {
    event.preventDefault();

    var inputSize = $("#size").val();
    var inputCrust = $("#crust").val();
    getBasicTpgs();
    getPremiumTpgs();
  })
})