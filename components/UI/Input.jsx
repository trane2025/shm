import React from 'react';
import styled from 'styled-components';

function Input(props) {



    return (
        <InputStyle>
            <label htmlFor={props.label}>{props.label}</label>
            <input
                type={props.type}
                id={props.label}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange} />
        </InputStyle>
    )
}

export default Input;


const InputStyle = styled.div`

    label {
        display: block;
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;
        color: #562F2F;
        margin-bottom: 10px;
    }

    input {
        width: 370px;
        height: 45px;
        font-size: 16px;
        padding-left: 20px;
        padding-right: 20px;
        border-radius: 0;
        border: none;
        outline: 1px solid rgb(211, 211, 211);
        transition-duration: .2s;
        

        :focus {
            outline: 1px solid #5B1717;
        }
    }

    @media (max-width: 760px){
        input {
            width: 260px;
            height: 35px;
            font-size: 14px;
        }

        label {
            font-size: 14px;
            margin-bottom: 5px;
        }
    }
`;
