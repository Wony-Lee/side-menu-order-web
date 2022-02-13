import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SET_CLOSE_MODAL, SET_OPEN_MODAL } from '../reducer/modalReducer';
import styled from '@emotion/styled'
import NavBar from './Nav/NavBar'
import OrderSideBar from './Modal/OrderSideBar';

const Layout = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    width:100%;
`;
const Content = styled.div`
    width:100%;
    max-width:1280px;
`;

const AppLayout = ({ children }) => {
    const { modalState } = useSelector(state => state.modal)
    const dispatch = useDispatch()

    const handleCloseMenuOrder = useCallback(() => {
        dispatch({
            type: SET_CLOSE_MODAL
        })
    })
    return (
        <Layout>
            <NavBar />
            <Content>
                {children}
            </Content>
            <OrderSideBar modalState={modalState} onClick={handleCloseMenuOrder} />
        </Layout>
    )
}

export default AppLayout
