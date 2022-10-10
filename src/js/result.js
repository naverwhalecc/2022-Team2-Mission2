const url = new URL(window.location.href);

var list = [];

list.push({
  idx: 1,
  name_en: "THEEMPEROR",
  name_kr: "황제",
  content:
    "앞으로 당신에게 일어날 일의 키워드는 ‘변화’입니다.\
  과거에 이뤄 놓은 업적들이 상당히 돋보이는군요. 황제 카드는 현재 \
  어느정도 안정되고 견고한 상황이 구축 되어있음을 의미합니다. 믿고\
  의지할 수 있는 무언가가 있는 만큼 웬만한 외부의 압력으로부터 쉽게 흔들리지 않죠.\
  하지만 황제는 본인이 건설한 제국 이외에 새로운 제국을 \
  건설하기엔 힘에 부치기 마련입니다.</br> \
  </br>\
  새로운 도전을 꺼려하며 변화를 두려워하는 인물이라고 할 수 있죠.\
  인생에서 변화는 필연적으로 다가올 것이고 이 사실을 두려워하지 마세요. \
  새로운 도전에서 지금까지 해온 만큼의 성과를 동일하게 만들어야 \
  한다는 압박감으로부터 자유로워지세요. </br>\
  </br> \
  누구나 새로운 환경에서는 서툴기 마련이죠. 변화는 당신을 한 단계\
  더 성장시켜 줄 것이며 예상치 못한 수확을 기대하셔도 좋습니다. ",
});

list.push({
  idx: 2,
  name_en: "THEMAGICIAN",
  name_kr: "마법사",
  content:
    "앞으로 당신에게 일어날 일의 키워드는 ‘시작’입니다.\
  마법사 카드는 당신이 목표를 이루기 위한 필요한 모든 재료가 주위에\
  이미 존재하고 있음을 의미합니다.\
  당신은 앞으로 원하는 목표를 이뤄\
  낼 수 있는 충분한 능력과 기술을 가지고 있죠.</br>\
  </br> \
  한 마디로 마법사 카드는 현재 당신이 인생에서 원하는 결과를 향한 여정을 시작할 수 있는 힘을 갖추었다는 것을 의미합니다.\
  하지만, 이럴 때 일수록 내면을 다스리는 것이 중요합니다.\
   자신 능력을 과신하여 모든 것을 본인이 뛰어나서 갖게 됐다 자만하며 악용한다면 당신은 균형을 잃을 것입니다.\
  자신의 능력과 힘을 절제된 자기 지배력을 거쳐 사용하세요.</br>\
  </br>\
  주어진 능력과 주변의 재료를 기회삼아 자신이 희망했던\
  목표를 이루는 일을 시작해보세요.",
});

list.push({
  idx: 3,
  name_en: "THELOVERS",
  name_kr: "연인",
  content:
    "앞으로 당신에게 일어날 일의 키워드는 ‘사람’ 입니다. \
  당신의 인생에 새로운 손님이 찾아올 것 같군요. 새로운 관계가 시작되는 \
  지점이 멀지 않았습니다. 당신에게 도움을 주거나 호의적으로 다가올 \
  귀인일 가능성이 높습니다. </br>\
  </br>\
  그 사람과의 관계가 어떤 형태로 이루어질지는 정확히는 알 수 없지만\
  그 장소가 직장이라면 당신을 잘 도와주는 동료가 될 수 있고 사업적으로\
  만났다면 만족스러운 계약 건을 들고 찾아올 고객이 될 수 있습니다.\
  궁합이 잘 맞는 친구 혹은 연인이 찾아올 수도 있죠.\
  하지만, 서로에 대해\
  깊게 알지 못하는 상태인 만큼 관계의 구속력이 크지 않기 때문에 언제든지\
  관계가 끊어질 수 있는 단계임을 명심해야 합니다.</br>\
  </br>\
  뱀은 관계를 망칠 수 있는 외부적인 요소를 의미합니다. 뱀의 유혹에\
  흔들리지 않고 그 사람과 관계가 깨지지 않도록 신중히 이어나가세요.",
});

list.push({
  idx: 4,
  name_en: "THEHANGEDMAN",
  name_kr: "매달린 남자",
  content:
    "앞으로 당신에게 일어날 일의 키워드는 ‘인내’입니다. \
  매달린 남자는 인내의 시간을 보내며 한 발 후퇴해 때를 기다린다는\
  의미를 지녔습니다. 무언가를 내면으로 깨닫았지만 이를 행동으로\
  옮기기까지의 적절한 타이밍을 재고 있다고 볼 수 있겠습니다.</br>\
  </br>\
  당신이 무언가를 인정받을 수 있는 시기가 올 때까지 현명하게\
  기다릴 수 있는 지혜가 필요합니다. 이러한 기다림을 통해 내적인\
  성숙과 깨달음을 얻기 마련이죠. </br>\
  </br>\
  자신을 믿고 때를 기다리세요. 타인 혹은 외부의 요소의 의해 섣불리 \
  나서지 마세요. 여러분은 틀리지 않았습니다. ",
});

function getData(idx) {
  return list.find((x) => x.idx == idx);
}

const urlParams = url.searchParams;
var idx = urlParams.get("idx");
var data = getData(idx);
const $card = document.querySelector(".card");

window.onload = function () {
  $card.style.backgroundImage = "url(../../images/" + data.name_en + ".png)";
  document.querySelector(".title-text").innerHTML = data.name_kr;
  document.querySelector(".sub-text").innerHTML = data.content;
  document.getElementById("save_link").href = "../../images/" + data.name_en + ".png";
};

let bounds;

function rotateToMouse(e) {
  const mouseX = e.clientX;
  const mouseY = e.clientY;
  const leftX = mouseX - bounds.x;
  const topY = mouseY - bounds.y;
  const center = {
    x: leftX - bounds.width / 2,
    y: topY - bounds.height / 2,
  };

  const distance = Math.sqrt(center.x ** 2 + center.y ** 2);

  $card.style.transform = `
    scale3d(1.07, 1.07, 1.07)
    rotate3d(
      ${center.y / 100},
      ${-center.x / 100},
      0,
      ${Math.log(distance) * 2}deg
    )
  `;

  $card.querySelector(".glow").style.backgroundImage = `
    radial-gradient(
      circle at
      ${center.x * 2 + bounds.width / 2}px
      ${center.y * 2 + bounds.height / 2}px,
      #ffffff55,
      #0000000f
    )
  `;
}

$card.addEventListener("mouseenter", () => {
  bounds = $card.getBoundingClientRect();
  document.addEventListener("mousemove", rotateToMouse);
});

$card.addEventListener("mouseleave", () => {
  document.removeEventListener("mousemove", rotateToMouse);
  $card.style.transform = "";
});
