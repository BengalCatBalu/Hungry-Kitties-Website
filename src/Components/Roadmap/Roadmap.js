import React from 'react';
import styled from 'styled-components';
import NavBar from './NavBar';
import Paralax1 from './Parallax';


const Section = styled.section`
min-height: 100vh;
width:100vw;

position: relative;
background-color:${props => props.theme.body};
`
const Section1 = styled.section`
min-height: 100vh;
width:100vw;
position: relative;
display: flex;
align-items: center;
justify-content: center;
background-color:black;
`
const Container = styled.div`
    width:85%;
    min-height: 60vh;
    margin: 0vw auto; //
    background-color: ${props => props.theme.body};
    overflow: visible;
    display: flex; // гибкий контейнер
    justify-content: center; //выравнивание по центру
    align-items: center; // выравнивание по вертикали по центру

    @media (max-width: 64em) {
        width: 85%;
    }
    @media (max-width: 48em) {
        width: 85%;
        flex-direction: column-reverse;
    }

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
const Btn = styled.button`
    display: inline-block;
    background-color: white;
    color: ${props => props => props.theme.black};
    outline: none;
    border: none;
    white-space: nowrap;
    font-size: ${props => props.theme.fontxxl};
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
    @media (max-width: 64em) {
        font-size: 2vw;
    }
`

function Roadmap() {
    return (
        <>
            <Section>
                <NavBar />
                <Paralax1 />
            </Section>
            <Section1>
                <a href="/">
                    <Btn>
                        To Home
                    </Btn>
                </a>
            </Section1>
        </>
    );
}

export default Roadmap;