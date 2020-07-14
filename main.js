const controls = document.getElementById("root");

const back = document.getElementsByClassName("container-slider");

const bannerText = document.getElementsByClassName("content-wrapper");

controls.addEventListener("click", changeBackground);

function changeBackground({ target }) {
  if (target.id === "point1") {
    back[0].className = "container-slider + ' ' + img1";
  }
  if (target.id === "point2") {
    back[0].className = "container-slider + ' ' + img1";
  }
  if (target.id === "point3") {
    back[0].className = "container-slider + ' ' + img1";
  }
}

function textBanner() {
  console.log(bannerText);
}
