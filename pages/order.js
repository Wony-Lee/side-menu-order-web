import React, { useEffect } from 'react'
import styled from '@emotion/styled'
import AppLayout from '../components/AppLayout'
import { useSelector } from 'react-redux';

const OrderLayout = styled.div`
    width:100%;
    text-align: right2;

    border:1px solid red;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .image-box {
        width:400px;
        height:400px;
        border:1px solid red;

    }
    .product-box {
        display:flex;
        flex-direction: column;
        align-items: center;
        width:400px;
        border:1px solid blue;
    }
`

const order = () => {

    const { menuItem } = useSelector(state => state.modal)

    return (
        <AppLayout>
            <OrderLayout>
                <div className="image-box">
                    <p>{menuItem.image}</p>
                </div>
                <div className="product-box">
                    <p>
                        상품 : {menuItem.title}
                    </p>
                    <p>설명 : {menuItem.desc} </p>
                    <p>가격 : {menuItem.price} 원</p>
                    <p>갯수 : {menuItem.count} 개</p>
                </div>
            </OrderLayout>
        </AppLayout>
    )
}

export default order