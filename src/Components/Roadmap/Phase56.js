import React from 'react';
import styled from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';


const Section = styled.section`
min-height: 30vh;
width:100vw;
margin-top: -1vh;
position: relative;
background-color:${props => props.theme.body};
img{
    width: 100%;
}
`

function Phase56() {
    return (
        <Section>
            <img src = "https://harlequin-written-whippet-307.mypinata.cloud/ipfs/Qmb4ncAdFHEzZuCFpFTJ3LJFB3m26EM2xote1Dg5mC8Ugz"/>
        </Section>
    );
}

export default Phase56;