import React from 'react';
import styled from 'styled-components';


const Section = styled.section`
min-height: ${props => `calc(100vh - ${props.theme.navHeight}) - 5vh`};
width:100vw;
margin-top: 5vh;

position: relative;
background-color:${props => props.theme.body};
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
    width:50%;
    height:80vh;
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

`

function Roadmap() {
    return (
        <>
            <Section>
                <Container>
                    Картинка
                </Container>
            </Section>
        </>
    );
}

export default Roadmap;