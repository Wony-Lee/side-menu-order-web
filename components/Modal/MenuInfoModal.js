import React, { useCallback, useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { useSelector, useDispatch } from 'react-redux';
import Router from 'next/router'
import Button from '../Element/Button';
import { MENU_COUNT_UP, SET_CLOSE_MODAL } from '../../reducer/modalReducer';

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

const MenuInfoModal = () => {
    const { menuItem } = useSelector(state => state.modal)
    const { modalState } = useSelector(state => state.modal)
    const [menuCounter, setMenuCounter] = useState(1)

    const dispatch = useDispatch()
    const handleCloseMenuOrder = useCallback(() => {
        dispatch({
            type: SET_CLOSE_MODAL,
            payload: {}
        })
        setMenuCounter(1)
    }, [menuCounter])

    const handleMenuCountUp = useCallback(() => {
        setMenuCounter(prev => prev += 1)
    }, [menuCounter])
    const handleMnueCountDown = useCallback(() => {
        if (menuCounter > 1) {
            setMenuCounter(prev => prev -= 1)
        }
    }, [menuCounter])

    const handleMenuOrder = useCallback(() => {
        console.log('handleMenuOrder => ', menuItem)
        dispatch({
            type: SET_CLOSE_MODAL,
            payload: {
                ...menuItem,
                count: menuCounter,
                price: menuItem.price * menuCounter
            }
        })
        Router.push('/order')
    }, [menuCounter])

    return (
        <MenuInfoLayout modalState={modalState}>
            <Content>
                <div className="image-box">
                    <p>{menuItem.image}</p>
                </div>
                <div className="content-box">
                    <p>상품 : {menuItem.title}</p>
                    <p>설명 : {menuItem.desc}</p>
                    <p>가격 : {menuItem.price * menuCounter} 원</p>
                    <p>주문 : {menuCounter} 개</p>
                    <div>
                        <button
                            style={{ marginRight: 10 }}
                            onClick={handleMenuCountUp}
                        >
                            up
                        </button>
                        <button
                            onClick={handleMnueCountDown}
                        >
                            down
                        </button>
                    </div>
                </div>
                <div className="button-box">
                    <Button onClick={handleMenuOrder}>주문하기</Button>
                    <Button onClick={handleCloseMenuOrder}>닫기</Button>
                </div>
            </Content>
        </MenuInfoLayout>
    )
}

export default React.memo(MenuInfoModal)
