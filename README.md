# Pizzeria

#### _A web site for ordering pizza - June 21, 2019_

#### _By **Na Hyung Choi**_

## Description

On this web site, the user can choose toppings and a size for one or more pizzas and see the final cost.

### Specs
| Spec | Input | Output |
| :-------------     | :------------- | :------------- |
| **Creates a new pizza through a constructor** | var pizza1 = new Pizza ("large", ["cheese", "sausage"]) | pizza1 = { size : "large", toppings: ["cheese", "sausage"], cost: undefined} |
| **Calculates cost through a method** | pizza1.determineCost() | pizza1.cost = 17 |
| **Adds multiple pizzas, with unique IDs, into a given order** | newOrder.addPizza(pizza2) | newOrder = { pizzas: [pizza1, pizza2], total: undefined}; pizza2.id = 1|
| **Calculates total cost for a given order** | newOrder.addPizza(pizza2) | newOrder = { pizzas: [pizza1, pizza2], total: 34} |

## Setup/Installation Requirements

* Clone this repository and open the .html file.
* OR go directly to the [Web page](http://schoinh.github.io/pizza)

## Known Bugs
* No known bugs at this time.

## Technologies Used
* JavaScript
* jQuery
* Bootstrap

## Support and contact details

_Please contact Na Hyung with questions and comments._

### License

*GNU GPLv3*

Copyright (c) 2019 **_Na Hyung Choi_**
