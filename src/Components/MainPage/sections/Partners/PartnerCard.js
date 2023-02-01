import React from 'react';
import styled from 'styled-components';
import logo from './../../../../assets/ToolsAssets/tuz.png'


const Item = styled.div`
    width: 16vw;
    height: 45vh;
    margin: 0vw;
    padding: 3vh;
    color: black;
    display: flex;
    flex-direction: column;
    position: relative;
    justify-content: center;
    align-items: center;
    transition: all 0.5s ease;

    :hover{
        transform: scale(1.1);
    }
    img{
        width:100%;
        height: auto;
        border-radius: 10px;
        transition: all 0.125s ease;
    }
    name{
        font-size: 1.5vw;
        color: ${props=>props.theme.white};
        @media (max-width: 64em) {
            font-size: 2vw;
            color: white;
    }
    }
    @media (max-width: 64em) {
        margin-left: 10vw;
        width: 20vw;
    }

`

function PartnerCard() {
    return (
        <Item>
                <img src={logo} alt="image" />
                <name>
                    The Best Cat In The World
                </name>
        </Item>
    );
}

export default PartnerCard;