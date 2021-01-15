import React from 'react';
import Link from 'next/link'
import mobileBtn from '../public/js/_mobile-btn';
import Head from 'next/head';

class HeaderLine extends React.Component {
  componentDidMount() {
    const header = document.querySelector('.header');

    header.classList.add('additional__menu__black__ground');
    window.addEventListener('scroll', this.scroll);

    mobileBtn();
}

componentWillUnmount() {
    const header = document.querySelector('.header');

    header.classList.remove('additional__menu__black__ground');
    window.removeEventListener('scroll', this.scroll);
}

scroll() {
    const addressMenu = document.querySelector('#show--header');
    const header = document.querySelector('.header');
    if (!addressMenu) return;
    if (pageYOffset > 0) {
        addressMenu.classList.add('--not__show');

        header.classList.remove('additional__menu__black__ground');
        document.querySelector('header').classList.add('header--mini');
    } else if (pageYOffset <= 100) {
        addressMenu.classList.remove('--not__show');
        header.classList.add('additional__menu__black__ground');
        document.querySelector('header').classList.remove('header--mini');
    }
}



render() {

    return (
        <>
            <header className="header">
                <div className="header__line__wrapper">
                    <div id="show--header" style={{display: "flex",}}>
                              <div className="header__line__adrress__box">
                                <div className="header__line__adress">
                                  <div className="header__line__img img__center__mode">
                                    <img src="/img/icon.png"></img>
                                  </div>
                                  <div className="header__line--text--box">
                                    <span className="header__line__number"> 
                                      <a className="" href="tel:88512999616">77-30-77</a>
                                      <br></br>
                                      <a className="" href="tel:88512999616">Куликова, 50в</a>
                                      </span>
                                  </div>
                                </div>
                                <div className="header__line__adress">
                                  <div className="header__line__img img__center__mode">
                                    <img src="/img/icon.png"></img>
                                  </div>
                                  <div className="header__line--text--box">
                                    <span className="header__line__number"> 
                                      <a className="" href="tel:88512999616">99-96-96</a>
                                       <br></br>
                                      <a className="" href="tel:88512999616">Татищева, 43а</a>
                                      </span>
                                  </div>
                                </div>   
                                <Link href="/"><a>
                                    <img src="/img/logo.png" alt="Шашлычный мир лого"></img>
                                </a></Link>
                                <div className="header__line__adress">
                                  <div className="header__line__img img__center__mode">
                                    <img src="/img/icon.png"></img>
                                  </div>
                                  <div className="header__line--text--box">
                                    <span className="header__line__number"> 
                                      <a className="" href="tel:88512999616">758-758</a>
                                       <br></br>
                                      <a className="" href="tel:88512999616">Астраханская 51и/1</a>
                                      </span>
                                  </div>
                                </div>   
                                <div className="header__info" style={{width: '60px',}}>
                                    <ul className="social social__center__mode">
                                        <li className="social__item">
                                            <a className="social__link" href="https://www.instagram.com/cafeshm/">
                                                <img src='/img/inst.png' alt="Мы в Инстаграмме"></img>
                                            </a>
                                        </li>
                                    </ul>
                              </div> 
                              </div> 
                    </div>
                    <div className="header__info__wrrapper header__line__mode">
                        <nav className="header__navigation">
                            <ul className="navigation nav__line__mode">
                                <li className="navigation__item">
                                    <Link href="/about-cafe"><a className="navigation__link" data-link='#about' >О кафе</a></Link>
                                </li>
                                <li className="navigation__item">
                                    <Link href="/menu-out-side"><a className="navigation__link" data-link='#menu-out-side'>Меню на вынос доставка</a></Link>
                                </li>
                                <li className="navigation__item">
                                    <Link href="/menu"><a className="navigation__link" data-link='#menu'>Меню</a></Link>
                                </li>
                                <li className="navigation__item">
                                    <Link href='/stoks'><a className="navigation__link" data-link='#stoks'>Акции</a></Link>
                                </li>
                                <li className="navigation__item">
                                    <Link href="/delevery"><a className="navigation__link" data-link='#delivery'>Условия доставки</a></Link>
                                </li>
                                <li className="navigation__item">
                                    <Link href="/main-gallery"><a className="navigation__link" data-link='#gallery'>Галерея</a></Link>
                                </li>
                                <li className="navigation__item">
                                    <Link href="/map"><a className="navigation__link" data-link='#map'>Контакты</a></Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <button className="header__nav-btn" type="button">
                        <svg className="ham hamRotate ham1" viewBox="0 0 100 100" width="50">
                            <path
                                className="line top"
                                d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40" />
                            <path
                                className="line middle"
                                d="m 30,50 h 40" />
                            <path
                                className="line bottom"
                                d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40" />
                        </svg>
                    </button>
                </div>
            </header>
        </>

    );
}
}

export default HeaderLine;