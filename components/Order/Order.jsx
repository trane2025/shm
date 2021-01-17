import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { rootAPI } from '../../API/rootApi';
import BasketContainer from '../Basket/BasketContainer';
import Button from '../UI/Button';
import CheckBox from '../UI/CheckBox';
import Container from '../UI/Container';
import Input from '../UI/Input';
import PrelouderSection from '../UI/PrelouderSection';
import Select from '../UI/Select';
import Success from '../UI/Success';
import TextArea from '../UI/TextArea';
import { useRouter } from 'next/router';

import InputPhoneMask from '../UI/InputPhoneMask';
import { toggleBasket } from '../../redux/redusers/basket';
import { connect } from 'react-redux';

const scrollBody = (value) => {
    const body = document.querySelector('body');
    body.style.overflow = value;
}


function Order({ orderArr, countPrice, clearBasket, productsBasket }) {


    const router = useRouter();
    const [counBasketProducts, setCounBasketProducts] = useState(0);
    const [showMobileBasket, setShowMobileBasket] = useState(false);

    useEffect(() => {
        console.log(productsBasket);
        const arrproductsBasket = Object.keys(productsBasket).map(item => {
            return productsBasket[item];
        })
        setCounBasketProducts(arrproductsBasket.length)
    }, [productsBasket]);


    const showBasketMobile = () => {
        setShowMobileBasket(true);
        scrollBody('hidden');
    }

    const clouseBasketMobile = () => {
        setShowMobileBasket(false);
        scrollBody('auto');
    }


    const [prelouder, setPrelouder] = useState(false);
    const [success, setSuccess] = useState(false)

    const [howDelivery, setHowDelivery] = useState('Доставка');

    const [methodPay, setMethodPay] = useState('Наличные');
    const [pickup, setPickup] = useState(null);
    const [name, setName] = useState('');
    const [comment, setComment] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');



    useEffect(() => {

        return () => {
            setPickup('');
            setAddress('');
        }

    }, [howDelivery])

    const onChangePhone = (value) => {

        setPhone(value);
    }

    const onChangehowDelivery = (value) => {
        if (value === 'Доставка') {
            setHowDelivery(value);
            setMethodPay('Наличные')
        }
        else setHowDelivery(value);
    }

    const postOrder = async (event) => {
        event.preventDefault();

        if (orderArr.length === 0) {
            alert('Корзина пуста')
            return
        }

        if ('' === phone) {
            alert('Вы не указали телефон')
            return
        }

        if ('' === name) {
            alert('Вы не указали имя')
            return
        }


        setPrelouder(true);


        const userData = {
            phone: phone,
            type_delivery: howDelivery,
            name: name,
            comment: comment,
            address_cafe: pickup,
            address_delivery: address,
            type_pay: methodPay,
            comment: comment,
            all_cach: countPrice
        }

        const order = {
            goods: orderArr,
            userData,

        }

        await rootAPI.postDelivery(JSON.stringify(order)).then(response => {
            console.log(response.data);
            setTimeout(() => {
                setPrelouder(false);
                setSuccess(true);
            }, 500);
        })

        await setTimeout(() => {
            localStorage.removeItem('basket');
            clearBasket();
            router.replace('/');
            setSuccess(false);
        }, 2000);

    }



    return (
        <SectionOrder>
            {success && <Success />}
            {prelouder && <PrelouderSection />}
            <Container>
                <div className="container-order">
                    <form onSubmit={event => postOrder(event)}>

                        <h1>Оформление заказа</h1>

                        <ul className='list-input'>
                            <li className='item'>
                                <Input type='text' label='Ваше имя' placeholder='Укажите ваше имя' value={name} onChange={event => setName(event.target.value)} />
                            </li>

                            <li className='item'>
                                <InputPhoneMask label='Телефон' placeholder='+7____-____-___-___' value={phone} onChange={event => onChangePhone(event.target.value)} />
                            </li>

                            <li className="item">

                                <CheckBox
                                    name='how-delivery'
                                    checkBoxArr={[
                                        { id: 'delivery', label: 'Доставка', defaultChecked: true, },
                                        { id: 'your-self', label: 'Самовывоз', defaultChecked: false }
                                    ]
                                    }
                                    method={onChangehowDelivery}

                                >Как вы хотите получить заказ ?</CheckBox>

                            </li>


                            <li className="item">
                                <Select
                                    label='Адрес кафе'
                                    options={[
                                        { value: 'Выберите заведение' },
                                        { value: 'Куликова, 50в' },
                                        { value: 'Татищева, 43а' },
                                        { value: 'с.Осыпной Бугор,ул.Астраханская 51И' },
                                    ]}
                                    method={setPickup}
                                />
                            </li>


                            {howDelivery === 'Доставка' && <li className='item'>
                                <Input type='text' label='Адрес доставки' placeholder='Например: 3-я Зеленгинская, 40(в), 1,5,4б' value={address} onChange={event => setAddress(event.target.value)} />
                            </li>}


                            {howDelivery !== 'Доставка' && <li className="item">

                                <CheckBox
                                    name='pay'
                                    checkBoxArr={[
                                        { id: 'cash', label: 'Наличные', defaultChecked: true, },
                                        { id: 'card', label: 'Карта', defaultChecked: false }
                                    ]
                                    }
                                    method={setMethodPay}

                                >Какой способ оплаты?</CheckBox>

                            </li>}

                            {howDelivery === 'Доставка' && <li className="item">

                                <CheckBox
                                    name='pay'
                                    checkBoxArr={[
                                        { id: 'cash', label: 'Наличные', defaultChecked: true, }
                                    ]
                                    }
                                    method={setMethodPay}

                                >Какой способ оплаты?</CheckBox>

                            </li>}
                        </ul>

                        <div className="wraper-textAria">

                            <TextArea
                                label='Комментарий к заказу'
                                placeholder='Напишите дополнительную и уточняющую информацию, если считаете нужным это указать (необязательно)'
                                onChange={event => setComment(event.target.value)}
                                calue={comment} />

                        </div>
                        <div className="wraper-button">
                            <Button type='submit'>Оформить заказ</Button>
                            <BasketIconMobile onClick={showBasketMobile}>

                                <svg width="29" height="25" viewBox="0 0 164 144" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M159.135 42.2846C158.787 42.2255 158.434 42.198 158.08 42.203H138.622V5.86158C138.622 2.62435 136.009 0 132.785 0H31.2145C27.9907 0 25.3772 2.62435 25.3772 5.86158V42.2034H5.91927C2.69579 42.1579 0.0457977 44.7453 0.000573272 47.9821C-0.00436721 48.337 0.0226154 48.6915 0.0819012 49.0419L15.0645 139.115C15.5441 141.966 18.0227 144.04 20.9018 143.999H143.097C145.977 144.04 148.455 141.966 148.935 139.115L163.917 49.0419C164.455 45.8497 162.314 42.8246 159.135 42.2846ZM43.473 114.105L37.441 74.8328L48.9212 73.0743L54.9531 112.347L43.473 114.105ZM87.837 113.324H76.1622V73.8559H87.837V113.324ZM120.526 114.301L109.046 112.542L115.078 73.2697L126.558 75.0282L120.526 114.301ZM37.0519 42.2034V11.7232H126.947V42.2034H37.0519Z" fill="white" />
                                </svg>

                                {!!counBasketProducts && <div className="container-count">
                                    <p className='count'>{counBasketProducts}</p>
                                </div>}

                            </BasketIconMobile>
                        </div>

                    </form>
                    <BasketWraper open={showMobileBasket}>
                        <i className='clouse-Icon' onClick={clouseBasketMobile}>
                            <svg width="20px" height="20px">
                                <path fillRule="evenodd" fill="rgb(30, 29, 29)"
                                    d="M2.858,19.993 L0.002,17.139 L7.146,9.999 L-0.002,2.855 L2.851,0.004 L9.999,7.148 L17.143,0.008 L19.998,2.862 L12.855,10.002 L20.001,17.144 L17.148,19.996 L10.002,12.853 L2.858,19.993 Z" />
                            </svg>
                        </i>
                        <BasketContainer order="true" />
                    </BasketWraper>
                </div>

            </Container>
        </SectionOrder>
    )
}

const mapStateToProps = (state) => ({
    productsBasket: state.basket.products
})

export default connect(mapStateToProps)(Order);

const BasketWraper = styled.div`
    .clouse-Icon {
            display: none;
        }

    @media (max-width: 760px) {
        position: fixed;
        top: 0;
        right: 0;
        right: ${props => props.open ? '0' : '-100%'};
        z-index: 21;
        width: 100%;
        height: 100%;
        transition: all 0.5s;
        transition-timing-function: cubic-bezier(0.7, 0, 0.3, 1);
        

        .clouse-Icon {
            display: block;
            position: absolute;
            right: 20px;
            top: 20px;
        }
    }
`;

const BasketIconMobile = styled.div`
    display: none;
    @media (max-width: 760px){
        width: 60px;
    height: 60px;
    border-radius: 50%;
    background-image: -moz-linear-gradient( 90deg, rgb(208,17,18) 0%, rgb(233,50,38) 100%);
    background-image: -webkit-linear-gradient( 90deg, rgb(208,17,18) 0%, rgb(233,50,38) 100%);
    background-image: -ms-linear-gradient( 90deg, rgb(208,17,18) 0%, rgb(233,50,38) 100%);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    position: relative;
    z-index: 2;

    .container-count {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: white;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        right: -16px;
        bottom: -6px;
        box-shadow: -3.41px 3.657px 8.19px 0.81px rgba(18, 18, 18, 0.27);

        p {
            font-weight: 900;
            color: #1e1d1d;
            position: relative;
            top: 2px;
        }
    }
    }
     
`;


const SectionOrder = styled.section`
    background-color: #dddddd;
    position: relative;

    .wraper-textAria {
        margin-top: 40px;
    }

    .list-input {
        margin-top: 20px;
    }

    .item {
        margin-top: 20px;
    }

    h1 {
        font-weight: 900;
        font-size: 36px;
        display: flex;
        align-items: center;
        line-height: 100%;

        ::before {
            content: '';
            display: block;
            width: 10px;
            height: 35px;
            background: #c32222;
            margin-right: 10px;
        }
    }

    .container-order {
        padding-top:80px;
        padding-bottom: 80px;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
    }

    .clouse-Icon {
            display: none;
        }

    @media (max-width: 760px){
        padding:15px 15px 20px 15px;

        
        
        .container-order {
            padding: 0;
        }

        h1{
            font-size: 24px;

                ::before {
                    content: '';
                    display: block;
                    width: 8px;
                    height: 20px;
                    background: #c32222;
                    margin-right: 10px;
            }
        }

        .item {
            margin-top: 10px;
        }
    
        .wraper-textAria {
            margin-top: 10px;
        }

        .wraper-button {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 10px;
        }

        .basket-wraper {
            position: fixed;
            top: 0;
            right: 0;
            z-index: 21;
            width: 100%;
            transition: all 0.5s;
            transition-timing-function: cubic-bezier(0.7, 0, 0.3, 1);
        }

        .clouse-Icon {
            display: block;
            position: absolute;
            right: 20px;
            top: 20px;
        }
    }

    
`;