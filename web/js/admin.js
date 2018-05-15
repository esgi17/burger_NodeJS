var app = app || {};

app.admin = {
    init : () => {
        app.admin.eventHandler();
        if( app.admin.isConnected() ) {
            app.admin.displayAdminPage();

        }else {
            app.admin.displayLoginPage();
        }
    },

    eventHandler : () => {
        $(document).on('click', '#submit-login', function() {

            var login = $("#inputLogin").val();
            var pwd = $("#inputPassword").val();
            console.log(login);
            var data = {
              login : login,
              password : pwd
            }
            app.api.post('user/authenticate', data, app.admin.login );
        });

        $(document).on('click', '#btn-valid-createProduct', function() {
              var type = $("#inputType").val();
              console.log(type);
              switch (type) {
                  case 'burger' :
                      app.admin.validBurger();
                      break;
                  case 'drink' :
                      app.admin.validDrink();
                      break;
                  case 'fries' :
                      app.admin.validFries();
                      break;
                  case 'meal' :
                      app.admin.validMeal();
                      break;
              }
        });

        $(document).on('change', '#inputType', function() {
            console.log("yo");
            var type = $('#inputType option:selected').val();
            console.log(type);
            $("#form-content").hide().load('html/admin/overlay/form-create-' + type + '.html').show();
            if( type == 'drink' || type == 'fries' ) {
                app.api.get('size', app.admin.fillSizeSelect);
            }
        });

        $(document).on('click', '#button-createProduct', function() {
            if( app.admin.jwt === undefined ) {
                app.admin.displayLoginPage();
            }else {
                app.admin.displayProductForm();
            }
        });
    },

    login : (datas) => {
        app.admin.jwt = datas.token;
        app.admin.displayAdminPage();
    },

    isConnected : () => {
        if( app.admin.jwt === undefined || app.admin.jwt == '' ) {
            return false;
        } else {
            return true;
        }
    },

    displayLoginPage : () => {
        $('#admin-container').hide().load('html/admin/loginPage.html').show();
    },

    displayAdminPage : () => {
        $('#admin-container').hide().load('html/admin/adminPage.html').show();
        app.api.get('category', app.admin.fillListCategory);
    },

    fillListCategory : (datas) => {
        for( category in datas ) {
            $("#container-tableProduct").append(`<div id="container-table-${datas[category].name}"><h2>${datas[category].name}</h2></div>`);
            $(`#container-table-${datas[category].name}`).append(`<table id="table-${datas[category].name}" class="table-category table"></table>`);
            switch ( datas[category].name ) {
              case 'burger' :
                  app.api.get(datas[category].name, app.admin.fillTable_burger);
                  break;
              case 'drink' :
                  app.api.get(datas[category].name, app.admin.fillTable_drink);
                  break;
              case 'fries' :
                  app.api.get(datas[category].name, app.admin.fillTable_fries);
                  break;
              default :
                break;
            }

        }
    },

    fillTable_burger : (datas) => {
        /* TODO fill table
        */
        $("#table-burger").append("<tr><th>Nom</th><th>Prix</th><th>Supprimer</th></tr>");
        console.log(datas);
        for( burger in datas ) {
            $("#table-burger").append(`<tr><td>${datas[burger].name}</td><td>${datas[burger].price}</td><td><button> Supprimer</button></td></tr>`)
        }
    },
    fillTable_drink : (datas) => {
        $("#table-drink").append("<tr><th>Nom</th><th>Prix</th><th>Taille</th><th>Supprimer</th></tr>");
        console.log(datas);
        for( drink in datas ) {
            $("#table-drink").append(`<tr><td>${datas[drink].name}</td><td>${datas[drink].price + datas[drink].size.price_add}</td><td>${datas[drink].size.libelle}</td><td><button> Supprimer</button></td></tr>`)
        }
    },
    fillTable_fries : (datas) => {
      $("#table-fries").append("<tr><th>Nom</th><th>Prix</th><th>Taille</th><th>Supprimer</th></tr>");
      console.log(datas);
      for( fries in datas ) {
          $("#table-fries").append(`<tr><td>${datas[fries].name}</td><td>${datas[fries].price + datas[fries].size.price_add}</td><td>${datas[fries].size.libelle}</td><td><button> Supprimer</button></td></tr>`)
      }
    },

    displayProductForm : () => {
        $('#form-createProduct-container').hide().load('html/admin/overlay/form-createProduct.html').show();
        app.api.get('category', app.admin.fillSelectCategory);
    },

    fillSelectCategory : (datas) => {
        for( category in datas ) {
            $('#inputType').append(`<option value='${datas[category].name}'>${datas[category].name}</option>`);
        }
    },

    apiResult : (datas) => {
        console.log(datas);

        app.admin.displayAdminPage();
    },

    //// FOnctions de verification
    validBurger : () => {
        console.log("valid burger");
        var type = 'burger';
        var name = $('#inputName').val();
        var price = $('#inputPrice').val();

        if( type === undefined || name === undefined || price === undefined ){
            alert("Les champs doivent être remplis");
            return;
        }
        if( name.length > 20 ) {
            alert("Le nom ne peut pas faire plus de 20 caractères");
            return;
        }
        if( isNaN(price) ) {
            alert("Le prix doit etre un nombre");
            return;
        }
        console.log(app.admin.jwt);
        app.api.post(type, {name : name, price : price, token : app.admin.jwt }, app.admin.apiResult);
    },

    validDrink : () => {
      console.log("valid drink");
      var type = 'drink';
      var name = $('#inputName').val();
      var price = $('#inputPrice').val();
      var size = $('#inputSize option:selected').val();

      if( type === undefined || name === undefined || price === undefined ){
          alert("Les champs doivent être remplis");
          return;
      }
      if( name.length > 20 ) {
          alert("Le nom ne peut pas faire plus de 20 caractères");
          return;
      }
      if( isNaN(price) ) {
          alert("Le prix doit etre un nombre");
          return;
      }
      console.log(app.admin.jwt);
      app.api.post(type, {name : name, price : price, size_id: size, token : app.admin.jwt }, app.admin.apiResult);

    },

    validFries : () => {
        console.log("valid fries");
        var type = 'fries';
        var name = $('#inputName').val();
        var price = $('#inputPrice').val();
        var size = $('#inputSize option:selected').val();

        if( type === undefined || name === undefined || price === undefined ) {
            alert("Les champs doivent être remplis");
            return;
        }
        if( name.length > 20 ) {
            alert("Le nom ne peut pas faire plus de 20 caractères");
            return;
        }
        if( isNaN(price) ) {
            alert("Le prix doit etre un nombre");
            return;
        }
        console.log(app.admin.jwt);
        app.api.post(type, {name : name, price : price, size_id: size, token : app.admin.jwt }, app.admin.apiResult);


    },

    validMeal : () => {
      console.log("valid meal");

    },

    fillSizeSelect : (datas) => {
        for( el in datas ) {
            $("#inputSize").append(`<option value=${datas[el].id}>${datas[el].libelle}</option>`)
        }
    }

}

app.admin.init();
