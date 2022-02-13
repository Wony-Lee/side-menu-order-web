import React from 'react'
import styled from '@emotion/styled'

const Layout = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    width:25%;
    &:last-of-type {
    }
    &:first-of-type {
    }
`;

const Button = styled.button`
    max-width:120px;
    height:40px;
    width:100%;
    background-color:hotpink;
    border-radius: 16px;
    color:white;
    font-size:18px;
    font-weight: bold;
`;

const MenuItem = ({ item, onClick }) => {
    const { title, desc, price, image } = item;
    return (
        <Layout onClick={onClick}>
            <p>{title}</p>
            <p>{desc}</p>
            <p>{price}</p>
            <p>{image}</p>
            <Button>주문하기</Button>
        </Layout>
    )
}

export default MenuItem
