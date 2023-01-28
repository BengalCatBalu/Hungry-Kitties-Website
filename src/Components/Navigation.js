import React from 'react';
import styled from 'styled-components';
import { useRef, useState } from 'react';
import { Menu, MenuItem, ControlledMenu } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import { ConnectButton, useWallet } from '@suiet/wallet-kit';
//import './../Styles/suiet-wallet-kit-custom.css'

import logo from './../assets/logo.png'
import Button from './Button';
import Home from './MainPage/sections/Home/Home';


const Section = styled.section`
    width:95vw;
    margin-left: 2.5vw;
    margin-top: 2vh;
    background-color: #DD6B20;
    overflow: visible;
    justify-self: center;
    border-radius: 40px;
`

const NavBar = styled.nav`
    display:flex;
    justify-content: space-between;
    align-items: center;
    width:85%;
    height:${props => props.theme.navHeight};
    margin: 0 auto;
    img{
        width: 8rem;
        height: 8rem;
        margin-left: -5.5vw;
    }

`;

const Menu1 = styled.ul`
    display:flex;
    justify-content:space-between;
    align-items:center;
    list-style: none;
`

const MenuItem1 = styled.li`
    margin:0 1rem;
    color:${props => props.theme.text};
    cursor:pointer;
    margin-top: 1vh;
    font-size: ${props => props.theme.fontlg};
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
const BigMenuItem1 = styled.li`
    margin:0 1rem;
    color:${props => props.theme.body};
    cursor:pointer;
    margin-top: 0.2vh;
    font-size: ${props => props.theme.fontlg};
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

const Navigation = () => {

    const ref = useRef(null);
    const [isOpen, setOpen] = useState();
    const [display, setDisplay] = useState('arrow');
    const ref1 = useRef(null);
    const [isOpen1, setOpen1] = useState();
    const [display1, setDisplay1] = useState('arrow');
    const wallet = useWallet();
    function Disconnect() {
        wallet.disconnect();
    }

    const scrollTo  =(id) => {
        let element = document.getElementById(id);
        element.scrollIntoView({
            behavior: 'smooth', 
            block: 'start',
            inline: 'nearest',
        })
    }

    return (
        <>
            <Section>
                <NavBar>
                    <img src={logo} alt="logo" />
                    <Menu1>
                        <BigMenuItem1>
                            <a href='/' ref={ref} className="btn" onPointerEnter={() => setOpen(true)}> <Btn>
                                    Home
                            </Btn> </a>
                            <ControlledMenu
                                state={isOpen ? 'open' : 'closed'}
                                anchorRef={ref}
                                arrow={true}
                                onPointerLeave={() => setOpen(false)}
                                onClose={() => setOpen(false)}
                                offsetY={display === 'arrow'
                                    ? 15 : 0}
                            >
                                <MenuItem1 onClick={() => scrollTo("about")}>About</MenuItem1>
                                <MenuItem1 onClick={() => scrollTo("shelters")}>Shelters</MenuItem1>
                                <MenuItem1 onClick={() => scrollTo("whitepaper")}>Whitepaper</MenuItem1>
                                <MenuItem1 onClick={() => scrollTo("tools")}>Tools</MenuItem1>
                                <MenuItem1 onClick={() => scrollTo("team")}>Team</MenuItem1>
                                <MenuItem1 onClick={() => scrollTo("partners")}>Partners</MenuItem1>
                                <MenuItem1 onClick={() => scrollTo("FAQ")}>FAQ</MenuItem1>
                            </ControlledMenu>
                        </BigMenuItem1>
                        <BigMenuItem1><a href='/roadmap'><Btn>
                                    Roadmap
                            </Btn></a></BigMenuItem1>
                        <BigMenuItem1><a href='/tools' ref={ref1} className="btn" onPointerEnter={() => setOpen1(true)}> <Btn>
                                    Tools
                            </Btn> </a>
                            <ControlledMenu
                                state={isOpen1 ? 'open' : 'closed'}
                                anchorRef={ref1}
                                arrow={true}
                                onPointerLeave={() => setOpen1(false)}
                                onClose={() => setOpen1(false)}
                                offsetY={display1 === 'arrow'
                                    ? 15 : 0}
                            >
                                <MenuItem1 onClick={() => scrollTo("mintnft")}> Mint Our NFT </MenuItem1>
                                <MenuItem1 onClick={() => scrollTo("paysui")}>Pay Sui</MenuItem1>
                                <MenuItem1 onClick={() => scrollTo("objects")}> Objects</MenuItem1>
                                <MenuItem1 onClick={() => scrollTo("tools-github")}> Check our Github</MenuItem1>
                            </ControlledMenu></BigMenuItem1>
                    </Menu1>
                    <ConnectButton />
                </NavBar>
            </Section>
        </>
    );
};

export default Navigation;