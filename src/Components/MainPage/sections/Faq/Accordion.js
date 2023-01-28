import React from 'react';
import styled from 'styled-components';
import {useState} from 'react'

const Container = styled.div`
    cursor: pointer;
    background-color: white;
    padding: 0.5rem 0.5rem;
    display: flex;
    flex-direction: column;
    border-radius: 40px;
    border: 0px solid black;
    margin: 3rem 3rem;
    color: black;
`

const Title = styled.div`
    font-size: ${props=>props.theme.fontlg};
    margin-left: 1vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 600;
`

const Reveal = styled.div`
    display:${props=>props.clicked ? 'block' : 'none'};
    margin-top: 1rem;
    color: black;
    font-size: ${props => props.theme.fontlg};
    font-weight: 300;
    line-height: 1.1rem;
    margin-left: 2vw;
`

const Name = styled.div`
    display: flex;
    align-items: center;
`
const Indicator = styled.span`
    display:flex;
    justify-content: center;
    align-items: center;
    font-size: ${props => props.theme.fontxxl};
`

function Accordion(title, children) {
    const [collapse, setCollapse] = useState(false);
    return (
        <Container>
            <Title onClick = {() => setCollapse(!collapse)}>
                <Name>
                    <Title>
                        What price of NFT?
                    </Title>    
                </Name>
                {
                    collapse?
                    <Indicator>
                        -
                    </Indicator>:<Indicator>+</Indicator>
                }
            </Title>
            <Reveal clicked = {collapse}>
                Answer on the questions dsfdsjfnkjsdfkjsdsjasdjkasdkjashjdhj{'\n'}ashdjkashdjkasjkhdjashjdhashd{'\n'}hasjdhjkashkdhsahd
            </Reveal>
        </Container>
    );
}

export default Accordion;