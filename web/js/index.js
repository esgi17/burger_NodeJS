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
    },

    startOrder : () => {
      // Load HTML
        $("#container").hide().load('html/order.html').show();
      // getScript
        $.getScript('js/order.js');
    },

    createElement : (child, parent) => {

    },

    loadHtml : (container, contentPath, script) => {


    }
};

app.main.init();
