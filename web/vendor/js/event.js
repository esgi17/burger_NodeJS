$(window).ready( function() {
    // Clic sur le bouton de démarrage de la commande
    $(document).on("click", "#order-button", function() {
        startOrder();
    });

    $('#product-table').ready(buildTable())

    $('#login-form').validate({
        rules: {
            login: "required",
            password: "required",
            minlength: 6
        },
        messages: {
            login: "Login is required !",
            password: {
                required: "Password is required !",
                minlength: "Password must be at least 6 characters long"
            }
        },
        submitHandle: function(form) {
            
        }
    })
});

function getData(obj) {
    var res = api(obj.route, obj.method);

    return res;
}

function getCategories() {
      var categories = getData({
          route: 'category',
          method: get
      });
      return categories;
}

function getBurgers() {
      var burgers = getData({
          route: 'burger',
          method: get
      });
      return burgers;
}

function getDrinks() {
      var drinks = getData({
          route: 'drink',
          method: get
      });
      return drinks;
}

function getFries() {
      var fries = getData({
          route: 'fries',
          method: get
      });
      return fries;
}

function buildTable() {
    // récupération des données
    const categories = getCategories();
    displayCategory(categories);

    const burgers = getBurgers();
    const drinks = getDrinks();
    const fries = getFries();

    const data = {
        burgers : burgers,
        drinks : drinks,
        fries : fries
    }

    var td = document.createElement('td');
    // Construction du DOM
    displayElements({

        burgers : {
            parent: $('#list-burger'),
            child: td
        },
        drinks : {
            parent: $('#list-drink'),
            child: td
        },
        fries : {
            parent: $('#list-fries'),
            child: td
        }
    }, data);

    // Insertion des données

}
