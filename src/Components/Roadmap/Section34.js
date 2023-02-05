import React from 'react';
import styled, { keyframes } from 'styled-components';
import picture2 from './../../assets/ToolsAssets/tools.png'
import 'react-toastify/dist/ReactToastify.css';
import Button from '../Button';
import Typewriter from 'typewriter-effect'


const Section = styled.section`
min-height: 25vh;
width:100vw;
margin-top: -1vh;
position: relative;
background-color:${props => props.theme.body};
img{
    width: 100%;
}
`

function Phase34() {
    return (
        <Section>
            <img src = "https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmbS34Df4g5UVFVnHGxQWKTApM921rmTQhxGuMUTf3jJtX"/>
        </Section>
    );
}

export default Phase34;