import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import Button from '../UI/Button';

import BasketProduct from './UI/BasketProduct';

function Basket({ products, deleteProduct, changeSelectedCount, countPrice, clouseBasket, order }) {

    return (
        <Container>
            <Title>
                <h2>Ваш заказ:</h2>
                {order !== "true" && <i className='clouse-Icon' onClick={clouseBasket}>
                    <svg width="20px" height="20px">
                        <path fillRule="evenodd" fill="rgb(30, 29, 29)"
                            d="M2.858,19.993 L0.002,17.139 L7.146,9.999 L-0.002,2.855 L2.851,0.004 L9.999,7.148 L17.143,0.008 L19.998,2.862 L12.855,10.002 L20.001,17.144 L17.148,19.996 L10.002,12.853 L2.858,19.993 Z" />
                    </svg>
                </i>}
            </Title>
            {!!Object.keys(products).length

                ? <ul>

                    {Object.keys(products).map((key, index) => {
                        const product = products[key];
                        return (
                            <BasketProduct
                                key={index}
                                image={product.image}
                                title={product.title}
                                portion={+product.portion}
                                price={+product.price}
                                selectedPortion={+product.selectedPortion}
                                unit={product.unit}
                                basketKey={product.basketKey}
                                deleteProduct={deleteProduct}
                                changeSelectedCount={changeSelectedCount}
                                min_portion={product.min_portion}
                            />
                        )
                    })}
                </ul>

                : <BasketNull>
                    <h3>Корзина пуста =(</h3>
                </BasketNull>}



            {!!Object.keys(products).length && <WraperCount order={order}>
                <h4 className='count-summ'>{`Сумма: ${countPrice} руб.`}</h4>

                {!order && <Link href='/order'>
                    <a>
                        <Button>Оформить заказ</Button>
                    </a>
                </Link>}
            </WraperCount>}

        </Container>
    )
}

export default Basket;

const BasketNull = styled.div`
    padding: 40px 50px;
    padding-top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: .3s;
    

    h3 {
        width: 100%;
        padding: 30px;
        font-weight: 600;
        font-size: 24px;
        background-color: #f6f6f6;
        box-shadow: rgb(224,224,224) 0px 0px 0px 1px inset;
        text-align: center;
    }
`;

const WraperCount = styled.div`
    user-select: none;
    padding: 30px 50px;
    display: flex;
    justify-content: ${props => props.order ? 'center' : 'space-between'};
    align-items: center;

    .count-summ {
        font-weight: 900;
        font-size: 24px;
    }

    @media (max-width: 760px){
        margin-top: 15px;
        background: white;
        width: 100%;
        max-height: 20%;
        height: 100%;
        justify-content: center;
        flex-direction: column;
        padding: 15px 15px;

        .count-summ{
            margin-bottom: 10px;
        }
    }
`;

const Title = styled.div`
    user-select: none;
    padding: 40px 50px;
    display: flex;
    align-items: center;

    h2 {
        font-size: 36px;
        font-weight: 900;
        flex: 1;
    }

    .clouse-Icon {
        cursor: pointer;
        display: block;
    }

    @media (max-width: 760px){

        padding: 20px 20px;
        h2 {
            font-size: 30px;
        }

    }
`;

const Container = styled.div`
    user-select: none;
    background-color: rgb(255, 255, 255);
    box-shadow: -6.82px 7.314px 28.48px 3.52px rgba(18, 18, 18, 0.27);
    width: 560px;
    animation-name: fade;
    animation-duration: .4s;

    @keyframes fade{
        0% {
            opacity: 0;
        }
        100%{
            opacity: 100%
        }
    }

    ul {
        margin: -10px 0;
        max-height: 43vh;
        overflow-y: scroll;

        ::-webkit-scrollbar {
            width: 0;
        }
    }

    @media (max-width: 760px){
        box-shadow: none;
        height: 100vh;
        width: 100%;
        
        ul {
            max-height: 70%;
        }
    }
`;
