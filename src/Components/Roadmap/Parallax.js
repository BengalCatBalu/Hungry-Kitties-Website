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
        <Parallax pages={2} style={{ backgroundColor: "black" }} backgroundColor = "#272727">
            <ParallaxLayer offset={0} factor={0.9} speed={0.2} style={{ opacity: 1, backgroundColor: "#C4F1F9", minHeight: "100vh", overflow: "hidden" }}>
            </ParallaxLayer>
            <ParallaxLayer offset={0} factor={1} speed={0.5}>
                <img
                    alt="cloud1"
                    src="https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmVCYAn5CCSmfWtcpJJGvPnZDRPQAtq1saC92y8ijEgj89/IMG_5276.PNG"
                    style={{ display: "block", width: "100%" }}
                />
            </ParallaxLayer>
            <ParallaxLayer offset={0} factor={1} speed={-0.5}>
                <img
                    alt="cloud1"
                    src="https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmVCYAn5CCSmfWtcpJJGvPnZDRPQAtq1saC92y8ijEgj89/IMG_5277.PNG"
                    style={{ display: "block", width: "100%" }}
                />
            </ParallaxLayer>
            <ParallaxLayer offset={0} factor={1} speed={0.7}>
                <img
                    alt="big Mountains"
                    src="https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmVCYAn5CCSmfWtcpJJGvPnZDRPQAtq1saC92y8ijEgj89/IMG_5278.PNG"
                    style={{ display: "block", width: "100%" }}
                />
            </ParallaxLayer>
            <ParallaxLayer offset={0} factor={1} speed={0.7}>
                <img
                    alt="christmas Tree"
                    src="https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmVCYAn5CCSmfWtcpJJGvPnZDRPQAtq1saC92y8ijEgj89/IMG_5279.PNG"
                    style={{ display: "block", width: "100%" }}
                />
            </ParallaxLayer>
            <ParallaxLayer offset={0} factor={1} speed={0.8}>
                <img
                    alt="left trees"
                    src="https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmVCYAn5CCSmfWtcpJJGvPnZDRPQAtq1saC92y8ijEgj89/IMG_5280.PNG"
                    style={{ display: "block", width: "100%" }}
                />
            </ParallaxLayer>
            <ParallaxLayer offset={0} factor={1} speed={0.9}>
                <img
                    alt="left back heel"
                    src="https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmVCYAn5CCSmfWtcpJJGvPnZDRPQAtq1saC92y8ijEgj89/IMG_5281.PNG"
                    style={{ display: "block", width: "100%" }}
                />
            </ParallaxLayer>
            <ParallaxLayer offset={0} factor={1} speed={1}>
                <img
                    alt="mid heel"
                    src="https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmVCYAn5CCSmfWtcpJJGvPnZDRPQAtq1saC92y8ijEgj89/IMG_5282.PNG"
                    style={{ display: "block", width: "100%" }}
                />
            </ParallaxLayer>
            <ParallaxLayer offset={0} factor={1} speed={1.2}>
                <img
                    alt="front heel"
                    src="https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmVCYAn5CCSmfWtcpJJGvPnZDRPQAtq1saC92y8ijEgj89/IMG_5284.PNG"
                    style={{ display: "block", width: "100%" }}
                />
            </ParallaxLayer>
            <ParallaxLayer offset={0} factor={1} speed={1.5}>
                <img
                    alt="christmas Tree"
                    src="https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmVCYAn5CCSmfWtcpJJGvPnZDRPQAtq1saC92y8ijEgj89/IMG_5291.PNG"
                    style={{ display: "block", width: "100%" }}
                />
            </ParallaxLayer>
            <ParallaxLayer offset={0} factor={1} speed={1.5}>
                <img
                    alt="christmas Tree"
                    src="https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmVCYAn5CCSmfWtcpJJGvPnZDRPQAtq1saC92y8ijEgj89/IMG_5293.PNG"
                    style={{ display: "block", width: "100%" }}
                />
            </ParallaxLayer>
            <ParallaxLayer offset={0.99} factor={1} speed={1.3} style={{ opacity: 1, backgroundColor: "#63B3ED", overflow: 'hidden' }} >
            </ParallaxLayer>
            <ParallaxLayer offset={0.99} speed={1.5} style={{ marginTop: "20vh" }}>
                <img
                    alt="big piramid"
                    src="https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmdZBmuMH6RtkoeJUgxgGgCTybNy5bSYbL9PZh3Zgts6Pj/IMG_5220.PNG"
                    style={{ display: "block", width: "100%" }}
                />
            </ParallaxLayer>
            <ParallaxLayer offset={0.99} speed={0.9}>
                <img
                    alt="Pyramid with ears"
                    src="https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmdZBmuMH6RtkoeJUgxgGgCTybNy5bSYbL9PZh3Zgts6Pj/IMG_5219.PNG"
                    style={{ display: "block", width: "100%" }}
                />
            </ParallaxLayer>
            <ParallaxLayer offset={0.99} speed={0.95}>
                <img
                    alt="low pyramid"
                    src="https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmdZBmuMH6RtkoeJUgxgGgCTybNy5bSYbL9PZh3Zgts6Pj/IMG_5218.PNG"
                    style={{ display: "block", width: "100%" }}
                />
            </ParallaxLayer>
            <ParallaxLayer offset={0.99} speed={1}>
                <img
                    alt="sand"
                    src="https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmdZBmuMH6RtkoeJUgxgGgCTybNy5bSYbL9PZh3Zgts6Pj/IMG_5217.PNG"
                    style={{ display: "block", width: "100%" }}
                />
            </ParallaxLayer>
            <ParallaxLayer offset={0.99} speed={1}>
                <img
                    alt="lastSand"
                    src="https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmdZBmuMH6RtkoeJUgxgGgCTybNy5bSYbL9PZh3Zgts6Pj/IMG_5216.PNG"
                    style={{ display: "block", width: "100%" }}
                />
            </ParallaxLayer>
            <ParallaxLayer offset={0.99} speed={1}>
                <img
                    alt="lastSand"
                    src="https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmdZBmuMH6RtkoeJUgxgGgCTybNy5bSYbL9PZh3Zgts6Pj/IMG_5215.PNG"
                    style={{ display: "block", width: "100%" }}
                />
            </ParallaxLayer>
            <ParallaxLayer offset={0} factor={2} speed={-0.5} style={{ marginTop: "60vh" }} horizontal="true">
                <img
                    alt="lastSand"
                    src="https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmRb44uTThSZPvVyVraCEBqYcRCz51cQbEAPjawvDbSbgf"
                    style={{ display: "block", width: "100%" }}
                />
            </ParallaxLayer>
            <ParallaxLayer offset={0} factor={2} speed={0.5} horizontal="true" style={{ marginTop: "60vh" }}>
                <img
                    alt="lastSand"
                    src="https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmUZ7Eo7ZnRctMUbjX5CeGsXJ3V3A8EaGWSL4GUwxzwxHZ"
                    style={{ display: "block", width: "100%" }}
                />
            </ParallaxLayer>
            <ParallaxLayer offset={1} speed={1}>
                <Box>
                    <img src="https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmYD5T74cbos7pXt5imrnnnDvZ3H8vwRgkUjvVcV5pivAT/IMG_5229.PNG" />
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
        </Parallax>
    );
}

export default Paralax;