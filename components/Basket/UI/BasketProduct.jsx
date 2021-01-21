import styled from 'styled-components';
import Count from '../../UI/Count';

function BasketProduct({ image, title, portion, price, selectedPortion, unit, basketKey, deleteProduct, changeSelectedCount, min_portion }) {



    const priceValue = price * selectedPortion / portion;

    const addCountPortion = () => {
        changeSelectedCount(basketKey, selectedPortion + portion)
    }

    const removeCountPortion = () => {
        if (selectedPortion === min_portion) {
            return
        }
        else changeSelectedCount(basketKey, selectedPortion - portion);
    }



    return (

        <Product>

            <div className="mobile-wraper">
                <div className="container-img">
                    <img src={image} alt="Фото" />
                </div>

                <TitleProduct>
                    <h3>{title}</h3>
                    <Count
                        unit={unit}
                        removeCountPortion={removeCountPortion}
                        countPortion={selectedPortion}
                        addCountPortion={addCountPortion} />

                </TitleProduct>
            </div>

            <div className="wraper-price">
                <h3 className='price'>{priceValue} руб.</h3>
                <i className='delete-Btn' onClick={() => { deleteProduct(basketKey) }}>
                    <svg id="Capa_1" enableBackground="new 0 0 512 512" height="26" viewBox="0 0 512 512" width="22">
                        <g><g><path d="m69.81 199.12 40.78 299.89c.98 7.43 7.33 12.99 14.82 12.99h261.18c7.49 0 13.84-5.56 14.82-12.99l40.78-299.89zm118.77 271.72c-7.62 0-14.14-5.8-14.87-13.54l-18.94-200.67c-.78-8.22 5.25-15.51 13.47-16.28 8.22-.79 15.51 5.25 16.28 13.47l18.95 200.67c.824 8.679-5.96 16.35-14.89 16.35zm82.37-14.94c0 8.25-6.7 14.94-14.95 14.94s-14.95-6.69-14.95-14.94v-200.68c0-8.25 6.7-14.94 14.95-14.94s14.95 6.69 14.95 14.94zm86.28-199.27-18.94 200.67c-.75 7.952-7.714 14.195-16.29 13.48-8.22-.78-14.25-8.07-13.47-16.29l18.95-200.67c.77-8.22 8.08-14.25 16.28-13.47 8.22.77 14.25 8.06 13.47 16.28z" /></g>
                            <path d="m450.465 95.676h-388.93c-9.247 0-16.743 7.496-16.743 16.743v40.069c0 9.247 7.496 16.743 16.743 16.743h388.93c9.247 0 16.743-7.496 16.743-16.743v-40.069c0-9.247-7.496-16.743-16.743-16.743z" /><g>
                                <path d="m258.65 0h-5.3c-36.556 0-66.386 29.392-67.074 65.788h29.89c.687-19.907 17.107-35.898 37.184-35.898h5.3c20.076 0 36.496 15.991 37.184 35.898h29.89c-.687-36.396-30.518-65.788-67.074-65.788z" /></g></g>
                    </svg>
                </i>
            </div>


        </Product>

    )
}



export default BasketProduct;

const TitleProduct = styled.div`
    width: 120px;
    display: flex;
    width: fit-content;
    align-items: center;

    
    h3 {
        font-size: 20px;
        font-weight: 900;
        width: 140px;
        margin-right: 5px;
    }

    @media (max-width: 760px){
        text-align: center;
        display: block;

        h3 {
            margin-right: 0;
            text-align: start;
            font-size: 16px;
            line-height: 100%;
            margin-bottom: 5px;
        }
    }
`;


const Product = styled.li`
    
        padding: 15px 20px;
        display: flex;
        transition: .3s;
        background-color: #f6f6f6;
        box-shadow: rgb(224, 224, 224) 0px 0px 0px 1px inset;
        margin: 10px;
        align-items: center;
        justify-content: space-between;

        .mobile-wraper {
            display: flex;
            justify-content: space-between;
        }

        :hover {
            background-color: #f6f6f6;
        }
    
        .wraper-price {
        display: flex;
        align-items: center;
    }

    .price {
        font-size: 20px;
        font-weight: 900;
        margin-right: 30px;
    }
    
    .container-img {
        width: 105px;
        height: 85px;
        margin-right: 15px;

        img {
            max-height: 85px;
        }
    }

    .delete-Btn {
        cursor: pointer;
    }

    @media (max-width: 760px){
        flex-direction: column;
        padding: 0;

        .content-wraper {
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }

        .mobile-wraper {
            padding: 15px;
        }
        
        .container-img {
            margin-right: 30px;
            width: 120px;
            height: 90px;

            img {
                max-height: 90px;  
            }
        }
        .delete-Btn {
            margin-top: 10px;
        }

        .wraper-price {
            width: 100%;
            justify-content: space-around;
            padding: 5px;
            background: #dcdcdc;
        }

        .price {
            width: 120px;
            margin: 0;
        }

    }
`;


