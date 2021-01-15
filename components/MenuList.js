import React from 'react';
import PropTypes from 'prop-types';

const DEFAULT_STATE = {
    index: 0,
    key: 2,
};


class MenuList extends React.Component {
    constructor(props) {
        super(props);
        this.state = DEFAULT_STATE;
    }

    componentDidMount() {
        const navItemsArr = Array.from(document.querySelectorAll('.navigation__link'));
        
        window.scrollTo(pageXOffset, 0);
        this.activationLink(navItemsArr);

    }

    componentWillUnmount() {
        const navItemsArr = Array.from(document.querySelectorAll('.navigation__link'));

        this.disableLink(navItemsArr);

    }

    activationLink(arr) {
        arr.forEach((navItem) => {
            if (navItem.getAttribute('data-link') === '#menu') {
                navItem.classList.add('navigation__link--active');
            }
        });
    }

    disableLink (arr) {
        arr.forEach((navItem) => {
            if (navItem.getAttribute('data-link') === '#menu') {
                navItem.classList.remove('navigation__link--active');
            }
        });
    }

    render () {

        return (
            <main>
                 <section className="menu__list__container">
                    <h1>Меню Шашлычный мир</h1>
                    <h2 className="menu__header">Блюда на мангале <br></br>Шашлык</h2>
                    <TextforMenu {...{
                        name: 'Картофель',
                        text: '',
                        weight: '100 г',
                        price: '45 ₽'
                    }} />
                     <TextforMenu {...{
                        name: 'Крылья',
                        text: '',
                        weight: '100 г',
                        price: '65 ₽'
                    }} />
                     <TextforMenu {...{
                        name: 'Голень',
                        text: '',
                        weight: '100 г',
                        price: '65 ₽'
                    }} />
                    <TextforMenu {...{
                        name: 'Филе курицы',
                        text: '',
                        weight: '100 г',
                        price: '80 ₽'
                    }} />
                    <TextforMenu {...{
                        name: 'Овощи',
                        text: '',
                        weight: '100 г',
                        price: '80 ₽'
                    }} />
                    <TextforMenu {...{
                        name: 'Свинина',
                        text: '',
                        weight: '100 г',
                        price: '95 ₽'
                    }} />
                    <TextforMenu {...{
                        name: 'Грибы',
                        text: '',
                        weight: '100 г',
                        price: '100 ₽'
                    }} />
                    <TextforMenu {...{
                        name: 'Ханский',
                        text: '',
                        weight: '100 г',
                        price: '130 ₽'
                    }} />
                    <TextforMenu {...{
                        name: 'Говядина',
                        text: '',
                        weight: '100 г',
                        price: '140 ₽'
                    }} />
                    <TextforMenu {...{
                        name: 'Баранина',
                        text: '',
                        weight: '100 г',
                        price: '177 ₽'
                    }} />
                    <TextforMenu {...{
                        name: 'Перепелка',
                        text: '',
                        weight: '100 г',
                        price: '160 ₽'
                    }} />
                    <TextforMenu {...{
                        name: 'Семга',
                        text: '',
                        weight: '100 г',
                        price: '230 ₽'
                    }} />
                    <TextforMenu {...{
                        name: 'Креветки',
                        text: '',
                        weight: '100 г',
                        price: '250 ₽'
                    }} />
                     <h2 className="menu__header">Люля-кебаб</h2>
                     <TextforMenu {...{
                        name: 'Картофель',
                        text: '',
                        weight: '100 г',
                        price: '60 ₽'
                    }} />
                     <TextforMenu {...{
                        name: 'Курица',
                        text: '',
                        weight: '100 г',
                        price: '80 ₽'
                    }} />
                    <TextforMenu {...{
                        name: 'Говядина',
                        text: '',
                        weight: '100 г',
                        price: '85 ₽'
                    }} />
                    <TextforMenu {...{
                        name: 'Свинина',
                        text: '',
                        weight: '100 г',
                        price: '85 ₽'
                    }} />
                    <TextforMenu {...{
                        name: 'Баранина',
                        text: '',
                        weight: '100 г',
                        price: '100 ₽'
                    }} />

                    <h2 className="menu__header">Горячие блюда</h2>
        
                    <TextforMenu {...{
                        name: 'Шурпа из говядины с картофелем',
                        text: '',
                        weight: '300 г',
                        price: '220 ₽'
                    }} />
                    <TextforMenu {...{
                        name: 'Куриный суп с лапшой',
                        text: '',
                        weight: '300 г',
                        price: '220 ₽'
                    }} />
                    <TextforMenu {...{
                        name: 'Пюре с говядиной в сливочном соусе',
                        text: '',
                        weight: '300 г',
                        price: '265 ₽'
                    }} />
                    <TextforMenu {...{
                        name: 'Долма',
                        text: '',
                        weight: '300 г',
                        price: '277 ₽'
                    }} />
                    <TextforMenu {...{
                        name: 'Куриная грудка с соусом дорблю',
                        text: '',
                        weight: '300 г',
                        price: '282 ₽'
                    }} />
                    <TextforMenu {...{
                        name: 'Паста с куриной грудкой',
                        text: '',
                        weight: '200 г',
                        price: '255 ₽'
                    }} />
                    <TextforMenu {...{
                        name: 'Паста с говядиной',
                        text: '',
                        weight: '200 г',
                        price: '293 ₽'
                    }} />
                    <TextforMenu {...{
                        name: 'Рис басмати с лососем',
                        text: '',
                        weight: '200 г',
                        price: '334 ₽'
                    }} />
                    <h2 className="menu__header">Закуски</h2>
                    <TextforMenu {...{
                        name: 'Рыбное ассорти',
                        text: '',
                        weight: '200 г',
                        price: '485 ₽'
                    }} />
                     <TextforMenu {...{
                        name: 'Сельдь по-астрахански',
                        text: '',
                        weight: '200 г',
                        price: '275 ₽'
                    }} />
                     <TextforMenu {...{
                        name: 'Семга слабосоленая',
                        text: '',
                        weight: '150 г',
                        price: '340 ₽'
                    }} />
                     <TextforMenu {...{
                        name: 'Мясное ассорти',
                        text: '',
                        weight: '250 г',
                        price: '400 ₽'
                    }} />
                     <TextforMenu {...{
                        name: 'Язык говяжий отварной',
                        text: '',
                        weight: '150 г',
                        price: '280 ₽'
                    }} />
                     <TextforMenu {...{
                        name: 'Сырное ассорти',
                        text: '',
                        weight: '250 г',
                        price: '370 ₽'
                    }} />
                     <TextforMenu {...{
                        name: 'Брынза с зеленью',
                        text: '',
                        weight: '250 г',
                        price: '270 ₽'
                    }} />
                     <TextforMenu {...{
                        name: 'Овощное ассорти',
                        text: '',
                        weight: '250 г',
                        price: '265 ₽'
                    }} />
                     <TextforMenu {...{
                        name: 'Соленья',
                        text: '',
                        weight: '300 г',
                        price: '240 ₽'
                    }} />
                     <TextforMenu {...{
                        name: 'Грибное лукошко',
                        text: '',
                        weight: '200 г',
                        price: '190 ₽'
                    }} />
                     <TextforMenu {...{
                        name: 'Маслины',
                        text: '',
                        weight: '50 г',
                        price: '60 ₽'
                    }} />
                     <TextforMenu {...{
                        name: 'Лимон',
                        text: '',
                        weight: '50 г',
                        price: '50 ₽'
                    }} />
                    <h2 className="menu__header">Вкусный перекус <br></br> Сэндвич</h2>
                    <TextforMenu {...{
                        name: 'с курицей',
                        text: '',
                        weight: '200 г',
                        price: '180 ₽'
                    }} />
                     <TextforMenu {...{
                        name: 'с лососем',
                        text: '',
                        weight: '200 г',
                        price: '210 ₽'
                    }} />
                     <TextforMenu {...{
                        name: 'с ветчиной',
                        text: '',
                        weight: '200 г',
                        price: '170 ₽'
                    }} />
                     <h2 className="menu__header">Шаурма на углях</h2>
                     <TextforMenu {...{
                        name: 'с курицей',
                        text: '',
                        weight: '350 г',
                        price: '145 ₽'
                    }} />
                     <TextforMenu {...{
                        name: 'с говядиной',
                        text: '',
                        weight: '350 г',
                        price: '190 ₽'
                    }} />
                     <TextforMenu {...{
                        name: 'с бараниной',
                        text: '',
                        weight: '350 г',
                        price: '220 ₽'
                    }} />
                     <h2 className="menu__header">Бургер</h2>
                     <TextforMenu {...{
                        name: 'с курицой',
                        text: '',
                        weight: '250 г',
                        price: '220 ₽'
                    }} />
                     <TextforMenu {...{
                        name: 'с говядиной',
                        text: '',
                        weight: '250 г',
                        price: '250 ₽'
                    }} />
                    <h2 className="menu__header">Салаты</h2>
                    <TextforMenu {...{
                        name: '"Шашлычный мир"',
                        text: 'Теплый салат из говядины, черри, морковь, лист салата, соевый соус, оливковое масло, кунжут',
                        weight: '200 г',
                        price: '300 ₽'
                    }} />
                     <TextforMenu {...{
                        name: 'Цезарь с курицей',
                        text: 'Курица, сухарики, лист салата, черри, грецикий орех, сыр, соус',
                        weight: '200 г',
                        price: '270 ₽'
                    }} />
                     <TextforMenu {...{
                        name: 'Цезарь с креветками',
                        text: 'Креветки королевские, сухарики, лист салата, серри, грецкий орех, сыр, соус',
                        weight: '200 г',
                        price: '370 ₽'
                    }} />
                     <TextforMenu {...{
                        name: 'Греческий',
                        text: 'Лист салата, помидоры, огурцы, перецболгарский, оливки, маслины, сырфетакса, соус, оливковое масло, лук',
                        weight: '200 г',
                        price: '230 ₽'
                    }} />
                     <TextforMenu {...{
                        name: 'Оливье с лососем',
                        text: 'Лосось, картофель, морковь, авокадо, огурец свежий, лист салата, зелень, лук красный',
                        weight: '200 г',
                        price: '375 ₽'
                    }} />
                     <TextforMenu {...{
                        name: 'Салат из свежих овощей',
                        text: 'Помидоры свежи, огурцы свежие, перец болгарский, лист салата зелень, лук красный',
                        weight: '200 г',
                        price: '220 ₽'
                    }} />
                     <TextforMenu {...{
                        name: 'Черные глаза',
                        text: 'Говядина отварная, чернослив, сыр, грецкий орех, гранат, майонез',
                        weight: '200 г',
                        price: '290 ₽'
                    }} />
                     <TextforMenu {...{
                        name: 'Дамский каприз',
                        text: 'Куриная грудка, жаренные шампиньоны, консервированныц ананас, сладкий перец, варенное яйцо, майнез, сливковое масло',
                        weight: '200 г',
                        price: '280 ₽'
                    }} />
                     <TextforMenu {...{
                        name: 'Шамбери',
                        text: 'Язык отварной, корнишоны мариновынные, вареное яйцо, грецкий орех, соевый соус',
                        weight: '200 г',
                        price: '320 ₽'
                    }} />
                     <TextforMenu {...{
                        name: 'Овощи гриль',
                        text: 'Теплый салат, помидор, перец болгарский, баклажан, лук, зелень',
                        weight: '250г',
                        price: '260 ₽'
                    }} />
                    <h2 className="menu__header">Гарнир</h2>
                    <TextforMenu {...{
                        name: 'Картофель фри',
                        text: '',
                        weight: '100 г',
                        price: '86 ₽'
                    }} />
                     <TextforMenu {...{
                        name: 'Картофель по деревенски',
                        text: '',
                        weight: '100 г',
                        price: '92 ₽'
                    }} />
                     <TextforMenu {...{
                        name: 'Брокколи, жаренные в сливочном соусе',
                        text: '',
                        weight: '150 г',
                        price: '133 ₽'
                    }} />
                    <TextforMenu {...{
                        name: 'Пюре картофельное',
                        text: '',
                        weight: '150 г',
                        price: '54 ₽'
                    }} />
                    <h2 className="menu__header">Хлеб</h2>
                    <TextforMenu {...{
                        name: 'Лаваш тонкий',
                        text: '',
                        weight: '1 шт',
                        price: '49 ₽'
                    }} />
                    <TextforMenu {...{
                        name: 'Хлеб из тандыра',
                        text: '',
                        weight: '1 шт',
                        price: '49 ₽'
                    }} />
                    <h2 className="menu__header">Соус</h2>
                    <TextforMenu {...{
                        name: 'Красный',
                        text: '',
                        weight: '50 г',
                        price: '57 ₽'
                    }} />
                    <TextforMenu {...{
                        name: 'Белый',
                        text: '',
                        weight: '50 г',
                        price: '57 ₽'
                    }} />
                    <TextforMenu {...{
                        name: 'Барбекю',
                        text: '',
                        weight: '50 г',
                        price: '59 ₽'
                    }} />
                    <TextforMenu {...{
                        name: 'Ткемали',
                        text: '',
                        weight: '50 г',
                        price: '59 ₽'
                    }} />
                </section>
            </main>
        );
    }
}

class TextforMenu extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            name: props.name,
            text: props.text,
            weight: props.weight,
            price: props.price,
        };
    }

    render () {
        const {
            name,
            text,
            weight,
            price,
        } = this.state;

    
        return (
            <>
            <div className="menu__list__info__block">
                <div className="menu__product__description">
                    <h2>{name}</h2>
                  
                </div>
                <div className="menu__red__points"></div>
                <div className="menu__product__price__wight">
                    <div className="menu__product__wight">{weight}</div>
                    <div className="menu__product__price">{price}</div>
                </div>
            </div>
            <p className="menu__text menu__text__description">{text}</p>
            </>
        );
    }
}

TextforMenu.propTypes = {
    name: PropTypes.string,
    text: PropTypes.string,
    weight: PropTypes.string,
    price: PropTypes.string,

};

export default MenuList;