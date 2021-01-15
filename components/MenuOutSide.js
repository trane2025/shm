import React from 'react';
import ProductOfMenu from './moduls/ProductOfMenu';
import productsOutSideArr from './products/productsOutSide';
import Basket from './moduls/Basket';

const DEFAULT_STATE = {
    index: 0,
    key: 2,
    basket: 0,
};

class MenuOutSide extends React.Component {

    constructor(props) {
        super(props);
        this.state = DEFAULT_STATE;

        this.changeProductList = this.changeProductList.bind(this);
    }

    componentDidMount() {
        const mobileMenu = document.querySelector('.additional__menu__list');
        const navItemsArr = Array.from(document.querySelectorAll('.navigation__link'));
        
        window.scrollTo(pageXOffset, 0);
        this.activationLink(navItemsArr);


        mobileMenu.addEventListener('swiped-right', this.swipe);

        mobileMenu.addEventListener('click', this.click);
        
    }

    componentWillUnmount() {
        const navItemsArr = Array.from(document.querySelectorAll('.navigation__link'));

        this.disableLink(navItemsArr);

        document.removeEventListener('swiped-right', this.swipe);
        document.removeEventListener('click', this.click);
    }

    activationLink(arr) {
        arr.forEach((navItem) => {
            if (navItem.getAttribute('data-link') === '#menu-out-side') {
                navItem.classList.add('navigation__link--active');
            }
        });
    }

    disableLink (arr) {
        arr.forEach((navItem) => {
            if (navItem.getAttribute('data-link') === '#menu-out-side') {
                navItem.classList.remove('navigation__link--active');
            }
        });
    }

    swipe() {
        window.scrollTo(pageXOffset, 0);
        document.querySelector('.additional__menu__navigation').classList.add('additional__menu__swipe_left');
        document.querySelector('.additional__menu__grid').classList.add('additional__menu__display_none');
    }

    click() {
        document.querySelector('.additional__menu__navigation').classList.remove('additional__menu__swipe_left');
        document.querySelector('.additional__menu__grid').classList.remove('additional__menu__display_none');
    }
    

    async changeProductList (e) {
        if (e.target.hasAttribute('index')) {
            window.scrollTo(pageXOffset, 0);
            const index = Number(e.target.getAttribute('index'));
            await this.setState({index: index}, this.setState({key: Math.random()}));
        }
    }
   
    render () {
        const {changeProductList} = this;
        const {index} = this.state;
        
        return (
            <main data-swipe-threshold="20" data-swipe-timeout="500" data-swipe-ignore="false" className="additional__menu__list">
                <nav className="additional__menu__navigation">
                    <h1 className="additional__menu__navigation__header">Меню на вынос</h1>
                    <ul onClick={changeProductList} className="additional__menu__list__items">
                        <li index='0' className="additional__menu__list_item">Шашлык</li>
                        <li index='1' className="additional__menu__list_item">Люля-кебаб</li>
                    </ul>
                </nav>
                <Basket />
                <ProductOfMenu key={this.state.key} {...productsOutSideArr[index]} />
            </main>
        );
    }
}

export default MenuOutSide;