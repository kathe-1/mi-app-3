
Script.js
var ne=Math.floor(Math.random() * (50 - 1) + 1);
function adivinar(){
    var nd=document.getElementById("barra").value;
    if(ne==nd){
        alert("ganaste");
    }else if(ne>nd){
        alert("el número es mayor");
    }else{
        alert("el número es menor");
    }
}