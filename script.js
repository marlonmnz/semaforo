
function clickRed(){
   var red = document.getElementById("bolaVermelha").style.backgroundColor = "red";

   if (red){
    document.getElementById("bolaAmarela").style.backgroundColor = "black";
    var green = document.getElementById("bolaVerde").style.backgroundColor = "black";
   }
};

function clickYellow(){
    var yellow = document.getElementById("bolaAmarela").style.backgroundColor = "yellow";

    if (yellow){
        document.getElementById("bolaVerde").style.backgroundColor = "black";
        document.getElementById("bolaVermelha").style.backgroundColor = "black";
    }
};

function clickGreen(){
   var green = document.getElementById("bolaVerde").style.backgroundColor = "green";

   if (green){
    document.getElementById("bolaAmarela").style.backgroundColor = "black";
    document.getElementById("bolaVermelha").style.backgroundColor = "black";
   }
};