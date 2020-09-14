function cotta() {
    var material = document.getElementsByClassName("r_materials");
    material = Array.from(material);
    material.forEach(function(m){
        var line = m.getElementsByClassName("r_line_01");
        line = Array.from(line);
        line.forEach(function(item){
            var inner = item.getElementsByTagName("dt");
            //if(inner.length === 0){
            //    createTag(item);
            //}
            inner = Array.from(inner);
            inner.forEach(function(i){
                createTag(i, "…");
            });
        });
    });
}