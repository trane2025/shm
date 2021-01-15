import HeaderCenter from '../components/HeaderCenter';
import Banner from '../components/Banner';
import Menu from '../components/Menu';
import Advantage from '../components/Advantage';
import Delivery from '../components/Delivery';
import Gallery from '../components/Gallery';
import Rewievs from '../components/Rewievs';
import Contacts from '../components/Contacts';
import Footer from '../components/Footer';
import ModalMessage from '../components/modal/ModalMessage';
import ModalGallery from '../components/modal/ModalGallery';


import {mainPageIMGGallery, modalMainPageIMGGallery} from '../links-to-img/galleryObjectsIMG';

import React from 'react';
import Head from 'next/head'

import mobileBtn from '../public/js/_mobile-btn';


class Index extends React.Component {
  componentDidMount() {
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

$(document).ready(function(){
    $('.menu__carousel').owlCarousel({
        items: 1,
        loop: true,
        dots: false,
        nav: false
    });

    $('.reviews__carousel').owlCarousel({
        items: 1,
        dots: false,
        nav: true,
        loop: true
    });

    $('.banner__carousel').owlCarousel({
        items: 1,
        dots: true,
        nav: false,
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 700
    });
});

$(document).ready(function() {
    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function(item) {
                return item.el.attr('title') + '<small>Шашлычный мир</small>';
            }
        }
    });
});


const modal = document.querySelector('.modal');
const closeModal = modal.querySelector('.modal__close');
const reviewsBtn = document.querySelector('.reviews__btn');
const modalSubmit = modal.querySelector('.modal__form');
let typeForm;

const modalReviewsTemplate = () => {
    return (
        `<p class="modal__title">Оставьте отзыв о нашем заведении</p>
    <input class="modal__input" type="text" required placeholder="Ваше имя" minlength="3">
    <textarea class="modal__input" name="review" id="review" cols="30" rows="10" placeholder="Ваш отзыв, не более 300 символов"></textarea>
    <button class="modal__btn btn" type="submit">Отправить</button>`
    );
};

modal.addEventListener('click', (evt) => {
    if (evt.target === modal) {
        modal.classList.add('modal--close');
    }
});

closeModal.addEventListener('click', (evt) => {
    modal.classList.add('modal--close');
});

if (reviewsBtn) {
    reviewsBtn.addEventListener('click', (evt) => {
        evt.preventDefault();
        modalSubmit.innerHTML = modalReviewsTemplate();
        modal.classList.remove('modal--close');
        typeForm = 'review';
    });
}

modalSubmit.addEventListener('submit', (evt) => {
    evt.preventDefault();
    switch(typeForm) {
    case 'delivery':
        modalSubmit.innerHTML = '<p class="modal__title">Ваша заявка принята!</p>';
        break;
    case 'review':
        modalSubmit.innerHTML = '<p class="modal__title">Ваш отзыв получен!</p>';
        break;
    case 'to book':
        modalSubmit.innerHTML = '<p class="modal__title">Стол забронирован!</p>';
        break;
    default:
        modalSubmit.innerHTML = '<p class="modal__title">Мы ценим вас!!!</p>';
        break;
    }
});

  }
  

  render () {
    return (
      <>
      <Head>
      <title>Сеть кафе «Шашлычный мир» в Астрахани </title>
      <meta name="description" content="
Заказать шашлык в Астрахани на вынос с доставкой или посидеть в уютном месте вы всегда сможете в любом из нашей сети кафе «Шашлычный мир» в городе Астрахани.
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
       <Banner></Banner>
       <Menu></Menu>
       <Advantage></Advantage>
       <Delivery></Delivery>
       <Gallery {...{
                       header: 'Наши галереи',
                       link: '/main-gallery',
                       button: 'Посмотреть все фото',
                       img: mainPageIMGGallery,
                       modalImg: modalMainPageIMGGallery,
                       modalIndex: 0,
                   }} />
       <Rewievs></Rewievs>
       <Contacts></Contacts>
       <ModalMessage></ModalMessage>
       <ModalGallery
        modalImg = {[modalMainPageIMGGallery]}
       />
       <Footer></Footer>
      </>
    );
  }
}


export default Index;