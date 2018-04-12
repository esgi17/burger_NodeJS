function startOrder() {
    console.log("Order in progress..");
    orderScreen();
}

function displayElements(html, data) {
    // Tranformer les objets en tableaux d'objets
    var html = Object.keys(html).map(function(key) {
        return html[key];
    });

    var data = Object.keys(data).map(function(key) {
        return data[key];
    });

    for( var el in html ) {
        var values = Object.keys(data[el]).map(function(key) {
            return data[el][key];
        });
        for( var val in values ) {
            html[el].parent.append(html[el].child).append(`<p>${values[val].name}</p>`);
        }
    }
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
  var categories = Object.keys(data).map(function(key) {
      return data[key];
  });
  for( var category in categories ) {
      $('#product-lists').append(`<td class='list' id='list-${categories[category].name}'> </td>`);
  }
}

function displayBurger(data) {
    var burgers = Object.keys(data).map(function(key) {
        return data[key];
    });
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
