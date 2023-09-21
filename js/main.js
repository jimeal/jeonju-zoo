import { gsap, ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
const mainWrap = () => {
  const shortcutMenuUl = document.querySelector(".shortcut-menu--ul");
  const shortcutData = [
    {name: '관람안내도', img: 'shcut-01'},
    {name: '시설안내', img: 'shcut-02'},
    {name: '오시는길', img: 'shcut-03'},
    {name: '주차장안내', img: 'shcut-04'},
    {name: 'VR사전답사', img: 'shcut-05'},
    {name: '동물해설신청', img: 'shcut-06'},
    {name: '원내에티켓', img: 'shcut-07'}
  ]

  const shortcutTemplate = shortcutData.map((item) => {
    return `
      <li>
        <a href="javascript:;">
          <img src="./images/${item.img}.svg" alt="${item.name}"/>
          <span class="shct-text">${item.name}</span>
        </a>
      </li>
    `
  }).join('');

  shortcutMenuUl.innerHTML = shortcutTemplate;

  window.addEventListener('DOMContentLoaded', () => {
    const itemAnimal = document.querySelectorAll('.item-animal > a');
    const bgColor = ['#BEE7CD', '#B9E2FA', '#D0C8E8', '#FACAD4']
  for(let i = 0; i < itemAnimal.length; i++) {
    
    itemAnimal[i].insertAdjacentHTML('afterbegin', `
    <img src="../../images/icon_animal${i}.svg" alt="">
  `)
  itemAnimal[i].style.backgroundColor = bgColor[i]
  }
  const animalImg = document.querySelectorAll ('.item-animal > a > img')
  console.log(animalImg)
  })

  const countAll = document.querySelectorAll('.number-target');

  countAll.forEach((el) => {
    
    let count = el,
        zero = {value: 0},
        num = count.dataset.number,
        split = (num + '').split('.'),
        decimals = split.length > 1 ? split[1].length : 0;
    
        gsap.to(zero, {
            value: num,
            duration: 2,
            scrollTrigger: el,
            onUpdate: function() {
              count.textContent = zero.value.toFixed(decimals);
            }
        });  
  })

}

export default mainWrap;