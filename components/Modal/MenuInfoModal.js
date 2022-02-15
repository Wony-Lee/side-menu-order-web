import React from 'react'
import styled from '@emotion/styled'

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
    return (
        <MenuInfoLayout modalState={modalState} onClick={onClick}>
            <Content>
                <div className="image-box">
                    <p>image</p>
                </div>
                <div className="content-box">
                    <p>대충 설명</p>
                    <p>가격</p>
                </div>
                <div className="button-box">
                    <button>주문하기</button>
                </div>
            </Content>
        </MenuInfoLayout>
    )
}

export default React.memo(MenuInfoModal)
