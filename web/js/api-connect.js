var app = app || {};

app.api = {
    post : (route, data, method) => {
        var url = app.main.api + route;
        $.ajax({
            url : url,
            type : 'post',
            dataType  : 'json',
            data : data,
            crossDomain: true
        })
        .done( function(res) {
            console.log(res);
        })
        .fail( function(err) {
            console.error(err);
        });
    },

    get : (route, method) => {
        var url = app.main.api + route;
        console.log(url);
        $.ajax({
            url : url,
            method : 'get',
            dataType : 'json',
            crossDomain: true
        })
        .done( function(res) {
            console.log("TAMERE");
            method(res, route);
        })
        .fail( function(err) {
            console.error(err);
        })
    }
}
