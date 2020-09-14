function sirogohan(mag) {
    var material_ttl = document.getElementsByClassName("material-ttl");
    material_ttl = Array.from(material_ttl);
    material_ttl.forEach(function(m){
        createTag(m.getElementsByTagName("span")[0])
    });
    var material = document.getElementsByClassName("material-halfbox");
    material = Array.from(material);
    material.forEach(function(m){
        var line = m.getElementsByTagName("li");
        line = Array.from(line);
        line.forEach(function(l){
            createTag(l, "…")
        });
    });
}