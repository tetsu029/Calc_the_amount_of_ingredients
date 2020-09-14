function delishkitchen() {
    var item = document.getElementsByTagName("span");
    item = Array.from(item);
    item.forEach(function(i){
        if(i.className === "ingredient-serving" || i.className === "recipe-serving"){
            createTag(i);
        }
    });
}