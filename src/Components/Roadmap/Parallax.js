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
                        src="https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmX89EBUt1oz3ipdok4zCQevmUBDiGpewBnfVyzAkZQUJG"
                    />
                </Box>
            </ParallaxLayer>
            <ParallaxLayer offset={0.99} speed={1.1}>
                <Box>
                    <img
                        alt="sun"
                        src="https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmWLgpbS4637GkybXLXP7V9Abc6fH34yQU8z4khn1Sfdiu"
                    />
                </Box>
            </ParallaxLayer>
            <ParallaxLayer offset={0.99} speed={0.9}>
                <Box>
                    <img
                        alt="right big pyramid"
                        src="https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmVc3eutDwdgsJr7wav8vKRpYfzXqsSwFbZep488cTApX5/img-5313.webp"
                    />
                </Box>
            </ParallaxLayer>
            <ParallaxLayer offset={0.99} speed={0.9}>
                <Box>
                    <img
                        alt="middle big pyramid"
                        src="https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmVc3eutDwdgsJr7wav8vKRpYfzXqsSwFbZep488cTApX5/img-5314.webp"
                    />
                </Box>
            </ParallaxLayer>
            <ParallaxLayer offset={0.99} speed={1}>
                <Box>
                    <img
                        alt="big sand"
                        src="https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmVc3eutDwdgsJr7wav8vKRpYfzXqsSwFbZep488cTApX5/img-5316.webp"
                    />
                </Box>
            </ParallaxLayer>
            <ParallaxLayer offset={0.99} speed={1}>
                <Box>
                    <img
                        alt="low sand"
                        src="https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmVc3eutDwdgsJr7wav8vKRpYfzXqsSwFbZep488cTApX5/img-5317.webp"
                    />
                </Box>
            </ParallaxLayer>
            <ParallaxLayer offset={0.99} speed={1.2}>
                <Box>
                    <img
                        alt="left"
                        src="https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmVc3eutDwdgsJr7wav8vKRpYfzXqsSwFbZep488cTApX5/img-5325.webp"
                    />
                </Box>
            </ParallaxLayer>
            <ParallaxLayer offset={0.99} speed={1.2}>
                <Box>
                    <img
                        alt="right"
                        src="https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmVc3eutDwdgsJr7wav8vKRpYfzXqsSwFbZep488cTApX5/img-5326.webp"
                    />
                </Box>
            </ParallaxLayer>
            <ParallaxLayer offset={0.99} speed={1.1}>
                <Box>
                    <img
                        alt="light"
                        src="https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmVc3eutDwdgsJr7wav8vKRpYfzXqsSwFbZep488cTApX5/img-5320.webp"
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