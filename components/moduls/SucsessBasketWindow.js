import React from 'react';

class SucsessWindow extends React.Component {
    componentDidMount() {
        const header = document.querySelector('.header');
        const body = document.querySelector('.body');

        header.classList.add('additional__menu__black__ground');
        body.classList.add('additional__menu__container');
    }

    componentWillUnmount() {
        const header = document.querySelector('.header');
        const body = document.querySelector('.body');

        header.classList.remove('additional__menu__black__ground');
        body.classList.remove('additional__menu__container');
    }
    render () {
        return (
            <section className="sucsess__window">
                <div className="sucsess__box">
                    <div className="sucsess__message">
                        <h1 className="sucsess__box__header">Ваш заказ оформлен!</h1>
                        <div className="sucsess__box__text">Мы свяжемся с вами для уточнения<br></br> деталей заказа!</div>
                        <div className="check__mark"><span></span></div>
                    </div>
                </div>
            </section>
        );
    }
}

export default SucsessWindow;