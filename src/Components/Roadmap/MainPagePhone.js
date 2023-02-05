import React from 'react';
import styled, { keyframes } from 'styled-components';
import picture2 from './../../assets/web31.PNG'
import 'react-toastify/dist/ReactToastify.css';
import Button from '../Button';
import Typewriter from 'typewriter-effect'


const Section = styled.section`
min-height: ${props => `calc(100vh - ${props.theme.navHeight} - 5vh)`};
width:100vw;
margin-top: 5vh;
position: relative;
background-color:${props => props.theme.body};
`
const Container = styled.div`
    width:100%;
    height: 100vh;
    margin: 0vw auto; //
    overflow: visible;
    display: flex; // гибкий контейнер
    flex-direction: column-reverse;
    gap: 5vw;
    justify-content: center; //выравнивание по центру
    align-items: center; // выравнивание по вертикали по центру

`

const Box = styled.div`
    width:100%;
    height:auto;
    display:flex;
    font-weight: 1000;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: visible;
    .text-1{
        color: ${props => props.theme.orange}
    }
    .text-2{
        color: ${props=>props.theme.blue}
    }
`
const Box1 = styled.div`
    width:100%;
    height:auto;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const rotate = keyframes`
    100%{
        transform: rotate(1turn);
    }
`



const VideoContainer = styled.div`
    width:100%;

    img{
        justify-self: flex-start;
        align-self: flex-start;
        width:80%;
        height:auto;
    }
`

const Title = styled.h2`
    font-size: 3vw;//{//props => props.theme.fontxxl}
    text-transform: capitalize;
    color: black;
    align-self: flex-start;
    width: 80%;
    margin: 0 auto;
    align-self: center;
    text-align: center;
`

const SubText = styled.p`
    font-size: 1.5vw;
    text-transform: none;
    color: ${props => props.theme.body};
    align-self: flex-start;
    width: 80%;
    margin: 1rem auto;
    font-weight: 400;
    white-space: pre-line;
`
const ButtonContainer = styled.div`
    display: flex;
    justify-self: flex-start;
    align-self: flex-start;
    flex-direction: column;
    margin-left: 3vw;
    gap: 2vh;
`
const Btn = styled.button`
    display: inline-block;
    background-color: #DD6B20;
    color: ${props => props => props.theme.body};
    outline: none;
    border: none;
    white-space: nowrap;
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

function MainPhonePage() {
    return (
        <Container>
            <Box>
                <Typewriter
                    options={{
                        autostart: true,
                        loop: true,
                    }}
                    onInit={(typewriter) => {
                        typewriter.typeString('<span class = "text-1">Scroll Me!</span>')
                            .pauseFor(2000)
                            .deleteAll()
                            .typeString('<span class = "text-2">Mew Mew!</span>')
                            .pauseFor(2000)
                            .deleteAll()
                            .start();
                    }}
                />
            </Box>
            <Box1>
                <Title>
                    If you visit this page from a computer, you will see an animated roadmap
                </Title>
            </Box1>
            <Box>
                <VideoContainer>
                    <img src={picture2} alt="logo" />
                </VideoContainer>
            </Box>
        </Container>
    );
}

export default MainPhonePage;