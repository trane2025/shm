import React from 'react';

class Adventage extends React.Component {
    constructor (props) {
        super(props);
    }

    render () {
        return (
            <section className="advantage" id="about">
                <h2 className="advantage__title">Наши преимущества</h2>
                <div className="advantage__wrapper">
                    <div className="advantage__info">
                        <h3 className="advantage__subtitle">Ресторанное качество по&nbsp;ценам обычного кафе</h3>
                        <p className="advantage__text">
                В сети кафе «ШАШЛЫЧНЫЙ МИР» пожалуй, лучшие шашлыки в городе, бесподобная европейская и кавказская кухня.
                        </p>
                        <a onClick={this.click} className="advantage__btn btn" href="#callback">Забронировать стол</a>
                    </div>
                    <ul className="advantage__tabs">
                        <li className="advantage__item">
                            <img src='/img/adventages/alko_s_soboy.jpg' alt="Гости могут приносить алкоголь с собой"></img>
                        </li>
                        <li className="advantage__item">
                            <img src='/img/adventages/advantage2.png' alt="Разнообразная кухня"></img>
                        </li>
                        <li className="advantage__item">
                            <img src='/img/adventages/advantage6.png' alt="Авторские блюда"></img>
                        </li>
                        <li className="advantage__item">
                            <img src='/img/adventages/advantage3.png' alt="Музыкально световое оборудование"></img>
                        </li>
                        <li className="advantage__item">
                            <img src='/img/adventages/advantage5.png' alt="Вежливый персонал"></img>
                        </li>
                        <li className="advantage__item">
                            <img src='/img/adventages/advantage4.png' alt="Оформление зала по желанию заказчика"></img>
                        </li>
                    </ul>
                </div>
    
            </section>
        );
    }
}

export default Adventage;