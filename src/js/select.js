window.onload = function () {
    for(var i = 1; i <= 9; i++){
        console.log("진입");
        var target = document.getElementById("card_" + i);
        target.style.transform = "rotate(" + ((i - 5) * 5) + "deg)" + "translate( " + ((i - 5) * 80) +"px,0px)";
    }
}

function card_click(idx){
    document.getElementById("box").style.pointerEvents = "none";

    for(var i = 1; i <= 9; i++){
        var target = document.getElementById("card_" + i);
        if(i == idx){
            var deg = (idx - 5) * 8;
            target.classList.add("picked");
            target.style.transform = "rotate(" + deg + "deg) translateY(-50px)";
        }
        else{
            target.classList.add("unpicked");
        }
    }
}