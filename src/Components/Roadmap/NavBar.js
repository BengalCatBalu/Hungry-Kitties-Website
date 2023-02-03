import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
max-height: 5vh;
width:100vw;

position: relative;
background-color:${props => props.theme.body};
`

function NavBar() {
    return (
        <Section>
            <a href = "/">
                To Home
            </a>  
        </Section>
    );
}

export default NavBar;