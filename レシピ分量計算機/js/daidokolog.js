function daidokolog() {
    var ingredient = document.getElementsByClassName("ingredient");
    ingredient = Array.from(ingredient);
    ingredient.forEach(function(ing){
        var header = document.getElementsByClassName("sec-header");
        header = Array.from(header);
        header.forEach(function(h){
            var small = h.getElementsByTagName("small");
            small = Array.from(small);
            small.forEach(function(s){
                createTag(s);
            });
        });
        var td = ing.getElementsByTagName("td");
        td = Array.from(td);
        td.forEach(function(td){
            createTag(td);
        });
    });
}