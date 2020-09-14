function nadia() {
    createTag(document.querySelector("#pagetop > article > div.mainWrap.mainWrap--recipe > section.usrColWrap > div.usrCommonCol.recipe > div.recipeBlock.thmbList.recipeMainArea > div.detail > div.ingredientArea > p.ingredient > span"));
    
    var item = document.getElementsByClassName("group_amount");
    item = Array.from(item);
    item.forEach(function(i){
        createTag(i);
    });
}