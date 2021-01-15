import React from 'react';
import Style from 'style-it';
import BasketMenu from './BasketMenu';

class Basket extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            store: 0,
        };
        this.onStore = this.onStorage.bind(this);
    }
    componentDidMount() {
        this.timerID = setInterval(
            () => this.onStorage(),
            500
        ); 
    }
    
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    onStorage () {
        const myProducts = JSON.parse(localStorage.getItem('myProducts'));
        this.setState({store: myProducts.length});
    }

    openMenu(e) {
        e.preventDefault();
        const basketMenu = document.querySelector('.basket__page');
        const basketLogo = document.querySelector('.basket');

        basketLogo.classList.add('basket--non--active');
        basketMenu.classList.remove('basket--non--active');
    }

    render () {
        const {store} = this.state;

        return Style.it(`
        .basket::before { 
            content: '${store}';
          }
        `,
        <div className="basket__wrapper">
            <li onClick={this.openMenu} className="social__item basket">
                <a className="social__link" href="">
                    <img className="basket__img" style={{'marginTop': '15px',}} src='../../img/basket.png' alt="Корзина"></img>
                </a>
            </li>
            <BasketMenu />
        </div>
        );
    }
}

export default Basket;
