import React from 'react';
import styled from 'styled-components'
import logo from './../assets/ToolsAssets/tuz.png'
import Button from './Button';

const Section = styled.section`
    width:90vw;
    margin-left: 5vw;
    border-radius: 40px;
    height:50vh;
    position: relative;
    border-top: 2px solid ${props => props.theme.text};

    background-color: ${props=>`rgba(${props.theme.textRgba}, 0.9)`};
    display: flex;
    justify-content: center;
    align-items: center;

    overflow: hidden;

`
const ButtonContainer = styled.div`
    width: 35%;
    display: flex;
    justify-content: flex-end;
    font-size: ${props=>props.theme.fontxxxl};

`

const ImgContainer = styled.div`
    width:100vw;
    position: absolute;
    top:50%;
    left:50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0.2;

    img{
        width: 30vw;
        height: auto;
    }
`

const Title = styled.h1`
    font-size: ${props=>props.theme.fontxxl};
    color: ${props=>props.theme.body};
    padding: 1rem 2rem;
    z-index: 10;
    width: 35%;
`
const Btn = styled.button`
    display: inline-block;
    background-color: ${props => props.theme.text};
    color: ${props => props => props.theme.body};
    outline: none;
    border: none;
    white-space: nowrap;
    font-size: ${props => props.theme.fontlg};
    justify-items: center;
    align-items: center;
    padding: 0.9rem 2.5rem;
    border-radius: 50px;
    cursor:pointer;
    position: relative;

    transition: all 0.2s ease;


    &:hover{
        transform: scale(0.9);
    }
`

function Banner() {
    return (
        <Section>
            <ImgContainer>
                <img src = {logo} alt = "The Hungry Kitties"/>
                <img src = {logo} alt = "The Hungry Kitties"/>
                <img src = {logo} alt = "The Hungry Kitties"/>
                <img src = {logo} alt = "The Hungry Kitties"/>
                <img src = {logo} alt = "The Hungry Kitties"/>
                <img src = {logo} alt = "The Hungry Kitties"/>
            </ImgContainer>
            <Title>
                Join the <br/> Hungry Kitties Club 
            </Title>
            <ButtonContainer>
                <Btn>
                    Join us
                </Btn>
            </ButtonContainer>
        </Section>
    );
}

export default Banner;