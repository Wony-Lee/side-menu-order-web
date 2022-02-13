import React from 'react'
import styled from '@emotion/styled'

const Layout = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    width:25%;
    padding:10px;
    box-sizing: border-box;
    &:last-of-type {
    }
    &:first-of-type {
    }

    .image-box {
        width:80%;
        height:150px;
        border:1px solid red;
        margin-bottom:10px;
    }

    .product-info-box {
        width:80%;
        & p {
            text-align: center;
            font-size:18px;
            line-height: 24px;
        }
    }
    .button-box {
        display:flex;
        margin: 5px 0 5px 0;
        & button {
            margin-right:5px;
            &:last-of-type {
                margin-right:0;
                margin-left:5px;
            }
        }
    }
`;

const Button = styled.button`
    max-width:90px;
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
            <div className="image-box">
                <p>{image}</p>
            </div>
            <div className="product-info-box">
                <p>메뉴 : {title}</p>
                <p>설명 : {desc}</p>
                <p>가격 : {price}</p>
            </div>
            <div className="button-box">
                <Button>주문하기</Button>
                <Button>장바구니</Button>
            </div>
        </Layout>
    )
}

export default React.memo(MenuItem)
