function decode(){
var b64Data     = document.getElementById('input').value ;
var strData1     = atob(b64Data);
var strData     = atob(strData1);
var charData    = strData.split('').map(function(x){return x.charCodeAt(0);});
var binData     = new Uint8Array(charData);
var data        = pako.inflate(binData);
var strData     = String.fromCharCode.apply(null, new Uint16Array(data));
document.getElementById('view').value = strData;
}
