import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { toggleBasket } from '../../redux/redusers/basket';
import BasketContainer from '../Basket/BasketContainer';
import CardProduct from '../CardProduct/CardProduct';
import Prelouder from '../Prelouder/Prelouder';
import Container from '../UI/Container';

const UseUpdateEffect = (fn, deps) => {
    const ref = useRef(false);
    useEffect(() => {
        if (ref.current) {
            fn();
        }
        else ref.current = true;
    }, deps)

}

const scrollBody = (value) => {
    const body = document.querySelector('body');
    body.style.overflow = value;
}

function MenuOutSide({ category, products, title, activeLink, prelouder, query, toggleBasket, productsBasket, clouseBasket }) {

    useEffect(() => {
        scrollBody('auto');

        return () => {
            scrollBody('auto');
        }
    }, [query]);

    const [counBasketProducts, setCounBasketProducts] = useState(0);
    const [mobileNavigation, setMobileNavigation] = useState(false);
    const [showBasketIcon, setShowBasketIcon] = useState(true);
    const [showMobileBasket, setShowMobileBasket] = useState(false);


    UseUpdateEffect(() => {
        setMobileNavigation(false);
    }, [query]);

    useEffect(() => {
        const arrproductsBasket = Object.keys(productsBasket).map(item => {
            return productsBasket[item];
        })
        setCounBasketProducts(arrproductsBasket.length)
    }, [productsBasket])



    UseUpdateEffect(() => {
        setShowBasketIcon(clouseBasket)
    }, [clouseBasket])


    UseUpdateEffect(() => {
        if (mobileNavigation || showMobileBasket) {
            scrollBody('hidden');
        }
        else scrollBody('auto');
    }, [mobileNavigation, showMobileBasket])

    const toggleBasketMobile = () => {
        toggleBasket(false);
        setShowMobileBasket(true);
    }

    return (
        <Background >
            <Container>
                {showBasketIcon && <BasketIcon onClick={() => toggleBasket(false)}>

                    <svg width="42" height="37" viewBox="0 0 164 144" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M159.135 42.2846C158.787 42.2255 158.434 42.198 158.08 42.203H138.622V5.86158C138.622 2.62435 136.009 0 132.785 0H31.2145C27.9907 0 25.3772 2.62435 25.3772 5.86158V42.2034H5.91927C2.69579 42.1579 0.0457977 44.7453 0.000573272 47.9821C-0.00436721 48.337 0.0226154 48.6915 0.0819012 49.0419L15.0645 139.115C15.5441 141.966 18.0227 144.04 20.9018 143.999H143.097C145.977 144.04 148.455 141.966 148.935 139.115L163.917 49.0419C164.455 45.8497 162.314 42.8246 159.135 42.2846ZM43.473 114.105L37.441 74.8328L48.9212 73.0743L54.9531 112.347L43.473 114.105ZM87.837 113.324H76.1622V73.8559H87.837V113.324ZM120.526 114.301L109.046 112.542L115.078 73.2697L126.558 75.0282L120.526 114.301ZM37.0519 42.2034V11.7232H126.947V42.2034H37.0519Z" fill="white" />
                    </svg>

                    {!!counBasketProducts && <div className="container-count">
                        <p className='count'>{counBasketProducts}</p>
                    </div>}

                </BasketIcon>}
                <BasketOpen open={showMobileBasket}>
                    <BasketContainer query={query} setShowMobileBasket={setShowMobileBasket} />
                </BasketOpen>
                <Menu>
                    <Navigation open={mobileNavigation}>
                        <ClouseMobileNav onClick={() => setMobileNavigation(false)} >
                            <svg width="20px" height="20px">
                                <path fillRule="evenodd" fill="rgb(255, 255, 255)"
                                    d="M2.858,19.993 L0.002,17.139 L7.146,9.999 L-0.002,2.855 L2.851,0.003 L9.999,7.148 L17.143,0.008 L19.998,2.862 L12.854,10.001 L20.000,17.144 L17.147,19.995 L10.001,12.853 L2.858,19.993 Z" />
                            </svg>
                        </ClouseMobileNav>
                        <div>
                            <h1>Меню на вынос</h1>
                            <ul>
                                {category.map((link, index) => {
                                    return (
                                        <LinkNav active={link.url === activeLink} key={index}>
                                            <Link href={`/menu-out-side/${link.url}`}>
                                                <a>{link.title}</a>
                                            </Link>
                                        </LinkNav>
                                    )
                                })}

                            </ul>
                        </div>
                    </Navigation>

                    <ContainerProduct>

                        <h2>{title}</h2>
                        {prelouder && <Prelouder />}
                        <ListCardProduct prelouder={prelouder}>
                            {products && products.map((product, index) => {
                                return (
                                    <CardProduct
                                        min_portion={+product.min_portion}
                                        key={`${index}-${product.id}-${product.title}-${product.category_url}`}
                                        image={product.picture}
                                        title={product.title}
                                        price={product.price}
                                        unit={product.unit}
                                        portion={product.portion}
                                        id={product.id} />
                                )
                            })}

                        </ListCardProduct>
                    </ContainerProduct>
                </Menu>
            </Container>
            <MobileNavigation>
                <button onClick={() => setMobileNavigation(true)}>
                    <i>
                        <svg width="24" height="17" viewBox="0 0 24 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23.5 12.334H0.500016C0.223641 12.334 0 12.5576 0 12.834V13.335C0 14.0874 0.220688 14.8164 0.638672 15.4434C1.01025 16.001 1.63233 16.334 2.30273 16.334H21.6973C22.3672 16.334 22.9898 16.001 23.3618 15.4429C23.7793 14.8159 24 14.0874 24 13.335V12.834C24 12.5576 23.7764 12.334 23.5 12.334Z" fill="white" />
                            <path d="M2.20082 11.334H21.7994C21.9494 11.334 22.0914 11.2666 22.1866 11.1504C22.2814 11.0342 22.3194 10.8813 22.2897 10.7344C21.3933 6.32161 17.7507 3.0157 13.3727 2.4345C13.4537 2.25028 13.5001 2.04773 13.5001 1.83398C13.5001 1.00683 12.8272 0.333984 12.0001 0.333984C11.1729 0.333984 10.5001 1.00683 10.5001 1.83398C10.5001 2.04773 10.5465 2.25033 10.6274 2.4345C6.24951 3.0157 2.60695 6.32161 1.7106 10.7344C1.68084 10.8813 1.7189 11.0342 1.81363 11.1504C1.90884 11.2666 2.05091 11.334 2.20082 11.334ZM4.63785 8.58352C5.49041 7.10939 6.7492 5.93606 8.27751 5.19094C8.52749 5.06887 8.82585 5.17289 8.94595 5.42091C9.06702 5.66897 8.96399 5.96827 8.71598 6.08934C7.36734 6.74756 6.25602 7.78317 5.50307 9.08447C5.41077 9.24464 5.24282 9.33398 5.06995 9.33398C4.98496 9.33398 4.89904 9.31251 4.81996 9.26658C4.58118 9.12844 4.49915 8.82277 4.63785 8.58352Z" fill="white" />
                        </svg>
                    </i>
                    Категории меню
                </button>

                <div className="wraper-icon-mobile">
                    <BasketIconMobile onClick={toggleBasketMobile}>

                        <svg width="29" height="25" viewBox="0 0 164 144" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M159.135 42.2846C158.787 42.2255 158.434 42.198 158.08 42.203H138.622V5.86158C138.622 2.62435 136.009 0 132.785 0H31.2145C27.9907 0 25.3772 2.62435 25.3772 5.86158V42.2034H5.91927C2.69579 42.1579 0.0457977 44.7453 0.000573272 47.9821C-0.00436721 48.337 0.0226154 48.6915 0.0819012 49.0419L15.0645 139.115C15.5441 141.966 18.0227 144.04 20.9018 143.999H143.097C145.977 144.04 148.455 141.966 148.935 139.115L163.917 49.0419C164.455 45.8497 162.314 42.8246 159.135 42.2846ZM43.473 114.105L37.441 74.8328L48.9212 73.0743L54.9531 112.347L43.473 114.105ZM87.837 113.324H76.1622V73.8559H87.837V113.324ZM120.526 114.301L109.046 112.542L115.078 73.2697L126.558 75.0282L120.526 114.301ZM37.0519 42.2034V11.7232H126.947V42.2034H37.0519Z" fill="white" />
                        </svg>

                        {!!counBasketProducts && <div className="container-count">
                            <p className='count'>{counBasketProducts}</p>
                        </div>}

                    </BasketIconMobile>
                </div>
            </MobileNavigation>
        </Background >
    )
}

const mapStateToProps = (state) => ({
    productsBasket: state.basket.products,
    clouseBasket: state.basket.clouseBasket,
})

export default connect(mapStateToProps, { toggleBasket })(MenuOutSide);

const ClouseMobileNav = styled.i`
    display: none;
    @media (max-width: 760px){
        display: block;
        position: absolute;
        right: 30px;
    }
`;

const MobileNavigation = styled.div`
    user-select: none;
    display: none;
    @media (max-width: 760px){
        position: fixed;
        bottom: 0;
        width: 100%;
        height: 80px;
        background: white;
        z-index: 5;
        padding: 0 15px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        button {
            background-color: rgb(36, 36, 36);
            box-shadow: 0px 3px 7px 0px rgba(0, 0, 0, 0.4);
            width: 206px;
            height: 51px;
            border-radius: 25px;
            border: none;
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        i {
            margin-right: 10px;
        }

        .wraper-icon-mobile {
            width: 78px;
            height: 70px;
        }

    }
    
`;

const BasketIconMobile = styled.div`
    user-select: none;
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
`;


const BasketOpen = styled.div`
    position: fixed;
    top: 180px;
    right: 20px;
    z-index: 2;

    @media (max-width: 760px){
        top: 0;
        right: ${props => props.open ? '0' : '-100%'};
        z-index: 21;
        width: 100%;
        height: 100%;
        transition: all 0.5s;
        transition-timing-function: cubic-bezier(0.7, 0, 0.3, 1);
    }
`;


const BasketIcon = styled.div`
    user-select: none;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-image: -moz-linear-gradient( 90deg, rgb(208,17,18) 0%, rgb(233,50,38) 100%);
    background-image: -webkit-linear-gradient( 90deg, rgb(208,17,18) 0%, rgb(233,50,38) 100%);
    background-image: -ms-linear-gradient( 90deg, rgb(208,17,18) 0%, rgb(233,50,38) 100%);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    position: fixed;
    top: 180px;
    right: 50px;
    z-index: 2;

    svg {
        user-select: none;
    }

    .container-count {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: white;
        width: 36px;
        height: 36px;
        border-radius: 50%;
        right: 0px;
        bottom: -7px;
        box-shadow: -3.41px 3.657px 8.19px 0.81px rgba(18, 18, 18, 0.27);

        p {
            font-weight: 900;
            color: #1e1d1d;
            position: relative;
            top: 2px;
        }
    }
    
    @media (max-width: 760px) {
        display: none;
    }
`;

const Menu = styled.div`
    display: flex;
`;

const ListCardProduct = styled.ul`
    margin-top: 50px;
    display: flex;
    flex-wrap: wrap; 
    margin-left: -15px;  
    margin-right: -15px;
    transition-duration: .5s;
    opacity: ${props => props.prelouder ? '.5' : '1'};

    @media (max-width: 760px) {
        margin-top: 20px;
    }

`;

const ContainerProduct = styled.div`
    user-select: none;
    width: 100%;
    background-color: #dddddd;
    padding: 75px 0;
    padding-left: 30px;
    position: relative; 
    h2 {
        color: #1e1d1d;
        font-size: 30px;
        font-weight: 900;
        display: flex;
        align-items: center;
        line-height: 120%;

        ::before {
            content: '';
            display: block;
            width: 10px;
            height: 35px;
            background: #c32222;
            margin-right: 10px;
        }
    }


    @media (max-width: 760px) {
        padding: 15px;
    }
`;

const Background = styled.div`
    background: url('/img/menu/background.jpg') repeat-y center;
    @media (max-width: 760px){
        background: #dddddd;
    }
`;

const LinkNav = styled.li`
    a {
        font-size: 20px;
        color: ${props => props.active ? '#ce1a1a' : '#c2c2c2'};
        font-weight: ${props => props.active ? '600' : '400'};
        padding-left: 20px;
        display: block;
        padding-top: 12px;
        padding-bottom: 12px;
        clip-path: polygon(0% 0%, 96% 0, 100% 50%, 96% 100%, 0% 100%);
        max-width: 360px;
        background: ${props => props.active ? 'white' : 'none'};

        :hover {
            color: ${props => props.active ? '#ce1a1a' : 'white'}
        }
    }

    @media (max-width: 760px) {
        a {
            color: ${props => props.active ? '#ce1a1a' : 'white'};
        }
    }
`;

const Navigation = styled.nav`
    background-color: #ce1a1a;
    padding: 80px 0;
    width: 270px;
    min-width: 270px;


    ul {
        padding-right: 20px;
        
        
    }

    h1 {
        color: white;
        font-size: 30px;
        font-weight: 900;
        margin-bottom: 35px;
    }
    
    @media (max-width: 760px){
        position: fixed;
        top:0;
        left: ${props => props.open ? '0' : '-100%'};
        width: 100%;
        height: 100%;
        z-index: 20;
        padding-left: 30px;
        padding-right: 30px;
        padding-top: 50px;
        transition: all 0.5s;
        transition-timing-function: cubic-bezier(0.7, 0, 0.3, 1);
    }
`;
