function getSimpleChidText(div){
    var result = "";
    for(elem of div.childNodes){
        if(elem.nodeName == "#text"){
            result += elem.nodeValue;
        }
    }
    return result;
}

function createTag(dom, splitstr="", splitnum=-1){
    if(splitstr != ""){
        var txt = getSimpleChidText(dom);
        if(splitnum === -1){
            splitnum = txt.split(splitstr).length - 1;
        }
        var v = txt.split(splitstr)[splitnum];
    }
    else{
        var v = getSimpleChidText(dom);
    }
    if(v === ""){
        return;
    }
    v = v.replace(/[０-９＋／]/g, function(s) {
        return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
    });
    if(v.match(/[-]?[0-9]+[,.]?[\+]?[0-9]*([\/][0-9]+[,.]?[0-9]*)*/g)==null){
        return;
    }
    var chgtxt = v.replace(/[-]?[0-9]+[,.]?[\+]?[0-9]*([\/][0-9]+[,.]?[0-9]*)*/g, function (s) {
        if(s.match(/(\d+)\+(\d+)\/(\d+)/g)!=null){
            //分数の足し算パターン
            var buns = Number(s.match(/\d+/g)[0]) * Number(s.match(/\d+/g)[2]) + Number(s.match(/\d+/g)[1]);
            buns *= mag;
            var bunb = Number(s.match(/\d+/g)[2]);
            if(Number.isInteger(buns / bunb)){
                return buns / bunb;
            }
            else{
                var g = gcd(buns, bunb);
                buns /= g;
                bunb /= g;
                return changeNotation(null, buns, bunb)
            }
        }
        else if(s.match(/(\d+)\/(\d+)/g)!=null){
            //分数のパターン
            var buns = Number(s.match(/\d+/g)[0]) * mag;
            var bunb = Number(s.match(/\d+/g)[1]);
            if(Number.isInteger(buns / bunb)){
                return buns / bunb;
            }
            else{
                var g = gcd(buns, bunb);
                buns /= g;
                bunb /= g;
                return changeNotation(null, buns, bunb)
            }
        }
        else{
            return changeNotation(s * mag, null, null);
        }
    });
    if(dom.getElementsByClassName("recipecalc").length){
        dom.getElementsByClassName("recipecalc")[0].innerHTML = " → " + chgtxt;
    }
    else{
        var addchild = document.createElement("b");
        addchild.className = "recipecalc";
        addchild.innerHTML = " → " + chgtxt;
        dom.appendChild(addchild);
    }
}

//表記変更
function changeNotation(proto, buns, bunb){
    switch (note) {
        case 0: //そのまま
            if(proto){
                return proto;
                break;
            }
        case 1: //分数
            if(proto && !Number.isInteger(proto)){
                var g = gcd(proto, 1);
                buns = proto / g;
                bunb = 1 / g;
            }
            else if(proto && Number.isInteger(proto)){
                return proto;
            }
            if(Math.floor(buns / bunb) > 0){
                return Math.floor(buns / bunb) + "+" + (buns % bunb) + "/" + bunb;
            }
            else{
                return buns + "/" + bunb;
            }
            break;
        case 2: //小数
            if(proto){
                return proto;
            }
            else{
                return buns / bunb;
            }
            break;
        case 3: //強半弱
            var intb, floorb;
            if(proto){
                intb = Math.floor(proto);
                floorb = decimalPart(proto);
            }
            else{
                intb = Math.floor(buns / bunb);
                floorb = (buns % bunb) / bunb;
            }
            if(floorb == 0){
                return intb;
            }
            else if(floorb <= (1/3)){
                return intb + "強";
            }
            else if(floorb <= (2/3)){
                return intb + "半";
            }
            else{
                return (intb+1) + "弱";
            }
            break;
        
    }
}

//ユークリッドの互除法
function gcd(m, n){
    if (m < n)  return gcd(n, m);
    var r = m % n;
    if (r == 0) return n;
    return gcd(n, r);
}

//小数部のみ切り出し
function decimalPart(num){
  numStr = num+'';
  dotIdx  = numStr.indexOf("."),
  result  = "0." + (dotIdx > -1 ? numStr.substring(dotIdx + 1) : "0");
  return  parseFloat( ((num>0)?'+':'-') + result );
}
