import React from 'react';
import Link from 'next/link'

class Delivery extends React.Component {
    constructor (props) {
        super(props);

        this.modalTemplate = this.modalTemplate.bind(this);
    }

    componentDidMount () {
        const modal = document.querySelector('.modal');
        const modalSubmit = modal.querySelector('.modal__form');
        modalSubmit.addEventListener('submit', this.submit);
    }

    componentWillUnmount () {
        const modal = document.querySelector('.modal');
        const modalSubmit = modal.querySelector('.modal__form');
        modalSubmit.removeEventListener('submit', this.submit);
    }

    submit (evt) {
        evt.preventDefault();
        const modal = document.querySelector('.modal');
        const modalSubmit = modal.querySelector('.modal__form');
        modalSubmit.innerHTML = '<p class="modal__title">Ваша заявка принята!</p>';
    }

    modalTemplate () {
        return (
            `<p class="modal__title">Оставьте заявку, мы вам перезвоним и уточним детали заказа</p>
         <input class="modal__input" type="text" required placeholder="Ваше имя" minlength="3">
         <input class="modal__input" type="tel" required placeholder="Ваш номер">
         <button class="modal__btn btn" type="submit">Отправить</button>`
        );
    };

   
    render () {
        return (
            <section className="delivery" id="delivery">
                <div className="delivery__content">
                    <h2 className="delivery__title">
          Доставка шашлыка по&nbsp;городу <span>в&nbsp;течении часа</span>
                    </h2>
                    <p className="delivery__text">
                    НЕ БУДЬ ГОЛОДНЫМ И ЗЛЫМ, ЖМИ !!!
                    </p>
                   <Link href="/menu-out-side"><a className="delivery__btn btn" >Заказать шашлык</a></Link> 
                </div>
            </section>
        );
    }
}

export default Delivery;