import React from 'react';
import Head from 'next/head';

import HeaderCenter from '../components/HeaderCenter';
import MenuList from '../components/MenuList';
import Footer from '../components/Footer';

import mobileBtn from '../public/js/_mobile-btn';

class MenuListPage extends React.Component {

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
}

componentWillUnmount() {
    const header = document.querySelector('.header');

    header.classList.remove('additional__menu__black__ground');
}


  render () {
    return (
      <>
        <Head>
        <title>Меню сети кафе «Шашлычный мир» в Астрахани</title>
        <meta name="description" content="
Вы можете ознакомиться с богатым ассортиментом блюд в меню сети кафе «Шашлычный мир» в городе Астрахань.
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
      <MenuList></MenuList>
      <Footer></Footer>
      </>
    );
  }
}

export default MenuListPage;