import React from 'react';
import styled from 'styled-components';

function Button(props) {
    return (
        <StyleBtn onClick={props.onClick} type={props.type}>
            {props.children}
        </StyleBtn>
    )
}

export default Button;

const StyleBtn = styled.button`
    border-radius: 23px;
    background-image: -moz-linear-gradient( 90deg, rgb(208,17,18) 0%, rgb(233,50,38) 100%);
    background-image: -webkit-linear-gradient( 90deg, rgb(208,17,18) 0%, rgb(233,50,38) 100%);
    background-image: -ms-linear-gradient( 90deg, rgb(208,17,18) 0%, rgb(233,50,38) 100%);
    border: none;
    width: 175px;
    height: 46px;
    color: white;
    cursor: pointer;
    transition-duration: .3s;

    :hover {
        box-shadow: 0px 8px 12.61px 0.39px rgba(18, 18, 18, 0.59);
    }
`;
