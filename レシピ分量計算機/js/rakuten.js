function rakuten() {
    var amount = document.getElementsByClassName("amount");
    amount = Array.from(amount);
    amount.forEach(function(a){
        createTag(a);
    });
    var materialTit = document.getElementsByClassName("materialTit");
    materialTit = Array.from(materialTit);
    materialTit.forEach(function(a){
        createTag(a.getElementsByTagName("span")[0].getElementsByTagName("span")[0]);
    });
}