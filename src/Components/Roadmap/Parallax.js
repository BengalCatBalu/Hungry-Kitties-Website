import React from 'react';
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import styled from 'styled-components';
import NavBar from './NavBar';

const Section = styled.section`
min-height: 100vh;
width:100vw;

position: relative;
//background-image: url("https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmdD2PSpBhQbR1LSgGtCj3HG9vuAg4XJFRaL3GxDFTbZpS");
background-size: 100vw auto;
`
const Box = styled.div`
    width:100%;
    height:100vh;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (max-width: 70em) {
        height: 30vh;
        width: 70vw;
        &>*:first-child{
            margin-top: 20vh;
        }
    }
    img{
        width: 100%;
        height: auto;
    }

`

function Paralax() {
    return (
        <Parallax pages={2} style={{ backgroundColor: "black" }}>
            <ParallaxLayer offset={0} factor={1} speed={0} style={{ opacity: 1, backgroundColor: "#C4F1F9" }}>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={0.5}>
                <Box>
                    <img
                        alt="cloud1"
                        src="https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmVCYAn5CCSmfWtcpJJGvPnZDRPQAtq1saC92y8ijEgj89/IMG_5276.PNG"
                    />
                </Box>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={-0.5}>
                <Box>
                    <img
                        alt="cloud1"
                        src="https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmVCYAn5CCSmfWtcpJJGvPnZDRPQAtq1saC92y8ijEgj89/IMG_5277.PNG"
                    />
                </Box>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={1}>
                <Box>
                    <img
                        alt="big Mountains"
                        src="https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmVCYAn5CCSmfWtcpJJGvPnZDRPQAtq1saC92y8ijEgj89/IMG_5278.PNG"
                    />
                </Box>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={1}>
                <Box>
                    <img
                        alt="christmas Tree"
                        src="https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmVCYAn5CCSmfWtcpJJGvPnZDRPQAtq1saC92y8ijEgj89/IMG_5279.PNG"
                    />
                </Box>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={1}>
                <Box>
                    <img
                        alt="left trees"
                        src="https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmVCYAn5CCSmfWtcpJJGvPnZDRPQAtq1saC92y8ijEgj89/IMG_5280.PNG"
                    />
                </Box>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={1}>
                <Box>
                    <img
                        alt="left back heel"
                        src="https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmVCYAn5CCSmfWtcpJJGvPnZDRPQAtq1saC92y8ijEgj89/IMG_5281.PNG"
                    />
                </Box>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={1.1}>
                <Box>
                    <img
                        alt="mid heel"
                        src="https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmVCYAn5CCSmfWtcpJJGvPnZDRPQAtq1saC92y8ijEgj89/IMG_5282.PNG"
                    />
                </Box>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={1}>
                <Box>
                    <img
                        alt="front heel"
                        src="https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmVCYAn5CCSmfWtcpJJGvPnZDRPQAtq1saC92y8ijEgj89/IMG_5284.PNG"
                    />
                </Box>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={1.25}>
                <Box>
                    <img
                        alt="christmas Tree"
                        src="https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmVCYAn5CCSmfWtcpJJGvPnZDRPQAtq1saC92y8ijEgj89/IMG_5291.PNG"
                    />
                </Box>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={1.45}>
                <Box>
                    <img
                        alt="christmas Tree"
                        src="https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmVCYAn5CCSmfWtcpJJGvPnZDRPQAtq1saC92y8ijEgj89/IMG_5293.PNG"
                    />
                </Box>
            </ParallaxLayer>
            <ParallaxLayer offset={0.99} speed={1.1} style={{ opacity: 1, backgroundColor: "#63B3ED" }}>
            </ParallaxLayer>
            <ParallaxLayer offset={0.99} speed={1.5} style = {{marginTop: "30vh"}}>
                <Box>
                    <img
                        alt="sky"
                        src="https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmdxaBgJDDzZozWVih1zB1YdhX6uz1eFaT7eixoRPoaoSC"
                    />
                </Box>
            </ParallaxLayer>
            <ParallaxLayer offset={0.99} speed={1.5} style = {{marginTop: "30vh"}}>
                <Box>
                    <img
                        alt="sun"
                        src="https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmfDtR2gBh5bPJf74rFUkCgJJZXv9iRuiMdbw6o8JStbhe"
                    />
                </Box>
            </ParallaxLayer>
            <ParallaxLayer offset={0.99} speed={0.9}>
                <Box>
                    <img
                        alt="right big pyramid"
                        src="https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmUYxvMvXEuntqAKQeds9XbesnX1p2NJAwrZ4a4U3jeJMw/IMG_5313.PNG"
                    />
                </Box>
            </ParallaxLayer>
            <ParallaxLayer offset={0.99} speed={0.9}>
                <Box>
                    <img
                        alt="middle big pyramid"
                        src="https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmUYxvMvXEuntqAKQeds9XbesnX1p2NJAwrZ4a4U3jeJMw/IMG_5314.PNG"
                    />
                </Box>
            </ParallaxLayer>
            <ParallaxLayer offset={0.99} speed={1}>
                <Box>
                    <img
                        alt="big sand"
                        src="https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmUYxvMvXEuntqAKQeds9XbesnX1p2NJAwrZ4a4U3jeJMw/IMG_5316.PNG"
                    />
                </Box>
            </ParallaxLayer>
            <ParallaxLayer offset={0.99} speed={1}>
                <Box>
                    <img
                        alt="low sand"
                        src="https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmUYxvMvXEuntqAKQeds9XbesnX1p2NJAwrZ4a4U3jeJMw/IMG_5317.PNG"
                    />
                </Box>
            </ParallaxLayer>
            <ParallaxLayer offset={0.99} speed={1.2}>
                <Box>
                    <img
                        alt="left"
                        src="https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmUYxvMvXEuntqAKQeds9XbesnX1p2NJAwrZ4a4U3jeJMw/IMG_5325.PNG"
                    />
                </Box>
            </ParallaxLayer>
            <ParallaxLayer offset={0.99} speed={1.2}>
                <Box>
                    <img
                        alt="right"
                        src="https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmUYxvMvXEuntqAKQeds9XbesnX1p2NJAwrZ4a4U3jeJMw/IMG_5326.PNG"
                    />
                </Box>
            </ParallaxLayer>
            <ParallaxLayer offset={1} speed={1}>
                <Box>
                    <img src="https://harlequin-written-whippet-307.mypinata.cloud/ipfs/Qmba15NRHt26EB7T5sTewZHyCXrDzXA4w6LVwm9BwqWmr9" />
                </Box>
            </ParallaxLayer>
            <ParallaxLayer offset={1} speed={5}>
                <Box>
                    <img src="https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmYD5T74cbos7pXt5imrnnnDvZ3H8vwRgkUjvVcV5pivAT/IMG_5230.PNG" />
                </Box>
            </ParallaxLayer>
            <ParallaxLayer offset={1} speed={1}>
                <Box>
                    <img src="https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmYD5T74cbos7pXt5imrnnnDvZ3H8vwRgkUjvVcV5pivAT/IMG_5231.PNG" />
                </Box>
            </ParallaxLayer>
            <ParallaxLayer offset={1} speed={4}>
                <Box>
                    <img src="https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmYD5T74cbos7pXt5imrnnnDvZ3H8vwRgkUjvVcV5pivAT/IMG_5234.PNG" />
                </Box>
            </ParallaxLayer>
            <ParallaxLayer offset={1} speed={2.2}>
                <Box>
                    <img src="https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmYD5T74cbos7pXt5imrnnnDvZ3H8vwRgkUjvVcV5pivAT/IMG_5233.PNG" />
                </Box>
            </ParallaxLayer>
            <ParallaxLayer offset={1} speed={1}>
                <Box>
                    <img src="https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmYD5T74cbos7pXt5imrnnnDvZ3H8vwRgkUjvVcV5pivAT/IMG_5232.PNG" />
                </Box>
            </ParallaxLayer>
        </Parallax >
    );
}

export default Paralax;