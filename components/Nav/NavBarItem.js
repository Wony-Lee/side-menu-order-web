import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import styled from '@emotion/styled';
import { SET_MENU_TAB } from '../../reducer/menuReducer';
import Router from 'next/router'


const NavBarItem = ({ item }) => {
    const { name } = item;
    const dispatch = useDispatch();
    const handleMenuTab = useCallback(() => {
        dispatch({
            type: SET_MENU_TAB,
            payload: name
        })
        Router.push('/')
        console.log('inner name', name)
    }, [name])
    return (
        <li><p onClick={handleMenuTab}>{name}</p></li>
    )
}

export default React.memo(NavBarItem)
