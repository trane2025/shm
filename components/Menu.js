import React from 'react';
import PropTypes from 'prop-types';



class Menu extends React.Component {
    constructor(props) {
        super(props);
    }

    scrollUp () {
        window.scrollTo(pageXOffset, 0);
    }

    render () {
        const {scrollUp} = this;
        return (
            <section className="menu" id="menu">
                <div className="menu__wrapper">
                    <div className="menu__info">
                        <h2 className="menu__title">Ознакомьтесь с&nbsp;нашим меню</h2>
                        <p className="menu__text">
                        Наша команда готовит блюда профессионально сохраняя лучшие традиции.
                        </p>
                        <a className="menu__btn btn" href='/menu' onClick={scrollUp} >Посмотреть меню</a>
                    </div>
                    <div className="menu__back">
                        <div className="menu__list menu__carousel popup-gallery owl-carousel">
                            <a href="img/menu/menu_na_glavnuu.jpg" title="Блюда на мангале">
                                <img src='/img/menu/menu_na_glavnuu.jpg' alt="На мангале"></img>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

Menu.propTypes = {
    change: PropTypes.func
};

export default Menu;