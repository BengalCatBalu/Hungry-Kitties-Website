import React from 'react';
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import styled from 'styled-components';

const Section = styled.section`
min-height: 90vh;
width:90vw;
margin-left: 5vw;
margin-top: 5vh;
margin-bottom: 5vh;
border-radius: 50px;

position: relative;
//background-image: url("https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmdD2PSpBhQbR1LSgGtCj3HG9vuAg4XJFRaL3GxDFTbZpS");
background-size: 100vw auto;
`

function Paralax() {
    return (
        <Section>
            <Parallax pages={2} style={{ top: '0vh', left: '0'}}>
                <ParallaxLayer offset={0} speed={0.5} style={{ opacity: 1, backgroundImage: `url("https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmdD2PSpBhQbR1LSgGtCj3HG9vuAg4XJFRaL3GxDFTbZpS")` }}>
                    <img
                        alt="cloud"
                        src="https://freepngimg.com/thumb/cloud/7-cloud-png-image.png"
                        style={{ width: "50%", marginLeft: "20%" }}
                    />
                </ParallaxLayer>
                <ParallaxLayer offset={1} speed={0} style={{ opacity: 0.5, backgroundColor: "black", display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white' }}>
                    Some Text
                </ParallaxLayer>
            </Parallax>
        </Section >
    );
}

export default Paralax;