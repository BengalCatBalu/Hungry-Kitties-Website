import React, { useLayoutEffect, useRef } from 'react';
import styled from 'styled-components';
import Accordion from './Accordion';
import quest from './../../../../assets/questions.png'


const Section = styled.div`
    min-height: 100vh;
    min-width: 100vw;
    background-color: white;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    @media (max-width: 64em) {
        min-height: 0vh;
        background-color: black;
        height: 60vh;
    }
`

const Title = styled.h1`
    font-size: ${props => props.theme.fontxxl};
    text-transform: capitalize;
    color: #272727;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem auto;
    border-bottom: 2px solid ${props => props.theme.body};
    width: fit-content;
    @media (max-width: 64em) {
       color:#DD6B20;
       border: 0px;
    }

`

const Container = styled.div`
    width:85%;
    background-color: white;
    border-radius: 50px;
    margin: 2rem auto;
    display: flex;
    gap: 10vw;
    color: white;
    justify-content: space-between;
    align-content: center;
`

const Box = styled.div`
    width: 55%;
    img{
        justify-self: center;
        align-self: center;
        width: 100%;
        height: auto;
    }
`
const ImageContainer = styled.div`
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        width: 100%;
        height: auto;
    }
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
        <Section id="FAQ">
            <Container>
                <ImageContainer>
                    <img src = {quest} alt = "questions"/>
                </ImageContainer>
                <Box>
                    <Title>
                       FAQ
                    </Title>
                    <Accordion title={"What's the price of our NFT"} children = {"The price has not yet been announced yet."} />
                    <Accordion title={"How to get Milki WL"} children = {""}/>
                    <Accordion title={"When will the mint be "}/>
                    <Accordion />
                </Box>
            </Container>

        </Section>
    );
}

export default Faq;