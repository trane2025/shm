import React from 'react';
import PropTypes from 'prop-types';

class Order extends React.Component {
    constructor (props) {
        super(props);
        this.gridRef = React.createRef();
        this.modalRef = React.createRef();
        this.headerRef = React.createRef();

        this.state = {
            link: props.link,
            name: props.name,
            description: props.description,
            dose: props.dose,
            calculation: props.calculation,
            price: props.price,
            uniqueClass: 'order__menu order__menu' + props.index,
            count: 1,
        };

        this.showOrderMenu = this.showOrderMenu.bind(this);
        this.closeOrderMenu = this.closeOrderMenu.bind(this);
        this.orderPlus = this.orderPlus.bind(this);
        this.orderMinus = this.orderMinus.bind(this);
        this.doOrder = this.doOrder.bind(this);
    }

    componentDidMount() {
        const div = this.gridRef.current;
        const name = this.headerRef.current;

        let height = div.clientHeight - 202 - name.clientHeight;
        const modalWindow = this.modalRef.current;

        if (height < 195) height = 195;
        modalWindow.style.height = height + 'px';
    }

    showOrderMenu () {
        const {index} = this.props;
        const uniqueClass = '.order__menu' + index;
        const orderMenu = document.querySelector(uniqueClass);
        orderMenu.classList.add('--order__menu_active');
    }

    closeOrderMenu () {
        const {index} = this.props;
        const uniqueClass = '.order__menu' + index;
        const orderMenu = document.querySelector(uniqueClass);
        orderMenu.classList.remove('--order__menu_active');
    }

    orderPlus () {
        const {index, price, dose} = this.props;
        const uniqueClass = '.order__menu' + index;
        const orderMenu = document.querySelector(uniqueClass);
        const productPrice = orderMenu.querySelector('.order__price');
        const amount = orderMenu.querySelector('.order__amount');

        
        productPrice.innerHTML = parseInt(productPrice.innerHTML) + parseInt(price);
        amount.innerHTML = parseInt(amount.innerHTML) + parseInt(dose);
        this.setState((state) => {
            return {count: state.count + 1};
        });
    }

    orderMinus () {
        const {index, price, dose} = this.props;
        const uniqueClass = '.order__menu' + index;
        const orderMenu = document.querySelector(uniqueClass);
        const productPrice = orderMenu.querySelector('.order__price');
        const amount = orderMenu.querySelector('.order__amount');

        if (amount.innerHTML === dose) return;
        productPrice.innerHTML = parseInt(productPrice.innerHTML) - parseInt(price);
        amount.innerHTML = parseInt(amount.innerHTML) - parseInt(dose);
        if (this.state.count !== 1) {
            this.setState((state) => {
                return {count: state.count - 1};
            });
        }
    }

    changerStyleOnNone (className) {
        className.style.display = 'none';
    }

    async doOrder() {
        const {index} = this.props;
        const {name, calculation, dose, link, count, price} = this.state;

        const uniqueClass = '.order__menu' + index;
        const orderMenu = document.querySelector(uniqueClass);
        const successWindow = orderMenu.querySelector('.order__menu_success');
        successWindow.style.display = 'block';
        
        /* session storage */
        const myProducts = JSON.parse(localStorage.getItem('myProducts'));
        const productPrice = orderMenu.querySelector('.order__price');
        myProducts.push([link, name, `Порция: ${dose} ${calculation}  `, count, `${Number(productPrice.innerHTML)} руб.`, Number(price)]);
        localStorage.setItem('myProducts', JSON.stringify(myProducts));
        /* session storage */
        
        await setTimeout(() => this.changerStyleOnNone(successWindow), 1000);
        await setTimeout(() => this.closeOrderMenu(), 1000);
        this.forceUpdate();
    }

    render () {
        const {link, name, description, dose, calculation, price, uniqueClass} = this.state;

        return (
            <div ref={this.gridRef} className="additional__menu__grid__box">
                <div className="additional__menu__grid__wrapper">
                    <img className='additional__menu__grid__img' src={link} alt="menu picture"></img>
                    <div ref={this.headerRef} className="additional__menu__grid__name">{name}</div> <br></br>
                    <p className="additional__menu__grid__description">{description}</p>
                    <div className="additional__menu__grid__btn__box">
                        <div className="additional__menu__grid__btn__box__order">
                            <span className="additional__menu__grid__description__dose" >Цена за: {dose} {calculation} / 
                                <span className="additional__menu__grid__price">  {price} руб</span> 
                            </span>
                            <a onClick={this.showOrderMenu} className="menu__btn btn additional__menu__grid__btn">Добавить</a>
                        </div>
                    </div>
                    <div ref={this.modalRef} className={uniqueClass}>
                        <div className="order__menu__grid">
                            <div className="order__menu__grid__container">
                                <span className="order__menu__grid__text">Цена:</span>
                                <div onClick={this.orderMinus} className="order__btn_minus"><span ></span></div>
                                <div className="order__price">
                                    {price}
                                </div><span className="volute">р</span>
                                <div onClick={this.orderPlus} className="order__btn_plus"><span></span></div>
                            </div>
                            <div className="order__menu__grid__container">
                                <span className="order__menu__grid__text">Количество: </span>
                                <div className="order__amount">
                                    {dose}
                                </div><span className="calculation">{calculation}</span>
                            </div>
                            <a onClick={this.doOrder} className="menu__btn btn order__button">Добавить</a>

                            <div onClick={this.closeOrderMenu} className="order__btn_close"><span></span></div>
                            <div className="order__menu_success">
                                <span className="success__text">Добавлено в корзину!</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Order.propTypes = {
    link: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    dose: PropTypes.string,
    calculation: PropTypes.string,
    price: PropTypes.string,
    index: PropTypes.number,
    addInBasket: PropTypes.func,
};

export default Order;