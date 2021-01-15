import React from 'react';
import Head from 'next/head'

import HeaderCenter from '../components/HeaderCenter';
import MainBasket from '../components/MainBasket';
import Footer from '../components/Footer';

import mobileBtn from '../public/js/_mobile-btn';

class BasketMenuPage extends React.Component {
  componentDidMount() {
    const header = document.querySelector('.header');

    header.classList.add('additional__menu__black__ground');

    mobileBtn();
}

componentWillUnmount() {
    const header = document.querySelector('.header');

    header.classList.remove('additional__menu__black__ground');
}

  render () {
    return (
      <>
        <Head>
      
        <title>Форма для заказа Блюд из кафе «Шашлычный мир» в Астрахани </title>
        <meta name="description" content="
                    Выберите блюда из богатого ассортимента кафе «Шашлычный мир»,
                    заполните форму и ожидайте готовность заказа.
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
      <MainBasket></MainBasket>
      <Footer></Footer>
      </>
    );
  }
}

export default BasketMenuPage;