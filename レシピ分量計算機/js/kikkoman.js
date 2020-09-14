function kikkoman() {
    var yield = document.querySelector("#kikkoman-ingredients-form > div.elem-heading-lv2 > div > div > div > div > div.heading-container > div.title-holder > h2 > span");
    createTag(yield);
    var amount = document.getElementById("kikkoman-ingredients-form").getElementsByClassName("amount");
    amount = Array.from(amount);
    amount.forEach(function(a){
        createTag(a);
    });
}