import React, { useCallback, useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { useSelector, useDispatch } from 'react-redux';
import Router from 'next/router'
import Button from '../Element/Button';
import { MENU_COUNT_UP } from '../../reducer/modalReducer';

const MenuInfoLayout = styled.div`
    display:${props => props.modalState ? 'block' : 'none'};
    width:100%;
    position:absolute;
    height:100%;
    right:0;
    background:rgba(0,0,0,0.5);
`;

const Content = styled.div`
    display:flex;
    flex-direction: column;

    max-width:500px;
    width:100%;
    height:500px;
    
    padding:10px;

    position:absolute;
    left:50%;
    top:50%;
    transform: translate(-50%, -50%);

    background:white;
    border-radius: 16px;
    color:black;

    box-sizing:border-box;

    .image-box {
        display:flex;
        justify-content: center;
        height:60%;
        margin-bottom:20px;
        border:1px solid red;
    }
    .content-box {
        display:flex;
        flex-direction: column;
        align-items: center;
        margin-bottom:20px;
        & p {
            margin-bottom:10px;
            &:last-of-type {
                margin-bottom:0;
            }
        }
    }
    .button-box {
        display:flex;
        justify-content: center;
    }
`;

const MenuInfoModal = ({ modalState, onClick }) => {
    const { menuItem } = useSelector(state => state.modal)


    const dispatch = useDispatch()
    const handleMenuOrder = useCallback(() => {
        Router.push('/order')
    }, [])

    return (
        <MenuInfoLayout modalState={modalState}>
            <Content>
                <div className="image-box">
                    <p>{menuItem.image}</p>
                </div>
                <div className="content-box">
                    <p>상품 : {menuItem.title}</p>
                    <p>설명 : {menuItem.desc}</p>
                    <p>가격 : {parseInt(menuItem.price) * parseInt(menuItem.count)} 원</p>
                    <p>주문 : {menuItem.count} 개</p>
                    <div>
                        <button
                            style={{ marginRight: 10 }}
                        >
                            up
                        </button>
                        <button>down</button>
                    </div>
                </div>
                <div className="button-box">
                    <Button onClick={handleMenuOrder}>주문하기</Button>
                    <Button onClick={onClick}>닫기</Button>
                </div>
            </Content>
        </MenuInfoLayout>
    )
}

export default React.memo(MenuInfoModal)
