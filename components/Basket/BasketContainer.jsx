import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { changeCountPortion, setBasket, toggleBasket } from '../../redux/redusers/basket';
import Basket from './Basket';

function BasketContainer({ basket, setBasket, changeCountPortion, query, toggleBasket, order, setShowMobileBasket }) {

    useEffect(() => {
        const checkBasket = localStorage.getItem('basket');

        if (!checkBasket) {
            localStorage.setItem('basket', '{}');
        }

    }, [])

    useEffect(() => {
        const basketArr = JSON.parse(localStorage.getItem('basket'));
        setBasket(basketArr);
    }, [query]);

    const deleteProduct = (key) => {
        let arr = JSON.parse(localStorage.getItem('basket'));
        delete arr[key]
        localStorage.setItem('basket', JSON.stringify(arr));

        setBasket(arr);
    }

    const changeSelectedCount = (key, value, price) => {

        let arr = JSON.parse(localStorage.getItem('basket'));
        arr[key].selectedPortion = value;
        localStorage.setItem('basket', JSON.stringify(arr));

        changeCountPortion(key, value);
    }

    const clouseBasket = () => {
        toggleBasket(true)
        setShowMobileBasket(false)
    }

    if (order) {
        return (
            <>
                <Basket
                    products={basket.products}
                    deleteProduct={deleteProduct}
                    changeSelectedCount={changeSelectedCount}
                    countPrice={basket.countPrice}
                    toggleBasket={toggleBasket}
                    order={order} />
            </>
        )
    }

    return (
        <>
            {!basket.clouseBasket && <Basket
                products={basket.products}
                deleteProduct={deleteProduct}
                changeSelectedCount={changeSelectedCount}
                countPrice={basket.countPrice}
                clouseBasket={clouseBasket}
                order={order} />}
        </>
    )
}

const mapStateToProps = (state) => ({
    basket: state.basket
})



export default connect(mapStateToProps, { setBasket, changeCountPortion, toggleBasket })(BasketContainer);


