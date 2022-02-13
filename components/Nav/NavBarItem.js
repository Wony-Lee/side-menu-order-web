import React from 'react'
import styled from '@emotion/styled';

const NavBarItemUl = styled.ul`
    display:flex;
    align-items: center;
    justify-content: center;
    width:100%;
    & li {
        width:${props => props.size}%;
    }
`;

const NavBarItem = () => {
    const menuSample = [{
        name: '1번'
    }, {
        name: '2번'
    }, {
        name: '3번'
    }, {
        name: '4번'
    }]
    return (
        <NavBarItemUl size={`${100 / menuSample.length}`}>
            {
                menuSample.map(item => (<li key={item.name}>{item.name}</li>))
            }
        </NavBarItemUl>
    )
}

export default NavBarItem
