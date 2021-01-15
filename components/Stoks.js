import React from 'react';

class Stoks extends React.Component {
  
    componentDidMount() {
        const navItemsArr = Array.from(document.querySelectorAll('.navigation__link'));
        this.activationLink(navItemsArr);
        
    }

    componentWillUnmount() {
        const navItemsArr = Array.from(document.querySelectorAll('.navigation__link'));
        this.disableLink(navItemsArr);
    }

    activationLink(arr) {
        arr.forEach((navItem) => {
            if (navItem.getAttribute('data-link') === '#stoks') {
                navItem.classList.add('navigation__link--active');
            }
        });
    }

    disableLink (arr) {
        arr.forEach((navItem) => {
            if (navItem.getAttribute('data-link') === '#stoks') {
                navItem.classList.remove('navigation__link--active');
            }
        });
    }

    render () {
       
        return (
            <section>
                <div className="stoks__container">
                    <h1>Наши акции</h1>
                    <ul className="stoks__list">
                        <li className="stoks__item alc-botle">
                            <div className="item--info">
                                <h2>Крепкий алкоголь<br></br> с собой</h2>
                                <p className="item--text dark--text">В нашем кафе можно <br></br>
                                    провести новогодние <br></br>
                                    и другие праздничные <br></br>
                                    банкеты. С нас Вкуснейшие <br></br>
                                    блюда из мяса, супы <br></br>
                                    и гарниры, а крепкие <br></br>
                                    напитки с вас😉
                                    <br></br>
                                </p>
                            </div>
                        </li>
                        <li className="stoks__item mini-menu">
                            <div className="item--info">
                                <h2>Пн-Чт скидка 10%<br></br> на основное меню</h2>
                                <p className="item--text light--text">Посетите наше кафе после <br></br>
                                    работы или в обеденное <br></br>
                                    время. С понедельника <br></br>
                                    по четверг у нас действует <br></br>
                                    скидка 10% <br></br>
                                    на основные блюда <br></br>
                                </p>
                            </div>
                        </li>
                        <li className="stoks__item men-kebab">
                            <div className="item--info">
                                <h2>Доставка от 1500₽ <br></br> бесплатно</h2>
                                 <p className="item--text light--text">У нас работает доставка <br></br>
                                    курьером. Накроем вам стол <br></br>
                                    по любому поводу <br></br>
                                    при заказе от 1500₽ <br></br>
                                    доставка бесплатно <br></br>
                                </p>
                            </div>
                        </li>
                        <li className="stoks__item women-cake">
                            <div className="item--info">
                                <h2>С Пн-Чт и Вс скидка<br></br> 15% на день рождение</h2>
                                <p className="item--text dark--text">Посетите наше кафе в свой <br></br>
                                    день рождения и мы <br></br>
                                    сделаем вам скидку 15% 😉</p>
                                <p className="item--text dark--text">С пн-чт и вс мы ждём Вас для <br></br>
                                    проведения вашего <br></br>
                                    праздника.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        ) ;
    }
}

export default Stoks;