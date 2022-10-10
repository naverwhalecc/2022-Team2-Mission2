window.onload = function () {
  for (var i = 1; i <= 9; i++) {
    var target = document.getElementById("card_" + i);
    target.style.transform =
      "rotate(" +
      (i - 5) * 5 +
      "deg)" +
      "translate( " +
      (i - 5) * 80 +
      "px, 0px)";
  }

  if (matchMedia("(min-width: 320px) and (max-width: 480px)").matches) {
    document.getElementById("card_1").style.display = "none";
    document.getElementById("card_2").style.display = "none";
    // document.getElementById("card_3").style.display = "none";
    document.getElementById("card_8").style.display = "none";
    document.getElementById("card_9").style.display = "none";
  }
};

function card_click(idx) {
  document.getElementById("box").style.pointerEvents = "none";

  // 버튼 활성화
  var btn = document.getElementById("btn");
  btn.style.backgroundImage = "url('../../images/rst_btn.png')";
  btn.style.pointerEvents = "auto";
  btn.style.cursor = "pointer";
  var randomIdx = Math.floor(Math.random() * 4) + 1;
  btn.onclick = function () {
    location.href = "loading.html?idx=" + randomIdx;
  };

  // 카드 picked
  for (var i = 1; i <= 9; i++) {
    var target = document.getElementById("card_" + i);
    if (i == idx) {
      var deg = (idx - 5) * 5;
      var x = (idx - 5) * 80;

      if (matchMedia("(min-width: 320px) and (max-width: 480px)").matches) {
        target.style.scale = 1.1;
        target.style.transform = "translate(" + x + "px, 0px) translateY(0px)";
        target.style.zIndex = 0;
        target.classList.add("picked");

      } else {
        target.classList.add("picked");
        target.style.zIndex = 1;
        target.style.transform =
          "rotate(" +
          deg +
          "deg) " +
          "translate(" +
          x +
          "px, 0px) translateY(-50px)";
      }
    } else {
      target.classList.add("unpicked");
    }
  }
}
