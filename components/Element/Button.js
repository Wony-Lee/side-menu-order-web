import React from 'react'
import styled from '@emotion/styled'

const ButtonElement = styled.button`
    max-width:90px;
    height:40px;
    width:100%;
    background-color:hotpink;
    border-radius: 16px;
    color:white;
    font-size:18px;
    font-weight: bold;
`;

const Button = ({ children, onClick }) => {
    return (
        <ButtonElement onClick={onClick}>
            {children}
        </ButtonElement>
    )
}

export default Button;
