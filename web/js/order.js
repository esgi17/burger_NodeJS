var app = app || {};

var nbItem = 0;
app.order = {

    init : () => {
        app.order.nbItemOrder = 0;
        app.order.obj['amount'] = 0;
        // Load content
        app.order.loadItem('category', app.order.initCategory);
        // display content
        app.order.itemHandler();
    },

    loadItem : (item, func) => {
        // Recuperer category
        console.log("0");
        app.api.get(item, func);
            // Pour chaque category on recupere les items

            // On les affiches
    },

    initCategory : (datas, route) => {
        app.order.items.categories = datas;
        console.log("1");

        for( c in datas ) {
           app.order.loadItem(datas[c].name, app.order.displayItems);
        }
    },

    displayItems : (datas, route) => {
        var upRoute = route.toUpperCase();
        $('#container-order').append(`<div id="list-${route}" class="list-items"><h2>${upRoute}</h2></div>`)

        var item = {};
        for( item in datas ) {

           $(`#list-${route}`).append(`<div id="${nbItem}" class="item"><img src="${datas[item].image}"> </img><h3>${datas[item].name}<h3></div>`);
           app.order.items[nbItem] = datas[item];
           nbItem += 1;
           console.log(nbItem);
        }
    },

    itemHandler : () => {
        $(document).on('click', '.item', function(e) {

            if( app.modal.modalOpen == 0 ) {
              app.modal.open(app.order.items[`${$(this).attr('id')}`]);
            } else {
              app.modal.close();
            }
            e.stopPropagation();
        });
    },

    addItemOrder : (id, price, name, quantity) => {
        app.order.obj['amount'] += price;
        console.log(quantity);
        var i = 0;
        while( i < quantity ) {
          console.log(app.order.nbItemOrder);
          app.order.obj[`${app.order.nbItemOrder}`] = {
              id : id,
              name : name,
              price : price
          }
          app.order.nbItemOrder += 1;
          i++;
        }

        console.log(app.order.obj);
    },

    items : [],

    obj : []

}

app.order.init();
