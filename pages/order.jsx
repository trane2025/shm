import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Footer from '../components/Footer';
import HeaderCenter from '../components/HeaderCenter';
import Order from '../components/Order/Order';
import { clearBasket } from '../redux/redusers/basket';

function order({ basket, clearBasket }) {

    const [orderArr, setOrderArr] = useState(null);



    useEffect(() => {
        if (basket.countPrice) {
            const arr = Object.keys(basket.products).map(key => {
                const item = basket.products[key];

                return {
                    title: item.title,
                    price: item.price,
                    quantity: item.selectedPortion,
                    sum: item.price * item.selectedPortion / item.portion
                }
            })
            setOrderArr(arr);
        }
        else setOrderArr([])
    }, [basket.products])




    return (
        <>
            <Head>
                <title>Доставка шашлыка в Астрахани. Свежий, сочный, очень вкусный</title>
                <meta name="description" content="Закажите шашлык в Астрахани, с доставкой или самовывоз. Всегда свежий, сочный и очень вкусный." />
            </Head >
            <HeaderCenter/>
            <Order orderArr={orderArr} countPrice={basket.countPrice} clearBasket={clearBasket} />
            <Footer />
        </>
    )
}

const mapStateToProps = (state) => ({
    basket: state.basket
})

export default connect(mapStateToProps, { clearBasket })(order)

