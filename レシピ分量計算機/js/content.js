var mag;
var note;

//window.onload = async function() {
//    changeWebPage();
//}
window.addEventListener('load', async function(){
    changeWebPage();
})
window.addEventListener('DOMContentLoaded', async function(){
    changeWebPage();
})

chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
    if (request == "changeWebPage") {
        changeWebPage();
    }
    return true;
}); 


async function changeWebPage(){
    mag = await getMagnification();
    note = await getNotation();
    switch (true) {
        case /.*cookpad\.com\/recipe\/.*/.test(location.href):
            cookpad();
            break;

        case /.*recipe\.cotta\.jp\/recipe\.php\?recipeid=.*/.test(location.href):
            cotta();
            break;
        
        case /.*sirogohan\.com\/recipe\/.*/.test(location.href):
            sirogohan();
            break;
        
        case /.*daidokolog\.pal-system\.co\.jp\/recipe\/.*/.test(location.href):
            daidokolog();
            break;
        
        case /.*park\.ajinomoto\.co\.jp\/recipe\/.*/.test(location.href):
            ajinomoto();
            break;
        
        case /.*kurashiru\.com\/recipes\/.*/.test(location.href):
            kurashiru();
            break;
        
        case /.*kyounoryouri\.jp\/recipe\/.*/.test(location.href):
            kyounoryouri();
            break;
        
        case /.*kewpie\.co\.jp\/recipes\/recipe\/.*/.test(location.href):
            kewpie();
            break;
        
        case /.*chefgohan\.gnavi\.co\.jp\/detail\/.*/.test(location.href):
            chefgohan();
            break;
        
        case /.*kikkoman\.co\.jp\/homecook\/search\/recipe\/.*/.test(location.href):
            kikkoman();
            break;
        
        case /.*orangepage\.net\/recipes\/detail_.*/.test(location.href):
            orangepage();
            break;
        
        case /.*lettuceclub\.net\/recipe\/dish\/.*/.test(location.href):
            lettuceclub();
            break;
        
        case /.*oceans-nadia\.com\/user\/.*?\/recipe\/.*/.test(location.href):
            nadia();
            break;
        
        case /.*recipe\.rakuten\.co\.jp\/recipe\/.*/.test(location.href):
            rakuten();
            break;
        
        case /.*delishkitchen\.tv\/recipes\/.*/.test(location.href):
            delishkitchen();
            break;
        
        
    }
}

async function getNotation(){
    var n = await getLocalStorageValue("note");
    console.log(n);
    if(!n){
        n = 0;
    }
    return Number(n);
}

async function getMagnification(){
    var den, num;
    den = await getLocalStorageValue("den");
    num = await getLocalStorageValue("num");
    if(!den){
        den = 1;
    }
    if(!num){
        num = 1;
    }
    console.log(den,num);
    var m = num / den;
    if(!m){
        m = 1;
    }
    return m;
}

function getLocalStorageValue(k) {
  return new Promise(function (resolve) {
    chrome.runtime.sendMessage({method: "getLocalStorage", key: k}, function(response) {
      resolve(response.data);
      return;
    });
  });
};