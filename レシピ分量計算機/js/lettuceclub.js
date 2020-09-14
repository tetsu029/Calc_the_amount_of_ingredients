function lettuceclub() {
    createTag(document.querySelector("#ingredients > h2"));
    
    var liTags = document.getElementById("ingredients").getElementsByTagName("li");
    liTags = Array.from(liTags);
    liTags.forEach(function(li){
        createTag(li,"…");
    });
}