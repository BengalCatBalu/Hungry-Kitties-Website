import React from 'react';
import styled, { keyframes } from 'styled-components';
import PartnerCard from './PartnerCard';

const Section = styled.section`
    min-height: 100vh;
    width:100%;
    color: ${props => props.theme.body};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    @media (max-width: 64em) {
        min-height: 0vh;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        background-color: black;
        height: 80vh;
    }
`

const Row = styled.div`
    width: 100vw;
    height: 40vh;
    white-space: nowrap;
    box-sizing: content-box;
    margin: 2rem 0;
    display: flex;
    @media (max-width: 64em) {
        flex-direction: column;
    }
`

const MainTitle = styled.h1`
    font-size: ${props => props.theme.fontxxl};
    text-transform: capitalize;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem auto;
    border-bottom: 2px solid ${props => props.theme.body};
    width: fit-content;
        @media (max-width: 64em) {
            display: none;
        }

`

function Partners() {
    return (
        <>
        <Section id = "partners">
        <MainTitle>
                Partners
        </MainTitle>
            <Row>
                <PartnerCard/>
                <PartnerCard/>
                <PartnerCard/>
            </Row>
            <Row>
                <PartnerCard/>
                <PartnerCard/>
                <PartnerCard/>
            </Row>
        </Section>
        </>
    );
}

export default Partners;