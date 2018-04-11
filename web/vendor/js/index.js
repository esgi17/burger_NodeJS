function startOrder() {
    console.log("Order in progress..");
    orderScreen();
}

function displayCategory(data) {
    var categories = Object.keys(data).map(function(key) {
        return data[key];
    })
    for( var category in categories ) {
        $('#product-title').append(`<th> ${categories[category].name} </th>`);
    }
}

function displayProductLists(data) {
  console.log("TEST");
  var categories = Object.keys(data).map(function(key) {
      return data[key];
  })
  console.log(categories);
  for( var category in categories ) {
      $('#product-lists').append(`<td class='list' id='list-${categories[category].name}'> </td>`);
  }
}

function displayBurger(data) {
    var burgers = Object.keys(data).map(function(key) {
        return data[key];
    })
    for( var burger in burgers ) {
        $('#list-burger ul').append(`<li> ${burgers[burger].name} </li>`);
    }
}

function displayDrink(data) {
    var drinks = Object.keys(data).map(function(key) {
        return data[key];
    })
    for( var drink in drinks ) {
        $('#list-drink ul').append(`<li> ${drinks[drink].name} </li>`);
    }
}

function displayFries(data) {
    var fries = Object.keys(data).map(function(key) {
        return data[key];
    })
    for( var frie in fries ) {
        $('#list-fries ul').append(`<li> ${fries[frie].name} </li>`);
    }
}

function displayMeal(data) {
    var meals = Object.keys(data).map(function(key) {
        return data[key];
    })
    for( var meal in meals ) {
        $('#list-meal ul').append(`<li> ${meals[meal].name} </li>`);
    }
}

function displayAfters(data) {
    var afters = Object.keys(data).map(function(key) {
        return data[key];
    })
    for( var after in afters ) {
        $('#list-afters ul').append(`<li> ${afters[after].name} </li>`);
    }
}
