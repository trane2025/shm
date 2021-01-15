import React from 'react';
import styled from 'styled-components';

function Container(props) {
    return (
        <StyleContainer>
            {props.children}
        </StyleContainer>
    )
}

export default Container;

const StyleContainer = styled.div`
    max-width: 1200px;
    margin-right: auto;
    margin-left: auto;
    padding-right: 15px;
    padding-left: 15px;
    position: relative;
    @media (max-width: 760px) {
        padding: 0;
    }
   
`;
