import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
min-height: 2vh;
width:100vw;
background-color: #C4F1F9;
font-size: 2vw;
font-weight: 1000;
position: relative;
background-color:${props => props.theme.body};
`

const Box = styled.div`
    max-width: 8.5vw;
    border-bottom-right-radius: 20px;
    border-top-right-radius: 20px;
    white-space: nowrap;
`

function NavBar() {
    return (
        <Section>
            <Box>
            </Box>
        </Section>
    );
}

export default NavBar;