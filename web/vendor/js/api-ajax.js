var path_api = "http://localhost:8000/";

var post = function(route, data) {
    var url = path_api + route;
    $.ajax({
        url: url,
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

function get(route, func,data) {
    var url = path_api + route;
    $.ajax({
        url : url,
        method: "GET",
        data: data
    })
      .done( function(res, err) {
          func(res);
      })
      .fail( function(err) {
          return false;
      });
}

var api = function (route, f, f2,data  ) {
    return(f(route, f2,data));
}
