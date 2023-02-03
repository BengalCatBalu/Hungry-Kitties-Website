import React from 'react';
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import styled from 'styled-components';

const Section = styled.section`
min-height: 100vh;
width:100vw;

position: relative;
//background-image: url("https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmdD2PSpBhQbR1LSgGtCj3HG9vuAg4XJFRaL3GxDFTbZpS");
background-size: 100vw auto;
`

function Paralax() {
    return (
            <Parallax pages={4} style={{backgroundImage: `url("https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmdD2PSpBhQbR1LSgGtCj3HG9vuAg4XJFRaL3GxDFTbZpS")`}}>
                <ParallaxLayer offset={0} speed={0.2} style={{ opacity: 1}}>
                    <img src = "https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmZo62z3uAuruWWXYCemjinoJBDbGp5PKNYeTAT9vw4yVY/IMG_5125.PNG" style={{ display: "block", width: "30%"}}/>
                </ParallaxLayer>
                <ParallaxLayer offset={0.99} speed={1} style={{ opacity: 0.5, alignSelf:"center", justifySelf:"center"}}>
                    <img src = "https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmZo62z3uAuruWWXYCemjinoJBDbGp5PKNYeTAT9vw4yVY/IMG_5125.PNG" style={{ display: "block", width: "30%", marginLeft:"30%"}}/>
                </ParallaxLayer>
                <ParallaxLayer offset={1.2} speed={4} style={{ opacity: 0.5}}>
                    <img src = "https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmZo62z3uAuruWWXYCemjinoJBDbGp5PKNYeTAT9vw4yVY/IMG_5125.PNG" style={{ display: "block", width: "30%", marginLeft:"70%"}}/>
                </ParallaxLayer>
                <ParallaxLayer factor={1/2} offset={2} speed={0} style={{ opacity: 1, backgroundColor: "black"}}>   
                </ParallaxLayer>
                <ParallaxLayer offset={3} speed={0} style={{ opacity: 1, backgroundColor: "red"}}>   
                </ParallaxLayer>
            </Parallax>
    );
}

export default Paralax;