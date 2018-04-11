$(window).ready( function() {
    // Clic sur le bouton de démarrage de la commande
    $(document).on("click", "#order-button", function() {
        startOrder();
    });

    $('#product-title').ready(checkContainer($('#product-title'), {
        func: api,
        method: get,
        route: 'category',
        displayMethod: displayCategory
    }));

    $('#product-lists').ready(checkContainer($('#product-lists'), {
      func: api,
      method: get,
      route: 'category',
      displayMethod: displayProductLists
    }));

    $('#list-burger').ready(checkContainer($('#list-burger'), {
        func: api,
        method: get,
        route: 'burger',
        displayMethod: displayBurger
    }));

    $('#list-drink').ready(checkContainer($('#list-drink'), {
        func: api,
        method: get,
        route: 'drink',
        displayMethod: displayDrink
    }));

    $('#list-fries').ready(checkContainer($('#list-fries'), {
        func: api,
        method: get,
        route: 'fries',
        displayMethod: displayFries
    }));

    $('#list-meal').ready(checkContainer($('#list-meal'), {
        func: api,
        method: get,
        route: 'meal',
        displayMethod: displayMeal
    }));

    $('#list-afters').ready(checkContainer($('#list-afters'), {
        func: api,
        method: get,
        route: 'afters',
        displayMethod: displayAfters
    }));
});

function checkContainer (el, obj) {
  if(el.is(':visible')){ //if the container is visible on the page
    obj.func(obj.route, obj.method, obj.displayMethod);
  } else {
    setTimeout(checkContainer, 50); //wait 50 ms, then try again
  }
}
