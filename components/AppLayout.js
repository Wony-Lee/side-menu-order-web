import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SET_CLOSE_MODAL, SET_OPEN_MODAL } from '../reducer/modalReducer';
import styled from '@emotion/styled'
import NavBar from './Nav/NavBar'
import MenuInfoModal from './Modal/MenuInfoModal';

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
    return (
        <Layout>
            <NavBar />
            <Content>
                {children}
            </Content>
            <MenuInfoModal />
        </Layout>
    )
}

export default AppLayout
