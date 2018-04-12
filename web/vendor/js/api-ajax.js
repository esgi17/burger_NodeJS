var path_api = "http://localhost:8000/";
var res;

var post = function(route, data) {
    var url = path_api + route;
    $.ajax({
        url: url,
        crossDomain: true,
        method: "POST",
        data: data
    })
      .done( function(res, err) {
          console.log(res);
          return true;
      })
      .fail(function(err) {
            console.error(err);
            return false;
      });

    ;
}

function get(route, data) {
    var a;
    var url = path_api + route;
    $.ajax({
        url : url,
        crossDomain: true,
        method: "GET",
        async: false,
        data: data
    })
      .done( function(res, err) {
          a = res;
      })
      .fail( function(err) {
          console.error(err);
      })
      .always( function(res) {

      });
      return a;
}

var api = function ( route, method, data ) {
    var res = method(route,data);
    return res;
}

var sendData = function() {
    return res;
}
