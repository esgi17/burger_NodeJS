$(window).ready( function() {

    // Clic sur le bouton de démarrage de la commande
    $(document).on("click", "#order-button", function() {
        startOrder();
    });

    $('.list-burger').load("", function() {
        api('burger', get );
    })
});
