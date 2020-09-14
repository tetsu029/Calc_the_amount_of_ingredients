function ajinomoto() {
    var ancPoint = document.getElementById("ancPoint");
    var inTitle01 = ancPoint.getElementsByClassName("inTitle01");
    inTitle01 = Array.from(inTitle01);
    inTitle01.forEach(function(i){
        createTag(i);
    });
    var dd = ancPoint.getElementsByTagName("dd");
    dd = Array.from(dd);
    dd.forEach(function(d){
        createTag(d);
    });
    
}


