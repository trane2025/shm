import React from 'react';
import styled from 'styled-components';


function Success() {
    return (
        <Container>
            <WraperSuccess>
                <Title>Ваш заказ Оформлен!</Title>
                <SubTitle>Мы свяжемся с вами для уточнения деталей заказа!</SubTitle>
                <svg
                    width="137px" height="137px">
                    <defs>
                        <linearGradient id="PSgrad_0" x1="0%" x2="0%" y1="100%" y2="0%">
                            <stop offset="3%" stopColor="rgb(148,17,18)" stopOpacity="1" />
                            <stop offset="62%" stopColor="rgb(233,50,38)" stopOpacity="1" />
                            <stop offset="100%" stopColor="rgb(235,78,68)" stopOpacity="1" />
                        </linearGradient>

                    </defs>
                    <path fillRule="evenodd" fill="url(#PSgrad_0)"
                        d="M66.000,-0.000 C102.451,-0.000 132.000,29.549 132.000,66.000 C132.000,102.451 102.451,132.000 66.000,132.000 C29.549,132.000 -0.000,102.451 -0.000,66.000 C-0.000,29.549 29.549,-0.000 66.000,-0.000 Z" />
                    <path fillRule="evenodd" stroke="rgb(245, 245, 245)" strokeWidth="10px" strokeLinecap="butt" strokeLinejoin="miter" fill="none"
                        d="M87.993,55.523 L60.177,83.006 L44.004,67.027 " />
                </svg>
            </WraperSuccess>
        </Container>
    )
}

export default Success;

const Title = styled.h2` 
    font-size: 36px;
    font-weight: 900;
    letter-spacing: 0.03em;
    margin-bottom: 20px;
`;

const SubTitle = styled.p`
    width: 400px;
    font-weight: 400;
    font-size: 24px;
    text-align: center;
    letter-spacing: 0.03em;
    line-height: 124%;
    margin-bottom: 20px;
`;


const Container = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
    background-color: rgba(212, 212, 212, 0.774);
    z-index: 2;
`;

const WraperSuccess = styled.div`
    position: absolute;
    left: 50%;
    top:40%;
    transform: translate(-50%, -50%);
    background-color: rgb(247, 247, 247);
    box-shadow: 0px 2px 43px 0px rgba(0, 0, 0, 0.09);
    width: 630px;
    height: 359px;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

   
`;