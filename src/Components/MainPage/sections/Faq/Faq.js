import React, { useLayoutEffect, useRef } from 'react';
import styled from 'styled-components';
import Accordion from './Accordion';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const Section = styled.div`
    min-height: 100vh;
    min-width: 100vw;
    background-color: white;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const Title = styled.h1`
    font-size: ${props => props.theme.fontxxl};
    text-transform: capitalize;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem auto;
    border-bottom: 2px solid ${props => props.theme.body};
    width: fit-content;

`

const Container = styled.div`
    width:90%;
    background-color: black;
    border-radius: 50px;
    margin: 2rem auto;
    display: flex;
    color: white;
    justify-content: space-between;
    align-content: center;
`

const Box = styled.div`
    width: 55%;
`



function Faq() {
    /*
    const ref = useRef(null);
    gsap.registerPlugin(ScrollTrigger);
    useLayoutEffect(() => {
        let element = ref.current;
        
        ScrollTrigger.create({
            trigger: element,
            start: 'top top',
            end: 'bottom top',
            pin: true,
            pinSpacing: false,
            scrub: true,
            markers: true,

        })

        return () => {
            ScrollTrigger.kill();
        };
    }, [] )
    */
    return (
        <Section id = "FAQ">
            <Title>
                FAQ
            </Title>
            <Container>
                <Box>
                    <Accordion/>
                    <Accordion/>
                    <Accordion/>
                    <Accordion/>
                </Box>
                <Box>
                    <Accordion/>
                    <Accordion/>
                    <Accordion/>
                    <Accordion/>
                </Box>
            </Container>

        </Section>
    );
}

export default Faq;