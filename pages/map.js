import React from 'react';
import Head from 'next/head'

import HeaderCenter from '../components/HeaderCenter';
import Contacts from '../components/Contacts';
import Footer from '../components/Footer';

import mobileBtn from '../public/js/_mobile-btn';

class MapPage extends React.Component {

componentDidMount() {
    const header = document.querySelector('.header');

    header.classList.add('additional__menu__black__ground');

    mobileBtn ();
    
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

    const navItemsArr = Array.from(document.querySelectorAll('.navigation__link'));

    this.activationLink(navItemsArr);
}

componentWillUnmount() {
    const header = document.querySelector('.header');

    header.classList.remove('additional__menu__black__ground');

    const navItemsArr = Array.from(document.querySelectorAll('.navigation__link'));
    this.disableLink(navItemsArr);
}

activationLink(arr) {
  arr.forEach((navItem) => {
      if (navItem.getAttribute('data-link') === '#map') {
          navItem.classList.add('navigation__link--active');
      }
  });
}

disableLink (arr) {
  arr.forEach((navItem) => {
      if (navItem.getAttribute('data-link') === '#map') {
          navItem.classList.remove('navigation__link--active');
      }
  });
}

  render () {
    return (
      <>
        <Head>

        <title>Контакты сети кафе «Шашлычный мир» на карте в Астрахани</title>
        <meta name="description" content="
Узнать контакты сети кафе «Шашлычный мир» в Астрахани. Посмотреть на карте. Схема проезда
 "/>


       <link rel="stylesheet" href="css/owl.carousel.min.css"></link>
       <link rel="stylesheet" href="css/owl.theme.default.min.css"></link>
       <link rel="stylesheet" href="css/magnific-popup.css"></link>
       <link rel="stylesheet" href="css/leaflet.css"></link>
       <link rel="preload" href="img/banner2.jpg" as="image"></link>
   
      <script src="/js/jquery-3.5.1.min.js"/>
      <script src="/js/jquery.magnific-popup.min.js"/>
      <script src="/js/leaflet-providers.js"/>
      <script src="/js/leaflet.js"/>
      <script src="/js/owl.carousel.min.js"/>
      <script src="/js/swiped-events.min.js"/>

      </Head>
      <HeaderCenter></HeaderCenter>
      <Contacts></Contacts>
      <Footer></Footer>
      </>
    );
  }
}

export default MapPage;