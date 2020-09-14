function kewpie() {
    createTag(document.querySelector("body > main > article > section:nth-child(5) > div:nth-child(2) > div:nth-child(1) > h3"));
    
    var tbl = document.querySelector("body > main > article > section:nth-child(5) > div:nth-child(2) > div:nth-child(1) > div > table");
    var tdl = tbl.getElementsByTagName("td");
    tdl = Array.from(tdl);
    tdl.forEach(function(td){
        createTag(td);
    });
}