import React, { useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from '@emotion/styled'
import MenuItem from './MenuItem'
import OrderSideBar from './OrderSideBar';
import { SET_CLOSE_MODAL, SET_OPEN_MODAL } from '../../reducer/modalReducer';

const Layout = styled.div`
    display:flex;
    width:100%;
    flex-wrap:wrap;
`;
const MenuList = () => {
    const sampleData = [
        {
            title: 'title1',
            desc: 'desc1',
            price: '1,000',
            image: 'image1',
        },
        {
            title: 'title2',
            desc: 'desc2',
            price: '2,000',
            image: 'image2',
        },
        {
            title: 'title3',
            desc: 'desc3',
            price: '3,000',
            image: 'image3',
        },
        {
            title: 'title4',
            desc: 'desc4',
            price: '4,000',
            image: 'image4',
        },
    ]
    const { modalState } = useSelector(state => state.modal)
    const dispatch = useDispatch()
    const handleOpenMenuOrder = useCallback(() => {
        dispatch({
            type: SET_OPEN_MODAL
        })
    }, [])
    const handleCloseMenuOrder = useCallback(() => {
        dispatch({
            type: SET_CLOSE_MODAL
        })
    })
    return (
        <Layout>
            {
                sampleData.map(item => (<MenuItem item={item} key={item.title} onClick={handleOpenMenuOrder} />))
            }
        </Layout>
    )
}

export default MenuList
