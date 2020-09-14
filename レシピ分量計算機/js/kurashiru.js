function kurashiru() {
    var ingredients = document.getElementsByClassName("ingredients");
    ingredients = Array.from(ingredients);
    ingredients.forEach(function(i){
        var span = i.getElementsByTagName("span");
        span = Array.from(span);
        span.forEach(function(s){
            if(s.className === "servings" ||  s.className === "ingredient-quantity-amount"){
                createTag(s);
            }
        });
    });
}