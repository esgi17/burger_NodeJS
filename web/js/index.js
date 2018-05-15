var app = app || {};

app.main = {

    appName : 'Burger Project',

    api : 'http://127.0.0.1:8000/',

    version : '1.0',

    modalOpen : 0,

    init : () => {

        app.main.initSession();
        app.main.handleEvent();

    },

    initSession : () => {

    },

    handleEvent : () => {
        $(document).on('click', '#order-button', function(e) {
              // Start order
            app.main.startOrder();
        });

        $(document).on('click', '#admin-button', function() {

            app.main.startAdmin();
        });
    },

    startOrder : () => {
      // Load HTML
        $("#container").hide().load('html/order.html').show();
      // getScript
        $.getScript('js/order.js');
    },

    startAdmin : () => {
        $("#container").hide().load('html/admin/index.html').show();
        $.getScript('js/admin.js');
    },

    createElement : (child, parent) => {

    },

    loadHtml : (container, contentPath, script) => {


    }
};

app.main.init();