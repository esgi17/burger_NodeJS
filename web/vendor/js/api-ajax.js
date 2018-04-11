var path_api = "http://localhost:8000/";

const post = function(route, data) {
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

const get = function(route, data) {
    var url = path_api + route;
    
    $.ajax({
        url : url,
        method: "GET",
        data: data
    })
      .done( function(res, err) {
          console.log(res);
          return true;
      })
      .fail( function(err) {
          console.error(err);
          return false;
      });
}

const api = function (route, f, data  ) {
    return f(route, data);
}
