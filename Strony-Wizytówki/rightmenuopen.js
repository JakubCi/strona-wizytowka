let Opened=false;
let CzyAnimacjaGra = false;
const przyciskWlaczenia=document.querySelector("div[id='bars']");
przyciskWlaczenia.addEventListener('click',AnimationController);
function AnimationController(){
    const AnimacjaKontenera=document.querySelector("div[class='right-menu']");
    if(Opened == false && CzyAnimacjaGra == false){
        Opened = true;
        AnimacjaKontenera.style.animation='opening-animation 0.1s linear';
        AnimacjaKontenera.style.animationFillMode = "forwards";
        przyciskWlaczenia.value="Zwin";
    }else if(Opened == true && CzyAnimacjaGra == false){
        Opened = false;
        AnimacjaKontenera.style.animation='closing-animation 0.1s linear';
        AnimacjaKontenera.style.animationFillMode = "forwards";
    }

}
