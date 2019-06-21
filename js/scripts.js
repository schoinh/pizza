// Business Logic --------------------

var sizeCosts = {   // Base cost for a pizza depending on its size
  S: 6,
  M: 9,
  L: 12,
  XL: 15
}

function Order() {
  this.currentId = 1
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
  if (this.crust === "gluten-ree") {    // Gluten-free crust costs $1.50 extra
    this.cost += 1.5;
  }
  this.cost += (1 * this.basicToppings.length + 2 * this.premiumToppings.length);    // Charges $1 for each basic and $2 for each premium topping
  this.cost += sizeCosts[this.size];
}

var addTax = function (cost) {
  cost = cost + cost * 0.1;
  return cost.toFixed(2);
}

// UI Logic --------------------------

var inputBasicTpgs = []
var inputPremiumTpgs = []
var newPizzaDetails = "";

Pizza.prototype.formatDetails = function () {
  var formattedBasicTpgs = this.basicToppings.join(", ");
  var formattedPremTpgs = this.premiumToppings.join(", ");

  var line1 = "Pizza #" + this.id + " - $" + this.cost.toFixed(2);
  var line2 = "<ul><li>Size: " + this.size + "</li>"
  var line3 = "<li>Crust: " + this.crust + "</li>";
  var line4 = "<li>Basic Toppings: " + formattedBasicTpgs + "</li>";
  var line5 = "<li>Premium Toppings: " + formattedPremTpgs + "</li></ul>";

  newPizzaDetails = line1 + line2 + line3 + line4 + line5;
}

var getBasicTpgs = function () {
  inputBasicTpgs = []
  $("input:checkbox[name=basic-toppings]:checked").each(function () {
    var basicTpg = $(this).val();
    inputBasicTpgs.push(basicTpg);
  })
}

var getPremiumTpgs = function () {
  inputPremiumTpgs = []
  $("input:checkbox[name=premium-toppings]:checked").each(function () {
    var premiumTpg = $(this).val();
    inputPremiumTpgs.push(premiumTpg);
  })
}

var newOrder = new Order();

$(function() {
  $("#order-start").click(function() {
    $("#order-start").hide();
    $(".card").slideDown();
  })
  
  $("form.build-pizza").submit(function(event) {    // When "Add to Order" button is clicked...
    event.preventDefault();
    $("#hazy").hide();

    var inputSize = $("#size").val();   // Saves input as variables
    var inputCrust = $("#crust").val();
    getBasicTpgs();
    getPremiumTpgs();

    if (inputSize === "none") {
      $("#size-alert").fadeIn();
    } else {
      var newPizza = new Pizza(inputCrust, inputBasicTpgs, inputPremiumTpgs, inputSize);    // Adds new pizza to order
      newOrder.addPizza(newPizza);
      
      newPizza.formatDetails();
      $("#ordered-items").append(newPizzaDetails);

      $("#order-total").text(" $" + (newOrder.total).toFixed(2));
      $("#tax").text(" $" + (newOrder.total * 0.1).toFixed(2));
      $("#final-total").text(" $" + addTax(newOrder.total));
      $("#total-print, #submit-order").show();
  
      $("form.build-pizza")[0].reset();   // Clears the form
      $("#size-alert").hide();
    }
  });

  $("form#contact-info").submit(function(event) {
    event.preventDefault();

    var inputName = $("input#name").val();
    var inputNumber = $("input#phone").val();

    if (inputName && inputNumber) {
      $("#username").text(inputName);
      $("#submitted").fadeIn();
    } else {
      return;
    }
  })
});