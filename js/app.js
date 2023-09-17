import "../scss/index.scss";
import commonContent from "./common";
import mainWrap from "./main";
import swiperWrap from "./swiper";

document.addEventListener("DOMContentLoaded", async () => {
  setTimeout(scrollTo, 0, 0, 1)
  mainWrap()
  commonContent()
  swiperWrap()
});
