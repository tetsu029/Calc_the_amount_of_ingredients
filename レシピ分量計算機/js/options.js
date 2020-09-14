window.onload = function() {
    if(!$("#den").val()){
        if(!localStorage["den"]){
          localStorage["den"] = 1;
        }
        $("#den").val(localStorage["den"]);
    }
    if(!$("#num").val()){
        if(!localStorage["num"]){
          localStorage["num"] = 1;
        }
        $("#num").val(localStorage["num"]);
    }
    if(!localStorage["note"]){
        localStorage["note"] = "0";
    }
    $( 'input[name="note"]:radio' ).val([localStorage["note"]]);
}

$(function(){
    $("#den").change(function() {
        localStorage["den"] = $("#den").val();
        callFanc("changeWebPage");
    });
    $("#num").change(function () {
        localStorage["num"] = $("#num").val();
        callFanc("changeWebPage");
    });
    $( 'input[name="note"]:radio' ).change( function() {
        localStorage["note"] = $(this).val();
        callFanc("changeWebPage");
    });
});
function callFanc(fncname) { 
    //chrome.tabs.reload();
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, 
            fncname,
            function (response) {
            });
    }); 
} 
