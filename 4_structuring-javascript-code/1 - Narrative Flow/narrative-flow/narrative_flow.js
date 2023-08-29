/*
Your first thought might be to move the createPizza function to the top but that function is using all of the other functions to return a random pizza. Since this function is pulling everything else together it makes sense to keep it at the end.

Since our app is building a pizza let's organize our code as if we were telling the story of making a pizza.

The first part of the story would be the crust right? We can't put any toppings on until we have our crust so let's move that crust function up to the top.

Next up would be the cheese so let's move that cheese function up, just below the crust function.

From there you could go with either meats or veggies next but let's put the veggie function next followed by the meats function.
 */


function veggies() {
  const options = ["green Peppers", "onions", "mushrooms", "banana peppers"];

  return options[Math.floor(Math.random() * options.length)];
}

function cheese() {
  const options = ["provolone", "parmesan", "mozzarella"];

  return options[Math.floor(Math.random() * options.length)];
}

function meat() {
  const options = ["pepperoni", "sausage", "ham"];

  return options[Math.floor(Math.random() * options.length)];
}

function crust() {
  const options = ["thin", "hand tossed", "pan"];

  return options[Math.floor(Math.random() * options.length)];
}

function createPizza() {
  return `Your random pizza is a ${crust()} pizza with ${meat()}, ${veggies()}, and ${cheese()}!`
}

console.log(createPizza());
