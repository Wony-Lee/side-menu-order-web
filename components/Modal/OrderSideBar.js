import React from 'react'
import styled from '@emotion/styled'

const SideLayout = styled.div`
    display:${props => props.modalState ? 'block' : 'none'};
    width:100%;
    position:absolute;
    height:100%;
    right:0;
    background:rgba(0,0,0,0.5);
`;

const OrderSideBar = ({ modalState, onClick }) => {
    return (
        <SideLayout modalState={modalState} onClick={onClick}>
            SideBar
        </SideLayout>
    )
}

export default React.memo(OrderSideBar)
