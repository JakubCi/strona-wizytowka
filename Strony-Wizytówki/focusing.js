let omnie=document.querySelector("a[id='omnie']")
omnie.addEventListener('click',funkcja1)
let kontakt=document.querySelector("a[id='kontakt']")
kontakt.addEventListener('click',funkcja2)
let omniediv=document.querySelector("div[name='omn']")
let kontaktdiv=document.querySelector("div[name='kon']")
function funkcja1(){
    omniediv.focus({preventScroll:false})    
}
function funkcja2(){
    kontaktdiv.focus({preventScroll:false})
}