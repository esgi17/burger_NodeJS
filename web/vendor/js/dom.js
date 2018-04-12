/*
* Fonction de creation de DOM
* @param1 <obj> html => objet contenant chaque element a creer avec parent et child
* @param2 <obj> data => objet contenant chaque element a inserer dans les elements créés avec l'objet html
*/
function displayElements(html, data) {
    // Tranformer les objets en tableaux d'objets
    var html = Object.keys(html).map(function(key) {
        return html[key];
    });

    var data = Object.keys(data).map(function(key) {
        return data[key];
    });

    for( var el in html ) {
        var values = Object.keys(data[el]).map(function(key) {
            return data[el][key];
        });
        for( var val in values ) {
            html[el].parent.append(html[el].child).append(`<div class="item-card"><h3>${values[val].name}</h3><img src="data:image/jpg;base64,${values[val].image}"></div>`);
        }
    }
}


function displayCategory(data) {
    var categories = Object.keys(data).map(function(key) {
        return data[key];
    })
    for( var category in categories ) {
        $('#product-title').append(`<th> ${categories[category].name} </th>`);
    }
}
