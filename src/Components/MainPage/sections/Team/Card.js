import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import logo from './../../../../assets/ToolsAssets/tuz.png'
import balu from './../../../../assets/Tomas.png'



const Item = styled.div`
    width:17vw;
    height: 33vh;
    padding: 0vh 0vw;
    color: #DD6B20;
    margin: 6vh 4vw;
    position: relative;
    justify-content: center;
    align-items: center;

    border: 0px solid ${props => props.theme.text};
    border-radius: 20px;
    @media (max-width: 64em) {
        width: 40vw;
        height: 30vh;
        margin: 0;
    }
`
const ImageContainer = styled.div`
    width: 13vw;
    height: 29vh;
    margin: 0 1.6vw;
    color: ${props => props.theme.body};
    border-radius: 20px;
    cursor: pointer;
    transition: all 0.5s ease;
    overflow: hidden;
    border: 2px solid white;
    @media (max-width: 64em) {
        width: 40vw;
        height: 30vh;
        margin: 0;
    }

    :hover img{
        //transform: scale(1.25);
    }
    :hover {
        //border: 0px;
    }
    img{
        width:100%;
        height: auto;
        border-radius: 20px;
        transition: all 0.5s ease;
    }
    card{
        opacity:0;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 20px;
        border: 0px solid black;
        position:absolute;
        bottom:3.8vh;
        width: 13.6vw;
        height: 29vh;
        left:50%;
        transform:translate(-50%, 0);
        transition: 0.5s;
        font-size:${props => props.theme.fontlg};
        background-color:rgba(0, 0, 0, 1);
        justify-content: center;
        align-items: center;
        color:#fff;
    }
    :hover card{
        opacity: 1;
    }

`

const Name = styled.h2`
    font-size: ${props => props.theme.fontlg};
    display:flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    color: white;
    margin: 1rem;
    @media (max-width: 64em) {
        font-size: 4vw;
        align-self: center;
        text-align: center;
        color: black;
    }
`
const Position = styled.h2`
    font-size: ${props => props.theme.fontmd};
    display:flex;
    align-items: center;
    justify-content: center;
    text-transform: capitalize;
    color: white;
    opacity: 0.8;
    margin: 1rem;
    font-weight: 400;
    @media (max-width: 64em) {
        font-size: 3vw;
        align-self: center;
        text-align: center;
        color: black;
    }
`



function Card(link, position, name) {
    return (
        <Item>
            <ImageContainer>
                <img src={balu} alt="image" />
                <card>
                    Text
                </card>
            </ImageContainer>
            <Name>
                Balu
            </Name>
            <Position>
                Founder
            </Position>
        </Item>
    );
}

export default Card;