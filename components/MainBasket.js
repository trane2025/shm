import React from 'react';
import SucsessWindow from './moduls/SucsessBasketWindow';
import OrderMenu from './moduls/OrderMenu';

const DEFAUL__STATE = {
    order: false,
};

class MainBasket extends React.Component {
    constructor (props) {
        super (props);
        this.state = DEFAUL__STATE;
        this.changeContent = this.changeContent.bind(this);
    }
    
    changeContent () {
        this.setState({order: true});
    }

    render () {
        const {order} = this.state;
        if (order) {
            return <SucsessWindow />;
        } else {
            return <OrderMenu {...{
                orderClick: this.changeContent,
            }} />;
        }
    }
}

export default MainBasket;