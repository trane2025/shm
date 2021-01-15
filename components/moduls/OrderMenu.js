import React from 'react';
import BasketMenu from './BasketMenu';
import PropTypes from 'prop-types';

const way = {
    delivery: 'delivery',
    youSelf: 'youself',
};

class OrderMenu extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            delivery: way.youSelf,
        };
        this.doOrder = this.doOrder.bind(this);
        this.chooseDeliveryWay = this.chooseDeliveryWay.bind(this);
    }

    componentDidMount() {
        const basketMenu = document.querySelector('.basket__page');
        const closeBtn = document.querySelector('.close__basket__window');
        const pushOrderBtn = document.querySelector('.basket__btn_push_order');

        pushOrderBtn.classList.add('basket--non--active');
        closeBtn.classList.add('basket--non--active');
        basketMenu.classList.remove('basket--non--active');
        basketMenu.classList.add('main-basket__window');
        basketMenu.classList.remove('basket__page');
    }

    componentWillUnmount() {
        const basketMenu = document.querySelector('.main-basket__window');
        const closeBtn = document.querySelector('.close__basket__window');
        const pushOrderBtn = document.querySelector('.basket__btn_push_order');
     
        closeBtn.classList.remove('basket--non--active');
        basketMenu.classList.add('basket--non--active');
        basketMenu.classList.add('basket__page');
        pushOrderBtn.classList.remove('basket--non--active');
        basketMenu.classList.remove('main-basket__window');
    }

    
    doOrder () {
        const name = document.querySelector('#name');
        const number = document.querySelector('#number');
        const adress = document.querySelector('#adress');

       
        let validation = true;
        /* Name validation */
        const nameExp = /[^ a-zа-яё]/ui;
        if (name.classList.contains('error__border')) name.classList.remove('error__border');

        if (name.value.length === '' || name.value.length < 2) {
            name.classList.add('error__border');
            validation = false;
        }

        if (name.value.match(nameExp)) {
            name.classList.add('error__border');
            validation = false;
        }
        console.log(name.classList.contains('error__border'));
      
        /*Number validation*/
        const numberExp = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;
        if (number.classList.contains('error__border')) number.classList.remove('error__border');

        if (number.value[0] !== '+' || number.value.length < 12) {
            number.classList.add('error__border');
            validation = false;
        }

        if (!number.value.match(numberExp)) {
            number.classList.add('error__border');
            validation = false;
        }
        /* Adress */
        if (adress.classList.contains('error__border')) adress.classList.remove('error__border');
        if (!adress.value || adress.value.length < 5) {
            adress.classList.add('error__border');
            validation = false;
        }

        const myProducts = JSON.parse(sessionStorage.getItem('myProducts'));
        if (myProducts.length < 1) {
            validation = false;
        }

        if(!validation) return;
        const {orderClick} = this.props;
        orderClick();
      
    }

    chooseDeliveryWay (e) {
        const {delivery} = this.state;
        const target = e.target.getAttribute('id');
        if (target) {
            switch (target) {
            case 'delivery-btn':
                this.setState({delivery: way.delivery});
                break;
            case 'your-self-btn':
                this.setState({delivery: way.youSelf});
                break;
            default:
                break;
            }
        }
    }

    render () {
        const {delivery} = this.state;
        return (
            <section className="main-basket__section">
                <div className="main-basket__container">
                    <h1 className="main-basket__header">Оформление заказа</h1>

                    <div className="main-basket__info__item">
                        <span>Ваше имя</span><br></br>
                        <input id='name' className="main-basket__input__text" type='text' maxLength='20'></input>
                    </div>

                    <div className="main-basket__info__item">
                        <span>Телефон</span><br></br>
                        <input id="number" className="main-basket__input__text" type='text'placeholder="+7____-____-___-___" maxLength='12'></input>
                    </div>

                    <div onClick={this.chooseDeliveryWay} className="main-basket__info__item">
                        <span>Как вы хотите получить заказ ?</span><br></br>
                        <div className="radio">
                            <input className="radio__input" name='delivery' type='radio' id="delivery-btn"></input>
                            <label className="radio__label" htmlFor="delivery-btn">Доставка</label>
                        </div>
                        <div className="radio">
                            <input className="radio__input" name='delivery' type='radio' id="your-self-btn" defaultChecked></input>
                            <label className="radio__label" htmlFor="your-self-btn">Самовывоз</label>
                        </div>
                    </div>

                    <div className="main-basket__info__item select__cafe">
                        <span>С какого кафе вы  хотите сделать заказ ?</span><br></br>
                        <select className="main-basket__input__text">
                            <option>Куликова, 50в</option>
                            <option>Татищева, 43а</option>
                            <option>с.Осыпной Бугор,ул.Астраханская 51И</option>
                        </select>
                    </div>

                    <div className="main-basket__info__item adress__item">
                        <span>Адрес доставки:</span><br></br>
                        <input id='adress' className="main-basket__input__text" type='text' placeholder="Например: 3-я Зеленгинская, 40(в), 1,5,4б" maxLength="100"></input>
                    </div>
                    <div className="main-basket__info__item">
                        <span>Какой способ оплаты ?</span><br></br>
                        <div className="radio">
                            <input className="radio__input" name='pay' type='radio' id="cash"></input>
                            <label className="radio__label" htmlFor="cash">Наличные</label>
                        </div>
                        { delivery === way.delivery ? null : <div className="radio">
                            <input className="radio__input" name='pay' type='radio' id="card" defaultChecked></input>
                            <label className="radio__label" htmlFor="card">Карта</label>
                        </div> }
                    </div>
                    <div className="main-basket__info__item comment__item">
                        <span>Ваш комментарий:</span><br></br>
                        <textarea className="main-basket__text__area" placeholder="Напишите дополнительную и уточняющую информацию, если считаете нужным это указать (необязательно)"></textarea>
                    </div>
                    <button onClick={this.doOrder} className="btn main-basket__btn">Оформить заказ</button>
                </div>
                <BasketMenu />
            </section>
        );
    }
}

OrderMenu.propTypes = {
    orderClick: PropTypes.func,
};

export default OrderMenu;