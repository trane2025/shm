import React from 'react';

class Banner extends React.Component {

    render () {
        return (
            <section className="banner">
                <ul className="banner__carousel owl-carousel">
                    <li className="banner__item">
                        <div className="banner__content">
                            <h2 className="banner__title">
                  У Вас скоро <br></br>
                                <span className="red">День рождения?!</span><br></br>
                  Отпразднуйте его <br></br> в сети&nbsp;кафе <br></br>
                                <span className="red">«Шашлычный мир»!</span>
                            </h2>
                           
                                <p className="banner__text">
                                    Получите скидку 15%,<br></br> возможность принести алкоголь с&nbsp;собой
                                </p>
                                <div style={{display: 'flex'}}>
                                    <p className="banner__text">и&nbsp;подарок от&nbsp;заведения.</p>
                                    <img style={{maxWidth:'25px',maxHeight:'25px', margin: '0 0 0 15px'}} src="/img/prize.png"></img>
                                </div>
                          
                        </div>
                    </li>
                    <li className="banner__item banner__item--2">
                        <div className="banner__content">
                            <h2 className="banner__title banner__clock">Доставка, вынос <br></br> в течении <span className="red">1 часа!</span></h2>
                            <p className="banner__text banner__delivey__text__header">Закажите у нас и получите <br></br> подарок на выбор:</p>
                            <ul className="banner__delivey__list">
                                <li className="banner__delivey__item">Бесплатная доставка</li>
                                <li className="banner__delivey__item">Лимонад или Кока-Кола</li>
                                <li className="banner__delivey__item">Соус на выбор</li>
                                <li className="banner__delivey__item">Картофель фри</li>
                            </ul>
                        </div>
                    </li>
                    <li className="banner__item banner__item--3">
                        <div className="banner__content">
                            <h2 className="banner__title">
                                <span className="red">У нас 4 VIP комнаты</span><br></br>
                  с караоке вместимость до&nbsp;16&nbsp;человек
                            </h2>
                        </div>
                    </li>
                    <li className="banner__item banner__item--4">
                        <div className="banner__content">
                            <h2 className="banner__title">
                                <span className="red">Голодны!</span><br></br>
                  Мы вас накормим!<br></br>
                                <span className="red">Хотите пить?</span><br></br>
                  Мы дадим вам напиться!<br></br>
                                <span className="red">Одиноки?</span><br></br>
                  Мы вас напоим!
                            </h2>
                        </div>
                    </li>
                </ul>
            </section>
        );
    }
}

export default Banner;