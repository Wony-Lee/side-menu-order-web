import React from 'react'
import NavBarItem from './NavBarItem'
import styled from '@emotion/styled'

const NavBarLayout = styled.div`
    display:flex;
    align-items:center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
`;

const ImageBlock = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    width:100%;
    height:50px;
`;

const NavBarItemUl = styled.ul`
    display:flex;
    align-items: center;
    justify-content: center;
    width:100%;
    & li {
        display:flex;
        align-items: center;
        justify-content: center;
        width:${props => props.size}%;
        height:50px;
        background-color:hotpink;
        box-sizing: border-box;
        & > p {
            padding:10px;
            color:white;            
            cursor: pointer;
            &:hover {
                color:black;
            }
        }
    }
`;

const NavBar = () => {
    const menuSample = [{
        name: 'caffeine'
    }, {
        name: 'caffeine(none)'
    }, {
        name: 'ade'
    }, {
        name: 'dessert'
    }]
    return (
        <NavBarLayout>
            <ImageBlock>logo</ImageBlock>
            <NavBarItemUl size={`${100 / menuSample.length}`}>
                {
                    menuSample.map(item => (<NavBarItem key={item.name} item={item} />))
                }
            </NavBarItemUl>
        </NavBarLayout>
    )
}

export default React.memo(NavBar)
