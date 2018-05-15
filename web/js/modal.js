var app = app || {};

app.modal = {
    modalOpen : false,

    itemId : -1,

    init : () => {
        app.modal.eventHandler();
    },

    eventHandler : () => {
        $(document).on('click', function(e) {
            app.modal.close();
        });

        $('#pQuantity').on('click', function() {
            var val = parseInt($('#quantity').text());
            val += 1;
            $('#quantity').text(`${val}`);
            app.modal.updatePrice(val);
        });

        $('#mQuantity').on('click', function() {
            var val = parseInt($('#quantity').text());
            if( val >= 2 ) {
              val -= 1;
              $('#quantity').text(`${val}`)
            }
            app.modal.updatePrice(val);
        });

        $('#valid-modal').on('click', function() {
            var price = parseFloat($(".modal-price").text());
            var name = $("#modal-title").text();
            var quantity = parseInt($("#quantity").text());
            var size = $(".modal-size").text();
            if( price === undefined || name === undefined || quantity === undefined || quantity < 1 ) {
                alert("Ajout au panier impossible");
                return;
            }
            app.order.addItemOrder(app.modal.itemId, price, name, quantity, size);
        });

        $('#modal').click(function(e) {

            e.stopPropagation();
        });
    },

    open : (item) => {
        if( item !== undefined ) {
          var modal = $('#modal');
          console.log(item);
          modal.css('display', 'block');
          app.modal.modalOpen = 1;
          app.modal.itemId = item.id;
          $("#modal-img").attr('src', `${item.image}`);
          $("#modal-title").text(`${item.name}`);
          if( item.size !== undefined ) {
              $("#size-modal").show();
              $(".modal-size").text(`${item.size.libelle}`);
          }else {
              $("#size-modal").hide();
          }
          $(".modal-price").text(`${item.price} €`);
          $(".total-price").text(`${item.price} €`);
        }
    },

    close : () => {
        app.modal.modalOpen = 0;
        $('#modal').css('display', 'none');
    },

    updatePrice : (val) => {
        var initPrice = parseFloat($(".modal-price").text());
        var price = initPrice * val;
        $(".total-price").text(`${price} €`);
    }
}

app.modal.init();
