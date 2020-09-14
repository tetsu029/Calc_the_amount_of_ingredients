function chefgohan() {
    var tbl = document.querySelector("#main > section:nth-child(1) > div > table");
    var trTags = tbl.getElementsByTagName("tr");
    trTags = Array.from(trTags);
    trTags.forEach(function(tr){
        if(tr.getElementsByTagName("td").length == 3){
            createTag(tr.getElementsByTagName("td")[1]);
        }
    });
    var caption = document.querySelector("#main > section:nth-child(1) > div > table > caption");
    createTag(caption, "／", 0);
}