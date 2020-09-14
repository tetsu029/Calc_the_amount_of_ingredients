function cookpad(mag) {
    //人数
    var yield = document.getElementById("ingredients").getElementsByClassName("servings_for yield");
    yield = Array.from(yield);
    yield.forEach(function(item){
        createTag(item);
    });

    //材料
    var material = document.getElementById("ingredients_list").getElementsByClassName("ingredient_quantity");
    material = Array.from(material);
    material.forEach(function(item){
        createTag(item);
    });
}
