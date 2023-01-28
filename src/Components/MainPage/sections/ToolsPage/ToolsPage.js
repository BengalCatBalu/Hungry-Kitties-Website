import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '../../../Button';

import logo from './../../../../assets/ToolsAssets/tuz.png'
import GifContainer from './GifContainer';

const Section = styled.section`
    min-height: 100vh;
    width:100%;
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
    img{
        width: 70%;
        height: auto;
    }
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
    border-bottom: 0px solid ${props => props.theme.body};
    width: fit-content;

`

const Btn = styled.button`
    display: inline-block;
    background-color: #DD6B20;
    align-self: flex-start;
    margin-left: 3vw;
    color: white;
    outline: none;
    border: none;
    white-space: nowrap;
    direction: flex;
    font-size: ${props => props.theme.fontlg};
    justify-items: center;
    align-items: center;
    padding: 0.9rem 2.5rem;
    border-radius: 50px;
    cursor:pointer;
    position: relative;

    transition: all 0.2s ease;


    &:hover{
        transform: scale(0.9);
    }
`

function ToolsPage() {
    return (
        <Section>
            <MainTitle>
                Tools
            </MainTitle>
            <Container>
                <GifContainer/>
                <Box>
                    <Title>
                        Try our Tools
                    </Title>
                    <SubText>
                        Our Tools is very cool
                    </SubText>
                    <Btn>
                        <a href = "">
                            Out Tools
                        </a>
                    </Btn>
                </Box>
            </Container>
        </Section>
    );
}

export default ToolsPage;