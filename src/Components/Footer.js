import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Banner from './Banner';
import Facebook from './../Icons/Facebook'
import Twitter from './../Icons/Twitter'
import Whitepaper from '../Icons/Whitepaper';

import logo from './../assets/logo.png'



const Section = styled.div`
    min-height: 100vh;
    min-width: 100vw;
    background-color: ${props => props.theme.body};
    position: relative;
    display: flex;
    //justify-content: center;
    //align-items: center;
    flex-direction: column;
`

const Container = styled.div`
    width:90vw;
    height: 25vh;
    margin: 2rem auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid ${props=>props.theme.text};
`

const Left = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`

const IconsList = styled.div`
    display: flex;
    align-items: center;
    gap: 2vw;
    margin: 1rem auto;
`

const MenuItems = styled.ul`
    list-style: none;
    width: 50%;
    margin-bottom: 1vh;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-gap: 1rem;
`

const Item = styled.li`
    width: fit-content;
    cursor: pointer;

    &::after{
        content:' ';
        display: block;
        width:0%;
        height:2px;
        background: ${props => props.theme.text};
        transition:width 0.3s ease;
    }
    
    &:hover::after{
        width:100%;
    }

`
const ImageContainer = styled.div`
    width: 100%;
    height: 100%;

    img{
        width: 100%;
        height: auto;
    }
`
const Bottom = styled.div`
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

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


function Footer() {
    return (
        <Section>
            <Banner/>
            <Container>
                <Left>
                    <image src = {logo} alt = "logo"/>
                    <IconsList>
                        <Btn>
                            Twitter
                        </Btn>
                        <Btn>
                            Discord
                        </Btn>
                    </IconsList>
                </Left>
                <MenuItems>
                    <Item>
                        Home
                    </Item>
                    <Item>Whitepaper</Item>
                    <Item>Tools</Item>
                    <Item>Roadmap</Item>
                    <Item>Contact</Item>
                    <Item>Github</Item>
                    </MenuItems>
            </Container>
            <Bottom>
                <span>
                    &copy; 2023 Hungry Kitties. All rights reserved.
                </span>
                <span>
                    hungrykitties@gmail.com
                </span>
            </Bottom>
        </Section>
    );
}

export default Footer;