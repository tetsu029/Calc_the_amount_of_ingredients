function orangepage() {
    createTag(document.querySelector("body > div.wrapper > div.contents.clearfix > div.container > div > div:nth-child(1) > div:nth-child(3) > div.rightCol > div > h2"));
    var item = document.getElementsByTagName("li");
    item = Array.from(item);
    item.forEach(function(i){
        if(i.getAttribute('itemprop')){
            createTag(i, "　");
        }
    });
}