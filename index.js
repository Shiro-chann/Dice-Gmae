var Rn1= Math.floor(Math.random()*6)+1;
var src1="images/dice"+Rn1+".png";
var Rn2= Math.floor(Math.random()*6)+1;
var src2="images/dice"+Rn2+".png";
document.querySelectorAll("img")[0].setAttribute("src",src1);
document.querySelectorAll("img")[1].setAttribute("src",src2);

if(Rn1>Rn2){
    document.querySelector("h1").innerHTML="🚩 Player 1 Wins 😊"
}else if(Rn2>Rn1){
    document.querySelector("h1").innerHTML="🚩 Player 2 Wins 😊"
}else{
    document.querySelector("h1").innerHTML="Draw!! 🫡"
}