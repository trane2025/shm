import React from 'react';
import styled from 'styled-components';

function TextArea(props) {



    return (
        <TextAreaStyle>
            <label htmlFor={props.label}>{props.label}</label>
            <textarea
                type={props.type}
                id={props.label}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange} />
        </TextAreaStyle>
    )
}

export default TextArea;


const TextAreaStyle = styled.div`
    margin-bottom: 30px;

    label {
        display: block;
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;
        color: #562F2F;
        margin-bottom: 10px;
    }

    textarea {
        width: 470px;
        resize: vertical;
        min-height: 160px;
        font-size: 16px;
        padding-top: 15px;
        padding-left: 20px;
        padding-right: 20px;
        border-radius: 0;
        border: none;
        outline: 1px solid  rgb(211, 211, 211);
        transition-duration: .2s;
        

        :focus {
            outline: 1px solid #5B1717;
        }
    }

    @media (max-width: 760px){
        margin-bottom: 15px;

        textarea {
            width: 260px;
            min-height: 100px;
            font-size: 14px;
        }

        label {
            font-size: 14px;
            margin-bottom: 5px;
        }
    }
`;

