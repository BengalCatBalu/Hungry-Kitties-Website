import React from 'react';
import styled, { keyframes } from 'styled-components';
import picture2 from './../../assets/ToolsAssets/tools.png'
import 'react-toastify/dist/ReactToastify.css';
import Button from '../Button';
import Typewriter from 'typewriter-effect'


const Section = styled.section`
min-height: 27vh;
width:100vw;
margin-top: 0vh;
position: relative;
background-color:${props => props.theme.body};
img{
    width: 100%;
    height: auto;
}
`

function Phase12() {
    return (
        <Section>
            <img src = "https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmdMkJNvcnFs5yfi4Ls6YL54hQBdb5yxhcddEs9nCFTmqZ"/>
        </Section>
    );
}

export default Phase12;