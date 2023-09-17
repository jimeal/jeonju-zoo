const commonContent = () => {
  const headerEl = document.querySelector('.header')
  const nav = document.querySelector(".nav__gnb")
  const sub = nav.querySelectorAll('.nav__gnb-sub')
  
  function mouseEnt() {
    headerEl.style.height = '336px';
    headerEl.style.overflow = 'visible';
    headerEl.style.boxShadow = `1px 2px 4px rgba(0,0,0,.05)`;
    //headerEl.style.transition = 'height .5s ease-in ';
    for(let i = 0; i < sub.length; i++) {
      sub[i].style.height = '252px';
      sub[i].style.top = 0;
      sub[i].style.opacity = 1;
      sub[i].style.overflow = 'visible';
    }
  }
  function mouseOut() {
    headerEl.style.height = '98px';
    headerEl.style.overflow = 'hidden';
    headerEl.style.boxShadow = `none`;
    for(let i = 0; i < sub.length; i++) {
      sub[i].style.height = 0;
      sub[i].style.top = '-500px';
      sub[i].style.paddingTop = '126px';
      sub[i].style.opacity = 0;
      sub[i].style.overflow = 'hidden';
    }
  }
  window.addEventListener('DOMContentLoaded', () => {
    console.log(window.innerWidth)
    if(innerWidth >= 1231) {
      nav.addEventListener('mouseenter', mouseEnt)
      nav.addEventListener('focus', mouseEnt)
      nav.addEventListener('focusin', mouseEnt)
      nav.addEventListener('mouseleave', mouseOut)
      nav.addEventListener('focusout', mouseOut)
      nav.addEventListener('blur', mouseOut)
    }else if(innerWidth <= 1231) {
      const toggleBtn = document.querySelector('.btn--toggle');

      toggleBtn.addEventListener('click', (e) => {
        e.target.classList.toggle('active')
      })
    }
  })
  
  //FAMILY SITE
  const selectBtn = document.querySelector('.select-btn');
  const footerRight = document.querySelector('.footer--right');

  selectBtn.addEventListener('click', () => {
    footerRight.classList.toggle('active');
  })
  
};

export default commonContent;
