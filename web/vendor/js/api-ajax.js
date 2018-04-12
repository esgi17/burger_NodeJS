var path_api = "http://localhost:8000/";
var res;

/*
* Appel Ajax à l'API avec la method : post
* @param1 <string> route : Route à interroger
* @param2 <obj> data : datas à envoyer
*/
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

/*
* Appel Ajax à l'API avec la method : get
* @param1 <string> route : Route à interroger
* @param2 <obj> data : datas à envoyer
*/
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

// Fonction d'execution de la requete et de retour des données
var api = function ( route, method, data ) {
    var res = method(route,data);
    return res;
}
