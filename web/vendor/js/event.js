$(window).ready( function() {
    // Clic sur le bouton de démarrage de la commande
    $(document).on("click", "#order-button", function() {
        startOrder();
    });

    // EVENT : Quand le tableau est créé, on le construit
    $('#product-table').ready(buildTable());

    // EVENT : Quand le formulaire est validé = vérifications
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

/*
* Appel à l'API en passant la route et la method
* @param <obj> obj : Object contenant la route et la method que l'API doit utiliser
*/
function getData(obj) {
    var res = api(obj.route, obj.method);
    return res;
}

/*
* Récuperation des categories dans l'API
*/
function getCategories() {
      var categories = getData({
          route: 'category',
          method: get
      });
      return categories;
}

/*
* Récuperation des burgers dans l'API
*/
function getBurgers() {
      var burgers = getData({
          route: 'burger',
          method: get
      });
      return burgers;
}

/*
* Récuperation des boissons dans l'API
*/
function getDrinks() {
      var drinks = getData({
          route: 'drink',
          method: get
      });
      return drinks;
}

/*
* Récuperation des frites dans l'API
*/
function getFries() {
      var fries = getData({
          route: 'fries',
          method: get
      });
      return fries;
}

/*
* Recuperation des données et construction du tableau avec les données
*/
function buildTable() {

    // récupération des données
    const categories = getCategories();
    const burgers = getBurgers();
    const drinks = getDrinks();
    const fries = getFries();
    const data = {
        burgers : burgers,
        drinks : drinks,
        fries : fries
    }

    // Construction du DOM et insertion des données
    var td = document.createElement('td');

    displayCategory(categories);
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


}
