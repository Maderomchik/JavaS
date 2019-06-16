function tlo8() {
    document.getElementById("firstP").style.backgroundColor = "red";
    document.getElementById("secondP").style.backgroundColor = "yellow";

        document.getElementById("firstP").style.backgroundColor = "wite";
        document.getElementById("secondP").style.backgroundColor = "yellow";
}   

function tlo() {
   console.log(document.getElementsByClassName("paragraf"));
   for(
       let i = 0; 
       i < document.getElementsByClassName("paragraf").length; 
       i++
       ) {     console.log([i])   
        document.getElementsByClassName("paragraf")[i].style.backgroundColor = "blue";
        document.getElementsByClassName("paragraf")[i].style.backgroundColor = "red";
         
}
}
document.getElementById("btn-main").addEventListener("click", tlo);

function parAddText() {
    let paragraf = document.getElementsByClassName("par").length;
    for (let i = 0; i < paragraf; i++) {
        document.getElementsByClassName("par")[i].innerHTML = 
        "jestem" + [i + 1] + "paragrafem";
    }
   }
document.getElementById("btn-main").addEventListener("click", parAddText);


