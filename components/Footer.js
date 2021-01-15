import React from 'react';
import Link from 'next/link'

class Footer extends React.Component {
    render () {
        return (
            <footer className="footer">
                <div className="footer__wrapper">
                    <img src="/img/logo.png" alt=""></img>
                    <ul className="navigation--footer">
                        <li className="navigation__item">
                        <Link href='/about-cafe'><a className="navigation__link" data-link='#about' >О кафе</a></Link>        
                        </li>
                        <li className="navigation__item">
                        <Link href="/menu-out-side"><a  className="navigation__link" data-link='#menu-out-side'>Меню на вынос, доставка</a></Link>          
                        </li>
                        <li className="navigation__item">
                        <Link href="/menu"><a  className="navigation__link" data-link='#menu'>Меню</a></Link>          
                        </li>
                        <li className="navigation__item">
                        <Link href='/stoks'><a  className="navigation__link" data-link='#stoks'>Акции</a></Link>          
                        </li>
                        <li className="navigation__item">
                        <Link href="/delevery"><a  className="navigation__link" data-link='#delivery'>Условия доставки</a></Link>          
                        </li>
                        <li className="navigation__item">
                        <Link href="/main-gallery"><a className="navigation__link" data-link='#gallery'>Галерея</a></Link>         
                        </li>
                        <li className="navigation__item">
                          <Link href="/map"><a className="navigation__link"  data-link='#map'>Контакты</a></Link>  
                        </li>
                    </ul>
                    <div className="footer__info">
                        <ul className="social">
                            <li className="social__item">
                                <a className="social__link" href="https://www.instagram.com/cafeshm/">
                                    <img src='/img/inst.png' alt="Мы в Инстаграмме"></img>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer__copyright">
                        <p>© 2020 Все права защищены</p>
                            <a  href="https://bzcekh.ru/" alt="Маркетинговое агентство «Бизнес Цех»" title="Заказать интернет сайт, интернет магазин в Астрахани" target="_blank">
                            <img src="https://monarh30.ru/wp-content/themes/monarh/assets/img/logo-footer.svg" alt="Маркетинговое агентство «Бизнес Цех»" title="Заказать интернет сайт, интернет магазин в Астрахани" width="117" height="50"></img>
                            </a>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;