import React from 'react';
import Head from 'next/head';

import HeaderCenter from '../components/HeaderCenter';
import MainGallery from '../components/MainGallery';
import Footer from '../components/Footer';
import ModalGallery from '../components/modal/ModalGallery';

import mobileBtn from '../public/js/_mobile-btn';
import {tatishevaModal} from '../links-to-img/galleryObjectsIMG';

class MainGalleryPage extends React.Component {
  componentDidMount() {
    const header = document.querySelector('.header');

    header.classList.add('additional__menu__black__ground');
}

componentWillUnmount() {
    const header = document.querySelector('.header');

    header.classList.remove('additional__menu__black__ground');
    
    mobileBtn();
}

  render () {
    return (
     <>
       <Head>

       <title>Галерея фотографий интерьера и готовых блюд сети кафе «Шашлычный мир» в Астрахани</title>
       <meta name="description" content="
Галерея фотографий интерьера и готовых блюд сети кафе «Шашлычный мир» в Астрахани. 
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
     <MainGallery/>
     <ModalGallery 
     modalImg = {[tatishevaModal,tatishevaModal,tatishevaModal]}
     />
     <Footer/>
     </>
    );
  }
}

export default MainGalleryPage;