function random_number(){
    return Math.floor(Math.random()*6)+1;
}
function result(randomNumber1,randomNumber2){
    if(randomNumber1>randomNumber2){
        return "1";
    }else if(randomNumber1<randomNumber2){
        return "2";
    }else{
        return 0;
    }
}
var randomNumber1 = random_number();
randomNumber1 = randomNumber1+"";
document.querySelector(".img1").setAttribute("src","images/dice"+randomNumber1+".png");
var randomNumber2 = random_number();
randomNumber2 = randomNumber2+"";
document.querySelector(".img2").setAttribute("src","images/dice"+randomNumber2+".png");
var resul = result(randomNumber1,randomNumber2);

if(resul==0){
    document.querySelector("h1").textContent = "Draw";
}else{
    document.querySelector("h1").textContent = "Player"+resul;
}