import React from 'react'
import NavBarItem from './NavBarItem'
import styled from '@emotion/styled'

const NavBarLayout = styled.div`
    display:flex;
    align-items:center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    text-align: center;
`;

const ImageBlock = styled.div`
    width:100%;
`;

const NavBar = () => {
    return (
        <NavBarLayout>
            <ImageBlock>logo</ImageBlock>
            <NavBarItem />
        </NavBarLayout>
    )
}

export default NavBar
