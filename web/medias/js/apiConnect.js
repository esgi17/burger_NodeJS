const api_url = "localhost:8080"

function addBurger( params ) {
    api_url += '/burger/add'
    $.ajax({
       url : api_url,
       method : 'POST',
       params : params,
       success : (res) => {
          console.log(res);
       },
       error : (err) => {
         console.log(err);
       }
    })
}
