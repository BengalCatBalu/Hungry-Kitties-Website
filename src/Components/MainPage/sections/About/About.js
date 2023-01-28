import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Carousel from './Carousel';


const Section = styled.section`
    min-height: 100vh;
    width:100%;
    background-color: white;
    color: ${props => props.theme.body};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
`

const Container = styled.div`
    width:90%;
    min-height: 80vh;
    margin: 0 auto; //
    background-color: black;
    display: flex; // гибкий контейнер
    justify-content: center; //выравнивание по центру
    align-items: center; // выравнивание по вертикали по центру
    border-radius: 40px;

`

const Box = styled.div`
    width:50%;
    height:100%;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Title = styled.h2`
    font-size: 3vw;//{//props => props.theme.fontxxl}
    text-transform: capitalize;
    color: ${props => props.theme.body};
    align-self: flex-start;
    width: 80%;
    margin: 0 auto;
`

const SubText = styled.p`
    font-size: 1.5vw;
    text-transform: lowercase;
    color: ${props => props.theme.body};
    align-self: flex-start;
    width: 80%;
    margin: 1rem auto;
    font-weight: 400;
    white-space: pre-line;
`

const SubTextLight = styled.p`
    font-size: 1.5vw;
    text-transform: capitalize;
    color: ${props => `rgba(${props.theme.bodyRgba}, 0.6)`};
    align-self: flex-start;
    width: 80%;
    margin: 1rem auto;
    font-weight: 400;
`

const MainTitle = styled.h1`
    font-size: ${props => props.theme.fontxxl};
    text-transform: capitalize;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem auto;
    border-bottom: 0px solid white;
    width: fit-content;

`

function About() {
    return (
        <Section id = "about">
            <MainTitle>
                About
            </MainTitle>
            <Container>
                <Box>
                    <Carousel />
                </Box>
                <Box>
                    <Title>
                        Title
                    </Title>
                    <SubText>
                        jdsnfkjsdjfdskjfjsd
                        dsfksdfjdskfjkjdsjfjkdsfjkdsf
                        sdfsdkfjsdkfjksdjfkjdshfjhkdsfsd
                        fsdkfsdkjfksdjfksdjfjksd
                    </SubText>
                    <SubTextLight>
                        dshfkjdhfsdhfhjkdshjkdsdjfkjdskfjdsjfkdsjfsdkfjdskljflk
                    </SubTextLight>
                </Box>
            </Container>
        </Section>
    );
}

export default About;