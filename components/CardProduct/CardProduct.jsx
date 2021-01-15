import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { addProductBasket } from '../../redux/redusers/basket';
import Button from '../UI/Button';
import Count from '../UI/Count';



function CardProduct({ image, title, price, portion, unit, id, addProductBasket, basketProducts, min_portion }) {




    const [popup, setPopup] = useState(false);
    const [animationHide, setAnimationHide] = useState(false);
    const [countPortion, setCountPortion] = useState(min_portion);



    const priceValue = price * countPortion / portion;

    const BASKET_KEY = `basket-${id}-${title}`;


    useEffect(() => {
        if (basketProducts[BASKET_KEY]) {
            const portion = basketProducts[BASKET_KEY].selectedPortion;
            setCountPortion(portion);
        }

    }, [basketProducts])


    const addCountPortion = () => {
        setCountPortion(countPortion + +portion);
    }

    const removeCountPortion = () => {
        if (countPortion === min_portion) {
            return
        }
        else setCountPortion(countPortion - +portion);
    }

    const clousePopup = () => {
        setAnimationHide(true);
        setTimeout(() => {
            setPopup(false);
        }, 300)
    }

    const showPopup = () => {
        setAnimationHide(false);
        setPopup(true);
    }



    const addProductBasketBtn = () => {

        const arrProduct = {
            image,
            title,
            price: +price,
            portion: +portion,
            selectedPortion: countPortion,
            unit,
            id,
            basketKey: BASKET_KEY,
            min_portion
        }

        setAnimationHide(true);
        setTimeout(() => {
            setPopup(false);
        }, 300);

        let arr = JSON.parse(localStorage.getItem('basket'));

        arr[BASKET_KEY] = arrProduct;

        localStorage.setItem('basket', JSON.stringify(arr));

        addProductBasket(arr);

    }





    return (
        <Product>
            <PopUp popup={popup} hide={animationHide}>
                <BtnClouse onClick={clousePopup}>
                    <svg width="14px" height="14px">
                        <path fillRule="evenodd" fill="rgb(30, 29, 29)"
                            d="M2.001,13.995 L0.002,11.998 L5.002,7.000 L-0.001,1.999 L1.996,0.003 L7.000,5.004 L12.000,0.006 L13.999,2.003 L8.998,7.001 L14.001,12.001 L12.004,13.997 L7.001,8.997 L2.001,13.995 Z" />
                    </svg>
                </BtnClouse>
                <div className="container-counts">

                    <Count
                        unit={unit}
                        removeCountPortion={removeCountPortion}
                        countPortion={countPortion}
                        addCountPortion={addCountPortion} />

                    <CountPrice>
                        <label>Цена</label>
                        <h4 className='value-price'>{priceValue} руб.</h4>
                    </CountPrice>
                </div>
                <Button onClick={addProductBasketBtn}>Добавить в заказ</Button>
            </PopUp>
            <WraperImages>
                <img src={image} alt="Фото продукта" />
            </WraperImages>
            <ul>
                <li>
                    <h3>{title}</h3>
                </li>
                <li>
                    <p className='price-product'><span>Цена за {portion} {unit}.</span>  {price} руб.</p>
                </li>
            </ul>
            <div className='wraper-btn'>
                <Button onClick={showPopup}>Заказать</Button>
            </div>
        </Product >
    )
}

const mapStateToProps = (state) => ({
    basketProducts: state.basket.products
})

export default connect(mapStateToProps, { addProductBasket })(CardProduct);

const BtnClouse = styled.div`
    position: absolute;
    right: 10px;
    top: 10px;
    cursor: pointer;
`;

const CountPrice = styled.div`
    width: 85px;
    label {
        font-size: 12px;
        letter-spacing: .05em;
        color: #565656;
    }

    .value-price {
        font-size: 18px;
        font-weight: 900;
        color: #1e1d1d;
        margin-top: 8px;
    }
`;



const PopUp = styled.div`
  user-select: none;
  background-color: rgb(240, 240, 240);
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.26);
  position: absolute;
  width: 230px;
  bottom: 20px;
  right: 20px;
  z-index: 10;
  padding: 20px 22px;
  display: ${props => props.popup ? 'flex' : 'none'};
  flex-direction: column;
  align-items: center;
  animation-name: ${props => props.hide ? 'hide' : 'show'};
  animation-duration: .3s;

  .container-counts {
      width: 100%;
      display: flex;
      justify-content: space-between;
      margin-bottom: 20px;
  }

  @keyframes show{
    0% {
        opacity: 0;
        transform: translateY(-100px);
    }
    100%{
        transform: translateY(0);
        opacity: 1;
    }
  }

  @keyframes hide{
    0% {
        transform: translateY(0);
        opacity: 1;
    }
    100%{
        transform: translateY(100px);
        opacity: 0;
    }
  }
`;


const WraperImages = styled.div`
    position: relative;
    top: 0;
    height: 178px;
    width: 270px;
    background: wheat;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        max-width: 270px;
        transition-duration: .4s;
    }
`;

const Product = styled.li`
    background-color: white;
    margin: 15px;
    padding-bottom: 30px;
    transition-duration: .3s;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    :hover {
        box-shadow: 0px 7px 17.85px 3.15px rgba(114, 114, 114, 0.43);

        ${WraperImages} {
            img {
                transform: scale(1.3); 
            }
        }
    }
 
    
    

    .price-product {
        font-size: 20px;
        font-weight: 900;
        color: #1e1d1d;
        letter-spacing: 0.02em;
    }

    li {
        margin: 15px 0;
        max-width: 200px;
        word-break: break-word;
    }

    span {
        color: #565656;
        font-weight: 400;
        font-size: 16px;
    }

    ul {
        padding: 0 35px;
    }

    h3 {
        font-size: 18px;
        font-weight: 800;
        color: #1e1d1d;
        letter-spacing: 0.02em;
    }

    .wraper-btn {
        display: flex;
        justify-content: center;
    }
`;
