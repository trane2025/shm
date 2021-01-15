import React from 'react';
import styled from 'styled-components';


function Select(props) {

    const onChangeSelect = (event) => {
        props.method(event);
    }

    return (
        <SelectWraper>
            <label htmlFor={props.label}>{props.label}</label>
            <select name="" id={props.label} onChange={event => onChangeSelect(event.target.value)}>
                {props.options.map((item, index) => {
                    return (
                        <option key={index} value={item.value}>{item.value}</option>
                    )
                })}

            </select>
        </SelectWraper>
    )
}

export default Select;

const SelectWraper = styled.div`

    label {
        display: block;
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;
        color: #562F2F;
        margin-bottom: 10px;
    }

    select {
        width: 370px;
        height: 45px;
        font-size: 16px;
        padding-left: 20px;
        padding-right: 20px;
        border-radius: 0;
        border: none;
        outline: 1px solid rgb(211, 211, 211);
        transition-duration: .2s;
    }

    @media (max-width: 760px){
        select {
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

