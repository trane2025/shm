import React from 'react';
import styled from 'styled-components';

function PrelouderSection() {
    return (
        <Container>
            <svg xmlns="https://www.w3.org/2000/svg" version="1.0" width="150px" height="150px" viewBox="0 0 128 128" ><g><circle cx="16" cy="64" r="16" fill="#ce1a1a" fillOpacity="1" /><circle cx="16" cy="64" r="14.344" fill="#ce1a1a" fillOpacity="1" transform="rotate(45 64 64)" /><circle cx="16" cy="64" r="12.531" fill="#ce1a1a" fillOpacity="1" transform="rotate(90 64 64)" /><circle cx="16" cy="64" r="10.75" fill="#ce1a1a" fillOpacity="1" transform="rotate(135 64 64)" /><circle cx="16" cy="64" r="10.063" fill="#ce1a1a" fillOpacity="1" transform="rotate(180 64 64)" /><circle cx="16" cy="64" r="8.063" fill="#ce1a1a" fillOpacity="1" transform="rotate(225 64 64)" /><circle cx="16" cy="64" r="6.438" fill="#ce1a1a" fillOpacity="1" transform="rotate(270 64 64)" /><circle cx="16" cy="64" r="5.375" fill="#ce1a1a" fillOpacity="1" transform="rotate(315 64 64)" /><animateTransform attributeName="transform" type="rotate" values="0 64 64;315 64 64;270 64 64;225 64 64;180 64 64;135 64 64;90 64 64;45 64 64" calcMode="discrete" dur="720ms" repeatCount="indefinite"></animateTransform></g></svg>
        </Container>
    )
}

export default PrelouderSection;

const Container = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    background-color: rgba(224, 224, 224, 0.712);
`;