export default function mobileBtn () {
  
const menu = document.querySelector('.header__navigation');
const menuBtn = document.querySelector('.header__nav-btn');
const btnSvg = document.querySelector('.ham1');
const mobileMap = document.querySelector('.map');
const mobileLinkMenu = document.querySelector('.header__navigation');

menuBtn.addEventListener('click', function () {
    menu.classList.toggle('header__navigation--show');
    menuBtn.classList.toggle('header__nav-btn--active');
    btnSvg.classList.toggle('active');
    if (mobileMap) mobileMap.classList.toggle('z_index--non--active');

            mobileLinkMenu.addEventListener('click', () => {
               menu.classList.remove('header__navigation--show');
               menuBtn.classList.remove('header__nav-btn--active');
               btnSvg.classList.remove('active');
            });
});
}