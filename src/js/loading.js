const url = new URL(window.location.href);
var cnt = 10;

window.onload = function () {
  setTimeout(goResult, 4000);
};

function goResult() {
  const urlParams = url.searchParams;
  var idx = urlParams.get('idx');
  location.href = "result.html?idx=" + idx;
}
