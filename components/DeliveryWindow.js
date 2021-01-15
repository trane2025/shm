import React from 'react';
import Delivery from './Delivery';

class DeliveryWindow extends React.Component {

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
            if (navItem.getAttribute('data-link') === '#delivery') {
                navItem.classList.add('navigation__link--active');
            }
        });
    }

    disableLink (arr) {
        arr.forEach((navItem) => {
            if (navItem.getAttribute('data-link') === '#delivery') {
                navItem.classList.remove('navigation__link--active');
            }
        });
    }

    render () {
        return (
            <section className="additional__delivery">
                <div className="order__conditions">
                    <div className="order__conditions--container">
                       <div className="conditions__header__container">
                            <div className="conditions--red--line"></div>
                            <h1 className="conditions--header">
                                Условия заказа <br></br> 
                                и доставки блюд
                            </h1>
                       </div>
                       
                        <ul className="conditions__list">
                            <li className="conditions--item"> <div className="red__round"> </div> <span>Заказ от 1500₽ по городу бесплатно.</span></li>
                            <li className="conditions--item"> <div className="red__round"> </div> <span>Доставка работает с 11:00 до 24:00.</span></li>
                            <li className="conditions--item"> <div className="red__round"> </div> <span>При заказе с сайта, шампур картошки <br></br> в подарок.</span></li>
                        </ul>

                    </div>
                </div>
            </section>
        );
    }
}

export default DeliveryWindow;