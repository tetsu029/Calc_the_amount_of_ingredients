function kyounoryouri() {
    var floatright = document.getElementById("ingredients_list").getElementsByClassName("floatright");
    floatright = Array.from(floatright);
    floatright.forEach(function(f){
        createTag(f);
    });
    createTag(document.querySelector("#main-col > div.recipe--detail-recipe > div.detail-sub > p"));
}