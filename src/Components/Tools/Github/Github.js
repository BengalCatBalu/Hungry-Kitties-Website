import React from 'react';
import picture from './../../../assets/ToolsAssets/programmer.png'


import styled from 'styled-components';


const Section = styled.section`
min-height: 100vh;
width:100vw;
position: relative;
background-color:${props => props.theme.body};
`

const Container = styled.div`
    width:90%;
    min-height: 90vh;
    margin: 0 auto; //
    background-color: black;
    color: white;
    border-radius: 50px;
    display: flex; // гибкий контейнер
    justify-content: center; //выравнивание по центру
    align-items: center; // выравнивание по вертикали по центру

`
const BtnContainer = styled.div`
    align-self: flex-start;
    margin-left: 4vw;
    display: flex;
    gap: 1vw;
    display: flex; // гибкий контейнер
    justify-content: center; //выравнивание по центру
    align-items: center; // выравнивание по вертикали по центру

`

const Box = styled.div`
    width:50%;
    height:100%;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const ImageContainer = styled.div`
    width: 50%;

    img{
        width: 100%;
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
    text-transform: none;
    color: #DD6B20;
    align-self: flex-start;
    width: 80%;
    margin: 1rem auto;
    font-weight: 400;
    white-space: pre-line;
`
const SubText1 = styled.p`
    font-size: 1.5vw;
    text-transform: none;
    color: #DD6B20;
    align-self: flex-start;
    width: 80%;
    margin: 3rem auto;
    font-weight: 400;
    white-space: pre-line;
`


const Btn = styled.button`
    display: inline-block;
    background-color: white;
    color: black;
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

function Github() {
    return (
        <Section>
            <Container>
                <Box>
                    <Title>
                        You can check our GitHub
                    </Title>
                    <SubText>
                        It is important for us to help new sui developers. You can check
                        our github, this site is completely open access!
                    </SubText>
                    <BtnContainer>
                        <Btn>
                            Our Github
                        </Btn>
                        <Btn>
                            <a href='https://docs.sui.io/sui-jsonrpc'> Sui JSON RPC DOCS</a>
                        </Btn>
                    </BtnContainer>
                    <SubText1>
                        Also, for help in developing this site, we would like to thank
                        Suiet Wallet, Origin Byte, Keepsake
                    </SubText1>
                    <BtnContainer>
                        <Btn>
                            <a href='https://suiet.app/developer'> Suiet Wallet </a>
                        </Btn>
                        <Btn>
                            <a href='https://originbyte.io/'> Origin Byte Site </a>
                        </Btn>
                        <Btn>
                            <a href='https://keepsake.gg/'> Keepsake </a>
                        </Btn>
                    </BtnContainer>
                </Box>
                <ImageContainer>
                    <img src={picture} alt="programmer" />
                </ImageContainer>
            </Container>
        </Section>
    );
}

export default Github;